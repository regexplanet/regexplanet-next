/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/support/credits.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/tree/main?tab=readme-ov-file#credits',
        permanent: false,
      },
      {
        source: '/support/',
        destination: '/support/index.html',
        permanent: false,
      },
      {
        source: '/advanced/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/advanced/index.html',
        destination: '/',
        permanent: false,
      },
      {
        source: '/support/history.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/blob/main/CHANGELOG.md',
        permanent: false,
      }
      /* did not work: {
        source: '/advanced/:slug/',
        destination: '/advanced/:slug/index.html',
        permanent: false,
      }, */
    ]
  },};

export default nextConfig;
