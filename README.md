# High Mileage Website v1.2

Visual refinement release for the High Mileage GitHub Pages site.

## What changed
- Replaced the abstract hero lines with the approved cinematic storm / athlete hero.
- Preserved the charcoal, bronze and warm-white High Mileage palette.
- Enlarged and brightened the header Ridgeline Cross mark for better readability.
- Refined hero typography and spacing for a stronger, calmer visual hierarchy.
- Added **ONCE AN ATHLETE. ALWAYS AN ATHLETE.** as a prominent hero brand line.
- Kept the headline as live HTML text for responsive sizing and future editing.
- Preserved the existing About, Method, First Responders, Resources, Connect and Faith sections.
- Added responsive hero treatment for desktop, tablet and mobile.

## Upload to GitHub
Upload the **contents** of this folder to the root of the existing `high-mileage-website` repository, replacing `index.html`, `styles.css`, `script.js`, and the existing assets with the matching v1.2 files. Keep the `assets` directory intact.

The hero image path is:
`assets/high-mileage-storm-hero.png`

Existing logo paths remain:
`assets/ridgeline-cross-avatar.png`
`assets/ridgeline-cross-patch.png`

After committing to `main`, allow GitHub Pages to redeploy, then use Ctrl+F5 on Windows to force-refresh the live site.

## v1.3 — Hero Refinement
- Repositioned the hero image so the athlete's head clears the navigation.
- Reduced headline scale slightly to add breathing room.
- Pulled the Ridgeline Cross badge inward and upward.
- Brightened the hero logo treatment by ~7%.
- Improved header contrast and logo visibility.
- Preserved the storm/cross/athlete visual direction from v1.2.
- Added responsive positioning for desktop, tablet, and mobile.

## v1.4 — Lightning Cross / Hero Composition
- Preserves the approved V1.3 hero artwork.
- Rebalances the hero shade so the existing lightning cross is visible.
- Adds a restrained warm visibility window around the original cross; no replacement cross is drawn.
- Slightly tightens the headline footprint to create visual breathing room.
- Keeps the athlete below the navigation and the Ridgeline seal inside the frame.
- Adds desktop/laptop/mobile composition tuning.

## v1.5 — Hero Image Layer Fix
- Keeps the V1.4 design, colors, brightness, typography, and spacing.
- Changes the storm hero from a CSS background image to a real `<img>` layer.
- Uses `object-fit: cover` plus controlled `object-position` values for desktop, laptop, tablet, and mobile.
- Preserves the existing lightning cross in the source artwork instead of generating a new one.
- Makes the cross much less likely to be cropped out at common browser sizes.
- Bottom-right logo treatment intentionally left unchanged for the next pass.
