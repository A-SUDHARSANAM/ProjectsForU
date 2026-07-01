import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { BrandLogo } from '../components/BrandLogo'
import { navItems } from '../services/siteContent'

export function Footer() {
  return (
    <footer className="future-shell border-t border-primary/10 text-primary dark:border-white/10 dark:text-white">
      <div className="absolute inset-0 bg-white/70 dark:bg-[#05070D]/92" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link
            className="inline-flex transition hover:-translate-y-0.5"
            to="/"
          >
            <BrandLogo variant="wordmark" className="h-12 w-60" />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[#4a5870] dark:text-slate-300">
            A technology product development company building fast, elegant, and
            reliable digital products for ambitious teams.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Company
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link className="text-[#4a5870] transition hover:text-secondary dark:text-slate-300" key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Connect
          </h2>
          <div className="mt-5 flex gap-3">
            {[FiLinkedin, FiTwitter, FiGithub].map((Icon, index) => (
              <a
                aria-label={`Social link ${index + 1}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/10 text-primary transition hover:border-secondary hover:text-secondary dark:border-white/10 dark:text-slate-200"
                href="/"
                key={String(index)}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#647189] dark:text-slate-400">
            © 2026 ProjectsforU. Built for product velocity.
          </p>
        </div>
      </div>
    </footer>
  )
}
