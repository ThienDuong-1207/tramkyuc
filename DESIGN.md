---
name: Trạm Ký Ức — Sân Chơi Bệnh Viện
description: Folk-art QR storybook pages that turn hospital-playground murals into a living, tap-to-listen sách nói
colors:
  paper: "#FBF3DE"
  cream: "#F3E3B8"
  cream-deep: "#E8D29A"
  red: "#C8402E"
  red-deep: "#A52E1F"
  gold: "#D9A441"
  green: "#5C6B3B"
  green-deep: "#3F4A28"
  ink: "#3A2A1A"
typography:
  display:
    fontFamily: "Baloo 2, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  label:
    fontFamily: "Baloo 2, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  card: "32px"
  button: "18px"
  icon-tile: "12px"
  pill: "100px"
spacing:
  card-padding: "28px 26px 30px"
  button-padding: "16px 18px"
  action-gap: "12px"
components:
  button-story:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "{spacing.button-padding}"
  button-story-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  button-music:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "{spacing.button-padding}"
  button-music-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
  card-zone:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
  eyebrow-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
---

# Design System: Trạm Ký Ức — Sân Chơi Bệnh Viện

## 1. Overview

**Creative North Star: "Cuốn Sách Sống" (The Living Storybook)**

Every screen is a page in a wooden storybook a child finds propped against the wall art they're already staring at, not an app they navigate. The system is built from one reference implementation — `qr-demo-su-tich-con-nghe.html` (the Sự Tích Con Nghê page) — and every new zone page is a retelling of that same object, not a new invention: warm paper card, a painted folk-art creature floating above a red banner, two oversized buttons, a bouncing "now playing" strip. Nothing here should look tapped out on a laptop; it should look like it was painted for the wall first and the phone second.

It explicitly rejects: cold SaaS geometry (gradients as decoration, 24–40px card radii, glassmorphism), clinical hospital surfaces (stark white, medical blue/green), and Western cartoon illustration (Disney/Pixar rounding). The palette and motifs stay inside the Đông Hồ / mosaic-guardian folk-art idiom already painted on the playground walls.

**Key Characteristics:**
- One warm paper card, centered, max 430px wide — the entire experience lives inside it, no site chrome around it.
- A tall painted-banner header (red-to-red-deep gradient) with a floating folk-art SVG creature and a gold cloud-band horizon.
- Exactly two primary actions per page: nghe truyện (story, red) and nghe nhạc (music, green) — never more, never fewer.
- A dashed hairline separates content from a quiet footer credit; nothing else on the page competes with it.

## 2. Colors

A warm, saturated red–gold–green folk palette on a cream-paper ground — no neutral gray anywhere in the system; every "gray" role is instead a low-saturation step of ink or cream.

