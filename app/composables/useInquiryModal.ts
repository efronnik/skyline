import type { InquiryDraft } from '~/types/content'

export function useInquiryModal() {
  const isOpen = useState('inquiry-modal', () => false)
  const draft = useState<InquiryDraft>('inquiry-draft', () => ({
    message: '',
    intent: ''
  }))

  function open(opts?: Partial<InquiryDraft>) {
    draft.value = {
      message: opts?.message ?? '',
      intent: opts?.intent ?? ''
    }
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, draft, open, close }
}
