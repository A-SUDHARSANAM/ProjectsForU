import { useMemo, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'

import { testimonials } from '../services/siteContent'
import type { Testimonial } from '../types/site'

const categories = ['All', 'Students', 'Startups', 'Industry Clients'] as const

type ActiveCategory = (typeof categories)[number]

function avatarFor(testimonial: Testimonial) {
  const initials = testimonial.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${testimonial.avatarTone}" />
          <stop offset="1" stop-color="#0B1F3A" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill="url(#g)" />
      <circle cx="72" cy="24" r="18" fill="rgba(255,255,255,0.18)" />
      <text x="50%" y="56%" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="700">${initials}</text>
    </svg>
  `

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function matchesCategory(testimonial: Testimonial, category: ActiveCategory) {
  return category === 'All' || testimonial.category === category
}

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('All')

  const filteredTestimonials = useMemo(
    () => testimonials.filter((testimonial) => matchesCategory(testimonial, activeCategory)),
    [activeCategory],
  )

  const sliderItems = [...filteredTestimonials, ...filteredTestimonials]

  return (
    <section className="future-shell relative overflow-hidden px-5 py-20 text-slate-900 sm:px-6 lg:px-8 dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F7F8FB,#EEF2F7_56%,#E2E8F0)] dark:bg-[linear-gradient(135deg,#07111F,#06111f_56%,#020617)]" />
      <div className="circuit-grid absolute inset-0 opacity-35 dark:opacity-25" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#07111f] sm:text-5xl dark:text-white">
              Trusted by learners, founders, and industry teams
            </h2>
            <p className="mt-5 text-base leading-8 text-[#34445f] dark:text-slate-300">
              Real feedback from people who needed dependable technical execution,
              clear communication, and a prototype they could proudly demonstrate.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'border-secondary bg-secondary text-white shadow-lg shadow-secondary/20 dark:text-primary'
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

        <div className="relative -mx-5 overflow-hidden px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F8FB] to-transparent dark:from-[#07111F]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#E2E8F0] to-transparent dark:from-[#020617]" />
          <div className="group flex overflow-hidden py-2">
            <div className="flex min-w-max animate-testimonial-scroll gap-5 pr-5 group-hover:[animation-play-state:paused]">
              {sliderItems.map((testimonial, index) => (
                <article
                  className="glass-panel w-[min(84vw,22rem)] rounded-[22px] p-5 text-primary transition duration-300 hover:-translate-y-1 hover:border-secondary/40 sm:w-[25rem] dark:text-white"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        alt={`${testimonial.name} profile`}
                        className="h-14 w-14 rounded-[16px] border border-primary/10 object-cover shadow-lg shadow-slate-950/[0.04] dark:border-white/20 dark:shadow-black/20"
                        decoding="async"
                        loading="lazy"
                        src={avatarFor(testimonial)}
                      />
                      <div>
                        <h3 className="font-semibold text-[#07111f] dark:text-white">{testimonial.name}</h3>
                        <p className="mt-1 text-sm leading-5 text-[#52627a] dark:text-slate-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-secondary/20 bg-secondary/12 p-2 text-secondary">
                      <FiMessageCircle aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 flex gap-1 text-amber-300" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <FaStar key={String(starIndex)} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-5 min-h-36 text-base leading-8 text-[#34445f] dark:text-slate-300">
                    "{testimonial.review}"
                  </p>
                  <div className="mt-6 inline-flex rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary dark:border-white/10 dark:bg-white/[0.07]">
                    {testimonial.category}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
