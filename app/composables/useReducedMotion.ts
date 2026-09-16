export function useReducedMotion() {
  const reduced = ref(false)

  function sync() {
    reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  onMounted(() => {
    sync()
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    media.addEventListener('change', sync)
    onUnmounted(() => media.removeEventListener('change', sync))
  })

  return reduced
}
