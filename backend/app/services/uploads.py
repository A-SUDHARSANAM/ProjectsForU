from pathlib import Path
from uuid import uuid4

from fastapi import HTTPException, UploadFile, status

from app.core.config import settings


async def save_upload(file: UploadFile | None, namespace: str) -> str | None:
    if file is None:
        return None

    content = await file.read()
    max_bytes = settings.max_upload_size_mb * 1024 * 1024
    if len(content) > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File size must be under {settings.max_upload_size_mb} MB",
        )

    extension = Path(file.filename or "").suffix.lower()
    safe_name = f"{uuid4()}{extension}"
    target_dir = settings.upload_dir / namespace
    target_dir.mkdir(parents=True, exist_ok=True)
    target_path = target_dir / safe_name
    target_path.write_bytes(content)
    return f"/uploads/{namespace}/{safe_name}"
