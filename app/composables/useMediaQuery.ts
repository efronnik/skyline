export function useMediaQuery(query: string) {
  const matches = ref(false)

  onMounted(() => {
    const media = window.matchMedia(query)
    const sync = () => {
      matches.value = media.matches
    }
    sync()
    media.addEventListener('change', sync)
    onUnmounted(() => media.removeEventListener('change', sync))
  })

  return matches
}
