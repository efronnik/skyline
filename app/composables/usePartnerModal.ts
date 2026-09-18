export function usePartnerModal() {
  const isOpen = useState('partner-modal', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, open, close }
}
