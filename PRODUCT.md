# Product

## Register

brand

## Users

Two audiences, one visit:
- **Children (roughly 3–10)** waiting in a hospital playground/waiting area. They spot a QR tag on a decorated pillar, carousel, or easel, scan it on a parent's phone, and tap a big button to hear a story or song. They can't read much, so the interface has to work on sight and touch alone.
- **Parents/caregivers**, often stressed or distracted, holding the phone. They scan, hand it over, and want it to work instantly — no login, no ads, no confusing choices.
- **Hospital staff (admin)** who print the physical QR tags. They visit one internal index page to grab each zone's QR image and URL — this surface is a tool, not an experience.

Context: hospital wifi/3G, mid-range phones, short attention spans, an environment that is otherwise clinical and stressful.

## Product Purpose

Turn the hand-painted folk-art decorations already on the playground walls (mosaic guardian creatures, a wooden carousel, painting easels, a rest nook, the entrance gate) into a "living storybook": each QR code opens a page matching the art in front of the child, offering a short folk story or a piece of children's music. Success = a child taps play within seconds of scanning, understands what to do without reading instructions, and the wait feels a little less like a hospital.

The admin page is a secondary, purely functional surface: one screen listing all zones with their printable QR codes and destination URLs.

## Brand Personality

Warm, handmade, dân gian (Vietnamese folk-art) — like a wooden storybook toy, not a screen. Three words: **ấm áp (warm), thủ công (handmade), an ủi (soothing)**.

Established visual language (approved, do not redirect): cream/paper background, red–gold–green folk palette, Baloo 2 display + Be Vietnam Pro body, rounded folk-art SVG illustrations per zone, large tactile buttons with a "now playing" bar. `qr-demo-su-tich-con-nghe.html` at the repo root is the reference build — new zone pages extend this exact system rather than reinterpreting it.

## Anti-references

- Not a SaaS/tech product: no cold geometric sans display type, no gradients-as-decoration, no oversized 24–40px card radii, no glass/blur cards.
- Not a clinical hospital surface: no stark white or medical blue/green backgrounds — stay in the warm cream/red/gold/green folk palette already approved.
- Not Western cartoon (Disney/Pixar) illustration style — SVG art stays in the Vietnamese folk-art idiom (Đông Hồ prints, mosaic guardians, communal-house motifs), matching the Nghê illustration in the reference file.

## Design Principles

1. **One approved system, five rooms.** Every zone page is a variation on `qr-demo-su-tich-con-nghe.html`'s structure (art header → title → two big play buttons → now-playing bar), not a fresh design each time.
2. **Legible at a glance, usable by a child.** No reading required to know what to do; the primary action (play) is the biggest, boldest thing on the screen.
3. **Instant and disposable.** No login, no navigation chrome, no ads — a page opens straight into content, because it exists to be scanned once and used for a few minutes.
4. **Admin stays out of the way.** The internal QR-index page is plain and functional; it should never compete visually with the zone pages.

## Accessibility & Inclusion

Baseline only: touch targets ≥44×44px, body text contrast ≥4.5:1 against the cream background, respects `prefers-reduced-motion` (the floating illustration and bounce bars get a static/instant fallback), works acceptably on slow hospital wifi/3G (no heavy client bundles, optimized SVGs over raster images).
