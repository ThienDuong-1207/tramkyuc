# Product

## Register

brand

## Users

Two audiences, one visit:
- **Children (roughly 3–10)** waiting in a hospital playground/waiting area. They spot the same QR tag repeated at each decorated spot (pillar, carousel, easel, rest nook, gate), scan it on a parent's phone, and pick a story or song from a list to hear it. They can't read much, so the interface has to work on sight and touch alone.
- **Parents/caregivers**, often stressed or distracted, holding the phone. They scan, hand it over, and want it to work instantly — no login, no ads, no confusing choices.
- **Hospital staff (admin)** who print the physical QR tags. They visit one internal page to grab the single QR image, URL, and a checklist of which audio files need to be uploaded — this surface is a tool, not an experience.

Context: hospital wifi/3G, mid-range phones, short attention spans, an environment that is otherwise clinical and stressful.

## Product Purpose

Turn the hand-painted folk-art decorations already on the playground walls into a "living storybook": one QR code, printed and posted at all five decorated spots, opens a page listing every folk story and children's song on hand so the child can pick freely — with a real scrub bar and skip controls, not just play/pause. Success = a child finds and starts a track within seconds of scanning, understands what to do without reading instructions, and the wait feels a little less like a hospital.

The admin page is a secondary, purely functional surface: one screen with the single printable QR code plus a checklist of expected audio filenames.

## Brand Personality

Warm, handmade, dân gian (Vietnamese folk-art) — like a wooden storybook toy, not a screen. Three words: **ấm áp (warm), thủ công (handmade), an ủi (soothing)**.

Established visual language (approved, do not redirect): cream/paper background, red–gold–green folk palette, Baloo 2 display + Be Vietnam Pro body, a folk-art gate illustration, tactile track rows that expand into a player with seek bar and skip controls. `qr-demo-su-tich-con-nghe.html` at the repo root is the original reference build — the current single-page track list extends that same visual system rather than reinterpreting it.

## Anti-references

- Not a SaaS/tech product: no cold geometric sans display type, no gradients-as-decoration, no oversized 24–40px card radii, no glass/blur cards.
- Not a clinical hospital surface: no stark white or medical blue/green backgrounds — stay in the warm cream/red/gold/green folk palette already approved.
- Not Western cartoon (Disney/Pixar) illustration style — SVG art stays in the Vietnamese folk-art idiom (Đông Hồ prints, mosaic guardians, communal-house motifs), matching the Nghê illustration in the reference file.

## Design Principles

1. **One code, one list.** A single QR code and a single page serve every physical location — no per-location routes to keep in sync; content changes happen in one data file.
2. **Legible at a glance, usable by a child.** No reading required to know what to do; tapping a row's icon is the whole interaction, and the expanded player's controls are large and obvious.
3. **Instant and disposable.** No login, no navigation chrome, no ads — the page opens straight into content, because it exists to be scanned repeatedly and used for a few minutes at a time.
4. **Admin stays out of the way.** The internal page is plain and functional; it should never compete visually with the listener-facing page.

## Accessibility & Inclusion

Baseline only: touch targets ≥44×44px, body text contrast ≥4.5:1 against the cream background, respects `prefers-reduced-motion` (the floating gate illustration gets a static fallback), works acceptably on slow hospital wifi/3G (no heavy client bundles, optimized SVGs over raster images).
