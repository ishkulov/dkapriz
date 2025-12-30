# Дамский Каприз - Vue.js сайт для GitHub Pages

Сайт-визитка магазина нижнего белья и купальников на Vue.js 3.

## Быстрый старт для GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `damskiy-kapriz`)

### Шаг 2: Загрузите файлы

Загрузите все файлы проекта в репозиторий.

### Шаг 3: Включите GitHub Pages

1. Перейдите в Settings → Pages
2. Source: выберите **GitHub Actions**
3. Сохраните

### Шаг 4: Запустите деплой

После пуша в main-ветку, GitHub Actions автоматически соберёт и опубликует сайт.

Сайт будет доступен по адресу: `https://ваш-username.github.io/damskiy-kapriz/`

---

## Локальная разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Настройка base path

Если репозиторий НЕ называется `username.github.io`, измените `base` в `vite.config.ts`:

```ts
base: '/имя-репозитория/',
```
