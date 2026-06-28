import { useEffect } from 'react'

import type { SeoConfig } from '../types/site'

export function SEO({ title, description }: SeoConfig) {
  useEffect(() => {
    document.title = title

    const descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (descriptionTag) {
      descriptionTag.content = description
      return
    }

    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = description
    document.head.appendChild(meta)
  }, [description, title])

  return null
}
