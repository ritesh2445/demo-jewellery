# Demo-jewellery 

# TANISHQ JEWELLERS GHATANJI — LOVABLE.AI PROMPT
# Ultra-luxury jewellery website · White editorial aesthetic · WhatsApp enquiry
────────────────────────────────────────────────────────────────────────────────

## PROJECT

Build a complete production-quality website for **Tanishq Jewellers Ghatanji** — a fine jewellery store in Maharashtra. This is NOT a generic jewellery template. The aesthetic reference is premium Indian jewellery retail (think ORRA, Tanishq national, Senco Gold elevated). The site must feel like an editorial fashion campaign, not an ecommerce store.

**CRITICAL:** No cart. No price. No checkout. No sale badges. No "Add to Cart". This is a discovery and enquiry website. Every product leads to a WhatsApp or phone enquiry.

---

## STACK

```
React 18 + TypeScript + Vite
Tailwind CSS (extend config with design tokens below)
Framer Motion (animations)
React Router v6 (routing)
shadcn/ui (Dialog for lightbox/search, Sheet for mobile menu)
lucide-react (icons — use minimal set: Search, Menu, X, ChevronRight, ChevronLeft, Phone, MessageCircle, MapPin, Instagram, ArrowRight)
```

Add to `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## DESIGN SYSTEM — extend `tailwind.config.ts`

```ts
colors: {
  white:    '#FFFFFF',
  offwhite: '#FAFAF8',
  surface:  '#F7F7F5',
  ink:      '#161616',
  muted:    '#6B6B6B',
  border:   '#E9E9E9',
  gold:     '#B69B68',
}
fontFamily: {
  sans:  ['Inter', 'Helvetica Neue', 'sans-serif'],
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],
}
```

**Visual ratio — strictly enforce:**
- 90% white / neutral backgrounds
- 8% ink / dark
- 2% gold (accent only: small labels, underlines, icon highlights — NEVER a filled button, NEVER a background)

**Typography system:**
```
Editorial headline:  font-serif font-light tracking-tight  (sizes: text-4xl → text-7xl)
Section eyebrow:     font-sans font-normal uppercase tracking-[0.2em] text-xs text-muted
UI label/nav:        font-sans font-medium uppercase tracking-widest text-xs
Body text:           font-sans font-light text-sm text-muted leading-relaxed
CTA text:            font-sans font-medium uppercase tracking-widest text-xs
```

**Buttons — two variants only:**
```
Primary:   bg-ink text-white px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-ink/90
Outline:   border border-ink text-ink px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-ink hover:text-white
Ghost:     text-ink text-xs uppercase tracking-widest with ArrowRight icon, no border, no fill
```

**Spacing:** All sections use `py-20 md:py-28`. Container max-width: `max-w-screen-xl mx-auto px-4 md:px-8`.

---

## BUSINESS DATA — `src/data/site.ts`

```ts
export const site = {
  brand: 'Tanishq Jewellers',
  location: 'Ghatanji',
  address: 'Rakesh Chandarana Road, Ghatanji, Maharashtra 445301',
  phone: '+91 99708 63472',
  whatsapp: '919970863472',
  instagram: 'https://www.instagram.com/tanishq.varma_jewellers/',
  instagramHandle: '@tanishq.varma_jewellers',
  hours: {
    weekdays: 'Monday – Saturday: 10:00 AM – 9:00 PM',
    sunday: 'Sunday: 10:00 AM – 7:00 PM',
  },
  mapUrl: 'https://maps.google.com/?q=Tanishq+Jewellers+Rakesh+Chandarana+Road+Ghatanji+Maharashtra+445301',
}
```

**WhatsApp URL generator:**
```ts
export const whatsappUrl = (product?: string) => {
  const msg = product
    ? `Hi, I'm interested in ${product}. Could you share details and confirm availability?`
    : `Hi, I'd like to enquire about your jewellery collection.`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`
}
```

---

## DATA FILES

### `src/data/categories.ts`
```ts
// 6 categories with id, name, slug, gradient (CSS gradient string for placeholder)
[
  { id: 'rings', name: 'Rings', slug: 'rings', gradient: 'from-amber-50 to-stone-100' },
  { id: 'earrings', name: 'Earrings', slug: 'earrings', gradient: 'from-rose-50 to-amber-50' },
  { id: 'pendants', name: 'Pendants', slug: 'pendants', gradient: 'from-stone-100 to-amber-100' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', gradient: 'from-amber-100 to-stone-50' },
  { id: 'bangles', name: 'Bangles', slug: 'bangles', gradient: 'from-yellow-50 to-stone-100' },
  { id: 'bracelets', name: 'Bracelets', slug: 'bracelets', gradient: 'from-stone-50 to-rose-50' },
]
```

### `src/data/products.ts`
Create 12 products with this schema:
```ts
interface Product {
  id: string
  slug: string
  name: string
  category: string       // matches category slug
  collection: string     // 'gold' | 'diamond' | 'bridal' | 'everyday'
  material: string       // e.g. '22K Gold', '18K Gold & Diamonds'
  description: string    // 1–2 sentences, no price/weight/purity invented
  gradient: string       // Tailwind gradient for placeholder image
  availability: 'In Store' | 'Made to Order'
  featured: boolean
  newArrival: boolean
  tags: string[]
}
```

Sample products (create all 12 with realistic jewellery names):
```
{ slug: 'antique-gold-necklace', name: 'Antique Gold Necklace', category: 'necklaces', collection: 'gold', material: '22K Gold', gradient: 'from-amber-100 via-yellow-50 to-stone-100' }
{ slug: 'diamond-solitaire-ring', name: 'Diamond Solitaire Ring', category: 'rings', collection: 'diamond', material: '18K Gold & Diamonds', gradient: 'from-slate-50 via-stone-100 to-amber-50' }
{ slug: 'bridal-kundan-set', name: 'Bridal Kundan Set', category: 'necklaces', collection: 'bridal', material: 'Gold & Kundan', gradient: 'from-rose-100 via-amber-50 to-yellow-100' }
// ... 9 more
```

### `src/data/collections.ts`
```ts
// 4 collections: gold, diamond, bridal, everyday
// Each: { id, slug, name, tagline, description, gradient, accentGradient }
```

---

## ROUTES

```tsx
/ → 
/collection → 
/collection/:category →  (pre-filtered)
/product/:slug → 
/about → 
/visit → 
```

Use `` on route change.

---

## COMPONENT ARCHITECTURE

Create these components in `src/components/`:

```
layout/
  AnnouncementBar.tsx
  Navbar.tsx
  Footer.tsx
  Layout.tsx         ← wraps all pages

ui/
  MediaPlaceholder.tsx   ← reusable gradient placeholder
  ProductCard.tsx
  CategoryTile.tsx
  CampaignBanner.tsx     ← reusable full-width campaign
  SectionLabel.tsx       ← eyebrow label component

pages/
  home/
    HeroSlider.tsx
    ShopByCategory.tsx
    FeaturedCollection.tsx
    CollectionShowcase.tsx
    EditorialFeature.tsx
    VideoSection.tsx
    InstagramStrip.tsx
    VisitTeaser.tsx
  ProductImageViewer.tsx ← lightbox (shadcn Dialog)
  SearchOverlay.tsx      ← fullscreen (shadcn Dialog)
```

---

## PAGE-BY-PAGE SPECS

### GLOBAL LAYOUT

**AnnouncementBar**
- `h-8 bg-ink text-white flex items-center justify-center`
- Text: `"NEW COLLECTION NOW AVAILABLE · GHATANJI, MAHARASHTRA"`
- Font: `text-xs font-sans uppercase tracking-[0.18em]`

**Navbar**
- `h-[72px] sticky top-0 z-50 bg-white border-b border-border`
- On scroll: `backdrop-blur-md bg-white/90 shadow-sm` via Framer Motion
- Desktop layout:
  - LEFT: `"TANISHQ JEWELLERS"` — `font-sans font-medium text-xs tracking-[0.22em] uppercase`
  - CENTER: Nav links in `font-sans text-xs uppercase tracking-widest` — COLLECTIONS · GOLD · DIAMOND · BRIDAL · ABOUT · VISIT
  - RIGHT: `` · `` · `"ENQUIRE"` text link
- Mobile: Logo left · Search + Hamburger right
- Mobile menu: shadcn `Sheet` (side=right, full-height). Menu shows large serif nav items that slide in with `staggerChildren 0.06s`. Close X top-right.

---

### HOMEPAGE SECTIONS (in exact order)

#### 1. HERO SLIDER — `HeroSlider.tsx`

The visual centerpiece. Must feel cinematic, not like a standard carousel.

Dimensions: `w-full min-h-[90vh] md:min-h-[95vh]` relative overflow-hidden

**3 slides (all use CSS gradient backgrounds — no external image URLs):**
```ts
const slides = [
  {
    gradient: 'bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950',
    eyebrow: 'NEW ARRIVAL',
    headline: 'Timeless Gold',
    subtitle: 'Jewellery designed to become part of your story.',
    cta: 'EXPLORE COLLECTION',
    ctaLink: '/collection',
    textAlign: 'left',           // text left-aligned, positioned bottom-left
  },
  {
    gradient: 'bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950',
    eyebrow: 'BRIDAL 2024',
    headline: 'For Moments\nThat Matter.',
    subtitle: 'Crafted for your most cherished ceremonies.',
    cta: 'VIEW BRIDAL',
    ctaLink: '/collection/bridal',
    textAlign: 'center',
  },
  {
    gradient: 'bg-gradient-to-br from-slate-900 via-stone-800 to-slate-950',
    eyebrow: 'FINE DIAMONDS',
    headline: 'Let It Sparkle.',
    subtitle: 'Precision cut, beautifully set in gold.',
    cta: 'DISCOVER DIAMONDS',
    ctaLink: '/collection/diamond',
    textAlign: 'left',
  },
]
```

**Slide layout:**
- Background div fills 100% with gradient
- A subtle texture overlay: `bg-gradient-to-t from-black/60 via-black/10 to-transparent` (bottom-up) for text legibility
- Text block positioned `absolute bottom-16 md:bottom-20` (left or center per slide)
- Eyebrow: `text-white/70 text-xs uppercase tracking-[0.25em] mb-4 font-sans`
- Headline: `text-white font-serif font-light text-5xl md:text-7xl leading-[1.05] mb-4`
- Subtitle: `text-white/70 text-sm font-sans font-light mb-8 max-w-sm`
- CTA: outline button `border border-white text-white` with hover fill-white + text-ink

**Slider mechanics (Framer Motion AnimatePresence):**
```tsx
// Crossfade — NOT slide. Feels more premium.

```

- Autoplay: 5500ms interval, reset on manual nav
- Controls: thin `` / `` icons (white, 20px) positioned `absolute left-6 right-6 top-1/2 -translate-y-1/2`
- Pagination: small dots `absolute bottom-6 left-1/2 -translate-x-1/2`, active dot slightly wider (animate width 6px → 20px)
- `onMouseEnter` pauses autoplay

**A decorative element to make it feel non-generic:**
- In the bottom-right corner of every slide: a very subtle animated line — `` that extends from 0 to 80px width, gold color `bg-gold`, height 1px, animating in after slide appears. This is the signature detail of this design.

---

#### 2. SHOP BY CATEGORY — `ShopByCategory.tsx`

```
Section padding: py-20 md:py-28
Container: max-w-screen-xl mx-auto px-4 md:px-8
```

- Eyebrow: `"SHOP BY PRODUCT"` — SectionLabel component
- Desktop: `grid grid-cols-6 gap-4 md:gap-6`
- Mobile: `flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4` — each item `min-w-[140px] snap-start`

**CategoryTile:**
```tsx
// Gradient placeholder square, 1:1 aspect ratio



  // Optional: faint centered circle as jewellery silhouette hint
  


    

{category.name}


```

Hover: parent image div `group-hover:scale-[1.02]` with `transition-transform duration-500 ease-out`.

---

#### 3. FEATURED COLLECTION — `FeaturedCollection.tsx`

```
bg-surface
py-20 md:py-28
```

- Eyebrow: `"FEATURED COLLECTION"`
- Show products where `featured: true`

**ProductCard:**
```tsx
// 4:5 aspect ratio image area



  // Faint centered jewellery silhouette: small circle + bar (ring visual)


{product.material}

{product.name}


    VIEW 


```

Grid: `grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`

---

#### 4. CAMPAIGN BANNER — BRIDAL — `CampaignBanner.tsx`

Reusable component accepting props: `{ gradient, eyebrow, headline, cta, ctaLink, textAlign, theme }`

```
w-full h-[60vh] md:h-[70vh] relative overflow-hidden flex items-center
bg-gradient-to-br from-rose-950 via-stone-900 to-amber-950
```

Content (centered):
```
[eyebrow: BRIDAL COLLECTION — text-white/60 text-xs tracking-widest]
[headline: "For The Moments\nThat Matter." — text-white font-serif font-light text-5xl md:text-6xl leading-tight my-6 max-w-xl]
[CTA: outline white button "EXPLORE BRIDAL"]
```

Animate content in with:
```tsx
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.7, ease: 'easeOut' }}
```

---

#### 5. COLLECTION SHOWCASE — `CollectionShowcase.tsx`

Two half-screen panels side by side (desktop) / stacked (mobile). These look like campaign ads.

```tsx



```

Each panel: `h-[55vh] md:h-[65vh]` · content positioned bottom-left with padding · eyebrow + large serif title + ghost CTA.

---

#### 6. EDITORIAL PRODUCT FEATURE — `EditorialFeature.tsx`

Two alternating features. Each is `min-h-[80vh] flex items-center`.

**Feature 1: Image Left / Text Right**
```tsx


 {/* image */}
  


    01
    

Antique Gold
Necklace


    

22K Gold


    

Handcrafted in the traditional Maharashtrian style, this piece carries generations of artistry.


    


```

**Feature 2:** Reverse the columns (`md:flex-row-reverse`). Use a different product.

**Scroll reveal for image side:**
```tsx

```

---

#### 7. CINEMATIC VIDEO SECTION — `VideoSection.tsx`

```tsx
// h-[70vh] md:h-[85vh] relative overflow-hidden
// Fallback: bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950

// When video asset available:


// Overlay




// Content — centered


THE COLLECTION

Discover The Details.


```

Use `useEffect` + `IntersectionObserver`: play when `intersectionRatio >= 0.4`, pause when `< 0.2`.

---

#### 8. CATALOGUE PREVIEW — inline on homepage

```
Section heading: "EXPLORE THE COLLECTION"
Show first 8 products, 4-col desktop / 2-col mobile (same ProductCard)
Bottom: text-right ghost CTA "VIEW ALL PIECES →" linking to /collection
```

---

#### 9. INSTAGRAM STRIP — `InstagramStrip.tsx`

```
Section: bg-surface py-20
Eyebrow: "FOLLOW THE COLLECTION"
Handle link: "@tanishq.varma_jewellers" — text-xs uppercase tracking-widest underline-offset-4 hover:underline
```

6-tile grid (mobile: `flex overflow-x-auto gap-2`):
```tsx
// Each tile: 1:1 aspect ratio
// Use varied warm gradients as placeholders
// Overlay on hover: bg-black/20 with Instagram icon (lucide)
// Each links to instagram URL
const igTileGradients = [
  'from-amber-200 to-rose-200',
  'from-stone-200 to-amber-100',
  'from-rose-100 to-amber-200',
  'from-yellow-100 to-stone-200',
  'from-amber-100 to-rose-100',
  'from-stone-100 to-yellow-100',
]
```

---

#### 10. VISIT TEASER — `VisitTeaser.tsx`

```
bg-ink text-white py-20 md:py-28
2-col desktop: left = content / right = decorative (large serif "GHATANJI" text rotated 90deg, very large, text-white/5)
```

Content:
```
Eyebrow: "FIND US" (text-white/50)
Heading: "Visit The Store." (font-serif font-light text-5xl text-white)
Address block (text-white/60 text-sm)
Hours (text-white/60 text-sm)
3 buttons in a row:
  - "CALL" → tel: link (outline white)
  - "WHATSAPP" → wa.me link (bg-white text-ink)
  - "DIRECTIONS" → maps link (ghost white with arrow)
```

---

### COLLECTION PAGE — `/collection`

```tsx
// : "EXPLORE THE COLLECTION" — font-serif font-light text-5xl pt-20 pb-12 text-center
// Filter bar:
// Desktop: horizontal tabs — ALL RINGS EARRINGS PENDANTS NECKLACES BANGLES BRACELETS BRIDAL
//   Active: border-b-2 border-ink, text-ink. Inactive: text-muted hover:text-ink
//   Sticky below navbar when scrolled
// Mobile: horizontal scroll chips — small rounded-full border pills
```

Products grid:
```
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-16
```

For editorial variation: every 7th card spans 2 columns (`md:col-span-2`) with a 3:2 aspect ratio instead of 4:5. This breaks the uniformity.

Use `useMemo` to filter `products` array based on active category.

---

### PRODUCT DETAIL PAGE — `/product/:slug`

**Desktop layout:** `grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-screen`

**Left — Image panel:**
- Main image: `aspect-[3/4]` gradient placeholder `bg-gradient-to-br {product.gradient}`
- Thumbnail strip below: 3–4 small thumbnails (same gradient with slight variation in lightness)
- Click main image → opens `ProductImageViewer` (shadcn Dialog, fullscreen, prev/next, ESC to close)

**Right — Info panel:**
```
sticky top-[72px] self-start max-h-[calc(100vh-72px)] overflow-y-auto
p-8 md:p-12 flex flex-col gap-6
```

Content:
```
[Category] — text-xs uppercase tracking-widest text-muted
[Product Name] — font-serif font-light text-4xl md:text-5xl text-ink leading-tight
[Material] — text-xs uppercase tracking-widest text-gold
[Collection] — text-xs text-muted
[Availability badge] — text-xs uppercase px-3 py-1 rounded-full bg-surface border border-border

— divider —

[ENQUIRE ON WHATSAPP] — primary button full-width bg-ink text-white (uses whatsappUrl(product.name))
[CALL STORE] — outline button full-width (tel: link)
[GET DIRECTIONS] — ghost button with MapPin icon → mapUrl

— divider —

[Description] — text-sm text-muted font-light leading-relaxed

NOTE: Never display price, weight, purity, carat, certification, making charges, or any technical specifications you haven't been given.
```

**Mobile:** Stack image top, info below. Fixed bottom bar: `ENQUIRE ON WHATSAPP` full-width button.

**Below fold:** "YOU MAY ALSO LIKE" — 4 product cards, same category.

---

### ABOUT PAGE — `/about`

```
Hero: w-full h-[55vh] bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950

Content section: py-20 max-w-3xl mx-auto px-4 text-center

Eyebrow: "OUR STORY"
Headline: "Crafted With Pride,\nIn The Heart Of Maharashtra."  (font-serif font-light text-5xl)

Body (max 80 words, verified info only):
"Tanishq Jewellers Ghatanji has been a trusted name for fine gold, diamond, and bridal jewellery in the Yavatmal district. Located on Rakesh Chandarana Road, we bring you timeless designs alongside the latest collections — each piece chosen to celebrate life's most meaningful moments."

Below: 2-col image grid placeholders (warm gradients)
```

---

### VISIT PAGE — `/visit`

```tsx
// py-20 max-w-4xl mx-auto px-4

// Eyebrow: "VISIT US"
// Headline: "Tanishq Jewellers\nGhatanji." (font-serif font-light text-6xl)

// 2-col grid (desktop): left = details / right = map placeholder
// Map placeholder: bg-stone-100 aspect-[4/3] flex items-center justify-center
//   Shows: MapPin icon + "Rakesh Chandarana Road, Ghatanji" text + "OPEN IN MAPS" link

// Store details:
 Rakesh Chandarana Road, Ghatanji, Maharashtra 445301
   +91 99708 63472
  
    Mon – Sat: 10:00 AM – 9:00 PM
    Sunday:    10:00 AM – 7:00 PM
  

// Buttons:
[CALL STORE] outline dark
[WHATSAPP] primary dark
[GET DIRECTIONS] ghost with external link icon → mapUrl
```

---

### FOOTER

```tsx



    
    {/* Top row */}
    


      
      {/* Brand */}
      


        

TANISHQ JEWELLERS


        

GHATANJI, MAHARASHTRA


      


      
      {/* Nav links */}
      
        {['Collection', 'Gold', 'Diamond', 'Bridal', 'About', 'Visit'].map(link => (
          
        ))}
      
      
      {/* Contact */}
      


        
           INSTAGRAM
        
        
           WHATSAPP
        
        
           CALL
        
      


    


    
    {/* Bottom row */}
    


      

Rakesh Chandarana Road, Ghatanji, Maharashtra 445301


      

© 2024 Tanishq Jewellers Ghatanji. All rights reserved.


    


    
  


```

---

## SEARCH OVERLAY — `SearchOverlay.tsx`

Triggered by Search icon in navbar. Use shadcn `Dialog` full-screen.

```tsx
// Full-screen white overlay
// Header: "SEARCH THE COLLECTION" — font-serif font-light text-4xl text-center mb-8
// Input: large, borderless, border-b border-border, text-xl, placeholder "Type to search..."
// Results appear below as product cards (same as ProductCard)
// Filter by: name, category, collection, material, tags
// ESC closes · X button top-right
```

---

## ANIMATION SYSTEM

Global Framer Motion patterns. Create `src/lib/animations.ts`:

```ts
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
}

export const imageReveal = {
  initial: { clipPath: 'inset(0 0 100% 0)' },
  whileInView: { clipPath: 'inset(0 0 0% 0)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const scaleHover = {
  whileHover: { scale: 1.04 },
  transition: { duration: 0.5, ease: 'easeOut' },
}
```

**Rules:**
- Wrap section entry in `motion.div` with `fadeUp` (not every child, just the container)
- Product images get `scaleHover`
- Editorial image panels get `imageReveal` on scroll
- Mobile menu slides from right with `x: '100%' → 0`
- Page transitions: `opacity 0 → 1, duration 0.3s` on route change

**NEVER use:** particles, glitter, rotation, bounce, parallax scroll effects, spring physics on layout, staggered text character animation.

---

## MOBILE RULES (non-negotiable)

- Hero: `100svh` (not 100vh — avoids mobile browser chrome issues)
- Categories: `overflow-x-auto snap-x` — no JS carousel needed
- Product grid: always `grid-cols-2` on mobile
- Campaign banners: full-width, text left-aligned (not centered on mobile — prevents readability issues)
- Product detail: image full-width top → info below → sticky WhatsApp CTA at `fixed bottom-0 inset-x-0 p-4 bg-white border-t border-border z-40 md:hidden`
- Navigation Sheet: full-height, `w-screen max-w-none`
- No horizontal overflow anywhere: add `overflow-x-hidden` to `` and ``
- All interactive targets: minimum `44px` height/width

---

## QUALITY CHECKLIST (check against these before finishing)

```
✓ First 3 seconds feel premium — hero dominates, no clutter
✓ Site is 90%+ white — not beige, not cream, not gold
✓ Navigation is quiet — no heavy dropdown menus, no mega-nav
✓ Gold (#B69B68) appears ONLY as accent text/lines — never as button fill or background
✓ No ecommerce elements — zero cart, zero price, zero checkout
✓ WhatsApp CTA is visible on every product (mobile: fixed bottom bar)
✓ All gradients use stone/amber/rose/slate — never bright colors
✓ Typography hierarchy is consistent — serif for headlines, sans for labels
✓ Catalogue grid uses whitespace — products aren't crammed together
✓ Mobile menu works smoothly and closes properly
✓ Search overlay opens and filters correctly
✓ Product detail page feels desirable — not just a listing
✓ Footer is clean — not a wall of links
✓ No horizontal scroll on any viewport
✓ All placeholder gradients are visually cohesive (warm neutrals only)
✓ Animations enhance — they don't distract
✓ The website feels like a professional jewellery brand
```

---

## PLACEHOLDER IMAGE STRATEGY

**Do not use random external image URLs.** Instead, use CSS gradients styled to evoke jewellery photography:

```tsx
// MediaPlaceholder.tsx — reusable
interface MediaPlaceholderProps {
  gradient: string  // Tailwind gradient classes
  aspectRatio?: string
  className?: string
  children?: ReactNode
}

// Usage examples:
// Hero: "from-stone-900 via-stone-800 to-amber-950"
// Gold jewellery: "from-amber-100 via-yellow-50 to-stone-100"
// Diamond: "from-slate-50 via-stone-100 to-blue-50"
// Bridal: "from-rose-100 via-amber-50 to-yellow-100"
// Everyday: "from-stone-100 via-amber-50 to-stone-200"
```

All product images, hero slides, category tiles, campaign banners, and Instagram tiles use this system. This ensures zero broken images while maintaining visual cohesion.

When real photography is added, simply replace the gradient div with an `` tag — the component interface remains the same.

---

## FINAL NOTE

This site should feel like it was designed by a premium agency for an international jewellery brand. Every decision — padding, font size, color usage, animation timing — should be deliberate. If something looks like a template, change it. The gold accent line on the hero slide, the editorial alternating feature layout, the full-screen cinematic section — these are what make this distinct. Build those with care.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/62ce05e7-6619-4fe7-b571-57d940c9a77e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
