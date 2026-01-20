# Replit Agent Guidelines

## Overview

This is a single-page business card website for "Дамский Каприз" (Lady's Caprice), a swimwear and lingerie boutique in St. Petersburg, Russia. Built with Vue.js 3 and designed for deployment to GitHub Pages.

**Important:** This is NOT an e-commerce site. It's a business card website showcasing store information, product categories, benefits, and contact details. No shopping cart, checkout, or product catalog functionality.

## Project Structure

```
src/
  components/     # Vue SFC components
  assets/         # Images and static assets
  App.vue         # Main app component
  main.js         # Entry point
.github/
  workflows/      # GitHub Actions for deployment
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

## Planned Pages (TODO)

Отдельные страницы для каждой категории ассортимента:

1. **/kupainiky** — Купальники (женские купальники)
2. **/belyo** — Нижнее бельё (женское нижнее бельё)
3. **/muzhskie-kupainiky** — Мужские купальники
4. **/detskie-kupainiky** — Детские купальники
5. **/plazhnaya-odezhda** — Пляжная одежда
6. **/aksessuary** — Аксессуары для бассейна

Каждая страница должна содержать:
- Заголовок категории
- Краткое описание
- Галерея примеров (без цен и корзины)
- Кнопка "Посетить магазин" / контактная информация

## Contact Information

- Phone: +7 (921) 892-48-60
- Address: Санкт-Петербург, ул. Наличная, 49
- Store emphasizes offline experience (NO delivery mentions)

## Deployment

Project is configured for GitHub Pages deployment via GitHub Actions. See README.md for deployment instructions.
