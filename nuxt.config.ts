export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  css: ['~/assets/styles/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  fonts: {
    families: [
      { name: 'Syne', provider: 'google', weights: [500, 600, 700, 800] },
      { name: 'Newsreader', provider: 'google', weights: [300, 400, 500, 600], styles: ['normal', 'italic'] }
    ]
  },
  image: {
    quality: 78,
    format: ['webp']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#e4e0d7' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  runtimeConfig: {
    inquiryMode: 'mock',
    public: {
      siteUrl: 'https://limen.example',
      siteName: 'LIMEN'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      // Nitro ignore is startsWith (not glob). Vercel Image URLs are runtime-only.
      ignore: ['/_vercel/image'],
      routes: [
        '/',
        '/products',
        '/products/prime-base',
        '/products/prime-finish',
        '/products/prime-custom',
        '/projects',
        '/projects/anfilade',
        '/projects/gallery',
        '/projects/cabinet',
        '/projects/bedroom',
        '/materials',
        '/technology',
        '/architects',
        '/about',
        '/contact',
        '/privacy',
        '/cookies',
        '/robots.txt',
        '/sitemap.xml'
      ]
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/products/prime-al': { redirect: { to: '/products/prime-base', statusCode: 301 } },
    '/products/**': { prerender: true },
    '/projects/**': { prerender: true },
    '/materials': { prerender: true },
    '/technology': { prerender: true },
    '/architects': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/privacy': { prerender: true },
    '/cookies': { prerender: true },
    '/_vercel/image/**': { prerender: false }
  }
})
