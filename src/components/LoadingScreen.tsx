import { motion } from 'framer-motion'

import { BrandLogo } from './BrandLogo'

const orbitTransition = {
  duration: 5.5,
  ease: 'linear' as const,
  repeat: Infinity,
}

export function LoadingScreen() {
  return (
    <div className="future-shell grid min-h-screen place-items-center overflow-hidden bg-background px-5 text-primary dark:bg-slate-950 dark:text-white">
      <div className="circuit-grid absolute inset-0 opacity-30 dark:opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute h-96 w-96 rounded-full bg-secondary/14 blur-3xl dark:bg-secondary/10"
        animate={{ scale: [0.96, 1.08, 0.96], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        aria-label="Loading ProjectsforU"
        aria-live="polite"
        className="relative grid w-full max-w-xl place-items-center rounded-[28px] px-6 py-12 text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        role="status"
      >
        <div className="relative grid h-64 w-64 place-items-center sm:h-72 sm:w-72">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-primary/10 dark:border-white/10"
            animate={{ rotate: 360 }}
            transition={orbitTransition}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-5 rounded-full border border-dashed border-secondary/40"
            animate={{ rotate: -360 }}
            transition={{ ...orbitTransition, duration: 8 }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-12 rounded-full border border-accent/25"
            animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
          />
          {[0, 1, 2].map((index) => (
            <motion.span
              aria-hidden="true"
              className="absolute h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_24px_rgba(0,212,255,0.8)]"
              key={index}
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: `${index === 1 ? 78 : index === 2 ? 104 : 126}px center`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3.8 + index * 1.2,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          ))}
          <motion.div
            className="glass-panel premium-border relative grid h-36 w-36 place-items-center rounded-[26px] bg-white/88 p-4 shadow-2xl shadow-primary/10 dark:bg-slate-950/90 dark:shadow-black/40"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
          >
            <BrandLogo variant="symbol" className="h-20 w-20 rounded-[18px]" />
          </motion.div>
        </div>

        <div className="mt-1 grid justify-items-center">
          <BrandLogo
            variant="wordmark"
            className="h-14 w-72 max-w-full"
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Loading Experience
          </p>
          <div className="mt-6 h-1.5 w-64 max-w-full overflow-hidden rounded-full bg-primary/10 dark:bg-white/10">
            <motion.span
              className="block h-full rounded-full bg-gradient-to-r from-secondary via-cyan-300 to-accent"
              animate={{ x: ['-100%', '115%'] }}
              transition={{ duration: 1.45, ease: 'easeInOut', repeat: Infinity }}
              style={{ width: '55%' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
