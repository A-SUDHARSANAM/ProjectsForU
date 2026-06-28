from math import ceil
from typing import Generic, TypeVar

from pydantic import BaseModel, Field

T = TypeVar("T")


class Page(BaseModel, Generic[T]):
    items: list[T]
    total: int = Field(ge=0)
    page: int = Field(ge=1)
    size: int = Field(ge=1, le=100)
    pages: int = Field(ge=0)


def pagination_meta(total: int, page: int, size: int) -> dict[str, int]:
    return {
        "total": total,
        "page": page,
        "size": size,
        "pages": ceil(total / size) if total else 0,
    }
