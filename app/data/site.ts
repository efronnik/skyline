import type { MessengerLink, NavItem, SiteContact } from '~/types/content'

export const site = {
  name: 'iDOORS',
  legalName: 'iDOORS',
  taglineKey: 'hero.title',
  descriptionKey: 'seo.homeDesc',
  url: 'https://idoors.es',
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
    value: 'ventas@idoors.es',
    href: 'mailto:ventas@idoors.es',
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

export const messengers: MessengerLink[] = [
  { id: 'telegram', href: '', placeholder: true },
  { id: 'whatsapp', href: '', placeholder: true }
]

export const primaryNav: NavItem[] = [
  { label: 'collection', to: '#primed' },
  { label: 'finished', to: '#finished' },
  { label: 'size', to: '#size' },
  { label: 'hardware', to: '#hardware' }
]

export const footerNav: NavItem[] = [
  { label: 'contact', to: '#contact' },
  { label: 'privacyNav', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' }
]
