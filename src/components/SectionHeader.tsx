type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({ description, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#0b1526] sm:text-5xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#43516a] dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}
