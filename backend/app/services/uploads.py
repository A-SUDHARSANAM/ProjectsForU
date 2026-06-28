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
    if extension not in settings.allowed_upload_extensions:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Unsupported file type.",
        )

    cloudinary_url = _upload_to_cloudinary(content, file, namespace)
    if cloudinary_url:
        return cloudinary_url

    safe_name = f"{uuid4()}{extension}"
    target_dir = settings.upload_dir / namespace
    target_dir.mkdir(parents=True, exist_ok=True)
    target_path = target_dir / safe_name
    target_path.write_bytes(content)
    return f"/uploads/{namespace}/{safe_name}"


def _upload_to_cloudinary(content: bytes, file: UploadFile, namespace: str) -> str | None:
    if not (
        settings.cloudinary_cloud_name
        and settings.cloudinary_api_key
        and settings.cloudinary_api_secret
    ):
        return None

    try:
        import cloudinary
        import cloudinary.uploader
    except ImportError as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Cloudinary is configured but the cloudinary package is not installed.",
        ) from exc

    cloudinary.config(
        cloud_name=settings.cloudinary_cloud_name,
        api_key=settings.cloudinary_api_key,
        api_secret=settings.cloudinary_api_secret,
        secure=True,
    )

    result = cloudinary.uploader.upload(
        content,
        folder=f"{settings.cloudinary_folder}/{namespace}",
        resource_type="auto",
        public_id=Path(file.filename or str(uuid4())).stem,
        overwrite=False,
    )
    return str(result.get("secure_url") or result.get("url"))
