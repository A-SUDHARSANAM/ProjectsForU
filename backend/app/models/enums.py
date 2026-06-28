from enum import StrEnum


class UserRole(StrEnum):
    admin = "admin"
    editor = "editor"
    viewer = "viewer"


class ProjectCategory(StrEnum):
    ai = "AI"
    iot = "IoT"
    robotics = "Robotics"
    embedded = "Embedded"
    automation = "Automation"
    electronics = "Electronics"
    design = "3D Design"


class ContentStatus(StrEnum):
    draft = "draft"
    published = "published"
    archived = "archived"


class LeadStatus(StrEnum):
    new = "new"
    contacted = "contacted"
    qualified = "qualified"
    closed = "closed"


class SubmissionStatus(StrEnum):
    new = "new"
    reviewing = "reviewing"
    quoted = "quoted"
    accepted = "accepted"
    rejected = "rejected"


def enum_values(enum_class: type[StrEnum]) -> list[str]:
    return [member.value for member in enum_class]
