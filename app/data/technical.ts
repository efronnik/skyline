import type { TechnicalStep } from '~/types/content'

export const technicalSteps: TechnicalStep[] = [
  { id: 'frame', index: '01' },
  { id: 'hinges', index: '02' },
  { id: 'leaf', index: '03' },
  { id: 'install', index: '04' },
  { id: 'finish', index: '05' }
]

export const processIndexes = ['01', '02', '03', '04', '05', '06'] as const

export const qualityDetails = [
  { id: 'gap', image: '/images/quality-gap.jpg', ratio: '3 / 4', position: 'center' },
  { id: 'hinge', image: '/images/quality-hinge.jpg', ratio: '3 / 4', position: 'center' },
  { id: 'handle', image: '/images/quality-handle.jpg', ratio: '3 / 4', position: 'center' }
]
