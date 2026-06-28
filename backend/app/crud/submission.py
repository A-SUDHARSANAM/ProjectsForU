from app.crud.base import CRUDBase
from app.models.submission import ProjectSubmission
from app.schemas.submission import ProjectSubmissionCreate, ProjectSubmissionUpdate

project_submission = CRUDBase[
    ProjectSubmission,
    ProjectSubmissionCreate,
    ProjectSubmissionUpdate,
](
    ProjectSubmission,
    search_fields=("name", "email", "project_title", "description", "budget"),
)
