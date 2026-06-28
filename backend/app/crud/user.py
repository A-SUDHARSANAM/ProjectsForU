from sqlalchemy.orm import Session

from app.core.security import get_password_hash, verify_password
from app.crud.base import CRUDBase
from app.models.user import User
from app.schemas.auth import UserCreate


class CRUDUser(CRUDBase[User, UserCreate, UserCreate]):
    def get_by_email(self, db: Session, email: str) -> User | None:
        return db.query(User).filter(User.email == email).first()

    def create(self, db: Session, *, obj_in: UserCreate | dict) -> User:
        data = obj_in if isinstance(obj_in, dict) else obj_in.model_dump()
        password = data.pop("password")
        data["hashed_password"] = get_password_hash(password)
        return super().create(db, obj_in=data)

    def authenticate(self, db: Session, email: str, password: str) -> User | None:
        user = self.get_by_email(db, email)
        if not user or not verify_password(password, user.hashed_password):
            return None
        return user


user = CRUDUser(User, search_fields=("email", "full_name"))
