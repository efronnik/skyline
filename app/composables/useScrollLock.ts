export function useScrollLock(locked: Ref<boolean>) {
  watch(locked, (value) => {
    if (!import.meta.client) return
    document.body.classList.toggle('is-locked', value)
  })

  onUnmounted(() => {
    if (!import.meta.client) return
    document.body.classList.remove('is-locked')
  })
}
