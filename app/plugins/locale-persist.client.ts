const VALID = ['ru', 'uk', 'es', 'en']
const KEY = 'limen-locale'

export default defineNuxtPlugin((nuxtApp) => {
  const locale = useState<string>('limen-locale-state')

  // Restore BEFORE Vue mounts — eliminates the Russian flash on SSG pages.
  // At this point Nuxt has already hydrated useState to 'ru' from the SSR
  // payload, but Vue hasn't attached to the DOM yet.  Changing the state here
  // means Vue's first client-side render uses the correct locale so the DOM
  // is patched immediately with the right language.
  nuxtApp.hook('app:beforeMount', () => {
    const saved = localStorage.getItem(KEY)
    if (saved && VALID.includes(saved) && saved !== locale.value) {
      locale.value = saved
      const cookie = useCookie('limen-locale')
      cookie.value = saved
    }
  })

  // Persist every subsequent change to localStorage
  watch(locale, (val) => {
    localStorage.setItem(KEY, val)
  })
})
