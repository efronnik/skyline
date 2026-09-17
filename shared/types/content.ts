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
  instagram: {
    handle: string
    href: string
  }
}

export interface ColorOption {
  id: string
  value: string
}

export interface Product {
  slug: string
  image: string
  gallery: string[]
  colors: ColorOption[]
  leaf: 'single' | 'double' | 'sliding' | 'glass'
  ratio: string
  edge: 'silver' | 'black'
  swing: 'in' | 'out'
}

export interface Project {
  slug: string
  cover: string
  gallery: string[]
  ratio: string
  isScenario: true
}

export interface Material {
  id: string
  image: string
  preview: string
}

export interface TechnicalStep {
  id: string
  index: string
}

export interface InquiryPayload {
  name: string
  phone: string
  email: string
  message: string
}

export interface InquiryResult {
  ok: boolean
  mode: 'mock' | 'live'
  message: string
}
