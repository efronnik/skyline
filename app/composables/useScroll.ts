const y = ref(0)

export function useScroll() {
  function onScroll() {
    y.value = window.scrollY
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })

  return { y }
}
