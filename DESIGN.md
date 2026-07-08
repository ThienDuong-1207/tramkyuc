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
  track-row-story:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
  track-row-music:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
  track-row-active:
    backgroundColor: "{colors.cream-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
  play-button:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
  card-page:
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

The whole playground shares one printed QR card — scanning it opens a single wooden storybook shelf, not a page tied to one mural. The system is still built from the original reference implementation — `qr-demo-su-tich-con-nghe.html` — but that hero-banner-plus-two-buttons layout is now the header of a scrollable track list, not the whole screen: warm paper card, a painted folk-art gate floating above a red banner, then a stack of tap-to-expand story/music rows, each opening into a scrubbable player in place. Nothing here should look tapped out on a laptop; it should look like it was painted for the wall first and the phone second.

It explicitly rejects: cold SaaS geometry (gradients as decoration, 24–40px card radii, glassmorphism), clinical hospital surfaces (stark white, medical blue/green), and Western cartoon illustration (Disney/Pixar rounding). The palette and motifs stay inside the Đông Hồ / mosaic-guardian folk-art idiom already painted on the playground walls.

**Key Characteristics:**
- One warm paper card, centered, max 430px wide — the entire experience lives inside it, no site chrome around it.
- A shorter painted-banner header (red-to-red-deep gradient) with a floating folk-art gate SVG and a gold cloud-band horizon — generic to the whole playground, not tied to one mural, since one QR now serves all five locations.
- A vertical list of track rows (story rows in red, music rows in green); tapping a row expands it into a seek bar + transport controls in place, collapsing any previously-open row.
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
**The One-List Rule.** All content lives in a single flat scrollable list on the one shared page — no per-location pages, no grouping/tabs by category. Row order is the only structure; color (red/green) is the only category signal.

**The Warm-Only Rule.** No token in this system may be a desaturated gray. Every neutral is a step of `ink` or `cream`/`paper`; if a value needs to read as "muted," lower its opacity against those tokens rather than introducing gray.

## 3. Typography

**Display Font:** Baloo 2 (weights 500–800), with sans-serif fallback
**Body Font:** Be Vietnam Pro (weights 400–700), with sans-serif fallback

**Character:** Baloo 2 is round, thick, and toy-like — it carries every headline, button label, and the eyebrow chip, giving the page a hand-lettered-signboard voice. Be Vietnam Pro is a plain, highly legible Vietnamese-diacritic-safe humanist sans reserved for anything a parent needs to actually read (subtitle, duration, footer credit). The pairing is a deliberate contrast axis: playful display type for what a child taps, quiet body type for what an adult reads.

### Hierarchy
- **Display** (800, 26px, line-height 1.15): the page title ("Nghe Truyện & Nhạc"), always `red-deep`, always the first thing read.
- **Label** (700, 15.5px): track row titles ("Thạch Sanh", "Nhạc Thư Giãn") in Baloo 2 — named directly after the audio content, never a generic verb phrase like "Nghe truyện".
- **Body** (400, 14px, line-height 1.5): the one-sentence instruction under the page title.
- **Caption** (500, 11.5–12.5px): row subtitles, durations, time labels, footer credit — always the quietest layer, opacity 55–80%.
- **Eyebrow label** (600, 12px, uppercase, letter-spacing 0.08em): the "Sân Chơi · Vó Ngựa" chip pinned to the banner corner — the only uppercase-tracked text in the system, reserved for that one chip.

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

### Track Row (signature component)
- **Shape:** 18px radius (`rounded.button`), full width, stacked vertically with 10px gaps in the list.
- **At rest:** `cream` fill, a 40×40px rounded-icon tile (12px radius) in `red` for story rows / `green` for music rows with a white play glyph, title (Baloo 2, 15.5px, `ink`) + subtitle (caption, `ink` 60%) stacked left, duration (caption, tabular-nums, `ink` 55%) right-aligned.
- **Active/expanded:** row background steps to `cream-deep`; the icon glyph swaps to a pause bars glyph; a player panel opens beneath the header inside the same row (see below). Only one row is expanded at a time — opening a new row closes the previous one via shared player state, not per-row state.
- **Tap target:** the whole row header is a button, min-height 44px.

