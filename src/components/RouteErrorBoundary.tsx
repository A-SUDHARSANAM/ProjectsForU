import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

import { ButtonLink } from './ButtonLink'
import { SEO } from './SEO'

export function RouteErrorBoundary() {
  const error = useRouteError()
  const status = isRouteErrorResponse(error) ? error.status : 500
  const title = status === 404 ? 'Page not found' : 'Something went wrong'
  const message =
    status === 404
      ? 'The page you requested could not be found.'
      : 'The application hit an unexpected state. You can return home and continue browsing.'

  return (
    <main className="future-shell grid min-h-screen place-items-center px-5 py-20 text-primary dark:text-white">
      <SEO
        title={`${title} | ProjectsforU`}
        description="ProjectsforU application error page."
        noIndex
      />
      <section className="glass-panel premium-border max-w-2xl rounded-[28px] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
          Error {status}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
          {message}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/">Return Home</ButtonLink>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 bg-white/70 px-6 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary dark:border-white/15 dark:bg-white/5 dark:text-white"
            to="/contact"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  )
}
