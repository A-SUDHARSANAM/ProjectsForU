import { PortfolioShowcase } from '../components/PortfolioShowcase'
import { SEO } from '../components/SEO'

export function Work() {
  return (
    <>
      <SEO
        title="Portfolio | ProjectsforU"
        description="Explore ProjectsforU case-study projects across AI, IoT, robotics, embedded systems, and automation."
      />
      <PortfolioShowcase />
    </>
  )
}
