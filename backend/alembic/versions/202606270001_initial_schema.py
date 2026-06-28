"""initial schema

Revision ID: 202606270001
Revises:
Create Date: 2026-06-27
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "202606270001"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    content_status = sa.Enum("draft", "published", "archived", name="contentstatus")
    lead_status = sa.Enum("new", "contacted", "qualified", "closed", name="leadstatus")
    project_category = sa.Enum(
        "AI",
        "IoT",
        "Robotics",
        "Embedded",
        "Automation",
        "Electronics",
        "3D Design",
        name="projectcategory",
    )
    submission_status = sa.Enum(
        "new",
        "reviewing",
        "quoted",
        "accepted",
        "rejected",
        name="submissionstatus",
    )
    user_role = sa.Enum("admin", "editor", "viewer", name="userrole")

    op.create_table(
        "users",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("full_name", sa.String(length=160), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("role", user_role, nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_users")),
    )
    op.create_index(op.f("ix_users_email"), "users", ["email"], unique=True)

    op.create_table(
        "projects",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("title", sa.String(length=220), nullable=False),
        sa.Column("slug", sa.String(length=240), nullable=False),
        sa.Column("category", project_category, nullable=False),
        sa.Column("summary", sa.String(length=500), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("technologies", sa.String(length=500), nullable=False),
        sa.Column("image_url", sa.String(length=500), nullable=True),
        sa.Column("status", content_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_projects")),
    )
    op.create_index(op.f("ix_projects_category"), "projects", ["category"], unique=False)
    op.create_index(op.f("ix_projects_slug"), "projects", ["slug"], unique=True)
    op.create_index(op.f("ix_projects_status"), "projects", ["status"], unique=False)
    op.create_index(op.f("ix_projects_title"), "projects", ["title"], unique=False)

    op.create_table(
        "blogs",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("title", sa.String(length=220), nullable=False),
        sa.Column("slug", sa.String(length=240), nullable=False),
        sa.Column("excerpt", sa.String(length=500), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("author_name", sa.String(length=160), nullable=False),
        sa.Column("cover_image_url", sa.String(length=500), nullable=True),
        sa.Column("status", content_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_blogs")),
    )
    op.create_index(op.f("ix_blogs_slug"), "blogs", ["slug"], unique=True)
    op.create_index(op.f("ix_blogs_status"), "blogs", ["status"], unique=False)
    op.create_index(op.f("ix_blogs_title"), "blogs", ["title"], unique=False)

    op.create_table(
        "testimonials",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("name", sa.String(length=160), nullable=False),
        sa.Column("role", sa.String(length=180), nullable=False),
        sa.Column("category", sa.String(length=80), nullable=False),
        sa.Column("review", sa.Text(), nullable=False),
        sa.Column("rating", sa.Integer(), nullable=False),
        sa.Column("avatar_url", sa.String(length=500), nullable=True),
        sa.Column("status", content_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_testimonials")),
    )
    op.create_index(op.f("ix_testimonials_category"), "testimonials", ["category"], unique=False)
    op.create_index(op.f("ix_testimonials_status"), "testimonials", ["status"], unique=False)

    op.create_table(
        "contact_forms",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("name", sa.String(length=160), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("phone", sa.String(length=40), nullable=True),
        sa.Column("subject", sa.String(length=220), nullable=False),
        sa.Column("message", sa.Text(), nullable=False),
        sa.Column("status", lead_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_contact_forms")),
    )
    op.create_index(op.f("ix_contact_forms_email"), "contact_forms", ["email"], unique=False)
    op.create_index(op.f("ix_contact_forms_status"), "contact_forms", ["status"], unique=False)

    op.create_table(
        "project_submissions",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("name", sa.String(length=160), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("phone", sa.String(length=40), nullable=False),
        sa.Column("project_title", sa.String(length=220), nullable=False),
        sa.Column("project_category", project_category, nullable=False),
        sa.Column("budget", sa.String(length=120), nullable=False),
        sa.Column("expected_completion_date", sa.Date(), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("file_url", sa.String(length=500), nullable=True),
        sa.Column("status", submission_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_project_submissions")),
    )
    op.create_index(op.f("ix_project_submissions_email"), "project_submissions", ["email"], unique=False)
    op.create_index(op.f("ix_project_submissions_project_category"), "project_submissions", ["project_category"], unique=False)
    op.create_index(op.f("ix_project_submissions_project_title"), "project_submissions", ["project_title"], unique=False)
    op.create_index(op.f("ix_project_submissions_status"), "project_submissions", ["status"], unique=False)


def downgrade() -> None:
    op.drop_table("project_submissions")
    op.drop_table("contact_forms")
    op.drop_table("testimonials")
    op.drop_table("blogs")
    op.drop_table("projects")
    op.drop_table("users")

    op.execute("DROP TYPE IF EXISTS submissionstatus")
    op.execute("DROP TYPE IF EXISTS leadstatus")
    op.execute("DROP TYPE IF EXISTS contentstatus")
    op.execute("DROP TYPE IF EXISTS projectcategory")
    op.execute("DROP TYPE IF EXISTS userrole")
