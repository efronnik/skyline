export interface NavItem {
  label: string
  to: string
}

export interface ContactField {
  label: string
  value: string
  href?: string
  placeholder: boolean
}

export interface SiteContact {
  phone: ContactField
  email: ContactField
  address: ContactField
  city: ContactField
  mapUrl: string
}

export interface ColorOption {
  id: string
  name: string
  value: string
}

export interface Product {
  slug: string
  name: string
  latin: string
  kicker: string
  summary: string
  description: string
  image: string
  gallery: string[]
  finishes: string[]
  openings: string[]
  heights: string[]
  colors: ColorOption[]
  features: string[]
  leaf: 'single' | 'double' | 'sliding' | 'glass'
}

export interface Project {
  slug: string
  title: string
  typology: string
  setting: string
  yearLabel: string
  product: string
  finish: string
  dimensions: string
  cover: string
  gallery: string[]
  story: string
  solution: string
  result: string
  isScenario: true
}

export interface Material {
  id: string
  name: string
  category: string
  summary: string
  image: string
  preview: string
  notes: string
}

export interface TechnicalStep {
  id: string
  index: string
  title: string
  text: string
}

export interface ProcessStep {
  index: string
  title: string
  text: string
}

export interface InquiryPayload {
  name: string
  phone: string
  email: string
  city: string
  objectType: string
  doorCount: string
  dimensions: string
  product: string
  finish: string
  timeline: string
  comment: string
  fileNames: string[]
}

export interface InquiryResult {
  ok: boolean
  mode: 'mock' | 'live'
  message: string
}
