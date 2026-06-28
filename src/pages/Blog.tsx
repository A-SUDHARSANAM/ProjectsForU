import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FiArrowRight, FiBookOpen, FiCpu, FiRadio, FiSearch, FiZap } from 'react-icons/fi'

import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'

const posts = [
  {
    title: 'How to scope a hardware MVP without overbuilding',
    category: 'Product Strategy',
    readTime: '6 min read',
    excerpt:
      'A practical method for separating demo-critical behavior from expensive feature surface area.',
    icon: FiBookOpen,
  },
  {
    title: 'What IoT prototypes need before field testing',
    category: 'IoT',
    readTime: '8 min read',
    excerpt:
      'Power, telemetry, alerts, enclosure thinking, and dashboards that prevent fragile pilots.',
    icon: FiRadio,
  },
  {
    title: 'Embedded systems checklist for student projects',
    category: 'Embedded',
    readTime: '5 min read',
    excerpt:
      'A clear readiness checklist covering sensors, firmware, wiring, debugging, and documentation.',
    icon: FiCpu,
  },
  {
    title: 'Using AI inside workflows instead of as a feature label',
    category: 'AI Systems',
    readTime: '7 min read',
    excerpt:
      'Where intelligence actually helps a technical workflow, and where product judgment still matters.',
    icon: FiZap,
  },
]

const topics = ['AI', 'IoT', 'Robotics', 'Embedded', 'Automation', 'CAD', '3D Printing']

export function Blog() {
  const [query, setQuery] = useState('')
  const [featuredPost, ...remainingPosts] = posts
  const FeaturedIcon = featuredPost.icon
  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase()

    if (!search) return remainingPosts

    return posts.filter((post) =>
      [post.title, post.category, post.excerpt].join(' ').toLowerCase().includes(search),
    )
  }, [query, remainingPosts])

  return (
    <>
      <SEO
        title="Blog | ProjectsforU"
        description="Read ProjectsforU insights on product strategy, robotics, IoT, embedded systems, AI, and prototype development."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Blog"
            title="Field notes for building better technology projects"
            description="Ideas from product strategy, engineering delivery, AI systems, and the operating details that make prototypes easier to trust."
          />

          <motion.article
            className="glass-panel premium-border grid gap-8 rounded-[28px] p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="relative min-h-72 overflow-hidden rounded-[24px] bg-primary p-6 text-white dark:bg-black">
              <div className="data-rain absolute inset-0 opacity-25" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-[16px] bg-secondary text-2xl text-primary">
                  <FeaturedIcon aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    Featured Insight
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">Prototype readiness starts before the first wire.</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {featuredPost.category} - {featuredPost.readTime}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#07111f] sm:text-5xl dark:text-white">
                {featuredPost.title}
              </h2>
              <p className="mt-5 leading-8 text-[#43516a] dark:text-slate-300">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8">
                <ButtonLink to="/contact">
                  Discuss this topic <FiArrowRight className="ml-2" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </motion.article>

          <div className="mt-14 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                className="glass-panel rounded-full px-4 py-2 text-sm font-semibold text-[#253248] dark:text-white"
                key={topic}
              >
                {topic}
              </span>
            ))}
          </div>

          <label className="glass-panel mt-8 flex min-h-12 items-center rounded-full px-4 text-[#253248] dark:text-white">
            <FiSearch className="mr-3 text-secondary" aria-hidden="true" />
            <input
              className="w-full bg-transparent outline-none placeholder:text-slate-400"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles by AI, IoT, robotics, embedded..."
              value={query}
            />
          </label>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {filteredPosts.map((post, index) => {
              const Icon = post.icon

              return (
                <motion.article
                  className="glass-panel micro-lift scanline rounded-[22px] p-6"
                  initial={{ opacity: 0, y: 22 }}
                  key={post.title}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-[14px] bg-primary text-xl text-secondary dark:bg-white dark:text-primary">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-[#647189] dark:text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    {post.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#142033] dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#4a5870] dark:text-slate-300">
                    {post.excerpt}
                  </p>
                </motion.article>
              )
            })}
          </div>
          {filteredPosts.length === 0 ? (
            <div className="glass-panel mt-10 rounded-[22px] p-8 text-center">
              <p className="font-semibold text-[#142033] dark:text-white">No articles found.</p>
              <p className="mt-2 text-[#4a5870] dark:text-slate-300">
                Try searching for IoT, AI, embedded, robotics, or automation.
              </p>
            </div>
          ) : null}

          <div className="glass-panel mt-16 flex flex-col gap-6 rounded-[28px] p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Need project guidance?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#07111f] dark:text-white">
                Turn an article idea into an actual build plan.
              </h2>
            </div>
            <ButtonLink to="/project-submission">Submit your brief</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
