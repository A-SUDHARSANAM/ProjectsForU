from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import require_staff
from app.crud.testimonial import testimonial as testimonial_crud
from app.db.session import get_db
from app.models.enums import ContentStatus
from app.models.user import User
from app.schemas.pagination import Page
from app.schemas.testimonial import TestimonialCreate, TestimonialRead, TestimonialUpdate
from app.utils.responses import paginated

router = APIRouter(prefix="/testimonials", tags=["Testimonials"])


@router.get("", response_model=Page[TestimonialRead])
def list_testimonials(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: str | None = None,
    category: str | None = None,
    status_filter: ContentStatus | None = Query(default=None, alias="status"),
    db: Session = Depends(get_db),
) -> Page[TestimonialRead]:
    items, total = testimonial_crud.list(
        db,
        page=page,
        size=size,
        search=search,
        filters={"category": category, "status": status_filter},
    )
    return paginated(items, total=total, page=page, size=size)


@router.post("", response_model=TestimonialRead, status_code=status.HTTP_201_CREATED)
def create_testimonial(
    payload: TestimonialCreate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    return testimonial_crud.create(db, obj_in=payload)


@router.patch("/{testimonial_id}", response_model=TestimonialRead)
def update_testimonial(
    testimonial_id: str,
    payload: TestimonialUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    testimonial = testimonial_crud.get(db, testimonial_id)
    if not testimonial:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Testimonial not found")
    return testimonial_crud.update(db, db_obj=testimonial, obj_in=payload)


@router.delete("/{testimonial_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_testimonial(
    testimonial_id: str,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
) -> None:
    deleted = testimonial_crud.delete(db, id=testimonial_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Testimonial not found")
