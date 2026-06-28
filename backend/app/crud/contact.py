from app.crud.base import CRUDBase
from app.models.contact import ContactForm
from app.schemas.contact import ContactFormCreate, ContactFormUpdate

contact_form = CRUDBase[ContactForm, ContactFormCreate, ContactFormUpdate](
    ContactForm, search_fields=("name", "email", "subject", "message")
)
