from datetime import date

from sqlalchemy import Date, Enum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UuidPk
from app.models.enums import ProjectCategory, SubmissionStatus, enum_values


class ProjectSubmission(Base, TimestampMixin):
    __tablename__ = "project_submissions"

    id: Mapped[UuidPk]
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    email: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String(40), nullable=False)
    project_title: Mapped[str] = mapped_column(String(220), index=True, nullable=False)
    project_category: Mapped[ProjectCategory] = mapped_column(
        Enum(ProjectCategory, values_callable=enum_values), index=True, nullable=False
    )
    budget: Mapped[str] = mapped_column(String(120), nullable=False)
    expected_completion_date: Mapped[date] = mapped_column(Date, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    file_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    status: Mapped[SubmissionStatus] = mapped_column(
        Enum(SubmissionStatus, values_callable=enum_values),
        default=SubmissionStatus.new,
        index=True,
        nullable=False,
    )
