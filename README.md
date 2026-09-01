# High Mileage Website v1.6

V1.6 is a code-only hero positioning update based on V1.5.

- Keeps the approved storm hero artwork unchanged.
- Keeps the V1.5 color, brightness, typography, navigation, and content.
- Enlarges and shifts the hero image on desktop/laptop screens so the existing lightning cross is positioned farther right and is less obstructed by the headline.
- Leaves tablet/mobile behavior unchanged from V1.5.
- Bottom-right seal/logo is intentionally unchanged for the next refinement pass.

Upload the root files and assets folder to the GitHub Pages repository, commit to `main`, allow Pages to redeploy, then hard refresh the site (Ctrl+F5 on Windows).

## v1.7 — Hero Fine-Tuning
- Code-only refinement; no new hero artwork.
- Restores more head/face clearance below the navigation.
- Slightly reduces the V1.6 zoom.
- Moves the approved hero image downward.
- Nudges the artwork to reveal more of the existing lightning cross.
- Preserves V1.6 color, brightness, typography, and other page styling.

## v1.8 — Clean Hero Positioning Reset
- Code-only update; approved hero image unchanged.
- Removes the V1.6 transform rules instead of overriding them.
- Removes the V1.7 positioning block so only one desktop positioning system is active.
- Anchors the hero image near the top to restore the full head/face.
- Shifts the artwork right so more of the original lightning cross clears the headline.
- Leaves colors, brightness, typography, navigation, buttons, and bottom-right logo treatment unchanged.

## v1.9 — Restore Hero Logo
- No new artwork.
- Preserves the successful V1.8 hero crop and lightning cross.
- Fixes the hidden hero Ridgeline Cross seal caused by an older `.seal { display:none; }` rule.
- Restores the seal in the lower-right corner on desktop/tablet.
- Leaves mobile uncluttered by hiding the large hero seal on narrow screens.

## v1.10 — Conflict-Free Hero Badge
- Preserves the successful V1.8/V1.9 hero image and lightning-cross positioning.
- Replaces the legacy `.seal` / `.real-seal` hero logo classes with a brand-new `.hero-brand-badge` class.
- Prevents older CSS rules from hiding or repositioning the lower-right logo.
- Adds cache-busting query strings to CSS, JS, and the hero badge image so GitHub Pages/browser caching cannot serve stale styling.
- No new artwork generated and no change to hero image colors, brightness, or crop.

## v1.11 — Weathered Bronze Logo Refinement
- Hero image positioning and lightning-cross composition are frozen.
- Enlarges the lower-right Ridgeline Cross badge by roughly 15–20%.
- Brightens the bronze treatment by roughly 10–12%.
- Adds a restrained storm-light sheen and warm edge catch.
- Keeps the logo weathered rather than polished or overly glossy.
- No hero artwork regeneration and no changes to typography, navigation, or copy.

## v1.12 — Directional Storm-Light Integration
- Keeps the V1.11 hero crop, athlete, cross, typography, badge size, and badge position unchanged.
- Reduces uniform badge brightness slightly to preserve the weathered bronze.
- Adds directional illumination to the upper-left/left side of the badge, matching the lightning-cross light source.
- Fades the light naturally across the badge toward the darker lower-right side.
- Adds a restrained warm rim catch and ambient integration without an obvious glow.

## v1.13 — Four Pillars
- Preserves the V1.12 hero composition without changing the approved storm artwork, lightning cross, athlete crop, or bronze hero badge.
- Rebuilds the Four Pillars section as the first major branded experience below the hero.
- Adds Strength, Performance, Recovery, and Faith as four cinematic dark panels with burnished-bronze accents.
- Adds the section message: “The athlete is built on more than strength.”
- Adds the closing standard: “Four pillars. One standard. Stay capable.”
- Responsive two-column tablet and single-column mobile layouts.
