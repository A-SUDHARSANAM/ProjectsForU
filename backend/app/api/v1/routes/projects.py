from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import require_staff
from app.crud.project import project as project_crud
from app.db.session import get_db
from app.models.enums import ContentStatus, ProjectCategory
from app.models.user import User
from app.schemas.pagination import Page
from app.schemas.project import ProjectCreate, ProjectRead, ProjectUpdate
from app.utils.responses import paginated

router = APIRouter(prefix="/projects", tags=["Projects"])


@router.get("", response_model=Page[ProjectRead])
def list_projects(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: str | None = None,
    category: ProjectCategory | None = None,
    status_filter: ContentStatus | None = Query(default=None, alias="status"),
    db: Session = Depends(get_db),
) -> Page[ProjectRead]:
    items, total = project_crud.list(
        db,
        page=page,
        size=size,
        search=search,
        filters={"category": category, "status": status_filter},
    )
    return paginated(items, total=total, page=page, size=size)


@router.get("/{project_id}", response_model=ProjectRead)
def get_project(project_id: str, db: Session = Depends(get_db)):
    project = project_crud.get(db, project_id)
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    return project


@router.post("", response_model=ProjectRead, status_code=status.HTTP_201_CREATED)
def create_project(
    payload: ProjectCreate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    return project_crud.create(db, obj_in=payload)


@router.patch("/{project_id}", response_model=ProjectRead)
def update_project(
    project_id: str,
    payload: ProjectUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    project = project_crud.get(db, project_id)
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    return project_crud.update(db, db_obj=project, obj_in=payload)


@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(
    project_id: str,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
) -> None:
    deleted = project_crud.delete(db, id=project_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
