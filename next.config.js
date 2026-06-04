// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Add this line
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
};

module.exports = nextConfig;