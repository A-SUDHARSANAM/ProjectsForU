from pydantic import BaseModel, Field

from app.models.enums import ContentStatus
from app.schemas.common import ORMModel, TimestampFields


class TestimonialBase(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    role: str = Field(min_length=2, max_length=180)
    category: str = Field(min_length=2, max_length=80)
    review: str = Field(min_length=20)
    rating: int = Field(default=5, ge=1, le=5)
    avatar_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus = ContentStatus.published


class TestimonialCreate(TestimonialBase):
    pass


class TestimonialUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=2, max_length=160)
    role: str | None = Field(default=None, min_length=2, max_length=180)
    category: str | None = Field(default=None, min_length=2, max_length=80)
    review: str | None = Field(default=None, min_length=20)
    rating: int | None = Field(default=None, ge=1, le=5)
    avatar_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus | None = None


class TestimonialRead(TestimonialBase, TimestampFields, ORMModel):
    id: str