### Primary
- **Đình Red** (#C8402E): the story action, the banner background gradient's top stop, and the loudest accent on the page. Always paired with `paper` text, never with dark ink.
- **Đình Red Deep** (#A52E1F): banner gradient's bottom stop and the story button's shadow tint (`rgba(200,64,46,0.55)`). Never used as a flat fill on its own.

### Secondary
- **Bamboo Green** (#5C6B3B): the music action and the secondary folk-motif color (creature markings, decorative wave line). Paired with `paper` text.
- **Bamboo Green Deep** (#3F4A28): the now-playing panel's text color and the music button's shadow tint.

### Tertiary
- **Temple Gold** (#D9A441): the cloud-band horizon strip and the folk creature's face fill (`#F0CD4A` as its lighter step) — an ornament color, never a text or button fill.

### Neutral
- **Paper** (#FBF3DE): the card surface and button icon-tile foreground — the lightest step, reserved for the card body beneath the banner.
- **Cream** (#F3E3B8): the page background behind the card, plus the card's dashed footer divider tint.
- **Cream Deep** (#E8D29A): the now-playing panel's background — one step darker than the page, used only for that single "active state" surface.
- **Ink** (#3A2A1A): all body copy, the eyebrow chip fill, and the footer logo tile. The only near-black in the system; it is warm brown, never true black or gray.

### Named Rules
**The Two-Action Rule.** A zone page never shows more than two primary buttons (story, music). Additional content (duration, credit) is metadata, rendered smaller and quieter, never as a third button.

**The Warm-Only Rule.** No token in this system may be a desaturated gray. Every neutral is a step of `ink` or `cream`/`paper`; if a value needs to read as "muted," lower its opacity against those tokens rather than introducing gray.

## 3. Typography

**Display Font:** Baloo 2 (weights 500–800), with sans-serif fallback
**Body Font:** Be Vietnam Pro (weights 400–700), with sans-serif fallback

**Character:** Baloo 2 is round, thick, and toy-like — it carries every headline, button label, and the eyebrow chip, giving the page a hand-lettered-signboard voice. Be Vietnam Pro is a plain, highly legible Vietnamese-diacritic-safe humanist sans reserved for anything a parent needs to actually read (subtitle, duration, footer credit). The pairing is a deliberate contrast axis: playful display type for what a child taps, quiet body type for what an adult reads.

### Hierarchy
- **Display** (800, 28px, line-height 1.15): the zone title (e.g. "Sự tích Con Nghê"), always `red-deep`, always the first thing read.
- **Label** (700, 17px): button text — the primary word ("Nghe truyện cổ tích") in Baloo 2 inside each action button, always on a colored fill.
- **Body** (400, 14.5px, line-height 1.5, ~60ch max): the one-sentence hook under the title, `green-deep` at 85% opacity.
- **Caption** (500, 11.5–13px): duration metadata row, button sub-labels, footer credit, now-playing sub-text — always the quietest layer, opacity 55–80%.
- **Eyebrow label** (600, 12px, uppercase, letter-spacing 0.08em): the small "Trụ điêu khắc · Khu vui chơi" chip pinned to the banner corner — the only uppercase-tracked text in the system, reserved for that one chip.

### Named Rules
**The One Eyebrow Rule.** Uppercase tracked labels are reserved for the single zone-identifier chip in the banner corner. Never repeat the eyebrow treatment as a section kicker elsewhere on the page.

## 4. Elevation

Flat by default; depth comes from warm colored shadows tinted to match the element casting them, never neutral gray. The card itself lifts off the cream background with a soft ink-tinted shadow; each button casts a shadow tinted to its own fill color, not a generic drop shadow.

### Shadow Vocabulary
- **Card lift** (`0 30px 60px -20px rgba(58,42,26,0.35), 0 0 0 1px rgba(58,42,26,0.06)`): the one shadow on the page background — separates the paper card from the cream page.
- **Story button glow** (`0 10px 20px -8px rgba(200,64,46,0.55)`, hover `0 12px 24px -8px rgba(200,64,46,0.7)`): red-tinted, never gray.
- **Music button glow** (`0 10px 20px -8px rgba(92,107,59,0.5)`, hover `0 12px 24px -8px rgba(92,107,59,0.65)`): green-tinted, never gray.
- **Illustration drop** (`drop-shadow(0 8px 18px rgba(0,0,0,0.25))`): the only near-neutral shadow, reserved for the floating SVG creature since it sits over a saturated red banner where a tinted shadow would disappear.

### Named Rules
**The Tinted-Shadow Rule.** Any shadow cast by a colored element (button, chip) inherits that element's hue at low opacity. A gray `box-shadow` on a red or green button is a defect, not a stylistic choice.

## 5. Components

Every component is tactile and toy-like: thick radii, colored fills, no thin gray outlines.

### Buttons
- **Shape:** 18px radius (`rounded.button`), full width, stacked vertically with 12px gaps — never side-by-side, since each must be large enough for a child's whole hand.
- **Primary (Story):** `red` fill, `paper` text, 16×18px padding, leading 42×42px icon tile at 18% white overlay, story-button glow shadow.
- **Secondary (Music):** identical shape, `green` fill, music-button glow shadow. Same visual weight as Primary — "secondary" refers to list order, not visual hierarchy; both are equally primary actions.
- **Active/Press:** `transform: scale(0.97)` on `:active`, no color change — press feedback is physical (a squash), not chromatic.
- **Icon tile:** 42×42px, 12px radius, `rgba(255,255,255,0.18)` fill, centered 22px SVG icon in `paper`.

### Now-Playing Panel
- **Style:** `cream-deep` fill, 16px radius, appears only after a button is tapped (`display: none` → `flex`), never visible at rest.
- **Signature Component — the Bounce Bars.** Four thin bars (3px wide, `red` fill, 2px radius) animate height via `scaleY` on a 1s ease-in-out loop with staggered delays (0, 0.15s, 0.3s, 0.45s) — this is the system's one signature motion flourish, reserved exclusively for signaling active audio. It must pause/freeze under `prefers-reduced-motion: reduce`, replaced by a static equalizer glyph.

### Cards / Containers
- **Corner Style:** 32px radius (`rounded.card`) — the single largest radius in the system, reserved for the outermost card only. No nested element reuses this radius.
- **Background:** `paper`, with a tall `red → red-deep` gradient banner clipped to the same outer radius at the top.
- **Shadow Strategy:** card-lift shadow only (see Elevation).
- **Border:** none — separation is by shadow and color contrast, never a stroke.
- **Internal Padding:** 28px top, 26px sides, 30px bottom (`spacing.card-padding`).

### Chips
- **Eyebrow chip:** `rgba(0,0,0,0.25)` over the banner image with `backdrop-filter: blur(4px)`, `paper` text, 100px pill radius, 7×14px padding — the only place `blur()` appears in the system, justified because it sits over a busy illustrated banner, not as decoration on a flat surface.

### Navigation
None. Zone pages have zero nav chrome by design (see PRODUCT.md's Instant-and-Disposable principle) — the only wayfinding is a small footer credit line, not a nav bar.

### Signature Component: The Floating Creature
A single hand-painted-style SVG folk creature (170–200px) sits at the base of the banner, animated with a slow 4s `translateY(±8px)` float. Each zone gets its own creature/motif matching its physical mural (guardian lion for the mosaic pillar, a different folk motif per zone), but the float animation, size, and drop-shadow treatment stay identical across all five — the creature changes, the way it breathes does not.

## 6. Do's and Don'ts

### Do:
- **Do** keep every zone page a variation of the one card structure (banner → title → two buttons → now-playing → footer); consistency across the five zones is the point.
- **Do** tint every shadow to the color of the element casting it (Tinted-Shadow Rule).
- **Do** use Baloo 2 for anything a child taps or reads at a glance, Be Vietnam Pro for anything a parent reads closely.
- **Do** cap primary actions at two per page (Two-Action Rule).
- **Do** provide a static/instant fallback for the bounce bars and floating-creature animation under `prefers-reduced-motion: reduce`.
- **Do** keep every button ≥44×44px effective touch target.

### Don't:
- **Don't** introduce gray — no `#888`-style neutrals anywhere; every muted value is ink or cream at reduced opacity (Warm-Only Rule).
- **Don't** use card or section radii above 32px, and reserve 32px for the outer card only — no 40px+ "insanely rounded" surfaces.
- **Don't** add glassmorphism/blur anywhere except the one eyebrow chip over the banner illustration.
- **Don't** add a nav bar, breadcrumb, or multi-page chrome — each zone page is a single disposable scan destination.
- **Don't** render the illustrations as Western-cartoon (Disney/Pixar) style, sketchy hand-drawn doodles, or generic clip-art — stay inside the Đông Hồ / mosaic-guardian folk idiom.
- **Don't** use a stark white or medical blue/green background on any zone page; the page background is always `cream`.
