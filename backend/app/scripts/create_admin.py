import os

from app.crud.user import user as user_crud
from app.db.session import SessionLocal
from app.models.enums import UserRole
from app.schemas.auth import UserCreate


def main() -> None:
    email = os.getenv("ADMIN_EMAIL", "admin@projectsforu.in")
    password = os.getenv("ADMIN_PASSWORD", "ChangeMe123!")
    full_name = os.getenv("ADMIN_NAME", "ProjectsforU Admin")

    db = SessionLocal()
    try:
        existing = user_crud.get_by_email(db, email)
        if existing:
            print(f"Admin user already exists: {email}")
            return

        user_crud.create(
            db,
            obj_in=UserCreate(
                email=email,
                password=password,
                full_name=full_name,
                role=UserRole.admin,
                is_active=True,
            ),
        )
        print(f"Created admin user: {email}")
    finally:
        db.close()


if __name__ == "__main__":
    main()
