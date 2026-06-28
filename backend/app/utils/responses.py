from math import ceil
from typing import TypeVar

from app.schemas.pagination import Page

DataT = TypeVar("DataT")


def paginated(items: list[DataT], *, total: int, page: int, size: int) -> Page[DataT]:
    return Page(items=items, total=total, page=page, size=size, pages=max(1, ceil(total / size)))
