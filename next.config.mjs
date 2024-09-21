/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
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
      /*
      {
        source: '/advanced/javascript/',
        destination: '/support/javascript.html',
        permanent: false,
      },
      {
        source: '/advanced/javascript/index.html',
        destination: '/support/javascript.html',
        permanent: false,
      },
      */
      {
        source: '/support/',
        destination: '/support/index.html',
        permanent: false,
      },
      {
        source: '/support/api.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/blob/main/CONTRIBUTING.md#backend-api',
        permanent: false,
      },
      {
        source: '/support/credits.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/tree/main?tab=readme-ov-file#credits',
        permanent: false,
      },
      {
        source: '/support/engines.html',
        destination: '/status.html',
        permanent: false,
      },
      {
        source: '/support/history.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/blob/main/CHANGELOG.md',
        permanent: false,
      },
      {
        source: '/support/license.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/blob/main/LICENSE.txt',
        permanent: false,
      },
      {
        source: '/support/privacy.html',
        destination: '/legal/privacy.html',
        permanent: false,
      },
      {
        source: '/support/terms.html',
        destination: '/legal/terms.html',
        permanent: false,
      },
      {
        source: '/support/todo.html',
        destination: 'https://github.com/regexplanet/regexplanet-next/blob/main/TODO.md',
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
