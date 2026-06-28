from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ORMModel(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class TimestampFields(BaseModel):
    created_at: datetime
    updated_at: datetime
