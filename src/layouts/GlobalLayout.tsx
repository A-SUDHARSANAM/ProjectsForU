import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { AmbientBackground } from '../components/AmbientBackground'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { LoadingScreen } from '../components/LoadingScreen'
import { ScrollToTop } from '../components/ScrollToTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function GlobalLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-text antialiased dark:bg-slate-950 dark:text-white">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-secondary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary"
        href="#main-content"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <main className="pt-20" id="main-content">
          <Outlet />
        </main>
      </Suspense>
      <FloatingWhatsApp />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
