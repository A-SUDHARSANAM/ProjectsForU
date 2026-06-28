from pydantic import BaseModel, Field

from app.models.enums import ContentStatus
from app.schemas.common import ORMModel, TimestampFields


class BlogBase(BaseModel):
    title: str = Field(min_length=3, max_length=220)
    slug: str = Field(min_length=3, max_length=240)
    excerpt: str = Field(min_length=10, max_length=500)
    content: str = Field(min_length=30)
    author_name: str = Field(min_length=2, max_length=160)
    cover_image_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus = ContentStatus.draft


class BlogCreate(BlogBase):
    pass


class BlogUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3, max_length=220)
    slug: str | None = Field(default=None, min_length=3, max_length=240)
    excerpt: str | None = Field(default=None, min_length=10, max_length=500)
    content: str | None = Field(default=None, min_length=30)
    author_name: str | None = Field(default=None, min_length=2, max_length=160)
    cover_image_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus | None = None


class BlogRead(BlogBase, TimestampFields, ORMModel):
    id: str
