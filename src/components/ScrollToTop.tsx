import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 520)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      aria-label="Scroll to top"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-primary/90 text-white shadow-2xl shadow-primary/25 backdrop-blur transition duration-300 hover:bg-secondary hover:text-primary dark:border-white/10 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}
