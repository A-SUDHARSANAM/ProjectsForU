type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeader({ description, eyebrow, title, tone = 'light' }: SectionHeaderProps) {
  const isDarkSurface = tone === 'dark'

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-5xl ${
        isDarkSurface ? 'text-white' : 'text-[#0b1526] dark:text-white'
      }`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 ${
        isDarkSurface ? 'text-slate-300' : 'text-[#43516a] dark:text-slate-300'
      }`}>
        {description}
      </p>
    </div>
  )
}
