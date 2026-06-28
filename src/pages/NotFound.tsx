import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <section className="future-shell grid min-h-[70vh] place-items-center px-5 text-center">
      <SEO
        title="Page not found | ProjectsforU"
        description="The requested ProjectsforU page could not be found."
      />
      <div className="glass-panel max-w-2xl rounded-[28px] p-8">
        <p className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-primary dark:text-white">
          This page is off the roadmap.
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
          The route you opened does not exist, but the main site is ready for you.
        </p>
        <ButtonLink className="mt-8" to="/">
          Back home
        </ButtonLink>
      </div>
    </section>
  )
}
