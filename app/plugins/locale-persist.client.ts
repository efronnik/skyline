const VALID = ['ru', 'uk', 'es', 'en']
const KEY = 'limen-locale'

export default defineNuxtPlugin((nuxtApp) => {
  const locale = useState<string>('limen-locale-state')

  // Persist every change to localStorage
  watch(locale, (val) => {
    localStorage.setItem(KEY, val)
  })

  // Restore AFTER hydration is complete (so Vue doesn't suppress the update)
  nuxtApp.hook('app:mounted', () => {
    const saved = localStorage.getItem(KEY)
    if (saved && VALID.includes(saved) && saved !== locale.value) {
      locale.value = saved as string
      const cookie = useCookie('limen-locale')
      cookie.value = saved
    }
  })
})
