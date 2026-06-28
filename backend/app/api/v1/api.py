from fastapi import APIRouter

from app.api.v1.routes import auth, blogs, contacts, projects, submissions, testimonials

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(projects.router)
api_router.include_router(blogs.router)
api_router.include_router(testimonials.router)
api_router.include_router(contacts.router)
api_router.include_router(submissions.router)
