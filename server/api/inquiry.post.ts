import { createInquiryAdapter } from '../utils/inquiry'
import type { InquiryPayload } from '#shared/types/content'

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  const raw = form?.find(part => part.name === 'payload')?.data.toString('utf-8') || '{}'
  const files = (form || [])
    .filter(part => part.name === 'files' && part.filename)
    .map(part => ({ name: part.filename || 'file' }))

  let payload: InquiryPayload
  try {
    payload = JSON.parse(raw) as InquiryPayload
  } catch {
    throw createError({ statusCode: 400, message: 'Некорректные данные формы.' })
  }

  const config = useRuntimeConfig()
  const mode = config.inquiryMode === 'live' ? 'live' : 'mock'
  const adapter = createInquiryAdapter(mode)
  return adapter.submit(payload, files)
})
