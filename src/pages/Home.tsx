import { motion } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowRight,
  FiBox,
  FiCpu,
  FiRadio,
  FiSettings,
  FiZap,
} from 'react-icons/fi'

import { ButtonLink } from '../components/ButtonLink'
import { DevelopmentTimeline } from '../components/DevelopmentTimeline'
import { HeroVisual } from '../components/HeroVisual'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { WhyChooseSection } from '../components/WhyChooseSection'
import { caseStudies, services } from '../services/siteContent'

export function Home() {
  const stats = [
    { value: '100+', label: 'Projects shipped' },
    { value: '50+', label: 'Clients guided' },
    { value: '10+', label: 'Core stacks' },
    { value: '24/7', label: 'Build support' },
  ]

  const floatingIcons = [
    { icon: FiCpu, label: 'Embedded', className: 'left-[6%] top-[18%]' },
    { icon: FiRadio, label: 'IoT', className: 'right-[11%] top-[20%]' },
    { icon: FiBox, label: '3D Design', className: 'left-[12%] bottom-[24%]' },
    { icon: FiZap, label: 'Robotics', className: 'right-[8%] bottom-[28%]' },
    { icon: FiSettings, label: 'AI Systems', className: 'left-[48%] top-[9%]' },
  ]

  return (
    <>
      <SEO
        title="ProjectsforU | Technology Product Development Company"
        description="ProjectsforU helps innovators build electronics, robotics, IoT, AI, embedded systems, 3D design, and 3D printing projects."
      />
      <section className="future-shell relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
        <div className="circuit-grid absolute inset-0 opacity-35 dark:opacity-25" />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 22 }, (_, index) => (
            <motion.span
              animate={{
                opacity: [0.16, 0.78, 0.16],
                scale: [0.7, 1.35, 0.7],
                y: [0, -28 - (index % 5) * 8, 0],
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_18px_rgba(0,212,255,0.9)]"
              key={String(index)}
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${12 + ((index * 29) % 76)}%`,
              }}
              transition={{
                duration: 3.2 + (index % 6) * 0.45,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.09,
              }}
            />
          ))}
        </div>
        {floatingIcons.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              animate={{ y: [0, index % 2 === 0 ? -14 : 14, 0], rotate: [0, 2, 0] }}
              className={`glass-panel pointer-events-none absolute hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[#263449] md:flex dark:text-white ${item.className}`}
              initial={{ opacity: 0, scale: 0.88 }}
              key={item.label}
              transition={{
                duration: 4.2 + index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Icon className="text-secondary" aria-hidden="true" />
              {item.label}
            </motion.div>
          )
        })}
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.p
              className="glass-panel mb-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-[#1f2a3d] dark:text-secondary"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              2026 product studio for intelligent hardware
            </motion.p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-[#07111f] sm:text-6xl lg:text-7xl dark:text-white">
              Transform bold ideas into{' '}
              <span className="holographic-text">future-ready products</span>
            </h1>
            <div className="mt-6 max-w-3xl overflow-hidden">
              <motion.p
                className="typing-line whitespace-nowrap text-base font-semibold text-[#075fd6] sm:text-lg dark:text-secondary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.4, ease: 'easeInOut', delay: 0.35 }}
              >
                Electronics | Robotics | IoT | AI | Embedded Systems | 3D Design | 3D Printing
              </motion.p>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#34445f] dark:text-slate-300">
              From student projects to industrial prototypes, ProjectsforU helps
              innovators build, learn, and launch technology solutions with the polish,
              speed, and systems thinking of a modern product company.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">
                Start Your Project <FiArrowRight className="ml-2" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/portfolio" variant="secondary">
                Explore Work
              </ButtonLink>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  className="glass-panel micro-lift rounded-[18px] p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.08, duration: 0.45 }}
                  key={stat.label}
                >
                  <p className="text-2xl font-semibold text-primary dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <HeroVisual />
        </div>
        <motion.a
          aria-label="Scroll to capabilities"
          animate={{ y: [0, 8, 0] }}
          className="glass-panel absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full p-3 text-primary md:grid dark:text-white"
          href="#capabilities"
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown aria-hidden="true" />
        </motion.a>
      </section>

      <section id="capabilities" className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capabilities"
            title="Engineering services for prototypes, products, and learning"
            description="Electronics, robotics, IoT, embedded systems, AI, CAD, 3D printing, and technical training brought together in one practical product development studio."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <TestimonialsSection />

      <section className="future-shell bg-primary px-5 py-20 text-white sm:px-6 lg:px-8 dark:bg-black">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Selected builds"
            title="Digital products with measurable momentum"
            description="We shape every engagement around business value, technical strength, and user trust."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <motion.article
                className="glass-panel micro-lift rounded-[22px] p-6 text-white"
                initial={{ opacity: 0, y: 22 }}
                key={study.title}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={`mb-8 h-1.5 w-24 rounded-full bg-gradient-to-r ${study.accent}`} />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {study.company}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{study.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{study.description}</p>
                <p className="mt-8 text-3xl font-semibold text-white">{study.metric}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentTimeline />
    </>
  )
}
