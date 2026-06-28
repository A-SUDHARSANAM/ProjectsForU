from app.crud.base import CRUDBase
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectUpdate

project = CRUDBase[Project, ProjectCreate, ProjectUpdate](
    Project, search_fields=("title", "summary", "description", "technologies")
)
