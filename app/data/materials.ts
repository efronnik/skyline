import type { Material } from '~/types/content'

export const materials: Material[] = [
  {
    id: 'paint',
    name: 'Грунт / окраска',
    category: 'Paint',
    summary: 'Полотно готовится под финиш помещения: та же краска, та же степень матовости, что и стена.',
    image: '/images/material-paint.png',
    preview: '/images/interior-flush.png',
    notes: 'Финиш выполняется вместе с отделкой стен. Цвет задаёт проект, не каталог.'
  },
  {
    id: 'plaster',
    name: 'Минеральная плоскость',
    category: 'Plaster',
    summary: 'Известковая и минеральная штукатурка. Дверь исчезает в зерне поверхности.',
    image: '/images/material-plaster.png',
    preview: '/images/after-flush.png',
    notes: 'Работает только при точном монтаже и общем финишном слое.'
  },
  {
    id: 'oak',
    name: 'Дуб',
    category: 'Veneer',
    summary: 'Прямой шпон европейского дуба. Масло, без глянца, без мебельного блеска.',
    image: '/images/material-oak.png',
    preview: '/images/project-living-oak.png',
    notes: 'Подбор по образцу. Рисунок и тон согласовываются до производства.'
  },
  {
    id: 'walnut',
    name: 'Орех',
    category: 'Veneer',
    summary: 'Тёмный шпон для интерьеров, где стена сама является деревом.',
    image: '/images/material-walnut.png',
    preview: '/images/project-living-oak.png',
    notes: 'Возможны другие породы по запросу проекта.'
  },
  {
    id: 'glass',
    name: 'Стекло',
    category: 'Glass',
    summary: 'Матовое или прозрачное полотно в скрытой системе. Свет без дверной рамы.',
    image: '/images/material-glass.png',
    preview: '/images/product-glass.png',
    notes: 'Тип стекла и фурнитура согласовываются отдельно.'
  }
]

export function getMaterial(id: string) {
  return materials.find(item => item.id === id)
}
