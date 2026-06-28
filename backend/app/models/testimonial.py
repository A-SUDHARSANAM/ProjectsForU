from sqlalchemy import Enum, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UuidPk
from app.models.enums import ContentStatus, enum_values


class Testimonial(Base, TimestampMixin):
    __tablename__ = "testimonials"

    id: Mapped[UuidPk]
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    role: Mapped[str] = mapped_column(String(180), nullable=False)
    category: Mapped[str] = mapped_column(String(80), index=True, nullable=False)
    review: Mapped[str] = mapped_column(Text, nullable=False)
    rating: Mapped[int] = mapped_column(Integer, default=5, nullable=False)
    avatar_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    status: Mapped[ContentStatus] = mapped_column(
        Enum(ContentStatus, values_callable=enum_values),
        default=ContentStatus.published,
        index=True,
        nullable=False,
    )
