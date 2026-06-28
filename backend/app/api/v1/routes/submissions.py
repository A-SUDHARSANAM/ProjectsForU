from datetime import date

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, UploadFile, status
from sqlalchemy.orm import Session

from app.api.deps import require_staff
from app.crud.submission import project_submission as submission_crud
from app.db.session import get_db
from app.models.enums import ProjectCategory, SubmissionStatus
from app.models.user import User
from app.schemas.pagination import Page
from app.schemas.submission import ProjectSubmissionCreate, ProjectSubmissionRead, ProjectSubmissionUpdate
from app.services.email import send_notification
from app.services.uploads import save_upload
from app.utils.responses import paginated

router = APIRouter(prefix="/project-submissions", tags=["Project Submissions"])


@router.post("", response_model=ProjectSubmissionRead, status_code=status.HTTP_201_CREATED)
async def submit_project(
    name: str = Form(min_length=2, max_length=160),
    email: str = Form(),
    phone: str = Form(min_length=8, max_length=40),
    project_title: str = Form(min_length=3, max_length=220),
    project_category: ProjectCategory = Form(),
    budget: str = Form(min_length=2, max_length=120),
    expected_completion_date: date = Form(),
    description: str = Form(min_length=30),
    file: UploadFile | None = File(default=None),
    db: Session = Depends(get_db),
):
    payload = ProjectSubmissionCreate(
        name=name,
        email=email,
        phone=phone,
        project_title=project_title,
        project_category=project_category,
        budget=budget,
        expected_completion_date=expected_completion_date,
        description=description,
    )
    file_url = await save_upload(file, "project-submissions")
    submission = submission_crud.create(db, obj_in={**payload.model_dump(), "file_url": file_url})
    send_notification(
        "New project submission",
        (
            f"Name: {payload.name}\nEmail: {payload.email}\nPhone: {payload.phone}\n"
            f"Project: {payload.project_title}\nCategory: {payload.project_category}\n"
            f"Budget: {payload.budget}\nExpected Date: {payload.expected_completion_date}\n"
            f"File: {file_url or 'No file'}\n\n{payload.description}"
        ),
        reply_to=str(payload.email),
    )
    return submission


@router.get("", response_model=Page[ProjectSubmissionRead])
def list_submissions(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: str | None = None,
    project_category: ProjectCategory | None = None,
    status_filter: SubmissionStatus | None = Query(default=None, alias="status"),
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
) -> Page[ProjectSubmissionRead]:
    items, total = submission_crud.list(
        db,
        page=page,
        size=size,
        search=search,
        filters={"project_category": project_category, "status": status_filter},
    )
    return paginated(items, total=total, page=page, size=size)


@router.patch("/{submission_id}", response_model=ProjectSubmissionRead)
def update_submission(
    submission_id: str,
    payload: ProjectSubmissionUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    submission = submission_crud.get(db, submission_id)
    if not submission:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found")
    return submission_crud.update(db, db_obj=submission, obj_in=payload)
