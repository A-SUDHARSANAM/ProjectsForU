from email.message import EmailMessage
import smtplib

from app.core.config import settings


def send_notification(subject: str, body: str, reply_to: str | None = None) -> None:
    if not (
        settings.smtp_host
        and settings.smtp_from_email
        and settings.admin_notification_email
    ):
        return

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = str(settings.smtp_from_email)
    message["To"] = str(settings.admin_notification_email)
    if reply_to:
        message["Reply-To"] = reply_to
    message.set_content(body)

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as smtp:
        smtp.starttls()
        if settings.smtp_username and settings.smtp_password:
            smtp.login(settings.smtp_username, settings.smtp_password)
        smtp.send_message(message)
