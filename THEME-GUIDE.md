# GemSuites Riverside - Dual Theme Guide (Daylight Luxury & Dark Sky Blue)

This guide outlines the design tokens, visual components, and customization controls for both the **Daylight Luxury Sanctuary** (Light Mode) and the **Dark Sky Blue Sanctuary** (Dark Mode).

---

## 1. Atmosphere Switcher (Light / Dark Sky Blue Mode)

The website supports instant switching between **Daylight Luxury Mode** and **Dark Sky Blue Mode**:
- **Desktop**: Click the celestial toggle button (`Dark Sky` / `Light`) located in the header right next to the "Reserve Suite" action button.
- **Mobile**: Available directly in the sticky navigation header and inside the mobile drawer menu under the "Atmosphere" section.
- **Persistence**: User selection is saved to `localStorage` under `gemsuites_theme` and synchronized across all pages and open tabs in real-time.
- **System Preference**: If no preference is manually selected, the website automatically respects the visitor's device/OS `prefers-color-scheme`.
- **Zero Flash**: Inline `<script>` execution in `<head>` guarantees instant rendering with no white flash or layout shifts during page navigation.

---

## 2. Palettes & Design Tokens

All colors are controlled via CSS custom properties in [css/styles.css](file:///c:/Users/user/OneDrive/Gemsuites/css/styles.css):

| Token Name | Daylight Mode (Light) | Dark Sky Blue Mode (`[data-theme="dark"]`) | Role & Usage |
| :--- | :--- | :--- | :--- |
| `--bg-page` | `#FAF6EE` | `#071526` | Deep midnight celestial sky page canvas. |
| `--bg-section-alt` | `#F5EFE2` | `#0B1F36` | Alternating twilight navy section canvas. |
| `--bg-card` / `--surface-cloud` | `#FFFDF8` | `#0E2744` | Elevated cards, bento grid panels, and modals. |
| `--bg-input` | `#FFFEFA` | `#08192D` | Form controls and booking selector backgrounds. |
| `--border-soft` / `--cloud-border` | `#E6DCC6` | `rgba(56, 189, 248, 0.22)` | Luminous azure hairlines and frosted card boundaries. |
| `--sky-primary` | `#0284C7` | `#38BDF8` | Core conversion buttons, active links, and highlights. |
| `--sky-light` | `#38BDF8` | `#BAE6FD` | Starlight glow and focus rings. |
| `--deep-azure` | `#0369A1` | `#38BDF8` | Eyebrow badges, icons, and subtitles. |
| `--deep-ink` | `#061A30` | `#F0F9FF` | Primary headings and text (WCAG AAA compliant > 14:1 contrast). |
| `--text-azure-secondary` | `#2C4B68` | `#94B9DA` | Secondary body text and feature lists (WCAG AAA compliant > 8:1). |
| `--text-azure-muted` | `#507090` | `#6289AD` | Micro-labels, metadata, and timestamps. |
| `--accent-gold` | `#D4AF37` | `#F3CE7A` | Warm champagne gold luxury accents and badges. |
| `--color-success` | `#059669` | `#10B981` | Verification badges and confirmations. |

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
