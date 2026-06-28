import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { cn } from '../utils/cn'

type ButtonLinkProps = LinkProps & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'scanline group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-slate-950',
        variant === 'primary'
          ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-secondary'
          : 'glass-panel text-primary hover:-translate-y-0.5 hover:border-secondary/70 dark:text-white',
        className,
      )}
      {...props}
    >
      <span className="relative inline-flex items-center">{children}</span>
    </Link>
  )
}
