export function assetPath(relativePath: string) {
  const cleanedPath = relativePath.replace(/^\.\/*/, '').replace(/^\/+/, '')
  const repoBasePath = '/Career-Fusion-Consulting'
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || (process.env.NODE_ENV === 'development' ? '' : repoBasePath)

  if (!rawBasePath) {
    return `/${cleanedPath}`
  }

  const basePath = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`
  return `${basePath.replace(/\/$/, '')}/${cleanedPath}`
}
