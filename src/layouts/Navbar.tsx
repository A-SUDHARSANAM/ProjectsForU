import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiLock, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { BrandLogo } from '../components/BrandLogo'
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
  const visibleNavItems = navItems.filter((item) => item.label !== 'Submit Project')

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
          'premium-border relative mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 rounded-[26px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(248,250,252,0.88)_52%,rgba(239,246,255,0.82))] px-4 shadow-[0_18px_55px_rgba(7,17,31,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl transition duration-300 sm:px-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(8,14,27,0.92),rgba(11,18,32,0.86)_52%,rgba(4,11,22,0.92))] dark:shadow-[0_22px_70px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)]',
          scrolled && 'bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94)_52%,rgba(239,246,255,0.9))] shadow-[0_20px_70px_rgba(7,17,31,0.16),inset_0_1px_0_rgba(255,255,255,0.95)] dark:bg-[linear-gradient(135deg,rgba(8,14,27,0.96),rgba(11,18,32,0.92)_52%,rgba(4,11,22,0.96))]',
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-80"
        />
        <Link
          to="/"
          className="brand-logo-link group flex min-w-0 items-center text-primary dark:text-white"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            variant="wordmark"
            className="brand-logo-animated h-[3.25rem] w-60 transition duration-300 group-hover:scale-[1.02] sm:h-14 sm:w-[19rem] lg:w-72 xl:w-80"
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-primary/10 bg-white/88 p-1 shadow-inner shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none lg:flex">
          <NavLink className={desktopLinkClass} to="/">
            Home
          </NavLink>
          {visibleNavItems.map((item) => (
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
                      className="absolute left-1/2 top-12 w-[21.5rem] -translate-x-1/2 rounded-[16px] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/18 ring-1 ring-black/5 dark:border-white/10 dark:bg-[#0b1220] dark:shadow-black/55 dark:ring-white/10"
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      {serviceNavItems.map((service) => (
                        <Link
                          className="group grid grid-cols-[3.25rem_1fr] items-center gap-3 rounded-[12px] px-3 py-3 transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-white/[0.08] dark:focus:bg-white/[0.08]"
                          key={service.label}
                          to={service.href}
                        >
                          {service.image ? (
                            <span className="grid h-12 w-12 place-items-center rounded-[12px] border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.06]">
                              <img
                                alt=""
                                aria-hidden="true"
                                className="h-10 w-10 object-contain transition duration-300 group-hover:scale-110"
                                decoding="async"
                                loading="lazy"
                                src={service.image}
                              />
                            </span>
                          ) : null}
                          <span>
                            <span className="block text-sm font-semibold text-primary transition group-hover:text-secondary dark:text-white">
                              {service.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-300">
                              {service.description ?? 'Explore capability'}
                            </span>
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
          <Link
            aria-label="Admin login"
            className="glass-panel grid h-10 w-10 place-items-center rounded-full text-primary transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary dark:text-white"
            title="Admin login"
            to="/admin"
          >
            <FiLock aria-hidden="true" />
          </Link>
          <button
            aria-label="Toggle dark mode"
            className="glass-panel grid h-10 w-10 place-items-center rounded-full text-primary transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary dark:text-white"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
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
              {visibleNavItems.map((item) => (
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
                              className="flex items-center gap-3 rounded-[8px] px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-secondary/10 hover:text-secondary dark:text-slate-300"
                              key={service.label}
                              to={service.href}
                            >
                              {service.image ? (
                                <img
                                  alt=""
                                  aria-hidden="true"
                                  className="h-8 w-8 object-contain"
                                  decoding="async"
                                  loading="lazy"
                                  src={service.image}
                                />
                              ) : null}
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
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 px-5 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary dark:border-white/10 dark:bg-white/5 dark:text-white"
                  to="/admin"
                >
                  <FiLock className="mr-2" aria-hidden="true" />
                  Admin Login
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
