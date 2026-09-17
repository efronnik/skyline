import { createInquiryAdapter } from '../utils/inquiry'
import type { InquiryPayload } from '#shared/types/content'

export default defineEventHandler(async (event) => {
  let payload: InquiryPayload
  try {
    payload = await readBody<InquiryPayload>(event)
  } catch {
    throw createError({ statusCode: 400, message: 'Некорректные данные формы.' })
  }

  const config = useRuntimeConfig()
  const mode = config.inquiryMode === 'live' ? 'live' : 'mock'
  const adapter = createInquiryAdapter(mode)
  return adapter.submit(payload)
})
