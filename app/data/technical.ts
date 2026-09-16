import type { ProcessStep, TechnicalStep } from '~/types/content'

export const technicalSteps: TechnicalStep[] = [
  {
    id: 'frame',
    index: '01',
    title: 'Hidden Frame',
    text: 'Коробка уходит в стену. Снаружи остаётся плоскость, а не портал.'
  },
  {
    id: 'hinges',
    index: '02',
    title: 'Invisible Hinges',
    text: 'Петли скрыты в толщине полотна и коробки. С фасада их нет.'
  },
  {
    id: 'leaf',
    index: '03',
    title: 'Flush Leaf',
    text: 'Полотно стоит в одной плоскости со стеной. Наличник не используется.'
  },
  {
    id: 'install',
    index: '04',
    title: 'Precise Install',
    text: 'Геометрия проёма, регулировка петель и зазор задают качество всей стены.'
  },
  {
    id: 'finish',
    index: '05',
    title: 'Final Finish',
    text: 'Финиш выполняется вместе со стеной: окраска, штукатурка или шпон.'
  }
]

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Разговор',
    text: 'Чертежи, материал стен, высота, сценарий открывания.'
  },
  {
    index: '02',
    title: 'Замер',
    text: 'Проём и примыкания снимаются на объекте, не по эскизу.'
  },
  {
    index: '03',
    title: 'Спецификация',
    text: 'Модель, отделка, петли, ручка, сторона открывания.'
  },
  {
    index: '04',
    title: 'Производство',
    text: 'Полотно и скрытая система собираются под конкретный проём.'
  },
  {
    index: '05',
    title: 'Монтаж',
    text: 'Коробка, полотно, регулировка, проверка плоскости.'
  },
  {
    index: '06',
    title: 'Финиш',
    text: 'Отделка вместе со стеной. Передача объекта.'
  }
]

export const qualityDetails = [
  {
    title: 'Зазор',
    text: 'Тонкая тень вместо наличника. Плоскость стены не разрывается профилем.',
    image: '/images/detail-gap.png'
  },
  {
    title: 'Петля',
    text: 'Скрытый механизм в кромке. С фасада фурнитура не собирает взгляд.',
    image: '/images/detail-hinge.png'
  },
  {
    title: 'Ручка',
    text: 'Линейный жест вместо розетки. Можно скрыть или убрать полностью.',
    image: '/images/detail-handle.png'
  }
]
