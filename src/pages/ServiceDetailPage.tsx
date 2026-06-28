import { useParams } from 'react-router-dom'

import { SEO } from '../components/SEO'
import { ServiceDetail } from '../components/ServiceDetail'
import { getAdjacentServices, getServiceBySlug } from '../services/services'
import { NotFound } from './NotFound'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <NotFound />

  const { next, previous } = getAdjacentServices(slug)

  return (
    <>
      <SEO title={service.seoTitle} description={service.seoDescription} />
      <ServiceDetail service={service} previous={previous} next={next} />
    </>
  )
}
