from pydantic import BaseModel, Field

from app.models.enums import ContentStatus, ProjectCategory
from app.schemas.common import ORMModel, TimestampFields


class ProjectBase(BaseModel):
    title: str = Field(min_length=3, max_length=220)
    slug: str = Field(min_length=3, max_length=240)
    category: ProjectCategory
    summary: str = Field(min_length=10, max_length=500)
    description: str = Field(min_length=30)
    technologies: str = Field(default="", max_length=500)
    image_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus = ContentStatus.draft


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3, max_length=220)
    slug: str | None = Field(default=None, min_length=3, max_length=240)
    category: ProjectCategory | None = None
    summary: str | None = Field(default=None, min_length=10, max_length=500)
    description: str | None = Field(default=None, min_length=30)
    technologies: str | None = Field(default=None, max_length=500)
    image_url: str | None = Field(default=None, max_length=500)
    status: ContentStatus | None = None


class ProjectRead(ProjectBase, TimestampFields, ORMModel):
    id: str
