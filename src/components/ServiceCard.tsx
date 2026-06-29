import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Service } from '../types/site'

export function ServiceCard({
  cta,
  description,
  gradient,
  href,
  icon: Icon,
  image,
  title,
}: Service) {
  return (
    <motion.article
      className="group premium-border relative overflow-hidden rounded-[22px] bg-gradient-to-br p-px shadow-xl shadow-primary/5 transition duration-300 dark:shadow-black/25"
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.32] transition duration-500 group-hover:opacity-[0.52] dark:opacity-50 dark:group-hover:opacity-100`} />
      <div className="data-rain absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-10 dark:group-hover:opacity-20" />
      <div className="glass-panel relative flex h-full flex-col rounded-[22px] p-6">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 h-28 w-28 object-contain opacity-12 saturate-150 transition duration-500 group-hover:scale-110 group-hover:opacity-20 dark:opacity-22 dark:group-hover:opacity-28"
          decoding="async"
          loading="lazy"
          src={image}
        />
        <div className="mb-7 flex items-center justify-between">
          <div className={`relative grid h-14 w-14 place-items-center rounded-[16px] bg-gradient-to-br ${gradient} text-2xl text-white shadow-lg shadow-primary/15`}>
            <Icon aria-hidden="true" />
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-55"
              fill="none"
              viewBox="0 0 56 56"
            >
              <path
                d="M10 18H22L28 28H46M10 38H20L26 28M34 12V22M40 34V44"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_rgba(0,200,255,0.9)]" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-[#142033] dark:text-white">
          {title}
        </h3>
        <p className="mt-3 flex-1 leading-7 text-[#34445f] dark:text-slate-300">
          {description}
        </p>
        <Link
          className="mt-7 inline-flex items-center text-sm font-semibold text-primary transition hover:text-secondary dark:text-white dark:hover:text-secondary"
          to={href}
        >
          {cta}
          <FiArrowRight
            className="ml-2 transition duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  )
}
