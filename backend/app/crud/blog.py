from app.crud.base import CRUDBase
from app.models.blog import Blog
from app.schemas.blog import BlogCreate, BlogUpdate

blog = CRUDBase[Blog, BlogCreate, BlogUpdate](
    Blog, search_fields=("title", "excerpt", "content", "author_name")
)
