export function routePath(href: string) {
  if (!href) return '/'
  // Keep hash links and absolute paths as-is; Next will apply `basePath` at build time
  if (href.startsWith('#')) return href
  if (href.startsWith('/')) return href
  // Normalize relative paths to start with '/'
  return `/${href}`
}
