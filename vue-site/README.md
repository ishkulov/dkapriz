# Дамский Каприз - Vue.js сайт для GitHub Pages

Сайт-визитка магазина нижнего белья и купальников на Vue.js 3.

## Быстрый старт для GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `damskiy-kapriz`)

### Шаг 2: Загрузите файлы

Скачайте содержимое папки `vue-site/` и загрузите в репозиторий:
- Все файлы из `vue-site/` должны быть в корне репозитория

### Шаг 3: Включите GitHub Pages

1. Перейдите в Settings → Pages
2. Source: выберите **GitHub Actions**
3. Сохраните

### Шаг 4: Запустите деплой

После пуша в main-ветку, GitHub Actions автоматически соберёт и опубликует сайт.

Сайт будет доступен по адресу: `https://ваш-username.github.io/damskiy-kapriz/`

---

## Требования

- Node.js 18+ 
- npm 9+

## Локальная разработка

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу: http://localhost:5000

## Сборка

```bash
npm run build
```

Готовые файлы будут в папке `dist/`.

## Настройка base path

Если репозиторий НЕ называется `username.github.io`, измените `base` в `vite.config.ts`:

```ts
base: '/имя-репозитория/',
```

## GitHub Actions (уже настроено)

Файл `.github/workflows/deploy.yml` уже создан и готов к работе:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: vue-site/package-lock.json
      
      - name: Install dependencies
        working-directory: ./vue-site
        run: npm ci
      
      - name: Build
        working-directory: ./vue-site
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./vue-site/dist
```

## Настройка для вашего репозитория

Если ваш репозиторий называется не `username.github.io`, а например `my-site`, 
измените `base` в `vite.config.ts`:

```ts
export default defineConfig({
  base: '/my-site/',  // Имя вашего репозитория
  // ...
})
```

## Структура проекта

```
vue-site/
├── src/
│   ├── assets/          # Изображения
│   ├── components/      # Vue компоненты
│   │   ├── Navigation.vue
│   │   ├── HeroSection.vue
│   │   ├── AssortmentSection.vue
│   │   ├── BenefitsSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   ├── App.vue          # Главный компонент
│   ├── main.ts          # Точка входа
│   └── style.css        # Глобальные стили
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Технологии

- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS
- TypeScript
