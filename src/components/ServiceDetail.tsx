import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiChevronRight, FiHelpCircle, FiLayers, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { portfolioProjects } from '../services/siteContent'
import type { ServiceDetailContent } from '../types/site'
import { ButtonLink } from './ButtonLink'
import { SectionHeader } from './SectionHeader'

type ServiceDetailProps = {
  next?: ServiceDetailContent
  previous?: ServiceDetailContent
  service: ServiceDetailContent
}

export function ServiceDetail({ next, previous, service }: ServiceDetailProps) {
  const Icon = service.icon
  const relatedProjects = portfolioProjects.filter((project) =>
    service.relatedProjects.includes(project.title),
  )

  return (
    <section className="future-shell relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(226,232,240,0.42),rgba(248,250,252,0.96))] dark:bg-[linear-gradient(180deg,#020617,#08162a_48%,#020617)]" />
      <div className="circuit-grid absolute inset-0 opacity-35 dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link className="transition hover:text-secondary" to="/">
            Home
          </Link>
          <FiChevronRight aria-hidden="true" />
          <Link className="transition hover:text-secondary" to="/services">
            Services
          </Link>
          <FiChevronRight aria-hidden="true" />
          <span className="text-secondary">{service.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              Service Detail
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#07111f] sm:text-6xl dark:text-white">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#43516a] dark:text-slate-300">
              {service.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/project-submission">Start Your Project</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Free Consultation</ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel premium-border relative overflow-hidden rounded-[30px] p-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.04] dark:opacity-[0.08]`} />
            <div className="data-rain absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" />
            <div className="relative min-h-[22rem] overflow-hidden rounded-[24px] border border-primary/10 bg-primary/10 dark:border-white/10 dark:bg-white/[0.03]">
              <img
                alt={`${service.title} illustration`}
                className="absolute inset-0 h-full w-full object-cover brightness-[1.14] contrast-105 saturate-[1.04]"
                decoding="async"
                fetchPriority="high"
                height="360"
                loading="eager"
                src={service.image}
                width="560"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.04),rgba(7,17,31,0.08)_52%,rgba(7,17,31,0.28))]" />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.08] mix-blend-screen`} />
              <div className={`absolute left-6 top-6 grid h-16 w-16 place-items-center rounded-[18px] bg-gradient-to-br ${service.gradient} text-3xl text-white shadow-xl shadow-primary/20 ring-1 ring-white/30`}>
                <Icon aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[24px] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Overview
            </p>
            <div className="mt-5 grid gap-4">
              {service.longDescription.map((paragraph) => (
                <p className="leading-8 text-[#43516a] dark:text-slate-300" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div
                className="glass-panel flex gap-3 rounded-[18px] p-5"
                key={benefit}
              >
                <FiCheckCircle className="mt-1 shrink-0 text-secondary" aria-hidden="true" />
                <p className="font-semibold leading-7 text-[#253248] dark:text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="Key Features"
            title="Capabilities shaped for practical delivery"
            description="Each service is structured around the work needed to move from rough idea to a tested, explainable outcome."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon

              return (
                <motion.article
                  className="glass-panel micro-lift rounded-[24px] p-6"
                  initial={{ opacity: 0, y: 22 }}
                  key={feature.title}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className={`mb-6 grid h-13 w-13 place-items-center rounded-[16px] bg-gradient-to-br ${service.gradient} text-2xl text-white shadow-lg shadow-primary/15`}>
                    <FeatureIcon aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[#142033] dark:text-white">{feature.title}</h2>
                  <p className="mt-3 leading-7 text-[#4a5870] dark:text-slate-300">{feature.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              Technologies Used
            </p>
            <h2 className="text-3xl font-semibold text-[#07111f] sm:text-5xl dark:text-white">
              Tools and platforms selected around your project
            </h2>
            <p className="mt-5 leading-8 text-[#43516a] dark:text-slate-300">
              The stack is adapted to the budget, timeline, accuracy, maintainability, and demo needs of each build.
            </p>
          </div>
          <div className="glass-panel rounded-[28px] p-6">
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span
                  className="rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#253248] dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="Workflow"
            title="A clear process from scope to handoff"
            description="The workflow keeps technical choices visible and reduces surprises during implementation."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {service.workflow.map((step, index) => (
              <motion.article
                className="glass-panel rounded-[22px] p-5"
                initial={{ opacity: 0, y: 22 }}
                key={step.title}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-secondary/14 text-sm font-black text-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <FiLayers className="text-secondary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-[#142033] dark:text-white">{step.title}</h2>
                <p className="mt-3 leading-7 text-[#4a5870] dark:text-slate-300">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {relatedProjects.length > 0 ? (
          <div className="mt-20">
            <SectionHeader
              eyebrow="Related Projects"
              title="Similar builds from the ProjectsforU portfolio"
              description="Explore related examples that share similar technology, product thinking, or implementation patterns."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <Link
                  className="glass-panel micro-lift group overflow-hidden rounded-[24px]"
                  key={project.title}
                  to="/portfolio"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110" style={{ backgroundImage: project.visual }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-35 mix-blend-screen`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/88 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      {project.category}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-[#142033] dark:text-white">{project.title}</h2>
                    <p className="mt-3 line-clamp-3 leading-7 text-[#4a5870] dark:text-slate-300">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-[#07111f] sm:text-5xl dark:text-white">
              Questions before you start
            </h2>
          </div>
          <div className="grid gap-4">
            {service.faqs.map((item) => (
              <details
                className="glass-panel group rounded-[18px] p-5"
                key={item.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#142033] outline-none dark:text-white">
                  <span>{item.question}</span>
                  <FiHelpCircle className="shrink-0 text-secondary" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-7 text-[#4a5870] dark:text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {previous ? (
            <Link
              className="glass-panel rounded-[22px] p-5 transition hover:-translate-y-1 hover:border-secondary/50"
              to={previous.href}
            >
              <span className="inline-flex items-center text-sm font-semibold text-secondary">
                <FiArrowLeft className="mr-2" aria-hidden="true" />
                Previous Service
              </span>
              <p className="mt-3 text-xl font-semibold text-[#142033] dark:text-white">{previous.title}</p>
            </Link>
          ) : null}
          {next ? (
            <Link
              className="glass-panel rounded-[22px] p-5 text-right transition hover:-translate-y-1 hover:border-secondary/50"
              to={next.href}
            >
              <span className="inline-flex items-center text-sm font-semibold text-secondary">
                Next Service
                <FiArrowRight className="ml-2" aria-hidden="true" />
              </span>
              <p className="mt-3 text-xl font-semibold text-[#142033] dark:text-white">{next.title}</p>
            </Link>
          ) : null}
        </div>

        <div className="glass-panel premium-border mt-20 overflow-hidden rounded-[30px] p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Ready to build?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#07111f] sm:text-4xl dark:text-white">
                Share your requirements and get a clear technical direction.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-[#43516a] dark:text-slate-300">
                Send your idea, files, deadline, and expected outcome. ProjectsforU will help you shape the next practical step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink to="/project-submission">
                Start Your Project <FiArrowRight className="ml-2" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                <FiMail className="mr-2" aria-hidden="true" />
                Free Consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