### Inline Player Panel
- **Trigger:** appears only inside the currently-expanded track row; every other row shows just its static header.
- **Seek bar:** a native `<input type="range">` restyled — 6px track at `rgba(ink, 0.15)`, an 18px `red`-filled thumb with a `paper` ring border and a small drop shadow. Current-time and total-duration labels (caption, tabular-nums) flank the bar.
- **Transport:** three circular controls centered below the seek bar — 40px ghost-fill (`rgba(ink,0.08)`) skip ±10s buttons flanking a 52px solid `red` play/pause button with the story-button glow shadow. Skip icons are a circular-arrow-with-triangle glyph, not bare chevrons, so the "jump 10s" affordance reads at a glance.
- **Error state:** if a track has no uploaded file yet, the panel shows a single centered `red-deep` line ("Chưa có file audio…") instead of the seek bar/transport — no broken controls are ever shown.

### Cards / Containers
- **Corner Style:** 32px radius (`rounded.card`) — the single largest radius in the system, reserved for the outermost card only. No nested element reuses this radius (track rows top out at 18px).
- **Background:** `paper`, with a shorter `red → red-deep` gradient banner clipped to the same outer radius at the top.
- **Shadow Strategy:** card-lift shadow only (see Elevation).
- **Border:** none — separation is by shadow and color contrast, never a stroke.
- **Internal Padding:** 26px top, 22px sides, 24px bottom around the list.

### Chips
- **Eyebrow chip:** `rgba(0,0,0,0.25)` over the banner image with `backdrop-filter: blur(4px)`, `paper` text, 100px pill radius, 7×14px padding — the only place `blur()` appears in the system, justified because it sits over a busy illustrated banner, not as decoration on a flat surface. Now reads "Sân Chơi · Vó Ngựa" (playground-wide, not per-zone) since one page serves every location.

### Navigation
None. The single `/nghe` page has zero nav chrome by design (see PRODUCT.md's Instant-and-Disposable principle) — the only wayfinding is a small footer credit line, not a nav bar.

### Signature Illustration: The Gate
One hand-painted-style SVG folk motif — the cổng tam quan (three-gate entrance) — sits at the base of the banner, animated with a slow 4s `translateY(±8px)` float. It no longer varies per zone (there is only one page now); it represents the playground as a whole rather than any single mural. Reduced-motion turns the float off entirely (a static illustration, not a substitute animation).

## 6. Do's and Don'ts

### Do:
- **Do** keep the whole experience on one page/one QR code (One-List Rule) — no per-location routes.
- **Do** tint every shadow to the color of the element casting it (Tinted-Shadow Rule).
- **Do** use Baloo 2 for anything a child taps or reads at a glance, Be Vietnam Pro for anything a parent reads closely.
- **Do** collapse any open track row before expanding another — only one player panel visible at a time.
- **Do** provide a static/instant fallback for the floating-gate animation under `prefers-reduced-motion: reduce`.
- **Do** keep every button/tap target ≥44×44px, including the skip and seek-thumb controls.

### Don't:
- **Don't** introduce gray — no `#888`-style neutrals anywhere; every muted value is ink or cream at reduced opacity (Warm-Only Rule).
- **Don't** use card or section radii above 32px, and reserve 32px for the outer card only — no 40px+ "insanely rounded" surfaces.
- **Don't** add glassmorphism/blur anywhere except the one eyebrow chip over the banner illustration.
- **Don't** add a nav bar, breadcrumb, or multi-page chrome — each zone page is a single disposable scan destination.
- **Don't** render the illustrations as Western-cartoon (Disney/Pixar) style, sketchy hand-drawn doodles, or generic clip-art — stay inside the Đông Hồ / mosaic-guardian folk idiom.
- **Don't** use a stark white or medical blue/green background; the page background is always `cream`.
- **Don't** reintroduce per-location pages/QR codes — the product decision is one shared code and one scrollable list.
