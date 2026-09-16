export function useReveal(options?: { rootMargin?: string }) {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)
  const reduced = useReducedMotion()

  onMounted(() => {
    if (!el.value || reduced.value) {
      visible.value = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { rootMargin: options?.rootMargin ?? '0px 0px -12% 0px', threshold: 0.12 }
    )

    observer.observe(el.value)
    onUnmounted(() => observer.disconnect())
  })

  return { el, visible }
}
