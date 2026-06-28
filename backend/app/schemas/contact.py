from pydantic import BaseModel, EmailStr, Field

from app.models.enums import LeadStatus
from app.schemas.common import ORMModel, TimestampFields


class ContactFormCreate(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=40)
    subject: str = Field(min_length=3, max_length=220)
    message: str = Field(min_length=20)


class ContactFormUpdate(BaseModel):
    status: LeadStatus


class ContactFormRead(ContactFormCreate, TimestampFields, ORMModel):
    id: str
    status: LeadStatus
