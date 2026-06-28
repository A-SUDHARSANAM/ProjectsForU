from sqlalchemy import Enum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UuidPk
from app.models.enums import ContentStatus, ProjectCategory, enum_values


class Project(Base, TimestampMixin):
    __tablename__ = "projects"

    id: Mapped[UuidPk]
    title: Mapped[str] = mapped_column(String(220), index=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(240), unique=True, index=True, nullable=False)
    category: Mapped[ProjectCategory] = mapped_column(
        Enum(ProjectCategory, values_callable=enum_values), index=True, nullable=False
    )
    summary: Mapped[str] = mapped_column(String(500), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    technologies: Mapped[str] = mapped_column(String(500), default="", nullable=False)
    image_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    status: Mapped[ContentStatus] = mapped_column(
        Enum(ContentStatus, values_callable=enum_values), default=ContentStatus.draft, index=True, nullable=False
    )
