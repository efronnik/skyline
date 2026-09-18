import type { NavItem, SiteContact } from '~/types/content'

export const site = {
  name: 'LIMEN',
  legalName: 'LIMEN',
  taglineKey: 'hero.title',
  descriptionKey: 'seo.homeDesc',
  url: 'https://limen.example',
  locale: 'ru_RU'
} as const

export const contact: SiteContact = {
  phone: {
    label: 'Телефон',
    value: '',
    href: '',
    placeholder: true
  },
  email: {
    label: 'Почта',
    value: 'studio@limen.example',
    href: 'mailto:studio@limen.example',
    placeholder: true
  },
  address: {
    label: 'Адрес',
    value: '',
    href: '',
    placeholder: true
  },
  city: {
    label: 'География',
    value: 'Выезд на объект — по проекту',
    placeholder: true
  },
  mapUrl: '',
  instagram: {
    handle: '@idoors.es',
    href: 'https://www.instagram.com/idoors.es/'
  }
}

export const primaryNav: NavItem[] = [
  { label: 'collection', to: '#collection' },
  { label: 'finished', to: '#finished' },
  { label: 'size', to: '#size' },
  { label: 'hardware', to: '#hardware' }
]

export const footerNav: NavItem[] = [
  { label: 'contact', to: '#contact' },
  { label: 'privacyNav', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' }
]
