from app.crud.base import CRUDBase
from app.models.testimonial import Testimonial
from app.schemas.testimonial import TestimonialCreate, TestimonialUpdate

testimonial = CRUDBase[Testimonial, TestimonialCreate, TestimonialUpdate](
    Testimonial, search_fields=("name", "role", "category", "review")
)
