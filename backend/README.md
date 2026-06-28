# ProjectsforU FastAPI Backend

Production-grade FastAPI backend for ProjectsforU content, leads, project submissions, and admin operations.

## Stack

- FastAPI
- PostgreSQL
- SQLAlchemy 2
- Alembic
- JWT authentication
- Pydantic validation
- Multipart file uploads
- SMTP-ready notifications

## Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
alembic upgrade head
python -m app.scripts.create_admin
uvicorn app.main:app --reload
```

API docs are available at:

```text
http://127.0.0.1:8000/docs
```

## Auth

Use `POST /api/v1/auth/login` with an admin email and password. Pass the returned token as:

```text
Authorization: Bearer <token>
```

Admin/editor routes are protected with role-based dependencies.

## Main Modules

- `/api/v1/projects`
- `/api/v1/blogs`
- `/api/v1/testimonials`
- `/api/v1/contacts`
- `/api/v1/project-submissions`
- `/api/v1/auth`

List endpoints support pagination, search, and filters through query parameters such as:

```text
?page=1&size=20&search=iot&status=published
```
