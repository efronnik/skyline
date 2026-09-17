import type { Project } from '~/types/content'

export const projects: Project[] = [
  {
    slug: 'anfilade',
    cover: '/images/work-pair.jpg',
    gallery: [
      '/images/work-pair.jpg',
      '/images/work-corner.jpg',
      '/images/work-room.jpg'
    ],
    ratio: '4 / 5',
    isScenario: true
  },
  {
    slug: 'gallery',
    cover: '/images/work-corridor.jpg',
    gallery: [
      '/images/work-corridor.jpg',
      '/images/work-pair.jpg',
      '/images/work-corner.jpg'
    ],
    ratio: '4 / 5',
    isScenario: true
  },
  {
    slug: 'cabinet',
    cover: '/images/work-corner.jpg',
    gallery: [
      '/images/work-corner.jpg',
      '/images/work-pair.jpg',
      '/images/work-alu.jpg'
    ],
    ratio: '4 / 5',
    isScenario: true
  },
  {
    slug: 'bedroom',
    cover: '/images/work-room.jpg',
    gallery: [
      '/images/work-room.jpg',
      '/images/work-alu.jpg',
      '/images/work-corridor.jpg'
    ],
    ratio: '3 / 4',
    isScenario: true
  }
]

export function getProject(slug: string) {
  return projects.find(item => item.slug === slug)
}

export function getProjectSlugs() {
  return projects.map(item => item.slug)
}
