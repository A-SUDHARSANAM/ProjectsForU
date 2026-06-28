import {
  FiBookOpen,
  FiBox,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiRadio,
  FiRepeat,
  FiZap,
} from 'react-icons/fi'

import type {
  CaseStudy,
  NavItem,
  PortfolioProject,
  ProcessStep,
  Service,
  Testimonial,
} from '../types/site'

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const serviceNavItems: NavItem[] = [
  { label: 'Electronics Product Development', href: '/services' },
  { label: 'Robotics & Automation', href: '/services' },
  { label: 'IoT Solutions', href: '/services' },
  { label: 'Embedded Systems', href: '/services' },
]

export const services: Service[] = [
  {
    title: 'Electronics Product Development',
    description:
      'Concept-to-prototype circuit design, PCB planning, component selection, testing, and product-ready validation.',
    icon: FiCpu,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-secondary via-cyan-300 to-blue-500',
  },
  {
    title: 'Robotics & Automation',
    description:
      'Smart robotic systems, automation workflows, control logic, motion systems, and practical machine integration.',
    icon: FiRepeat,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-accent via-amber-300 to-secondary',
  },
  {
    title: 'IoT Solutions',
    description:
      'Connected devices, sensor networks, wireless communication, dashboards, and data pipelines for real-world systems.',
    icon: FiRadio,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-emerald-400 via-secondary to-cyan-500',
  },
  {
    title: 'Embedded Systems',
    description:
      'Firmware, microcontroller programming, hardware interfaces, power-aware design, and reliable device behavior.',
    icon: FiGitBranch,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-violet-400 via-secondary to-blue-500',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Computer vision, predictive models, intelligent automation, edge AI experiments, and data-backed prototypes.',
    icon: FiZap,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-secondary via-indigo-400 to-accent',
  },
  {
    title: '3D CAD Design',
    description:
      'Precise enclosures, mechanisms, assemblies, product housings, and manufacturable CAD models for prototypes.',
    icon: FiLayers,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-sky-400 via-secondary to-emerald-300',
  },
  {
    title: '3D Printing',
    description:
      'Rapid physical prototypes, functional parts, test fixtures, iterations, and print-ready design optimization.',
    icon: FiBox,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-accent via-rose-400 to-secondary',
  },
  {
    title: 'Technical Training',
    description:
      'Hands-on learning for students and teams across electronics, robotics, IoT, embedded systems, AI, and prototyping.',
    icon: FiBookOpen,
    cta: 'Learn More',
    href: '/contact',
    gradient: 'from-primary via-blue-500 to-secondary',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    company: 'Fintech Infrastructure',
    title: 'Launch-ready lending platform',
    description:
      'Designed the product architecture, automated underwriting workflow, and operator dashboard for a regulated fintech team.',
    metric: '8 weeks to MVP',
    accent: 'from-secondary to-cyan-300',
  },
  {
    company: 'Industrial IoT',
    title: 'Real-time device intelligence',
    description:
      'Built a telemetry platform with live monitoring, anomaly alerts, and field-service visibility across distributed assets.',
    metric: '42% faster response',
    accent: 'from-accent to-amber-300',
  },
  {
    company: 'Healthcare SaaS',
    title: 'Patient operations portal',
    description:
      'Delivered a secure, role-based platform for intake, scheduling, records, and data-backed operational decisions.',
    metric: '3x workflow capacity',
    accent: 'from-emerald-400 to-secondary',
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Smart Microplastic Detection System',
    category: 'AI',
    secondaryCategories: ['Embedded', 'IoT'],
    summary:
      'Computer vision and sensor fusion prototype for detecting microplastic traces in controlled water samples.',
    challenge:
      'The system needed to separate tiny visual anomalies from noisy sample conditions while remaining practical for lab demonstrations and student research.',
    outcome:
      'Built a compact detection workflow with image capture, classification logic, calibration routines, and a clean operator review experience.',
    metric: 'Edge-assisted analysis',
    tags: ['Computer Vision', 'Sensor Fusion', 'Python', 'Edge AI', 'Water Quality'],
    accent: 'from-cyan-300 via-secondary to-blue-600',
    visual: 'radial-gradient(circle at 28% 22%, rgba(255,255,255,0.9), transparent 0 4px), radial-gradient(circle at 72% 34%, rgba(255,255,255,0.75), transparent 0 3px), radial-gradient(circle at 48% 72%, rgba(255,255,255,0.68), transparent 0 5px), linear-gradient(135deg, #073b4c, #0ea5e9 48%, #111827)',
  },
  {
    title: 'Smart Tank Monitoring System',
    category: 'IoT',
    secondaryCategories: ['Embedded', 'Automation'],
    summary:
      'Connected tank-level monitoring with alert logic, low-power sensing, and dashboard-ready telemetry.',
    challenge:
      'Field devices had to read fluid levels reliably, report status in near real time, and support preventive maintenance decisions.',
    outcome:
      'Delivered a monitoring architecture covering sensor integration, communication flow, thresholds, and live operational visibility.',
    metric: 'Live level intelligence',
    tags: ['Ultrasonic Sensor', 'ESP32', 'MQTT', 'Alerts', 'Dashboard'],
    accent: 'from-emerald-300 via-secondary to-cyan-600',
    visual: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0 13%, transparent 13% 100%), linear-gradient(90deg, transparent 0 14%, rgba(255,255,255,0.22) 14% 18%, transparent 18% 100%), linear-gradient(145deg, #064e3b, #0891b2 48%, #0f172a)',
  },
  {
    title: 'CubeSat Telemetry System',
    category: 'Embedded',
    secondaryCategories: ['IoT'],
    summary:
      'Telemetry pipeline for capturing, encoding, and visualizing CubeSat health and mission data.',
    challenge:
      'The build required dependable embedded communication patterns, concise packet structures, and readable ground-station diagnostics.',
    outcome:
      'Created a telemetry stack with simulated payload data, serial/radio-ready messaging, validation checks, and mission-state displays.',
    metric: 'Mission data pipeline',
    tags: ['Telemetry', 'LoRa', 'C/C++', 'Packet Design', 'Ground Station'],
    accent: 'from-indigo-300 via-secondary to-slate-700',
    visual: 'radial-gradient(circle at 54% 46%, rgba(255,255,255,0.95) 0 18px, transparent 19px), radial-gradient(circle at 20% 26%, rgba(255,255,255,0.5) 0 2px, transparent 3px), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.55) 0 2px, transparent 3px), linear-gradient(135deg, #020617, #1d4ed8 48%, #0f172a)',
  },
  {
    title: 'Smart Indoor Camera System',
    category: 'AI',
    secondaryCategories: ['IoT', 'Embedded'],
    summary:
      'Privacy-aware indoor vision prototype for scene monitoring, motion events, and intelligent notifications.',
    challenge:
      'The camera needed to detect meaningful events without overwhelming users with noise or creating a heavy cloud dependency.',
    outcome:
      'Implemented local capture flows, event classification, notification triggers, and a simple review pattern for indoor monitoring.',
    metric: 'On-device event logic',
    tags: ['OpenCV', 'Motion Detection', 'Notifications', 'Raspberry Pi', 'Security'],
    accent: 'from-violet-300 via-secondary to-blue-700',
    visual: 'radial-gradient(circle at 50% 48%, rgba(15,23,42,0.85) 0 22px, rgba(255,255,255,0.92) 23px 31px, transparent 32px), radial-gradient(circle at 50% 48%, rgba(0,200,255,0.38), transparent 0 76px), linear-gradient(135deg, #111827, #2563eb 45%, #020617)',
  },
  {
    title: 'KUKA Robot Automation Projects',
    category: 'Robotics',
    secondaryCategories: ['Automation', 'Embedded'],
    summary:
      'Industrial robotics programs for repeatable motion, automation sequencing, and cell-level process demos.',
    challenge:
      'Automation logic had to coordinate safe robot movement, repeatability, timing, and operator-understandable process states.',
    outcome:
      'Developed robot task flows, path routines, I/O coordination, and demonstration-ready automation scenarios for KUKA systems.',
    metric: 'Repeatable cell workflows',
    tags: ['KUKA', 'Robot Programming', 'PLC I/O', 'Path Planning', 'Safety Logic'],
    accent: 'from-orange-300 via-accent to-secondary',
    visual: 'linear-gradient(35deg, transparent 0 42%, rgba(255,255,255,0.45) 42% 48%, transparent 48% 100%), radial-gradient(circle at 72% 32%, rgba(255,255,255,0.72) 0 18px, transparent 19px), linear-gradient(135deg, #451a03, #f97316 48%, #082f49)',
  },
  {
    title: 'NFC Audio Learning Device',
    category: 'Embedded',
    secondaryCategories: ['IoT'],
    summary:
      'Tap-to-play educational hardware that links NFC cards with audio lessons for hands-on learning.',
    challenge:
      'The device needed fast recognition, clear audio playback, rugged interaction, and a content model simple enough for educators.',
    outcome:
      'Built the embedded interaction loop, NFC read handling, audio playback behavior, and a scalable tag-to-content structure.',
    metric: 'Instant tap learning',
    tags: ['NFC', 'Audio Playback', 'Microcontroller', 'Learning Tech', 'UX Hardware'],
    accent: 'from-amber-300 via-accent to-rose-500',
    visual: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.88) 0 18px, transparent 19px), repeating-radial-gradient(circle at 30% 40%, rgba(255,255,255,0.28) 0 2px, transparent 3px 18px), linear-gradient(135deg, #7c2d12, #f59e0b 48%, #0f172a)',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    role: 'Final Year Engineering Student',
    category: 'Students',
    review:
      'ProjectsforU turned our rough embedded idea into a working prototype with clear wiring, clean firmware, and a demo flow we could confidently present.',
    rating: 5,
    avatarTone: '#00C8FF',
  },
  {
    name: 'Nisha Rao',
    role: 'Robotics Project Lead',
    category: 'Students',
    review:
      'The team explained every technical decision while building. We did not just receive a project, we understood how the sensors, logic, and control system worked.',
    rating: 5,
    avatarTone: '#FF6B00',
  },
  {
    name: 'Rohan Iyer',
    role: 'Founder, AgriTech Startup',
    category: 'Startups',
    review:
      'They helped us validate an IoT monitoring concept quickly, from device architecture to dashboard data. The prototype gave us investor-ready proof.',
    rating: 5,
    avatarTone: '#22C55E',
  },
  {
    name: 'Meera Shah',
    role: 'Product Manager, Hardware Startup',
    category: 'Startups',
    review:
      'The best part was the pace. We moved from concept notes to a polished working unit with proper testing checkpoints and practical component choices.',
    rating: 5,
    avatarTone: '#A855F7',
  },
  {
    name: 'Vikram Nair',
    role: 'Operations Head, Manufacturing Unit',
    category: 'Industry Clients',
    review:
      'Their automation support was precise and grounded. The KUKA workflow demo helped our team visualize repeatable production steps before committing capital.',
    rating: 5,
    avatarTone: '#F59E0B',
  },
  {
    name: 'Priya Menon',
    role: 'R&D Coordinator, Industrial IoT',
    category: 'Industry Clients',
    review:
      'ProjectsforU understood the practical constraints of field hardware. The monitoring prototype was reliable, readable, and easy for our technicians to review.',
    rating: 5,
    avatarTone: '#38BDF8',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description:
      'We clarify the business model, audience, workflows, constraints, and highest-value technical opportunities.',
  },
  {
    title: 'Design',
    description:
      'We prototype the core experience, define system architecture, and shape a release plan around measurable outcomes.',
  },
  {
    title: 'Build',
    description:
      'We ship in focused cycles with clean code, QA checkpoints, security reviews, and transparent delivery updates.',
  },
  {
    title: 'Scale',
    description:
      'We improve performance, reliability, analytics, automation, and product depth as customer traction grows.',
  },
]
