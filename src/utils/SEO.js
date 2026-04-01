import { useEffect } from 'react'

const CANONICAL_ORIGIN = 'https://www.vesperion.com.br'

const normalizeOrigin = (url) => (url || CANONICAL_ORIGIN).replace(/\/$/, '')

const resolveImageUrl = (origin, image) => {
  if (!image) return ''
  if (/^https?:\/\//i.test(image)) return image
  const base = normalizeOrigin(origin)
  return `${base}${image.startsWith('/') ? '' : '/'}${image}`
}

const ensureTag = (tagName, attrs) => {
  const key = attrs.name
    ? `${tagName}[name="${attrs.name}"]`
    : attrs.property
      ? `${tagName}[property="${attrs.property}"]`
      : attrs.rel
        ? `${tagName}[rel="${attrs.rel}"]`
        : null

  let el = key ? document.head.querySelector(key) : null
  if (!el) {
    el = document.createElement(tagName)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  return el
}

const setMeta = (attrs, value) => {
  if (!value) return
  const el = ensureTag('meta', attrs)
  el.setAttribute('content', value)
}

const setLink = (attrs, href) => {
  if (!href) return
  const el = ensureTag('link', attrs)
  el.setAttribute('href', href)
}

const SEO = ({
  title = 'Vates Vesperion - Leituras Oraculares',
  description = 'Leituras oraculares. Descubra mensagens, orientações e reflexões através de Vates Vesperion.',
  image = '/hero-banner.png',
  url = CANONICAL_ORIGIN,
  type = 'website',
  canonical,
}) => {
  useEffect(() => {
    const origin = normalizeOrigin(url)
    const canonicalUrl = canonical ?? origin
    const imageUrl = resolveImageUrl(origin, image)

    document.title = title

    setMeta({ name: 'description' }, description)
    setMeta({ name: 'robots' }, 'index,follow')

    setLink({ rel: 'canonical' }, canonicalUrl)

    setMeta({ property: 'og:type' }, type)
    setMeta({ property: 'og:title' }, title)
    setMeta({ property: 'og:description' }, description)
    setMeta({ property: 'og:image' }, imageUrl)
    setMeta({ property: 'og:url' }, canonicalUrl)

    setMeta({ name: 'twitter:title' }, title)
    setMeta({ name: 'twitter:description' }, description)
    setMeta({ name: 'twitter:image' }, imageUrl)
    setMeta({ name: 'twitter:url' }, canonicalUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Vates Vesperion',
      description,
      url: canonicalUrl,
      image: imageUrl,
      author: {
        '@type': 'Person',
        name: 'Vates Vesperion',
      },
    }

    const existingScript = document.getElementById('structured-data')
    if (existingScript) existingScript.remove()

    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }, [title, description, image, url, type, canonical])

  return null
}

export default SEO