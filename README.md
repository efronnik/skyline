LIMEN — Nuxt-сайт архитектурных дверей скрытого монтажа.

## Стек

Nuxt 4 · Vue 3 · TypeScript · Composition API · SCSS/CSS tokens · @nuxt/image · @nuxt/fonts

## Запуск

```bash
cd limen
npm install
npm run dev
```

Сборка: `npm run build`

## Контент

Редактируйте данные, не страницы:

- `app/data/site.ts` — имя, контакты, телефон, карта
- `app/data/products.ts` — коллекция
- `app/data/projects.ts` — проекты (сейчас это типологии, не вымышленные объекты)
- `app/data/materials.ts` — отделки
- `app/data/technical.ts` — технология и процесс
- `public/images/` — фото
- `public/downloads/` — DWG/PDF, когда появятся

Заявка: `server/api/inquiry.post.ts` + `server/utils/inquiry.ts`. Сейчас режим `mock` в `runtimeConfig.inquiryMode`.
