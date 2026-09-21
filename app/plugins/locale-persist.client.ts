const VALID = ['ru', 'uk', 'es', 'en']
const KEY = 'limen-locale'

export default defineNuxtPlugin(() => {
  const { locale, setLocale } = useLocale()

  // Restore from localStorage on first load
  const saved = localStorage.getItem(KEY)
  if (saved && VALID.includes(saved) && saved !== locale.value) {
    setLocale(saved as 'ru' | 'uk' | 'es' | 'en')
  }

  // Persist every change
  watch(locale, (val) => {
    localStorage.setItem(KEY, val)
  }, { immediate: true })
})
