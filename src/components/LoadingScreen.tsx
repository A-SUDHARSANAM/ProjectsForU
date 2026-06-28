import { motion } from 'framer-motion'

import { BrandLogo } from './BrandLogo'

export function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-5 text-primary dark:bg-slate-950 dark:text-white">
      <motion.div
        className="glass-panel w-full max-w-3xl rounded-[28px] p-6"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3">
          <BrandLogo
            markClassName="h-11 w-11 rounded-[12px] shadow-lg shadow-primary/15"
            wordmarkClassName="h-10 w-48"
          />
        </div>
        <div className="mt-6 grid gap-4">
          <span className="h-8 animate-pulse rounded-full bg-primary/10 dark:bg-white/10" />
          <span className="h-24 animate-pulse rounded-[18px] bg-primary/10 dark:bg-white/10" />
          <div className="grid gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <span
                className="h-24 animate-pulse rounded-[18px] bg-primary/10 dark:bg-white/10"
                key={String(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
