from sqlalchemy import Enum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UuidPk
from app.models.enums import LeadStatus, enum_values


class ContactForm(Base, TimestampMixin):
    __tablename__ = "contact_forms"

    id: Mapped[UuidPk]
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    email: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    phone: Mapped[str | None] = mapped_column(String(40), nullable=True)
    subject: Mapped[str] = mapped_column(String(220), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[LeadStatus] = mapped_column(
        Enum(LeadStatus, values_callable=enum_values), default=LeadStatus.new, index=True, nullable=False
    )
