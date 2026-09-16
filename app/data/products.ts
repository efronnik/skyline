import type { Product } from '~/types/content'

export const products: Product[] = [
  {
    slug: 'plane',
    name: 'Plane',
    latin: 'Под покраску',
    kicker: 'Скрытый монтаж',
    summary: 'Грунтованное полотно в плоскости стены. После отделки дверь читается как часть штукатурки.',
    description:
      'Базовая архитектурная система LIMEN. Скрытая коробка, скрытые петли, полотно заподлицо со стеной. Поверхность готовится под финишную окраску в цвет помещения.',
    image: '/images/interior-flush.png',
    gallery: ['/images/interior-flush.png', '/images/detail-gap.png', '/images/after-flush.png'],
    finishes: ['Грунт под покраску', 'Окраска в цвет стены'],
    openings: ['Левое', 'Правое', 'Внутрь', 'Наружу'],
    heights: ['Стандарт', 'До потолка', 'По проекту'],
    colors: [
      { id: 'mineral', name: 'Минерал', value: '#C9C4BB' },
      { id: 'chalk', name: 'Мел', value: '#E8E4DC' },
      { id: 'ink', name: 'Чернила', value: '#1C1916' },
      { id: 'custom', name: 'По образцу', value: '#55605A' }
    ],
    features: ['Скрытая коробка', 'Скрытые петли', 'Полотно flush', 'Отделка в цвет стены'],
    leaf: 'single'
  },
  {
    slug: 'ceiling',
    name: 'Ceiling',
    latin: 'До потолка',
    kicker: 'Высота пространства',
    summary: 'Полотно ведётся в высоту помещения, без верхней перемычки, которая режет стену.',
    description:
      'Система для помещений, где важна непрерывная вертикаль. Высота задаётся архитектурой, а не каталогом.',
    image: '/images/project-gallery.png',
    gallery: ['/images/project-gallery.png', '/images/hero-wall.png', '/images/detail-gap.png'],
    finishes: ['Грунт под покраску', 'Шпон'],
    openings: ['Левое', 'Правое'],
    heights: ['До потолка', 'По проекту'],
    colors: [
      { id: 'mineral', name: 'Минерал', value: '#C9C4BB' },
      { id: 'oak', name: 'Дуб', value: '#B08958' }
    ],
    features: ['Вертикаль до потолка', 'Скрытая коробка', 'Минимальный зазор'],
    leaf: 'single'
  },
  {
    slug: 'pair',
    name: 'Pair',
    latin: 'Двустворчатая',
    kicker: 'Широкий проём',
    summary: 'Две створки в одной плоскости стены. Проём открывается как часть анфилады, а не как портал.',
    description:
      'Для гостиных, кабинетов и переходов, где нужна ширина без массивного портала. Обе створки остаются flush.',
    image: '/images/project-living-oak.png',
    gallery: ['/images/project-living-oak.png', '/images/interior-flush.png', '/images/detail-handle.png'],
    finishes: ['Грунт под покраску', 'Шпон дуб', 'Шпон орех'],
    openings: ['Распашное', 'По проекту'],
    heights: ['Стандарт', 'До потолка', 'По проекту'],
    colors: [
      { id: 'oak', name: 'Дуб', value: '#B08958' },
      { id: 'walnut', name: 'Орех', value: '#4A3428' }
    ],
    features: ['Две створки flush', 'Скрытые петли', 'Широкий проём'],
    leaf: 'double'
  },
  {
    slug: 'pocket',
    name: 'Pocket',
    latin: 'Раздвижная',
    kicker: 'Скрытое полотно',
    summary: 'Полотно уходит в стену. В открытом состоянии проём свободен, в закрытом — снова плоскость.',
    description:
      'Раздвижная скрытая система для пространств, где распашная створка мешает сценарию движения.',
    image: '/images/product-sliding.png',
    gallery: ['/images/product-sliding.png', '/images/detail-gap.png', '/images/project-office.png'],
    finishes: ['Грунт под покраску', 'Шпон', 'Стекло'],
    openings: ['В карман стены'],
    heights: ['Стандарт', 'До потолка', 'По проекту'],
    colors: [
      { id: 'mineral', name: 'Минерал', value: '#C9C4BB' },
      { id: 'ink', name: 'Чернила', value: '#1C1916' }
    ],
    features: ['Уход в стену', 'Скрытый трек', 'Плоскость в закрытом положении'],
    leaf: 'sliding'
  },
  {
    slug: 'lumen',
    name: 'Lumen',
    latin: 'Стекло',
    kicker: 'Свет без рамы',
    summary: 'Стеклянное полотно в скрытой системе. Свет проходит, коробка остаётся в стене.',
    description:
      'Для коридоров и кабинетов, где нужна светопроницаемость без видимой дверной конструкции.',
    image: '/images/product-glass.png',
    gallery: ['/images/product-glass.png', '/images/material-glass.png', '/images/detail-hinge.png'],
    finishes: ['Матовое стекло', 'Прозрачное стекло'],
    openings: ['Левое', 'Правое', 'Раздвижное'],
    heights: ['Стандарт', 'До потолка', 'По проекту'],
    colors: [
      { id: 'frost', name: 'Матовое', value: '#D5D8D6' },
      { id: 'clear', name: 'Прозрачное', value: '#9AA3A0' }
    ],
    features: ['Скрытая коробка', 'Стеклянное полотно', 'Свет между помещениями'],
    leaf: 'glass'
  },
  {
    slug: 'timber',
    name: 'Timber',
    latin: 'Шпон',
    kicker: 'Материальная стена',
    summary: 'Шпонированное полотно: дерево как поверхность стены, а не как «дверь из каталога».',
    description:
      'Когда архитектура держится на материале — дуб, орех или другой шпон по образцу — полотно продолжает ту же поверхность.',
    image: '/images/project-living-oak.png',
    gallery: ['/images/project-living-oak.png', '/images/material-oak.png', '/images/material-walnut.png'],
    finishes: ['Шпон дуб', 'Шпон орех', 'Другой шпон по образцу'],
    openings: ['Левое', 'Правое'],
    heights: ['Стандарт', 'До потолка', 'По проекту'],
    colors: [
      { id: 'oak', name: 'Дуб', value: '#B08958' },
      { id: 'walnut', name: 'Орех', value: '#4A3428' }
    ],
    features: ['Натуральный шпон', 'Скрытый монтаж', 'Подбор по образцу'],
    leaf: 'single'
  }
]

export function getProduct(slug: string) {
  return products.find(item => item.slug === slug)
}

export function getProductSlugs() {
  return products.map(item => item.slug)
}
