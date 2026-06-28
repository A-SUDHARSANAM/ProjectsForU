import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { useTheme } from '../hooks/useTheme'
import { navItems, serviceNavItems } from '../services/siteContent'
import { cn } from '../utils/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const isServicesActive = pathname.startsWith('/services')

  return (
    <motion.header
      className={cn(
        'fixed left-0 right-0 top-0 z-40 px-3 pt-3 transition-colors duration-300 sm:px-5',
        scrolled
          ? 'bg-transparent'
          : 'bg-transparent',
      )}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <nav
        className={cn(
          'glass-panel mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-3 transition duration-300 sm:px-4 lg:px-5',
          scrolled && 'shadow-2xl shadow-primary/10 dark:shadow-black/40',
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-3 text-primary dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="premium-border grid h-10 w-10 place-items-center rounded-[12px] bg-primary text-sm font-black text-secondary shadow-lg shadow-primary/20 transition duration-300 group-hover:rotate-3 group-hover:shadow-secondary/25 dark:bg-white dark:text-primary">
            PU
          </span>
          <span className="text-lg font-bold tracking-tight">ProjectsforU</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-primary/10 bg-white/42 p-1 dark:border-white/10 dark:bg-white/[0.035] lg:flex">
          <NavLink className={desktopLinkClass} to="/">
            Home
          </NavLink>
          {navItems.map((item) => (
            item.label === 'Services' ? (
              <div
                className="relative"
                key={item.href}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    cn(desktopLinkBase, (isActive || isServicesActive) && activeDesktopLink)
                  }
                  to={item.href}
                >
                  Services
                  <FiChevronDown
                    aria-hidden="true"
                    className={cn('ml-1.5 transition duration-200', servicesOpen && 'rotate-180')}
                  />
                </NavLink>
                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="glass-panel absolute left-1/2 top-12 w-80 -translate-x-1/2 rounded-[16px] p-2"
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      {serviceNavItems.map((service) => (
                        <Link
                          className="group block rounded-[12px] px-4 py-3 transition hover:bg-secondary/10 dark:hover:bg-white/10"
                          key={service.label}
                          to={service.href}
                        >
                          <span className="block text-sm font-semibold text-primary transition group-hover:text-secondary dark:text-white">
                            {service.label}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                            Explore capability
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink className={desktopLinkClass} key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            className="glass-panel grid h-10 w-10 place-items-center rounded-full text-primary transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary dark:text-white"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <Link
            className="glass-panel hidden min-h-10 items-center rounded-full px-5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-secondary/60 hover:text-secondary dark:text-white md:inline-flex"
            to="/contact"
          >
            Free Consultation
          </Link>
          <Link
            className="scanline hidden min-h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-secondary hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-secondary sm:inline-flex"
            to="/contact"
          >
            Start Project
          </Link>
          <button
            aria-label="Toggle navigation"
            className="glass-panel grid h-10 w-10 place-items-center rounded-full text-primary lg:hidden dark:text-white"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 overflow-hidden rounded-[18px] border border-primary/10 bg-background/96 px-5 shadow-2xl shadow-primary/10 backdrop-blur-2xl lg:hidden dark:border-white/10 dark:bg-slate-950/96"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 py-5">
              <NavLink className={mobileLinkClass} to="/">
                Home
              </NavLink>
              {navItems.map((item) => (
                item.label === 'Services' ? (
                  <div key={item.href}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between rounded-[8px] px-3 py-3 text-left text-base font-semibold transition hover:bg-primary/5 dark:hover:bg-white/10',
                        isServicesActive ? 'text-secondary' : 'text-primary dark:text-white',
                      )}
                      onClick={() => setMobileServicesOpen((current) => !current)}
                      type="button"
                    >
                      Services
                      <FiChevronDown
                        aria-hidden="true"
                        className={cn('transition duration-200', mobileServicesOpen && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen ? (
                        <motion.div
                          animate={{ opacity: 1, height: 'auto' }}
                          className="overflow-hidden pl-3"
                          exit={{ opacity: 0, height: 0 }}
                          initial={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {serviceNavItems.map((service) => (
                            <Link
                              className="block rounded-[8px] px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-secondary/10 hover:text-secondary dark:text-slate-300"
                              key={service.label}
                              to={service.href}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink className={mobileLinkClass} key={item.href} to={item.href}>
                    {item.label}
                  </NavLink>
                )
              ))}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-secondary hover:text-primary dark:bg-secondary dark:text-primary"
                  to="/contact"
                >
                  Start Project
                </Link>
                <Link
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 px-5 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary dark:border-white/10 dark:bg-white/5 dark:text-white"
                  to="/contact"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

const desktopLinkBase =
  'group relative inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-[#34435a] transition hover:bg-white/70 hover:text-primary dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white'

const activeDesktopLink = 'bg-white text-primary shadow-sm shadow-primary/5 dark:bg-white/[0.12] dark:text-white'

function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return cn(desktopLinkBase, isActive && activeDesktopLink)
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    'rounded-[8px] px-3 py-3 text-base font-semibold text-primary transition hover:bg-primary/5 dark:text-white dark:hover:bg-white/10',
    isActive && 'text-secondary dark:text-secondary',
  )
}
