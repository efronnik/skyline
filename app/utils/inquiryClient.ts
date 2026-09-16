import type { InquiryPayload, InquiryResult } from '~/types/content'

export async function submitInquiry(payload: InquiryPayload, files: File[]) {
  const body = new FormData()
  body.append('payload', JSON.stringify(payload))
  files.forEach((file) => body.append('files', file))

  return $fetch<InquiryResult>('/api/inquiry', {
    method: 'POST',
    body
  })
}
