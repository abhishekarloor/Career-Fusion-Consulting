export function assetPath(relativePath: string) {
  const cleanedPath = relativePath.replace(/^\.\/*/, '').replace(/^\/+/, '')
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? ''

  if (!rawBasePath) {
    return `/${cleanedPath}`
  }

  const basePath = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`
  return `${basePath.replace(/\/$/, '')}/${cleanedPath}`
}
