import type { IconType } from 'react-icons'

export type NavItem = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  icon: IconType
  cta: string
  href: string
  gradient: string
}

export type CaseStudy = {
  company: string
  title: string
  description: string
  metric: string
  accent: string
}

export type ProjectCategory = 'AI' | 'IoT' | 'Robotics' | 'Embedded' | 'Automation'

export type PortfolioProject = {
  title: string
  category: ProjectCategory
  secondaryCategories: ProjectCategory[]
  summary: string
  challenge: string
  outcome: string
  metric: string
  tags: string[]
  accent: string
  visual: string
}

export type TestimonialCategory = 'Students' | 'Startups' | 'Industry Clients'

export type Testimonial = {
  name: string
  role: string
  category: TestimonialCategory
  review: string
  rating: number
  avatarTone: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type SeoConfig = {
  title: string
  description: string
}
