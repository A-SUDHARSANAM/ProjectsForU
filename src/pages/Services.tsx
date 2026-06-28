import { SEO } from '../components/SEO'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../services/siteContent'

export function Services() {
  return (
    <>
      <SEO
        title="Services | ProjectsforU"
        description="Explore ProjectsforU services across electronics product development, robotics, IoT, embedded systems, AI, CAD design, 3D printing, and technical training."
      />
      <section className="future-shell px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Modern engineering services for real-world products"
            description="From circuit boards and embedded firmware to robotics, AI, CAD, and 3D-printed prototypes, ProjectsforU helps ideas become testable, usable technology."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
