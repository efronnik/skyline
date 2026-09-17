import type { InquiryPayload, InquiryResult } from '~/types/content'

export function submitInquiry(payload: InquiryPayload) {
  return $fetch<InquiryResult>('/api/inquiry', {
    method: 'POST',
    body: payload
  })
}
