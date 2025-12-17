# Design Guidelines: Swimwear & Lingerie Store Business Card Website

## Design Approach

**Selected Approach:** Reference-Based with fashion e-commerce influence
- Primary inspiration: Premium fashion retailers (Reformation, Aritzia, & Other Stories)
- Visual strategy: Elegant, feminine, sophisticated with editorial photography aesthetic
- Key principle: Balance sensuality with sophistication through refined layouts and breathing room

## Typography System

**Font Families:**
- Headings: Playfair Display (serif, elegant) or Cormorant Garamond
- Body: Inter or Montserrat (clean, modern sans-serif)
- Accents: Italic variations for emphasis

**Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-light or font-normal
- Section Headers: text-3xl md:text-4xl lg:text-5xl
- Subheadings: text-xl md:text-2xl
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text/Captions: text-sm, uppercase tracking for labels

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent section padding: py-16 md:py-20 lg:py-24
- Container max-width: max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-3xl for readability

**Grid Strategy:**
- Product gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 with gap-4 md:gap-6
- Features/Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Mobile-first: Always stack to single column on mobile

## Core Components

### Navigation
- Transparent overlay on hero, transitions to solid on scroll
- Logo left, menu items right with generous spacing
- Minimal menu: Home, Catalog, About, Contacts
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
- Full-width image showcase (80vh to 90vh)
- Asymmetric text overlay (left or right alignment, not centered)
- Subtle gradient overlay for text legibility
- CTA button with backdrop-blur-sm for glass effect
- Trust indicator below CTA: "Более 5 лет на рынке" or similar

### Product Gallery Section
- Masonry or standard grid layout with hover effects
- Product cards: Image fills card, minimal text overlay on hover
- Category filters as pill buttons above grid
- Each card shows image + product name + subtle "Подробнее" on hover
- 8-12 featured products visible

### About Section
- Two-column layout: text + image split (50/50 on desktop)
- Includes: Store story, expertise, quality commitment
- Supporting elements: Years in business badge, customer satisfaction metric
- Lifestyle image showing store interior or styled products

### Store Benefits/Features
- Three-column grid showcasing: Quality, Selection, Service
- Icon (from Heroicons) + heading + short description
- Icons should be minimalist, line-based style

### Contact Section
- Two-column layout:
  - Left: Contact form (Name, Phone, Message fields)
  - Right: Store information card with address, phone, working hours, map embed
- Google Maps iframe integration
- Social media links (Instagram essential for fashion retail)

### Footer
- Three-column layout: Brand info + Quick links + Contact summary
- Newsletter signup: "Узнавайте о новых коллекциях первыми"
- Social media icons
- Operating hours and address reiteration
- Copyright and minimal legal links

## Images Strategy

**Large Hero Image:** Yes - Full-width lifestyle image of swimwear/lingerie in elegant setting
**Additional Images:**
- Product gallery: 8-12 high-quality product photos
- About section: Store interior or founder photo
- Benefits section: Optional lifestyle images between features
- All images should have consistent editorial quality and styling

**Image Treatment:**
- Aspect ratios: Hero 16:9, Products 3:4 (portrait), About 4:3
- Subtle overlay gradients on hero for text contrast
- All product images maintain consistent lighting and background treatment

## Component Specifications

**Buttons:**
- Primary CTA: Rounded (rounded-full), generous padding (px-8 py-4), uppercase tracking
- Secondary: Outline style with same dimensions
- Hero buttons: backdrop-blur-sm for glass morphism effect

**Cards:**
- Product cards: No visible border, shadow on hover (hover:shadow-xl transition)
- Info cards: Subtle border or soft shadow, rounded-lg

**Forms:**
- Input fields: Border-bottom style or soft outlined
- Generous padding (p-4), rounded-lg corners
- Focus states with subtle glow effect
- Labels: Floating or top-aligned, text-sm uppercase

**Spacing & Rhythm:**
- Section gaps: space-y-16 md:space-y-20
- Component internal spacing: p-6 md:p-8
- Card grids: gap-6 md:gap-8
- Consistent vertical rhythm maintains elegance

## Interaction Patterns

- Smooth scroll behavior throughout
- Fade-in animations for sections on scroll (use sparingly)
- Image hover: Subtle scale transform (scale-105)
- Navigation: Smooth color transition on scroll
- Form: Real-time validation feedback

## Accessibility & Polish

- All interactive elements have clear focus states
- Form inputs with proper labels and ARIA attributes
- Sufficient contrast for all text over images
- Touch targets minimum 44x44px for mobile
- Alt text for all images describing products/scenes