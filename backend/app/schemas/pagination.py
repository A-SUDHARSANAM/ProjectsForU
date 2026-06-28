from typing import Generic, TypeVar

from pydantic import BaseModel, Field

DataT = TypeVar("DataT")


class Page(BaseModel, Generic[DataT]):
    items: list[DataT]
    total: int = Field(ge=0)
    page: int = Field(ge=1)
    size: int = Field(ge=1, le=100)
    pages: int = Field(ge=1)
