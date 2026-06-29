import { useEffect, useMemo, useState } from 'react'
import { FiArrowUpRight, FiCpu, FiLayers, FiRadio, FiX } from 'react-icons/fi'

import { portfolioProjects } from '../services/siteContent'
import type { PortfolioProject, ProjectCategory } from '../types/site'

const categories = ['All', 'AI', 'IoT', 'Robotics', 'Embedded', 'Automation'] as const

type ActiveCategory = (typeof categories)[number]

const categoryIcons: Record<ProjectCategory, typeof FiCpu> = {
  AI: FiCpu,
  IoT: FiRadio,
  Robotics: FiLayers,
  Embedded: FiCpu,
  Automation: FiLayers,
}

function projectMatchesCategory(project: PortfolioProject, category: ActiveCategory) {
  return (
    category === 'All' ||
    project.category === category ||
    project.secondaryCategories.includes(category)
  )
}

export function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('All')
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  const filteredProjects = useMemo(
    () => portfolioProjects.filter((project) => projectMatchesCategory(project, activeCategory)),
    [activeCategory],
  )

  useEffect(() => {
    if (!selectedProject) return undefined

    const previousOverflow = document.body.style.overflow

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section className="future-shell relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.88),rgba(226,232,240,0.34),rgba(248,250,252,0.88))] dark:bg-[linear-gradient(180deg,#020617,#08162a_48%,#020617)]" />
      <div className="circuit-grid absolute inset-0 opacity-35 dark:opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              Premium Portfolio
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1526] sm:text-5xl dark:text-white">
              Case-study projects across intelligent hardware and automation
            </h2>
            <p className="mt-5 text-base leading-8 text-[#43516a] dark:text-slate-300">
              A curated showcase of AI, IoT, robotics, embedded, and automation builds,
              presented with the technical context behind each product direction.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'border-secondary bg-secondary text-primary shadow-lg shadow-secondary/20'
                    : 'border-primary/10 bg-white/70 text-slate-600 hover:border-secondary/70 hover:text-primary dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white'
                }`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcons[project.category]
            const isTall = index % 3 === 1

            return (
              <article
                className="glass-panel group mb-5 break-inside-avoid overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-secondary/15"
                key={project.title}
              >
                <button
                  className="block w-full text-left"
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  <div
                    className={`relative overflow-hidden ${isTall ? 'h-80' : 'h-64'}`}
                  >
                    <div
                      className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: project.visual }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-35 mix-blend-screen`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/24 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/24 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      <Icon className="text-secondary" aria-hidden="true" />
                      {project.category}
                    </div>
                    <div className="absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-xl">
                        View case study <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                      {project.metric}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#142033] dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#34445f] dark:text-slate-300">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          className="rounded-full border border-primary/10 bg-white/82 px-3 py-1 text-xs font-semibold text-[#34445f] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProject ? (
        <div
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 grid place-items-center bg-primary/70 px-5 py-8 backdrop-blur-xl dark:bg-black/78"
          onClick={() => setSelectedProject(null)}
          role="dialog"
        >
          <div
            className="glass-panel max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[24px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-72 overflow-hidden rounded-t-[24px]">
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center"
                style={{ backgroundImage: selectedProject.visual }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.accent} opacity-35 mix-blend-screen`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <button
                aria-label="Close project details"
                className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/14 p-3 text-white backdrop-blur-md transition hover:bg-white/24"
                onClick={() => setSelectedProject(null)}
                type="button"
              >
                <FiX aria-hidden="true" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {selectedProject.category} Case Study
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl" id="project-modal-title">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
            <div className="grid gap-8 p-6 lg:grid-cols-[1fr_0.72fr] lg:p-8">
              <div>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {selectedProject.summary}
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                      Challenge
                    </p>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                      Outcome
                    </p>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>
              </div>
              <aside className="glass-panel rounded-[18px] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-2 text-2xl font-semibold text-primary dark:text-white">
                  {selectedProject.metric}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[selectedProject.category, ...selectedProject.secondaryCategories].map(
                    (category) => (
                      <span
                        className="rounded-full bg-secondary/14 px-3 py-1 text-xs font-semibold text-primary dark:text-secondary"
                        key={category}
                      >
                        {category}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      className="rounded-full border border-primary/10 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
