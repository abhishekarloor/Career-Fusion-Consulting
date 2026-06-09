export function routePath(href: string) {
  if (!href) return '/'

  if (href.startsWith('#')) {
    // Return the fragment as-is. Navigation is handled programmatically via
    // handleNavClick (scrollIntoView on homepage, window.location on sub-pages).
    return href
  }

  if (href.startsWith('/')) return href
  return `/${href}`
}
