import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-background text-primary dark:bg-slate-950 dark:text-white">
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <span className="h-4 w-4 rounded-full bg-secondary shadow-[0_0_32px_rgba(0,200,255,0.9)]" />
        <span className="text-sm font-semibold uppercase tracking-[0.24em]">
          ProjectsforU
        </span>
      </motion.div>
    </div>
  )
}
