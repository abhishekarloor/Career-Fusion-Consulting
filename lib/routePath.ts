export function routePath(href: string) {
  if (!href) return '/'

  if (href.startsWith('#')) {
    return `/${href}`
  }

  if (href.startsWith('/')) return href
  return `/${href}`
}
