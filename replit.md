# Replit Agent Guidelines

## Overview

This is a single-page business card website for "Дамский Каприз" (Lady's Caprice), a swimwear and lingerie boutique in Krasnodar, Russia. The project is a React-based frontend with an Express backend, styled with Tailwind CSS and shadcn/ui components. The site follows a fashion/boutique aesthetic with a feminine, elegant design featuring pink accent colors (#F04C8B) and serif typography for headings.

**Important:** This is NOT an e-commerce site. It's a business card website showcasing store information, product categories, benefits, and contact details. No shopping cart, checkout, or product catalog functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight React router)
- **State Management:** TanStack React Query for server state
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn/ui (New York style) with Radix UI primitives
- **Build Tool:** Vite with React plugin

### Backend Architecture
- **Framework:** Express.js with TypeScript
- **Runtime:** Node.js with tsx for TypeScript execution
- **API Pattern:** RESTful routes prefixed with `/api`
- **Static Serving:** Express serves built frontend in production, Vite middleware in development

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (sections, shadcn/ui)
    pages/        # Route pages (home, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # In-memory data storage
  vite.ts         # Vite dev server integration
shared/           # Shared types and schemas
vue-site/         # Separate Vue.js version for GitHub Pages deployment
```

### Design System
- **Color Palette:** Pink accent (#F04C8B), light pink backgrounds (#FDE4EE, #FDF6F9), dark text (#1F1F1F, #3A3A3A)
- **Typography:** Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Components:** HeroSection, AssortmentSection, BenefitsSection, ContactSection, Footer, Navigation
- **Language:** Russian (site content is in Russian)

### Data Layer
- **ORM:** Drizzle ORM configured for PostgreSQL
- **Schema:** Located in `shared/schema.ts`
- **Current Storage:** In-memory storage (MemStorage class) with user CRUD operations
- **Database Config:** Drizzle Kit configured, ready for PostgreSQL when DATABASE_URL is provided

## External Dependencies

### Database
- PostgreSQL (via Drizzle ORM) - configured but optional for current functionality
- Connection managed through DATABASE_URL environment variable
- Session storage: connect-pg-simple for PostgreSQL sessions

### Frontend Libraries
- @tanstack/react-query: Server state management
- wouter: Client-side routing
- Radix UI: Accessible UI primitives (accordion, dialog, dropdown, etc.)
- embla-carousel-react: Carousel functionality
- lucide-react: Icon library
- class-variance-authority: Component variant styling
- tailwind-merge/clsx: Utility class merging

### Build & Development
- Vite: Frontend bundling and dev server
- esbuild: Server bundling for production
- tsx: TypeScript execution for development
- Replit plugins: Error overlay, cartographer, dev banner

### Form & Validation
- react-hook-form: Form state management
- zod: Schema validation
- drizzle-zod: Drizzle to Zod schema generation