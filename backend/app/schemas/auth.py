from pydantic import BaseModel, EmailStr, Field

from app.models.enums import UserRole
from app.schemas.common import ORMModel, TimestampFields


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserBase(BaseModel):
    email: EmailStr
    full_name: str = Field(min_length=2, max_length=160)
    role: UserRole = UserRole.viewer
    is_active: bool = True


class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=128)


class UserRead(UserBase, TimestampFields, ORMModel):
    id: str
