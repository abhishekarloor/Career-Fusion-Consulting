export function routePath(href: string) {
  if (!href) return '/'

  if (href.startsWith('#')) {
    // Return root-relative anchor path. Next.js <Link> prepends basePath automatically,
    // so do NOT include it here — double-prepending causes 404 on GitHub Pages.
    return `/${href}`
  }

  if (href.startsWith('/')) return href
  return `/${href}`
}
