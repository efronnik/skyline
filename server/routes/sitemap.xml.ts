export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const urls = [
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
    '/cookies'
  ]

  setHeader(event, 'content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `  <url><loc>${config.public.siteUrl}${path}</loc></url>`).join('\n')}
</urlset>`
})
