export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const urls = [
    '/',
    '/products/prime-al-c',
    '/products/prime-al-c-inside',
    '/products/prime-al-ch',
    '/products/prime-al-ch-inside',
    '/projects/anfilade',
    '/projects/gallery',
    '/projects/cabinet',
    '/projects/bedroom',
    '/privacy',
    '/cookies'
  ]

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `  <url>
    <loc>${config.public.siteUrl}${path}</loc>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/product') ? '0.8' : '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`
})
