import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FiCheckCircle,
  FiEdit3,
  FiFlag,
  FiZap,
  FiTool,
} from 'react-icons/fi'

import { SectionHeader } from './SectionHeader'
import { cn } from '../utils/cn'

const timelineSteps = [
  {
    title: 'Idea',
    description:
      'We clarify the problem, users, technical requirements, constraints, and project success criteria.',
    icon: FiZap,
  },
  {
    title: 'Design',
    description:
      'We shape circuit plans, CAD models, architecture, interfaces, workflows, and an efficient build path.',
    icon: FiEdit3,
  },
  {
    title: 'Prototype',
    description:
      'We assemble hardware, firmware, software, 3D parts, and integrations into a working proof of concept.',
    icon: FiTool,
  },
  {
    title: 'Testing',
    description:
      'We validate behavior, debug edge cases, refine usability, measure performance, and improve reliability.',
    icon: FiCheckCircle,
  },
  {
    title: 'Deployment',
    description:
      'We prepare documentation, handoff assets, demos, manufacturing notes, and launch-ready guidance.',
    icon: FiFlag,
  },
]

export function DevelopmentTimeline() {
  const [activeStep, setActiveStep] = useState(2)
  const progress = `${(activeStep / (timelineSteps.length - 1)) * 100}%`

  return (
    <section className="future-shell relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[#F7F8FB] dark:bg-[#05070D]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,95,214,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(7,95,214,0.05)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(90deg,rgba(0,200,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,200,255,0.08)_1px,transparent_1px)]" />
      <div className="relative mx-auto max-w-7xl text-primary dark:text-white">
        <SectionHeader
          eyebrow="Development Process Timeline"
          title="A clear path from idea to deployed solution"
          description="An interactive development flow keeps every build practical, visible, and ready for the next decision."
        />

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-0 right-0 top-9 h-1 rounded-full bg-primary/10 dark:bg-white/10" />
          <motion.div
            animate={{ width: progress }}
            className="absolute left-0 top-9 h-1 rounded-full bg-gradient-to-r from-secondary via-cyan-300 to-accent shadow-[0_0_24px_rgba(0,200,255,0.55)]"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          <div className="relative grid grid-cols-5 gap-4">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeStep
              const isComplete = index <= activeStep

              return (
                <motion.button
                  className="group text-left"
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  type="button"
                  whileHover={{ y: -6 }}
                >
                  <span
                    className={cn(
                      'relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border text-2xl transition duration-300',
                      isComplete
                        ? 'border-secondary bg-secondary text-white shadow-[0_0_34px_rgba(0,200,255,0.45)] dark:text-primary'
                        : 'border-primary/15 bg-primary/8 text-primary dark:border-white/15 dark:bg-white/8 dark:text-white',
                    )}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      'mt-7 block rounded-[18px] border p-5 transition duration-300',
                      isActive
                        ? 'border-secondary/60 bg-white shadow-2xl shadow-secondary/10 dark:bg-white/12'
                        : 'border-primary/10 bg-white/50 group-hover:border-primary/25 dark:border-white/10 dark:bg-white/[0.045] dark:group-hover:border-white/25',
                    )}
                  >
                    <span className="block text-sm font-semibold text-secondary">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block text-xl font-semibold text-[#07111f] dark:text-white">
                      {step.title}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-[#4a5870] dark:text-slate-300">
                      {step.description}
                    </span>
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div className="relative mt-12 grid gap-5 lg:hidden">
          <div className="absolute bottom-8 left-6 top-8 w-1 rounded-full bg-primary/10 dark:bg-white/10" />
          <motion.div
            animate={{ height: progress }}
            className="absolute left-6 top-8 w-1 rounded-full bg-gradient-to-b from-secondary to-accent"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          {timelineSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep
            const isComplete = index <= activeStep

            return (
              <motion.button
                className="relative grid grid-cols-[3rem_1fr] gap-4 text-left"
                initial={{ opacity: 0, x: -18 }}
                key={step.title}
                onClick={() => setActiveStep(index)}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                type="button"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span
                  className={cn(
                    'relative z-10 grid h-12 w-12 place-items-center rounded-full border text-lg transition duration-300',
                    isComplete
                      ? 'border-secondary bg-secondary text-white shadow-[0_0_26px_rgba(0,200,255,0.45)] dark:text-primary'
                      : 'border-primary/15 bg-primary/8 text-primary dark:border-white/15 dark:bg-white/8 dark:text-white',
                  )}
                >
                  <Icon aria-hidden="true" />
                </span>
                <span
                  className={cn(
                      'rounded-[18px] border p-5 transition duration-300',
                    isActive
                      ? 'border-secondary/60 bg-white dark:bg-white/12'
                      : 'border-primary/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.045]',
                  )}
                >
                  <span className="text-sm font-semibold text-secondary">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block text-xl font-semibold text-[#07111f] dark:text-white">
                    {step.title}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-[#4a5870] dark:text-slate-300">
                    {step.description}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
