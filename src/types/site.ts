import type { IconType } from 'react-icons'

export type NavItem = {
  label: string
  href: string
  image?: string
  description?: string
}

export type Service = {
  title: string
  slug: string
  description: string
  icon: IconType
  cta: string
  href: string
  gradient: string
  image: string
}

export type ServiceFeature = {
  title: string
  description: string
  icon: IconType
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceDetailContent = Service & {
  subtitle: string
  seoTitle: string
  seoDescription: string
  longDescription: string[]
  features: ServiceFeature[]
  technologies: string[]
  workflow: ProcessStep[]
  benefits: string[]
  relatedProjects: string[]
  faqs: ServiceFaq[]
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
  description: string
  image?: string
  noIndex?: boolean
  title: string
}
