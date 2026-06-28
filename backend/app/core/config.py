from functools import lru_cache
from pathlib import Path

from pydantic import AnyHttpUrl, EmailStr, Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "ProjectsforU API"
    app_env: str = "development"
    api_v1_prefix: str = "/api/v1"
    debug: bool = Field(default=False, validation_alias="APP_DEBUG")

    database_url: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5432/projectsforu"
    )

    jwt_secret_key: str = Field(default="change-me-in-production")
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    cors_origins: list[AnyHttpUrl | str] = ["http://localhost:5173", "http://127.0.0.1:5173"]

    upload_dir: Path = Path("uploads")
    max_upload_size_mb: int = 10

    smtp_host: str | None = None
    smtp_port: int = 587
    smtp_username: str | None = None
    smtp_password: str | None = None
    smtp_from_email: EmailStr | None = None
    admin_notification_email: EmailStr | None = None

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, value: str | list[str]) -> list[str] | str:
        if isinstance(value, str) and value:
            return [origin.strip() for origin in value.split(",")]
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
