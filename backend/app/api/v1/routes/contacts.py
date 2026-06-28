from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import require_staff
from app.crud.contact import contact_form as contact_crud
from app.db.session import get_db
from app.models.enums import LeadStatus
from app.models.user import User
from app.schemas.contact import ContactFormCreate, ContactFormRead, ContactFormUpdate
from app.schemas.pagination import Page
from app.services.email import send_notification
from app.utils.responses import paginated

router = APIRouter(prefix="/contacts", tags=["Contact Forms"])


@router.post("", response_model=ContactFormRead, status_code=status.HTTP_201_CREATED)
def submit_contact(payload: ContactFormCreate, db: Session = Depends(get_db)):
    contact = contact_crud.create(db, obj_in=payload)
    send_notification(
        "New contact form submission",
        f"Name: {payload.name}\nEmail: {payload.email}\nSubject: {payload.subject}\n\n{payload.message}",
        reply_to=str(payload.email),
    )
    return contact


@router.get("", response_model=Page[ContactFormRead])
def list_contacts(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: str | None = None,
    status_filter: LeadStatus | None = Query(default=None, alias="status"),
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
) -> Page[ContactFormRead]:
    items, total = contact_crud.list(
        db,
        page=page,
        size=size,
        search=search,
        filters={"status": status_filter},
    )
    return paginated(items, total=total, page=page, size=size)


@router.patch("/{contact_id}", response_model=ContactFormRead)
def update_contact(
    contact_id: str,
    payload: ContactFormUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    contact = contact_crud.get(db, contact_id)
    if not contact:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Contact not found")
    return contact_crud.update(db, db_obj=contact, obj_in=payload)
