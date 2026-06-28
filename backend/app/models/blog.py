from sqlalchemy import Enum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UuidPk
from app.models.enums import ContentStatus, enum_values


class Blog(Base, TimestampMixin):
    __tablename__ = "blogs"

    id: Mapped[UuidPk]
    title: Mapped[str] = mapped_column(String(220), index=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(240), unique=True, index=True, nullable=False)
    excerpt: Mapped[str] = mapped_column(String(500), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    author_name: Mapped[str] = mapped_column(String(160), nullable=False)
    cover_image_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    status: Mapped[ContentStatus] = mapped_column(
        Enum(ContentStatus, values_callable=enum_values), default=ContentStatus.draft, index=True, nullable=False
    )
