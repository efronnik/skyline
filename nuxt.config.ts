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
      { name: 'Newsreader', provider: 'google', weights: [300, 400, 500, 600], styles: ['normal', 'italic'] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] }
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
      // @nuxt/image on Vercel emits /_vercel/image URLs; they are not pages and 404 at build time
      ignore: ['/_vercel/**'],
      routes: [
        '/',
        '/products',
        '/products/plane',
        '/products/ceiling',
        '/products/pair',
        '/products/pocket',
        '/products/lumen',
        '/products/timber',
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
    '/products/**': { prerender: true },
    '/projects/**': { prerender: true },
    '/materials': { prerender: true },
    '/technology': { prerender: true },
    '/architects': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/privacy': { prerender: true },
    '/cookies': { prerender: true }
  }
})
