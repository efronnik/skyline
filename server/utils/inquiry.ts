import type { InquiryPayload, InquiryResult } from '#shared/types/content'

interface InquiryAdapter {
  submit(payload: InquiryPayload): Promise<InquiryResult>
}

function validate(payload: InquiryPayload) {
  const errors: string[] = []
  if (!payload.name.trim()) errors.push('Укажите имя.')
  if (!payload.phone.trim() && !payload.email.trim()) {
    errors.push('Укажите телефон или почту.')
  }
  if (payload.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push('Проверьте формат почты.')
  }
  if (payload.intent === 'partner') {
    if (!payload.company?.trim()) errors.push('Укажите компанию.')
    if (!payload.taxId?.trim()) errors.push('Укажите NIF/CIF.')
    if (!payload.legalAddress?.trim()) errors.push('Укажите юридический адрес.')
    if (!payload.role) errors.push('Укажите тип партнёра.')
  }
  return errors
}

export function createInquiryAdapter(mode: 'mock' | 'live'): InquiryAdapter {
  return {
    async submit(payload) {
      const errors = validate(payload)
      if (errors.length) {
        return {
          ok: false,
          mode,
          message: errors.join(' ')
        }
      }

      if (mode !== 'live') {
        return {
          ok: true,
          mode: 'mock',
          message: 'Форма принята в тестовом режиме. CRM ещё не подключена.'
        }
      }

      return {
        ok: false,
        mode: 'live',
        message: 'Живой канал отправки не настроен.'
      }
    }
  }
}
