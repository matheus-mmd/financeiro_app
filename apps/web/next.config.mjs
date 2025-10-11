import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

const config = withPWA({
  dest: 'public',
  disable: !isProd,
  register: true,
  skipWaiting: true
})({
  experimental: {
    instrumentationHook: true
  },
  output: 'standalone',
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR'
  }
});

export default config;
