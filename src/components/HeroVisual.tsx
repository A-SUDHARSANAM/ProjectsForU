import { motion } from 'framer-motion'
import {
  FiActivity,
  FiBox,
  FiCpu,
  FiDatabase,
  FiRadio,
  FiZap,
} from 'react-icons/fi'

const dashboardMetrics = [
  { label: 'Signal', value: '98.7%', color: 'bg-secondary' },
  { label: 'Build', value: 'Ready', color: 'bg-emerald-400' },
  { label: 'Power', value: '12V', color: 'bg-accent' },
]

const floatingCards = [
  {
    title: 'PCB Design',
    value: 'Layer 04',
    icon: FiCpu,
    className: '-left-2 top-10 sm:-left-8',
  },
  {
    title: 'IoT Link',
    value: 'Online',
    icon: FiRadio,
    className: '-right-1 top-32 sm:-right-8',
  },
  {
    title: '3D Print',
    value: 'Prototype',
    icon: FiBox,
    className: 'bottom-8 left-4 sm:left-0',
  },
]

export function HeroVisual() {
  return (
    <motion.div
      className="home-hero-visual relative mx-auto aspect-[0.82] w-full max-w-[23rem] sm:aspect-[0.92] sm:max-w-[620px] lg:max-w-[700px]"
      initial={{ opacity: 0, y: 42, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        className="absolute inset-8 rounded-full border border-dashed border-secondary/30"
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        className="absolute inset-20 rounded-full border border-dashed border-accent/24"
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-4 rounded-full bg-[conic-gradient(from_180deg,rgba(0,212,255,0.18),rgba(57,255,182,0.12),rgba(255,122,26,0.16),rgba(0,212,255,0.18))] blur-2xl" />

      <motion.div
        animate={{ y: [0, -12, 0], rotateY: [-4, 5, -4], rotateX: [2, -1, 2] }}
        className="glass-panel premium-border absolute inset-x-3 top-8 overflow-hidden rounded-[22px] p-3 sm:inset-x-6 sm:top-14 sm:rounded-[28px] sm:p-4"
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="data-rain pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/34 to-transparent dark:from-white/10" />
        <div className="mb-3 flex items-start justify-between gap-3 sm:mb-5 sm:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#075fd6] sm:text-xs sm:tracking-[0.2em] dark:text-secondary">
              ProjectsforU OS
            </p>
            <h2 className="mt-1 text-base font-semibold text-[#253248] sm:text-lg dark:text-white">
              Spatial Build Console
            </h2>
          </div>
          <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/12 px-2.5 py-1 text-[0.68rem] font-semibold text-emerald-700 sm:px-3 sm:text-xs dark:text-emerald-400">
            Live stack
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {dashboardMetrics.map((metric, index) => (
            <motion.div
              className="rounded-[14px] border border-primary/10 bg-white/90 p-2 shadow-sm shadow-slate-950/5 sm:rounded-[16px] sm:p-3 dark:border-white/10 dark:bg-slate-950/52 dark:shadow-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              key={metric.label}
            >
              <span className={`mb-2 block h-1.5 w-8 rounded-full sm:mb-3 sm:w-10 ${metric.color}`} />
              <p className="text-xs font-medium text-[#647189] dark:text-slate-400">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-[#142033] sm:text-lg dark:text-white">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-2 sm:mt-4 sm:gap-3">
          <div className="rounded-[16px] border border-primary/10 bg-white/90 p-3 text-primary shadow-sm shadow-slate-950/5 sm:rounded-[18px] sm:p-4 dark:border-white/10 dark:bg-primary dark:text-white dark:shadow-none">
            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <FiActivity className="text-secondary" aria-hidden="true" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
                Sensor Stream
              </span>
            </div>
            <div className="flex h-16 items-end gap-1.5 sm:h-24 sm:gap-2">
              {[42, 68, 52, 86, 64, 92, 58, 78, 96].map((height, index) => (
                <motion.span
                  animate={{ height: [`${height - 18}%`, `${height}%`, `${height - 8}%`] }}
                  className="w-full rounded-t-full bg-secondary/80"
                  key={String(index)}
                  transition={{
                    duration: 1.6 + index * 0.08,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="relative rounded-[16px] border border-primary/10 bg-white/90 p-3 shadow-sm shadow-slate-950/5 sm:rounded-[18px] sm:p-4 dark:border-white/10 dark:bg-slate-950/52 dark:shadow-none">
            <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(90deg,rgba(0,200,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,200,255,0.1)_1px,transparent_1px)] bg-[size:18px_18px]" />
            <div className="relative grid h-full place-items-center">
              <motion.div
                animate={{ rotateX: [54, 64, 54], rotateZ: [45, 50, 45], scale: [1, 1.04, 1] }}
                className="relative h-16 w-16 rounded-[14px] border border-secondary/50 bg-white shadow-[0_22px_45px_rgba(7,95,214,0.18)] sm:h-24 sm:w-24 sm:rounded-[16px] dark:bg-primary dark:shadow-[0_22px_45px_rgba(0,212,255,0.32)]"
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="absolute left-4 top-4 h-3 w-3 rounded-full bg-secondary shadow-[0_0_18px_rgba(0,212,255,0.9)]" />
                <span className="absolute bottom-5 right-5 h-4 w-4 rounded-full bg-accent shadow-[0_0_18px_rgba(255,107,0,0.75)]" />
                <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border border-primary/15 bg-primary/5 dark:border-white/30 dark:bg-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {floatingCards.map((card, index) => {
        const Icon = card.icon

        return (
          <motion.div
            animate={{ y: [0, index % 2 === 0 ? 14 : -14, 0] }}
            className={`glass-panel absolute z-10 hidden min-w-40 rounded-[18px] p-4 sm:block ${card.className}`}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            key={card.title}
            transition={{
              duration: 4.8 + index * 0.35,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-[12px] bg-secondary/14 text-secondary dark:bg-white dark:text-primary">
              <Icon aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#647189] dark:text-slate-400">
              {card.title}
            </p>
            <p className="mt-1 text-lg font-semibold text-[#253248] dark:text-white">
              {card.value}
            </p>
          </motion.div>
        )
      })}

      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.9, 0.6] }}
        className="absolute bottom-10 right-12 hidden items-center gap-2 rounded-full border border-primary/10 bg-white/82 px-4 py-2 text-xs font-semibold text-primary shadow-xl shadow-secondary/10 backdrop-blur-xl sm:flex dark:border-white/40 dark:bg-primary/80 dark:text-white dark:shadow-secondary/20"
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiDatabase className="text-secondary" aria-hidden="true" />
        AI + Embedded pipeline
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        className="absolute bottom-24 right-24 hidden h-16 w-16 place-items-center rounded-full border border-secondary/40 bg-secondary/12 text-2xl text-secondary shadow-[0_0_42px_rgba(0,212,255,0.45)] backdrop-blur-xl sm:grid"
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiZap aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}
