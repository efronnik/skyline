export function useParallax(strength = 42) {
  const el = ref<HTMLElement | null>(null)
  const offset = ref(0)
  const reduced = useReducedMotion()

  function update() {
    if (!el.value || reduced.value) {
      offset.value = 0
      return
    }
    const rect = el.value.getBoundingClientRect()
    const mid = rect.top + rect.height / 2
    const viewMid = window.innerHeight / 2
    offset.value = (mid - viewMid) * 0.22
    if (Math.abs(offset.value) > strength)
      offset.value = Math.sign(offset.value) * strength
  }

  onMounted(() => {
    let frame = 0
    function onScroll() {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onUnmounted(() => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })
  })

  const style = computed(() =>
    reduced.value
      ? undefined
      : { transform: `translate3d(0, ${offset.value.toFixed(1)}px, 0)` }
  )

  return { el, style }
}
