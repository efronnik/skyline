import type { Project } from '~/types/content'

export const projects: Project[] = [
  {
    slug: 'anfilade',
    title: 'Жилая анфилада',
    typology: 'Квартира',
    setting: 'Типология интерьера',
    yearLabel: 'Сценарий',
    product: 'Plane / Pair',
    finish: 'Минеральная окраска в цвет стены',
    dimensions: 'Высота — по потолку помещения',
    cover: '/images/interior-flush.png',
    gallery: [
      '/images/interior-flush.png',
      '/images/detail-gap.png',
      '/images/after-flush.png',
      '/images/detail-handle.png'
    ],
    story:
      'Визуальный сценарий, а не реализованный объект. Показывает, как скрытые двери собирают анфиладу в одну непрерывную стену.',
    solution:
      'Полотна Plane стоят в одной плоскости со штукатуркой. Наличник отсутствует. Проём читается только в движении.',
    result:
      'Комната сохраняет цельность стены. Дверь появляется, когда она нужна, и исчезает, когда закрыта.',
    isScenario: true
  },
  {
    slug: 'gallery',
    title: 'Галерейный коридор',
    typology: 'Галерея / холл',
    setting: 'Типология интерьера',
    yearLabel: 'Сценарий',
    product: 'Ceiling',
    finish: 'Известковая штукатурка',
    dimensions: 'Полотно до потолка',
    cover: '/images/project-gallery.png',
    gallery: [
      '/images/project-gallery.png',
      '/images/hero-wall.png',
      '/images/detail-gap.png'
    ],
    story:
      'Длинная стена без ритма наличников. Служебные проёмы спрятаны в той же плоскости, что и экспозиционная поверхность.',
    solution:
      'Система Ceiling уводит верхний брус из поля зрения. Вертикаль стены не перебивается.',
    result:
      'Коридор читается как архитектурный объём, а не как набор дверных блоков.',
    isScenario: true
  },
  {
    slug: 'cabinet',
    title: 'Кабинет',
    typology: 'Рабочее пространство',
    setting: 'Типология интерьера',
    yearLabel: 'Сценарий',
    product: 'Lumen / Pocket',
    finish: 'Матовое стекло, минеральная стена',
    dimensions: 'По проекту',
    cover: '/images/project-office.png',
    gallery: [
      '/images/project-office.png',
      '/images/product-glass.png',
      '/images/product-sliding.png'
    ],
    story:
      'Свет между кабинетом и коридором нужен, рама — нет. Сценарий показывает стеклянное полотно в скрытой коробке.',
    solution:
      'Lumen пропускает свет, коробка остаётся в стене. При необходимости полотно заменяется на Pocket.',
    result:
      'Граница помещений есть, визуальный шум портала отсутствует.',
    isScenario: true
  },
  {
    slug: 'bedroom',
    title: 'Спальня',
    typology: 'Жилая комната',
    setting: 'Типология интерьера',
    yearLabel: 'Сценарий',
    product: 'Timber',
    finish: 'Шпон дуб, масло',
    dimensions: 'До потолка',
    cover: '/images/project-bedroom.png',
    gallery: [
      '/images/project-bedroom.png',
      '/images/project-living-oak.png',
      '/images/material-oak.png',
      '/images/detail-handle.png'
    ],
    story:
      'Дерево здесь не «дверная отделка», а поверхность, равная стене. Сценарий для интерьеров, где материал важнее фурнитуры.',
    solution:
      'Шпонированное полотно Timber стыкуется со стеной минимальным зазором. Ручка — линейная, без розетки.',
    result:
      'Спальня сохраняет тишину плоскости. Дверь не собирает на себе взгляд.',
    isScenario: true
  }
]

export function getProject(slug: string) {
  return projects.find(item => item.slug === slug)
}

export function getProjectSlugs() {
  return projects.map(item => item.slug)
}
