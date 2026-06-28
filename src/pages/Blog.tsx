import { ButtonLink } from '../components/ButtonLink'
import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'

const posts = [
  {
    title: 'How to scope an MVP without underbuilding the business',
    category: 'Product',
    excerpt:
      'A practical way to separate launch-critical product depth from expensive surface area.',
  },
  {
    title: 'What modern SaaS dashboards need before scale',
    category: 'Engineering',
    excerpt:
      'Reliability, permissions, observability, and interface patterns that prevent future drag.',
  },
  {
    title: 'Using AI inside workflows instead of as a feature label',
    category: 'AI Systems',
    excerpt:
      'Where automation actually helps teams move faster, and where product judgment still matters.',
  },
]

export function Blog() {
  return (
    <>
      <SEO
        title="Blog | ProjectsforU"
        description="Read ProjectsforU insights on product strategy, SaaS engineering, AI systems, and launch-ready technology."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Blog"
            title="Field notes for building better technology products"
            description="Ideas from product strategy, engineering delivery, AI systems, and the operating details that make software last."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                className="glass-panel micro-lift scanline rounded-[22px] p-6"
                key={post.title}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {post.category}
                </p>
                <h2 className="mt-5 text-2xl font-semibold text-primary dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/contact">Talk through your build</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
