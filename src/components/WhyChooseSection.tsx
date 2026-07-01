import { motion } from 'framer-motion'
import {
  FiCpu,
  FiDollarSign,
  FiFastForward,
  FiLayers,
  FiSettings,
  FiTool,
  FiUsers,
} from 'react-icons/fi'

import { SectionHeader } from './SectionHeader'

const features = [
  {
    title: 'End-to-End Development',
    description:
      'From idea validation and design to prototyping, testing, and launch support.',
    icon: FiLayers,
  },
  {
    title: 'Expert Technical Guidance',
    description:
      'Clear engineering direction across electronics, embedded systems, robotics, AI, and fabrication.',
    icon: FiCpu,
  },
  {
    title: 'Fast Prototype Development',
    description:
      'Rapid iterations that turn concepts into working hardware and software proof points.',
    icon: FiFastForward,
  },
  {
    title: 'Industry-Oriented Solutions',
    description:
      'Practical builds shaped around reliability, usability, deployment, and real operating conditions.',
    icon: FiSettings,
  },
  {
    title: 'Affordable Pricing',
    description:
      'Flexible project scopes that help students, founders, and teams move without heavy upfront cost.',
    icon: FiDollarSign,
  },
  {
    title: 'Startup Friendly',
    description:
      'Lean product thinking, MVP clarity, and founder-focused support for early-stage ideas.',
    icon: FiUsers,
  },
  {
    title: 'Manufacturing Support',
    description:
      'Guidance for BOMs, enclosure readiness, vendor coordination, assembly, and production handoff.',
    icon: FiTool,
  },
]

export function WhyChooseSection() {
  return (
    <section className="future-shell relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose ProjectsforU"
          title="Built for innovators who need real technical momentum"
          description="ProjectsforU combines practical engineering depth with product-focused execution, so your idea moves from sketch to working solution with less friction."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                className="glass-panel micro-lift group relative overflow-hidden rounded-[22px] p-6"
                initial={{ opacity: 0, y: 24 }}
                key={feature.title}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="data-rain absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-15" />
                <div className="relative mb-6 grid h-12 w-12 place-items-center rounded-[14px] bg-secondary/14 text-xl text-secondary shadow-lg shadow-primary/5">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="relative text-xl font-semibold tracking-tight text-[#142033] dark:text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-3 leading-7 text-[#4a5870] dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
