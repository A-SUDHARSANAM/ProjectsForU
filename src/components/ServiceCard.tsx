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
      className="group premium-border relative min-h-[27rem] overflow-hidden rounded-[22px] bg-slate-100 shadow-xl shadow-primary/10 transition duration-300 dark:bg-primary dark:shadow-black/30"
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-80 blur-[2px] brightness-110 saturate-[0.85] transition duration-700 group-hover:scale-[1.15] group-hover:opacity-90"
        decoding="async"
        height="360"
        loading="lazy"
        src={image}
        width="520"
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain p-3 brightness-[1.15] contrast-105 transition duration-700 group-hover:scale-[1.04]"
        decoding="async"
        height="360"
        loading="lazy"
        src={image}
        width="520"
      />
      <div className="absolute inset-0 bg-white/10 transition duration-500 group-hover:bg-white/5 dark:bg-black/20 dark:group-hover:bg-black/12" />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 mix-blend-multiply transition duration-500 group-hover:opacity-[0.06] dark:opacity-[0.14] dark:mix-blend-screen dark:group-hover:opacity-10`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.12)_48%,rgba(255,255,255,0.64)_100%)] dark:bg-[linear-gradient(180deg,rgba(7,17,31,0.04)_0%,rgba(7,17,31,0.18)_48%,rgba(7,17,31,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.2),transparent_0_32%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.12),transparent_0_28%)] opacity-60" />
      <div className="data-rain absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-10 dark:group-hover:opacity-20" />

      <div className="relative flex h-full min-h-[27rem] flex-col justify-end p-5">
        <div className="mb-auto flex items-center justify-between">
          <div className={`relative grid h-14 w-14 place-items-center rounded-[16px] bg-gradient-to-br ${gradient} text-2xl text-white shadow-lg shadow-black/20 ring-1 ring-white/25 backdrop-blur-sm`}>
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
          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.85)]" />
        </div>

        <div className="rounded-[18px] border border-primary/10 bg-white/76 p-5 shadow-2xl shadow-slate-950/[0.04] backdrop-blur-md transition duration-500 group-hover:bg-white/80 dark:border-white/18 dark:bg-black/40 dark:group-hover:bg-black/34">
          <h3 className="text-xl font-semibold tracking-tight text-primary dark:text-white">
            {title}
          </h3>
          <p className="mt-3 flex-1 leading-7 text-[#4a5870] dark:text-white/88">
            {description}
          </p>
          <Link
            className="mt-6 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/30 hover:bg-primary/10 dark:border-white/20 dark:bg-white/14 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/22"
            to={href}
          >
            {cta}
            <FiArrowRight
              className="ml-2 transition duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
