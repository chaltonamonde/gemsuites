# GemSuites Riverside - Sky Blue Theme Guide ("Cool, Rich, Fancy")

This guide outlines the design tokens, visual components, and customization controls for the **Sky Blue, Cool, Rich, Fancy** theme.

---

## 1. Palette & Usage Rules

All colors are controlled via CSS custom properties in [css/styles.css](file:///c:/Users/user/OneDrive/Gemsuites/css/styles.css):

| Token Name | Hex / Value | Role & Usage |
| :--- | :--- | :--- |
| `--sky-primary` | `#0EA5E9` | Core conversion actions, active navigation states, primary buttons, and link underlines. |
| `--sky-light` | `#38BDF8` | Button hover highlights, focus rings, and bright sky accents. |
| `--deep-azure` | `#0369A1` | Subtitles, section eyebrows, monogram borders, and secondary hover states. |
| `--deep-azure-dark` | `#075985` | Deep ocean gradient stops and high-contrast card borders. |
| `--deep-ink` | `#0B2545` | Primary body text and headings. Guaranteed WCAG AAA contrast ratio (> 12:1) over soft cloud surfaces. |
| `--text-azure-secondary` | `#334E68` | Secondary body text, descriptions, and feature lists. |
| `--soft-cloud` | `#F0F9FF` | Primary page canvas background (crisp, fresh, non-glaring). |
| `--surface-cloud` | `#E0F2FE` | Elevated cards, bento panels, inputs, and footer backgrounds. |
| `--cloud-border` | `#BAE6FD` | Luminous hairlines, input borders, and frosted glass edges. |
| `--accent-gold` | `#E8C27A` | Warm champagne gold highlight used sparingly for luxury accents, badges, and key buttons. |
| `--color-success` | `#10B981` | Success alerts and M-Pesa badges. |

---

## 2. Live Backgrounds & Overlay Tuning

The hero section combines video, Ken Burns crossfade imagery, and pure CSS ambient effects.

### How to Adjust Overlay Strength
In [css/styles.css](file:///c:/Users/user/OneDrive/Gemsuites/css/styles.css), locate `--gradient-hero-overlay` under `:root`:

```css
--gradient-hero-overlay: linear-gradient(
  180deg,
  rgba(240, 249, 255, 0.78) 0%,   /* Top opacity */
  rgba(224, 242, 254, 0.48) 40%,  /* Mid-window transparency */
  rgba(240, 249, 255, 0.95) 90%,  /* Bottom blend */
  var(--soft-cloud) 100%
);
```
- **To make backgrounds darker/more subdued**: Increase the alpha values (e.g. `0.85` and `0.65`).
- **To make backgrounds more vibrant/transparent**: Decrease the alpha values (e.g. `0.65` and `0.35`).

### How to Swap Background Media
1. **Video**: Drop your 1080p WebM/MP4 footage (under 3 MB, muted) into `/media/`:
   - `media/hero-ambient.webm`
   - `media/hero-ambient.mp4`
2. **Poster Image**: Save your lightweight poster as `media/hero-poster.svg` or `media/hero-poster.webp`.
3. **Slideshow Fallback**: Update the image URLs in the `.ambient-slideshow` markup within [index.html](file:///c:/Users/user/OneDrive/Gemsuites/index.html).

---

## 3. Reusable Component Patterns

- **Frosted Glass Cards (`.bento-card`, `.suite-tilt-card`)**:
  - `background: linear-gradient(180deg, #FFFFFF 0%, var(--surface-cloud) 100%)`
  - `border: 1.5px solid var(--cloud-border)`
  - Subtle 3D cursor-tracking tilt on hover.
- **Primary Action Button (`.btn-primary`)**:
  - `background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)`
  - Luminous blue glow: `box-shadow: 0 4px 16px rgba(14, 165, 233, 0.35)`
- **Champagne Gold Button (`.btn-gold`)**:
  - `background: linear-gradient(135deg, #E8C27A 0%, #C99E52 100%)`
  - Reserved for high-value VIP or direct-booking triggers.
- **Lipa na M-Pesa Instructions Card (`.mpesa-card`)**:
  - Cool mint/cloud container (`#F0FDF4`, border `#BBF7D0`) with copyable Paybill / Till Number and instant WhatsApp proof trigger.

---

## 4. Reverting to Previous Warm Cream Theme

A complete backup of the previous stylesheet was preserved at:
[css/styles.cream-backup.css](file:///c:/Users/user/OneDrive/Gemsuites/css/styles.cream-backup.css).

To revert instantly:
```powershell
Copy-Item "css\styles.cream-backup.css" "css\styles.css"
```
