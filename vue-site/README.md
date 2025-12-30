# Дамский Каприз - Vue.js сайт для GitHub Pages

Сайт-визитка магазина нижнего белья и купальников на Vue.js 3.

## Требования

- Node.js 18+ 
- npm 9+

## Установка

```bash
cd vue-site
npm install
```

## Разработка

Запуск сервера разработки:

```bash
npm run dev
```

Сайт будет доступен по адресу: http://localhost:5000

## Сборка для продакшена

```bash
npm run build
```

Готовые файлы будут в папке `dist/`.

## Деплой на GitHub Pages

### Вариант 1: Автоматический (gh-pages)

```bash
npm run deploy
```

Эта команда соберёт проект и загрузит его в ветку `gh-pages`.

### Вариант 2: Ручной

1. Соберите проект:
   ```bash
   npm run build
   ```

2. Загрузите содержимое папки `dist/` в ветку `gh-pages` вашего репозитория.

### Вариант 3: GitHub Actions

Создайте файл `.github/workflows/deploy.yml`:

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
