export function useFocusTrap(container: Ref<HTMLElement | null>, active: Ref<boolean>) {
  function getFocusable() {
    if (!container.value) return []
    return Array.from(
      container.value.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(node => !node.hasAttribute('disabled') && node.tabIndex !== -1)
  }

  function onKey(event: KeyboardEvent) {
    if (!active.value || event.key !== 'Tab') return
    const nodes = getFocusable()
    if (!nodes.length) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  watch(active, async (value) => {
    if (!value) return
    await nextTick()
    getFocusable()[0]?.focus()
  })

  onMounted(() => {
    window.addEventListener('keydown', onKey)
    onUnmounted(() => window.removeEventListener('keydown', onKey))
  })
}
