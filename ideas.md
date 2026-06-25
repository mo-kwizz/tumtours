# Design Philosophy: Tum Tours and Safaris

## Chosen Approach: **Coastal Expedition**

### Design Movement
**Organic Modernism with Travel Nostalgia** — Blending contemporary minimalism with the warmth of vintage travel photography and explorer's journals. The aesthetic evokes the golden age of safari exploration while maintaining a sophisticated, present-day digital presence.

### Core Principles

1. **Authenticity Through Warmth** — Every visual element should feel grounded in real Zanzibar and Tanzania experiences, not generic travel marketing. Prioritize genuine photography and storytelling over stock imagery.

2. **Layered Navigation** — Content unfolds like chapters in an adventure journal. Hero draws you in, services reveal depth, testimonials build trust, and booking closes the loop.

3. **Organic Asymmetry** — Reject centered, grid-locked layouts. Use diagonal cuts, offset sections, and flowing compositions that mirror natural landscapes and water movement.

4. **Tactile Digital Experience** — Incorporate subtle textures, hand-drawn accents, and organic shapes to make the digital interface feel tangible and inviting.

### Color Philosophy

**Primary Palette:**
- **Ocean Teal** (`#0D7B7B` / `oklch(0.45 0.15 200)`): Deep, trustworthy, evokes the Indian Ocean. Used for CTAs, accents, and primary interactive elements.
- **Sandy Cream** (`#F5E6D3` / `oklch(0.92 0.04 80)`): Warm, inviting, represents Zanzibar's beaches. Used for backgrounds, cards, and soft contrast.
- **Safari Earth** (`#8B6F47` / `oklch(0.55 0.08 60)`): Rich, grounded, represents mainland safaris. Used for typography, borders, and secondary accents.
- **Off-White** (`#FEFDFB`): Clean, breathable, primary background.

**Emotional Intent:** The palette tells a story of dual experiences—the serene ocean and the vibrant mainland. Teal brings calm and trust; earth tones ground the experience in adventure.

### Layout Paradigm

**Flowing, Non-Linear Composition:**
- Hero section uses a diagonal wave divider to transition into About section
- Services cards are staggered (alternating left/right) rather than grid-aligned
- Gallery section uses masonry layout with organic image sizing
- Testimonials section flows vertically with offset card positioning
- Contact form sits in a warm, textured container at the bottom

**Key Structure:** Each section overlaps slightly with the previous one (negative margins, z-index layering) to create visual continuity and a sense of flowing through an experience.

### Signature Elements

1. **Organic Wave Dividers** — Hand-drawn-style SVG waves separate sections, reinforcing the ocean/water theme and breaking up rigid layouts.

2. **Explorer's Badge Accents** — Subtle circular badges with icons (compass, map, binoculars) appear throughout to mark key tour types and services.

3. **Textured Overlays & Grain** — Subtle noise/grain textures on backgrounds and cards add tactile depth and prevent flatness.

### Interaction Philosophy

**Responsive & Delightful:**
- Hover states on cards trigger a subtle lift (shadow increase) and slight scale (1.02x) to suggest interactivity
- Gallery images zoom smoothly on hover (1.05x) with a soft shadow
- CTA buttons respond with a press-down animation (scale 0.97) on click
- Scroll-triggered animations reveal sections with staggered fade-in + slide-up effects
- Form inputs have focus states with a teal underline and soft glow

**Principle:** Every interaction should feel intentional and rewarding, never jarring.

### Animation Guidelines

- **Entrance animations:** Staggered fade-in + slide-up (300ms ease-out) for section content
- **Hover states:** 150ms ease-out for card lifts and image zooms
- **Button press:** 100ms scale-down (0.97x) on active state
- **Scroll reveals:** Intersection Observer triggers animations as sections enter viewport
- **Respect `prefers-reduced-motion`:** All animations gate behind media query

### Typography System

**Font Pairing:**
- **Display Font:** Playfair Display (serif, bold, elegant) — Headlines, section titles, brand wordmark
- **Body Font:** Lato (sans-serif, warm, readable) — Body copy, descriptions, form labels

**Hierarchy:**
- **H1 (Hero Title):** Playfair Display, 56px, bold, teal
- **H2 (Section Titles):** Playfair Display, 40px, bold, safari earth
- **H3 (Card Titles):** Playfair Display, 24px, semi-bold, safari earth
- **Body:** Lato, 16px, regular, foreground
- **Small/Meta:** Lato, 14px, regular, muted foreground

**Brand Voice Principle:** Titles should feel bold and inviting (Playfair's elegance), while body copy remains warm and accessible (Lato's friendliness).

### Brand Essence

**One-Line Positioning:**
> *Tum Tours and Safaris: Your trusted gateway to authentic Zanzibar and Tanzania adventures, guided by locals who know every hidden gem.*

**Personality Adjectives:**
1. **Adventurous** — Bold, exploratory, ready for the unexpected
2. **Authentic** — Genuine, grounded, deeply connected to local culture
3. **Warm** — Welcoming, personal, like a trusted friend

### Brand Voice

**Tone:** Conversational yet professional, adventurous yet reassuring, local yet globally welcoming.

**Headline Examples:**
- "Discover the Soul of Zanzibar" (not "Welcome to Our Website")
- "Where Every Journey Tells a Story" (not "Explore Our Tours")

**CTA Examples:**
- "Start Your Adventure" (not "Get Started Today")
- "Book Your Story" (not "Book Now")

**Microcopy Examples:**
- "Seamless from airport to adventure" (not "Airport transfers available")
- "24/7, always ready for your call" (not "We're available 24/7")

### Wordmark & Logo

**Concept:** A stylized compass rose merged with a map pin, suggesting both direction and destination. The compass needle points upward (north) while the map pin's base curves like a wave, merging ocean and land themes.

**Style:** Bold, geometric, memorable. Works at small sizes (favicon) and large sizes (header). No text—the symbol stands alone as the brand mark.

**Color:** Ocean Teal as primary; Safari Earth as secondary accent.

### Signature Brand Color

**Ocean Teal** (`#0D7B7B`) — This is Tum Tours' ownable color. It appears in:
- Primary CTA buttons
- Link hover states
- Active navigation indicators
- Icon accents
- Section divider waves
- Form focus states

This color is unmistakably tied to the brand and appears consistently throughout the site.

---

## Implementation Notes

- All images should be sourced from Zanzibar and Tanzania or generated to match the aesthetic
- Avoid generic stock photos; prioritize authentic, locally-shot content
- Use the wave dividers to break up sections and reinforce the ocean theme
- Maintain consistent spacing (8px grid) for alignment and rhythm
- Test all animations on mobile to ensure smooth performance
- Ensure text contrast meets WCAG AA standards across all backgrounds
