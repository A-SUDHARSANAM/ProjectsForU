import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'

const principles = [
  'Product strategy before feature volume',
  'Design systems that reduce future drag',
  'Architecture that leaves room for growth',
  'Clear communication from kickoff to launch',
]

export function About() {
  return (
    <>
      <SEO
        title="About | ProjectsforU"
        description="Learn about ProjectsforU, a technology product development company for startups and enterprise teams."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="About"
            title="A product development company for ambitious teams"
            description="ProjectsforU blends product leadership, interaction design, frontend engineering, backend systems, cloud architecture, and launch operations into one focused delivery partner."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[24px] bg-primary p-8 text-white shadow-2xl shadow-primary/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Our point of view
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                Great products are designed as systems, not assembled as pages.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We care about the small details users feel, the architecture
                operators rely on, and the business outcomes that make the
                product worth building.
              </p>
              <ButtonLink className="mt-8" to="/contact">
                Work with us
              </ButtonLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  className="glass-panel micro-lift rounded-[20px] p-6"
                  key={principle}
                >
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    {principle}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    Practical decisions, clean execution, and a production mindset
                    turn complex ideas into durable software.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
