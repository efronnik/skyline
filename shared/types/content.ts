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

export interface MessengerLink {
  id: 'telegram' | 'whatsapp'
  href: string
  placeholder: boolean
}

export interface ColorOption {
  id: string
  value: string
}

export type ProductKind = 'base' | 'finish' | 'custom'
export type DoorSwing = 'in' | 'out'
export type EdgeTone = 'silver' | 'black'
export type LeafFinish = 'primer' | 'veneer' | 'mirror'
export type ExtraId = 'dropSeal' | 'sound' | 'closer' | 'spinoff'
export type LeafSizeId = '2000x600' | '2000x700' | '2000x800' | '2000x900'

export interface CatalogProduct {
  slug: string
  sku: string
  kind: ProductKind
  image: string
  gallery: string[]
  ratio: string
}

export interface ProductLook {
  slug: string
  image: string
  ratio: string
  edge: EdgeTone
  swing: DoorSwing
}

export interface Product {
  slug: string
  image: string
  gallery: string[]
  colors: ColorOption[]
  leaf: 'single' | 'double' | 'sliding' | 'glass'
  ratio: string
  edge: EdgeTone
  swing: DoorSwing
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

export type PartnerRole = 'dealer' | 'designer' | 'architect' | 'shop' | 'foreman'

export interface InquiryPayload {
  name: string
  phone: string
  email: string
  message: string
  config?: string
  intent?: 'quote' | 'consult' | 'partner' | ''
  role?: PartnerRole | ''
  company?: string
  taxId?: string
  legalAddress?: string
  city?: string
  country?: 'es' | 'pt' | ''
  position?: string
}

export interface InquiryResult {
  ok: boolean
  mode: 'mock' | 'live'
  message: string
}

export interface InquiryDraft {
  message: string
  intent: 'quote' | 'consult' | ''
}

export interface QuoteLine {
  id: string
  kind: ProductKind
  sku: string
  summary: string
  qty: number
}
