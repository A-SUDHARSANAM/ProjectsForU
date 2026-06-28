from typing import Any, Generic, TypeVar

from pydantic import BaseModel
from sqlalchemy import Select, func, or_, select
from sqlalchemy.orm import Session

from app.db.base import Base

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class CRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: type[ModelType], search_fields: tuple[str, ...] = ()) -> None:
        self.model = model
        self.search_fields = search_fields

    def get(self, db: Session, id: str) -> ModelType | None:
        return db.get(self.model, id)

    def list(
        self,
        db: Session,
        *,
        page: int = 1,
        size: int = 20,
        search: str | None = None,
        filters: dict[str, Any] | None = None,
    ) -> tuple[list[ModelType], int]:
        stmt = select(self.model)
        stmt = self._apply_search(stmt, search)
        stmt = self._apply_filters(stmt, filters)
        total = db.scalar(select(func.count()).select_from(stmt.subquery())) or 0
        items = db.scalars(
            stmt.order_by(self.model.created_at.desc()).offset((page - 1) * size).limit(size)
        ).all()
        return list(items), total

    def create(self, db: Session, *, obj_in: CreateSchemaType | dict[str, Any]) -> ModelType:
        data = obj_in if isinstance(obj_in, dict) else obj_in.model_dump()
        db_obj = self.model(**data)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self,
        db: Session,
        *,
        db_obj: ModelType,
        obj_in: UpdateSchemaType | dict[str, Any],
    ) -> ModelType:
        data = obj_in if isinstance(obj_in, dict) else obj_in.model_dump(exclude_unset=True)
        for field, value in data.items():
            setattr(db_obj, field, value)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete(self, db: Session, *, id: str) -> ModelType | None:
        db_obj = self.get(db, id)
        if not db_obj:
            return None
        db.delete(db_obj)
        db.commit()
        return db_obj

    def _apply_search(self, stmt: Select[tuple[ModelType]], search: str | None) -> Select[tuple[ModelType]]:
        if not search or not self.search_fields:
            return stmt
        clauses = [
            getattr(self.model, field).ilike(f"%{search}%")
            for field in self.search_fields
            if hasattr(self.model, field)
        ]
        return stmt.where(or_(*clauses)) if clauses else stmt

    def _apply_filters(
        self, stmt: Select[tuple[ModelType]], filters: dict[str, Any] | None
    ) -> Select[tuple[ModelType]]:
        if not filters:
            return stmt
        for field, value in filters.items():
            if value is not None and hasattr(self.model, field):
                stmt = stmt.where(getattr(self.model, field) == value)
        return stmt
