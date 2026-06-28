import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { AmbientBackground } from '../components/AmbientBackground'
import { LoadingScreen } from '../components/LoadingScreen'
import { ScrollToTop } from '../components/ScrollToTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function GlobalLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-text antialiased dark:bg-slate-950 dark:text-white">
      <AmbientBackground />
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <main className="pt-20">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
