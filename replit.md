# Replit Agent Guidelines

## Overview

This is a multi-page business card website for "Дамский Каприз" (Lady's Caprice), a swimwear and lingerie boutique in St. Petersburg, Russia. Built with Vue.js 3 + Vue Router and designed for deployment to GitHub Pages.

**Important:** This is NOT an e-commerce site. It's a business card website showcasing store information, product categories, benefits, and contact details. No shopping cart, checkout, or product catalog functionality.

## Project Structure

```
src/
  components/     # Vue SFC components
  pages/          # Page components for each route
    HomePage.vue
    KupalnikyPage.vue
  router/         # Vue Router configuration
    index.ts
  assets/         # Images and static assets
  App.vue         # Main app component with router-view
  main.ts         # Entry point with router setup
.github/
  workflows/      # GitHub Actions for deployment
public/
  sitemap.xml     # SEO sitemap
  robots.txt      # Crawling rules
package.json      # Vue dependencies
vite.config.ts    # Vite configuration
attached_assets/  # Original images and assets
```

## Design System

- **Color Palette:** Pink accent (#F04C8B), light pink backgrounds (#FDE4EE, #FDF6F9), dark text (#1F1F1F, #3A3A3A)
- **Typography:** Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Language:** Russian (site content is in Russian)
- **No pure black:** Use #1F1F1F for headings, #3A3A3A for body text

## Key Components

- HeroSection: Animated floating product slideshow (3 images, 10s interval) with fade transitions
- AssortmentSection: 3x2 grid of product categories
- BenefitsSection: Store advantages (fitting rooms, consultation, etc.)
- ContactSection: Address, phone, working hours
- Navigation & Footer (responsive, mobile menu at <1024px)

## Pages

### Implemented Pages

1. **/** — Главная (HomePage): Hero slideshow, AssortmentSection, BenefitsSection, ContactSection
2. **/kupalniky** — Женские купальники: Hero, description, 17 brands, benefits grid, CTA with contacts

### Planned Pages (TODO)

Отдельные страницы для остальных категорий:

1. **/belyo** — Нижнее бельё (женское нижнее бельё)
2. **/muzhskie-kupainiky** — Мужские купальники
3. **/detskie-kupainiky** — Детские купальники
4. **/plazhnaya-odezhda** — Пляжная одежда
5. **/aksessuary** — Аксессуары для бассейна

Каждая страница должна содержать:
- Заголовок категории
- Краткое описание
- Секция с брендами (если применимо)
- Преимущества покупки в магазине
- Кнопка "Позвонить" / "WhatsApp" / контактная информация

## Contact Information

- Phone: +7 (921) 892-48-60
- Address: Санкт-Петербург, ул. Наличная, 49
- Store emphasizes offline experience (NO delivery mentions)

## Deployment

Project is configured for GitHub Pages deployment via GitHub Actions. See README.md for deployment instructions.

### SPA Routing Fix for GitHub Pages

GitHub Pages doesn't natively support SPA client-side routing. When users directly access routes like `dkapriz.ru/kupalniky`, GitHub returns 404 because it expects a physical file at that path.

**Solution implemented (rafgraph/spa-github-pages):**
- `public/404.html` - Redirects 404 requests to index.html with encoded path
- `index.html` - Contains script to decode path and restore proper URL via history.replaceState

This allows direct URL access to all routes like `/kupalniky`, `/belyo`, etc.
