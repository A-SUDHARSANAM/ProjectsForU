import { cn } from '../utils/cn'

type BrandLogoVariant = 'symbol' | 'wordmark' | 'header' | 'lockup'

type BrandLogoProps = {
  className?: string
  markClassName?: string
  tone?: 'auto' | 'light' | 'dark'
  variant?: BrandLogoVariant
  wordmarkClassName?: string
}

export function BrandLogo({
  className,
  markClassName,
  tone = 'auto',
  variant = 'lockup',
  wordmarkClassName,
}: BrandLogoProps) {
  if (variant === 'symbol') {
    return (
      <img
        alt="ProjectsforU"
        className={cn('h-10 w-10 object-contain', className)}
        decoding="async"
        src="/brand/logo-symbol.svg"
      />
    )
  }

  if (variant === 'wordmark') {
    if (tone === 'light') {
      return (
        <img
          alt="ProjectsforU"
          className={cn('h-12 w-56 object-contain', className)}
          decoding="async"
          src="/brand/logo-wordmark.svg"
        />
      )
    }

    if (tone === 'dark') {
      return (
        <img
          alt="ProjectsforU"
          className={cn('h-12 w-56 object-contain', className)}
          decoding="async"
          src="/brand/logo-wordmark-dark.svg"
        />
      )
    }

    return (
      <>
        <img
          alt="ProjectsforU"
          className={cn('h-12 w-56 object-contain dark:hidden', className)}
          decoding="async"
          src="/brand/logo-wordmark.svg"
        />
        <img
          alt="ProjectsforU"
          className={cn('hidden h-12 w-56 object-contain dark:block', className)}
          decoding="async"
          src="/brand/logo-wordmark-dark.svg"
        />
      </>
    )
  }

  if (variant === 'header') {
    if (tone === 'light') {
      return (
        <img
          alt="ProjectsforU"
          className={cn('h-11 w-52 object-contain', className)}
          decoding="async"
          src="/brand/logo-header.svg"
        />
      )
    }

    if (tone === 'dark') {
      return (
        <img
          alt="ProjectsforU"
          className={cn('h-11 w-52 object-contain', className)}
          decoding="async"
          src="/brand/logo-header-dark.svg"
        />
      )
    }

    return (
      <>
        <img
          alt="ProjectsforU"
          className={cn('h-11 w-52 object-contain dark:hidden', className)}
          decoding="async"
          src="/brand/logo-header.svg"
        />
        <img
          alt="ProjectsforU"
          className={cn('hidden h-11 w-52 object-contain dark:block', className)}
          decoding="async"
          src="/brand/logo-header-dark.svg"
        />
      </>
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img
        alt=""
        aria-hidden="true"
        className={cn('h-10 w-10 object-contain', markClassName)}
        decoding="async"
        src="/brand/logo-symbol.svg"
      />
      <span className={cn('relative h-10 w-44', wordmarkClassName)}>
        {tone !== 'dark' ? (
          <img
            alt="ProjectsforU"
            className={cn('h-full w-full object-contain', tone === 'auto' && 'dark:hidden')}
            decoding="async"
            src="/brand/logo-wordmark.svg"
          />
        ) : null}
        {tone !== 'light' ? (
          <img
            alt="ProjectsforU"
            className={cn('h-full w-full object-contain', tone === 'auto' && 'hidden dark:block')}
            decoding="async"
            src="/brand/logo-wordmark-dark.svg"
          />
        ) : null}
      </span>
    </span>
  )
}
