from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import require_staff
from app.crud.blog import blog as blog_crud
from app.db.session import get_db
from app.models.enums import ContentStatus
from app.models.user import User
from app.schemas.blog import BlogCreate, BlogRead, BlogUpdate
from app.schemas.pagination import Page
from app.utils.responses import paginated

router = APIRouter(prefix="/blogs", tags=["Blogs"])


@router.get("", response_model=Page[BlogRead])
def list_blogs(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: str | None = None,
    status_filter: ContentStatus | None = Query(default=None, alias="status"),
    db: Session = Depends(get_db),
) -> Page[BlogRead]:
    items, total = blog_crud.list(
        db,
        page=page,
        size=size,
        search=search,
        filters={"status": status_filter},
    )
    return paginated(items, total=total, page=page, size=size)


@router.get("/{blog_id}", response_model=BlogRead)
def get_blog(blog_id: str, db: Session = Depends(get_db)):
    blog = blog_crud.get(db, blog_id)
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
    return blog


@router.post("", response_model=BlogRead, status_code=status.HTTP_201_CREATED)
def create_blog(payload: BlogCreate, db: Session = Depends(get_db), _: User = Depends(require_staff)):
    return blog_crud.create(db, obj_in=payload)


@router.patch("/{blog_id}", response_model=BlogRead)
def update_blog(
    blog_id: str,
    payload: BlogUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_staff),
):
    blog = blog_crud.get(db, blog_id)
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
    return blog_crud.update(db, db_obj=blog, obj_in=payload)


@router.delete("/{blog_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(blog_id: str, db: Session = Depends(get_db), _: User = Depends(require_staff)) -> None:
    deleted = blog_crud.delete(db, id=blog_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
