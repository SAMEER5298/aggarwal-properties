# Design Brief: Aggarwal Properties — Navy & Gold Luxury Real Estate

## Tone & Differentiation
Premium, trusted, aspirational. Navy conveys stability and trust; gold conveys wealth and prestige. Clean, professional aesthetic targeting high-net-worth buyers, sellers, renters in Delhi.

## Color Palette (OKLCH)

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Primary Navy | 0.1 0.05 270° | #0B1D3A | Navbar, hero, headings, footer |
| Accent Gold | 0.72 0.15 60° | #C9A84C | CTA buttons, highlights, icons |
| Light Gold | 0.81 0.12 60° | #E5C97A | Hover states, soft accents |
| Pale Gold | 0.95 0.04 60° | #F7EDD0 | Section backgrounds |
| Cream White | 0.98 0.01 30° | #FAF7F2 | Cards, page background |
| Text Dark | 0.12 0.04 270° | #1A1A2E | Body headings |
| Text Mid | 0.32 0.04 270° | #4A5568 | Body paragraphs |
| Text Light | 0.58 0.06 260° | #8896AB | Captions, meta |

## Typography
Display: **Fraunces** (serif, 400/700) — elegant, luxury headings. H1: 3.5–4rem, H2: 2–2.5rem, H3: 1.25–1.5rem.
Body: **DM Sans** (sans-serif, 400/700) — clean, readable. 1rem, line-height 1.7.
Mono: **Geist Mono** (monospace) — code, technical content.

## Structural Zones

| Zone | Background | Border | Treatment |
|------|------------|--------|-----------|
| Header/Navbar | Navy primary | None | Sticky, scroll-triggers solid navy |
| Hero | Navy gradient + pattern | None | Radial gold glow right, cream text |
| Content Sections | Alternating cream/pale-gold | None | Light elevation, 2rem padding |
| Property Cards | Cream | Subtle navy @ hover | Rounded lg, shadow-elevated, scale 1.02 |
| CTA Sections | Navy primary | Gold border | White text, gold buttons |
| Footer | Navy primary | Gold border-t | 4-column layout |

## Component Patterns
- Buttons: solid gold bg + navy text (primary), navy border + navy text (secondary), hover: light-gold bg
- Cards: cream bg, rounded-lg, shadow-subtle, hover: scale(1.02) + shadow-elevated
- Navigation: transparent bg at top, gold underline slide on hover, solid navy bg on scroll
- Testimonial carousel: Swiper.js, autoplay + loop, dot indicators
- Forms: navy inputs with gold focus-ring, toast notifications on submit

## Motion & Animation
- Fade-in on scroll (Intersection Observer): sections slide up 24px + fade in over 0.6s
- Nav link underline: gold slides left-to-right on hover (0.3s)
- Card hover: scale(1.02) + shadow-elevated (0.3s)
- Button press: scale(0.97) on active (0.2s)
- WhatsApp button: pulse ring 2s infinite
- All animations: disabled via prefers-reduced-motion media query

## Spacing & Rhythm
Tight baseline: 0.75rem. Sections: 2rem padding (mobile), 4rem padding (desktop). Cards: 3-column grid (desktop), 2-column (tablet), 1-column (mobile). 

## Signature Detail
Gold radial glow orb on hero right; gold underline slide on nav links; property card hover scale + elevated shadow; cream/pale-gold section alternation.

## Constraints
- No raw hex colors in components — use CSS variables only
- No gradients except hero gradient + chart colors
- No animations beyond scroll fade-in, hover scale, nav underline, button press, WhatsApp pulse
- Max 3 font weights per family
- Rounded corners: 0, 0.5rem (sm), 0.75rem (lg), full (pills)
