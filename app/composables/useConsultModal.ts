export function useConsultModal() {
  const isOpen = useState('consult-modal', () => false)
  const payload = useState('consult-payload', () => '')

  function open(message = '') {
    payload.value = message
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, payload, open, close }
}
