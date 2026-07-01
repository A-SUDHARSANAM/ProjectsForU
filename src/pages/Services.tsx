import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiSettings } from 'react-icons/fi'

import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../services/siteContent'

const deliverables = [
  'Circuit and architecture planning',
  'Firmware and software implementation',
  'CAD, enclosure, and 3D-print readiness',
  'Testing notes and project documentation',
  'Demo preparation and handoff guidance',
  'Dashboard, automation, and integration support',
]

const tracks = [
  {
    icon: FiCpu,
    title: 'Student project acceleration',
    description: 'Guided builds, practical explanations, and demo-ready outcomes for academic submissions.',
  },
  {
    icon: FiLayers,
    title: 'Startup prototype sprint',
    description: 'Fast MVP hardware and software validation for founders preparing pilots or investor demos.',
  },
  {
    icon: FiSettings,
    title: 'Industry automation support',
    description: 'Robotics, monitoring, embedded systems, and automation workflows for real operating needs.',
  },
]

export function Services() {
  return (
    <>
      <SEO
        title="Services | ProjectsforU"
        description="Explore ProjectsforU services across electronics product development, robotics, IoT, embedded systems, AI, CAD design, 3D printing, and technical training."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Services
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#07111f] sm:text-6xl dark:text-white">
                Engineering services for prototypes, products, and intelligent systems
              </h1>
            </div>
            <div className="glass-panel rounded-[24px] p-6">
              <p className="text-lg leading-8 text-[#43516a] dark:text-slate-300">
                From circuit boards and embedded firmware to robotics, AI, CAD, and
                3D-printed prototypes, ProjectsforU helps ideas become testable,
                usable technology.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/project-submission">Submit requirements</ButtonLink>
                <ButtonLink to="/portfolio" variant="secondary">See builds</ButtonLink>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Engagement Tracks"
              title="Choose the build path that matches your stage"
              description="Each track keeps scope, technical depth, and delivery expectations clear from day one."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {tracks.map((track, index) => {
                const Icon = track.icon

                return (
                  <motion.article
                    className="glass-panel micro-lift rounded-[24px] p-6"
                    initial={{ opacity: 0, y: 22 }}
                    key={track.title}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true, margin: '-80px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-[14px] bg-secondary/14 text-xl text-secondary">
                        <Icon aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold text-secondary">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#142033] dark:text-white">{track.title}</h3>
                    <p className="mt-3 leading-7 text-[#4a5870] dark:text-slate-300">{track.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                What you receive
              </p>
              <h2 className="text-3xl font-semibold text-[#07111f] sm:text-5xl dark:text-white">
                Practical outputs, not vague consulting artifacts
              </h2>
              <p className="mt-5 leading-8 text-[#43516a] dark:text-slate-300">
                Every engagement is shaped around visible progress: working modules,
                tested flows, clear documentation, and a handoff your team can understand.
              </p>
            </div>
            <div className="glass-panel rounded-[28px] p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div className="flex gap-3 rounded-[16px] border border-primary/10 bg-white/52 p-4 dark:border-white/10 dark:bg-white/[0.04]" key={item}>
                    <FiCheckCircle className="mt-1 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="font-semibold text-[#253248] dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel mt-20 flex flex-col gap-6 rounded-[28px] p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Scope your build</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#07111f] dark:text-white">
                Start with requirements. Leave with a technical plan.
              </h2>
            </div>
            <ButtonLink to="/project-submission">
              Submit project <FiArrowRight className="ml-2" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
