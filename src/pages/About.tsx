import { motion } from 'framer-motion'
import { FiCpu, FiLayers, FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi'

import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'

const principles = [
  'Product strategy before feature volume',
  'Prototype decisions backed by real constraints',
  'Architecture that leaves room for growth',
  'Clear communication from kickoff to launch',
]

const metrics = [
  { value: '100+', label: 'student, startup, and industry builds' },
  { value: '8+', label: 'core engineering domains covered' },
  { value: '24/7', label: 'support mindset for active projects' },
]

const capabilities = [
  {
    icon: FiCpu,
    title: 'Hardware intelligence',
    description: 'Embedded boards, sensors, firmware, telemetry, and device behavior shaped for practical use.',
  },
  {
    icon: FiZap,
    title: 'Automation momentum',
    description: 'Robotics, control flows, dashboards, and demos that make complex systems easier to operate.',
  },
  {
    icon: FiLayers,
    title: 'Product-grade execution',
    description: 'Documentation, testing, component choices, and UI decisions aligned with launch readiness.',
  },
]

export function About() {
  return (
    <>
      <SEO
        title="About | ProjectsforU"
        description="Learn about ProjectsforU, a premium technology product development studio for students, startups, and industry teams."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                About ProjectsforU
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#07111f] sm:text-6xl dark:text-white">
                A future-focused product studio for intelligent technology builds
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43516a] dark:text-slate-300">
                ProjectsforU helps students, founders, and industry teams turn ambitious
                ideas into working prototypes, polished demos, and deployment-ready
                technology systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/project-submission">Submit a project</ButtonLink>
                <ButtonLink to="/portfolio" variant="secondary">View portfolio</ButtonLink>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel premium-border rounded-[28px] p-6"
              initial={{ opacity: 0, y: 26, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="data-rain pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div className="rounded-[18px] border border-primary/10 bg-white/58 p-5 dark:border-white/10 dark:bg-white/[0.045]" key={metric.label}>
                    <p className="text-3xl font-semibold text-primary dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#52627a] dark:text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-5 rounded-[22px] bg-primary p-6 text-white dark:bg-black">
                <FiTarget className="text-3xl text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-semibold">Our operating belief</h2>
                <p className="mt-3 leading-8 text-slate-300">
                  The best technical projects are not just assembled. They are scoped,
                  designed, tested, explained, and handed over with clarity.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="How we think"
              title="A practical design and engineering culture"
              description="Every engagement balances speed, craft, constraints, and long-term usability."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((principle, index) => (
                <motion.article
                  className="glass-panel micro-lift rounded-[22px] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  key={principle}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="text-sm font-semibold text-secondary">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold text-[#142033] dark:text-white">{principle}</h3>
                  <p className="mt-3 leading-7 text-[#4a5870] dark:text-slate-300">
                    We keep the build grounded in what the final user, evaluator, or operator needs to trust.
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <article className="glass-panel micro-lift rounded-[24px] p-6" key={item.title}>
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-[14px] bg-primary text-xl text-secondary dark:bg-white dark:text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#142033] dark:text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#4a5870] dark:text-slate-300">{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="glass-panel mt-20 flex flex-col gap-6 rounded-[28px] p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#07111f] dark:text-white">
                Bring us the idea. We will help shape the build.
              </h2>
            </div>
            <ButtonLink to="/contact">
              Start conversation <FiTrendingUp className="ml-2" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
