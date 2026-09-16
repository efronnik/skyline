import type { NavItem, SiteContact } from '~/types/content'

export const site = {
  name: 'LIMEN',
  legalName: 'LIMEN',
  tagline: 'Порог, которого нет',
  description:
    'Архитектурные двери скрытого монтажа: полотно в плоскости стены, скрытая коробка, минимальный зазор.',
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
  mapUrl: ''
}

export const primaryNav: NavItem[] = [
  { label: 'Коллекция', to: '/products' },
  { label: 'Проекты', to: '/projects' },
  { label: 'Материалы', to: '/materials' },
  { label: 'Узлы', to: '/technology' },
  { label: 'Бюро', to: '/architects' }
]

export const footerNav: NavItem[] = [
  { label: 'Контакт', to: '/contact' },
  { label: 'Конфиденциальность', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' }
]
