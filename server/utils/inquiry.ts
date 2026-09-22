import { Resend } from 'resend'
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

function buildHtml(payload: InquiryPayload): string {
  const rows = [
    ['Имя', payload.name],
    ['Телефон', payload.phone || '—'],
    ['Email', payload.email || '—'],
    ['Тип заявки', payload.intent],
    ['Сообщение', payload.message || '—'],
    ...(payload.company ? [['Компания', payload.company]] : []),
    ...(payload.taxId ? [['NIF/CIF', payload.taxId]] : []),
    ...(payload.legalAddress ? [['Адрес', payload.legalAddress]] : []),
    ...(payload.role ? [['Роль партнёра', payload.role]] : []),
  ] as [string, string][]

  const tableRows = rows.map(([label, value]) =>
    `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:6px 12px">${value}</td></tr>`
  ).join('')

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="background:#141210;color:#fff;padding:20px 24px;margin:0;font-size:18px">
        Новая заявка — iDOORS
      </h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e0dbd3">
        ${tableRows}
      </table>
      <p style="color:#999;font-size:12px;padding:12px">Отправлено с сайта idoors.es</p>
    </div>
  `
}

function buildSubject(payload: InquiryPayload): string {
  const map: Record<string, string> = {
    quote: 'Расчёт заказа',
    consult: 'Вопрос',
    partner: 'Партнёрская заявка',
  }
  return `[iDOORS] ${map[payload.intent] ?? 'Заявка'} — ${payload.name}`
}

export function createInquiryAdapter(mode: 'mock' | 'live'): InquiryAdapter {
  return {
    async submit(payload) {
      const errors = validate(payload)
      if (errors.length) {
        return { ok: false, mode, message: errors.join(' ') }
      }

      if (mode !== 'live') {
        return {
          ok: true,
          mode: 'mock',
          message: 'Форма принята в тестовом режиме. Resend ещё не подключён.'
        }
      }

      const config = useRuntimeConfig()
      const resend = new Resend(config.resendApiKey)

      const { error } = await resend.emails.send({
        from: 'iDOORS <onboarding@resend.dev>',
        to: config.inquiryTo,
        subject: buildSubject(payload),
        html: buildHtml(payload),
        replyTo: payload.email || undefined,
      })

      if (error) {
        console.error('[inquiry] Resend error:', error)
        return {
          ok: false,
          mode: 'live',
          message: 'Не удалось отправить письмо. Попробуйте ещё раз или напишите напрямую.'
        }
      }

      return {
        ok: true,
        mode: 'live',
        message: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
      }
    }
  }
}
