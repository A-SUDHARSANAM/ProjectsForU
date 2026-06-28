import { useEffect } from 'react'

export function AmbientBackground() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0

    function handlePointerMove(event: PointerEvent) {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        const x = `${Math.round((event.clientX / window.innerWidth) * 100)}%`
        const y = `${Math.round((event.clientY / window.innerHeight) * 100)}%`
        root.style.setProperty('--spot-x', x)
        root.style.setProperty('--spot-y', y)
        animationFrame = 0
      })
    }

    if (prefersReducedMotion) return undefined

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 ambient-grid opacity-55 dark:opacity-35" />
      <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-secondary/18 blur-3xl" />
      <div className="absolute right-[4%] top-[16%] h-80 w-80 rounded-full bg-accent/14 blur-3xl" />
      <div className="absolute bottom-[4%] left-[30%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="spotlight-mask absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,30%),rgba(255,255,255,0.52),transparent_34rem)] dark:bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,30%),rgba(0,212,255,0.12),transparent_34rem)]" />
    </div>
  )
}
