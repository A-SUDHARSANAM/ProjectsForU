from datetime import date

from pydantic import BaseModel, EmailStr, Field

from app.models.enums import ProjectCategory, SubmissionStatus
from app.schemas.common import ORMModel, TimestampFields


class ProjectSubmissionCreate(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    email: EmailStr
    phone: str = Field(min_length=8, max_length=40)
    project_title: str = Field(min_length=3, max_length=220)
    project_category: ProjectCategory
    budget: str = Field(min_length=2, max_length=120)
    expected_completion_date: date
    description: str = Field(min_length=30)


class ProjectSubmissionUpdate(BaseModel):
    status: SubmissionStatus


class ProjectSubmissionRead(ProjectSubmissionCreate, TimestampFields, ORMModel):
    id: str
    file_url: str | None = None
    status: SubmissionStatus
