// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const repoBasePath = '/Career-Fusion-Consulting'
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH_DEPLOY?.trim() || ''

const nextConfig = {
  output: 'export',
  outputFileTracingRoot: __dirname,
  basePath: publicBasePath,
  assetPrefix: publicBasePath,
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
};

module.exports = nextConfig;