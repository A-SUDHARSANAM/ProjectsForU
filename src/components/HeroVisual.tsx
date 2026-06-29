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
      className="relative mx-auto aspect-[0.92] w-full max-w-[620px] lg:max-w-[700px]"
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
        className="glass-panel premium-border absolute inset-x-6 top-14 overflow-hidden rounded-[28px] p-4"
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="data-rain pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/34 to-transparent dark:from-white/10" />
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075fd6] dark:text-secondary">
              ProjectsforU OS
            </p>
            <h2 className="mt-1 text-lg font-semibold text-[#253248] dark:text-white">
              Spatial Build Console
            </h2>
          </div>
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            Live stack
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {dashboardMetrics.map((metric, index) => (
            <motion.div
              className="rounded-[16px] border border-primary/10 bg-white/90 p-3 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-slate-950/52 dark:shadow-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              key={metric.label}
            >
              <span className={`mb-3 block h-1.5 w-10 rounded-full ${metric.color}`} />
              <p className="text-xs font-medium text-[#647189] dark:text-slate-400">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-[#142033] dark:text-white">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-[18px] border border-primary/10 bg-primary p-4 text-white dark:border-white/10">
            <div className="mb-4 flex items-center gap-2">
              <FiActivity className="text-secondary" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Sensor Stream
              </span>
            </div>
            <div className="flex h-24 items-end gap-2">
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
          <div className="relative rounded-[18px] border border-primary/10 bg-white/90 p-4 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-slate-950/52 dark:shadow-none">
            <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(90deg,rgba(0,200,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,200,255,0.1)_1px,transparent_1px)] bg-[size:18px_18px]" />
            <div className="relative grid h-full place-items-center">
              <motion.div
                animate={{ rotateX: [54, 64, 54], rotateZ: [45, 50, 45], scale: [1, 1.04, 1] }}
                className="relative h-24 w-24 rounded-[16px] border border-secondary/50 bg-primary shadow-[0_22px_45px_rgba(0,212,255,0.32)]"
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="absolute left-4 top-4 h-3 w-3 rounded-full bg-secondary shadow-[0_0_18px_rgba(0,212,255,0.9)]" />
                <span className="absolute bottom-5 right-5 h-4 w-4 rounded-full bg-accent shadow-[0_0_18px_rgba(255,107,0,0.75)]" />
                <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border border-white/30 bg-white/10" />
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
            className={`glass-panel absolute z-10 min-w-40 rounded-[18px] p-4 ${card.className}`}
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
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-[12px] bg-primary text-secondary dark:bg-white dark:text-primary">
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
        className="absolute bottom-10 right-12 hidden items-center gap-2 rounded-full border border-white/40 bg-primary/80 px-4 py-2 text-xs font-semibold text-white shadow-xl shadow-secondary/20 backdrop-blur-xl sm:flex"
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiDatabase className="text-secondary" aria-hidden="true" />
        AI + Embedded pipeline
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        className="absolute bottom-24 right-24 grid h-16 w-16 place-items-center rounded-full border border-secondary/40 bg-secondary/12 text-2xl text-secondary shadow-[0_0_42px_rgba(0,212,255,0.45)] backdrop-blur-xl"
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiZap aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}
