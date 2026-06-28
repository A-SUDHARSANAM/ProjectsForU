import { useEffect } from 'react'

import type { SeoConfig } from '../types/site'

const siteUrl = import.meta.env.VITE_SITE_URL ?? window.location.origin
const defaultImage = '/brand/logo-badge.svg'

export function SEO({ description, image = defaultImage, noIndex = false, title }: SeoConfig) {
  useEffect(() => {
    const canonicalUrl = new URL(window.location.pathname, siteUrl).toString()
    const imageUrl = new URL(image, siteUrl).toString()

    document.title = title

    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('property', 'og:site_name', 'ProjectsforU')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', imageUrl)
    setCanonical(canonicalUrl)
  }, [description, image, noIndex, title])

  return null
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.content = content
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }

  link.href = href
}
