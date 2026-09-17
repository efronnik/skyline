export function useHashLink() {
  const route = useRoute()
  const reduced = useReducedMotion()
  const { open } = useInquiryModal()

  async function go(hash: string) {
    const id = hash.replace('#', '')
    if (id === 'contact') {
      open()
      return
    }
    if (route.path !== '/') {
      await navigateTo({ path: '/', hash: `#${id}` })
      return
    }
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: reduced.value ? 'auto' : 'smooth' })
    if (route.hash !== `#${id}`) history.replaceState(history.state, '', `#${id}`)
  }

  return { go }
}
