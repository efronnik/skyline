export default defineNuxtPlugin(() => {
  const { htmlLang } = useLocale()
  useHead({
    htmlAttrs: {
      lang: htmlLang
    }
  })
})
