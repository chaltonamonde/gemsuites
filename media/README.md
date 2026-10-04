# GemSuites Riverside - Media Assets Specification Guide

This folder contains placeholder visual assets for the GemSuites Hotel & Apartments website. All media adheres to the warm luxury aesthetic: cream (#F3EBDD), champagne gold (#B8924A), and soft teal (#3F8F8A).

---

## 1. Hero Background Video & Loop Specs
To replace the hero moving background with real video footage of GemSuites Riverside:

- **Primary Video (WebM)**: `media/hero-ambient.webm`
  - Max file size: **Under 3 MB** (strongly recommended for mobile LCP < 2.5s)
  - Resolution: 1920x1080 (1080p) or 1280x720 (720p)
  - Frame rate: 24 fps
  - Audio: **Muted** (no audio track to enable browser autoplay)
  - Content: Muted panning footage of the Riverside skyline, outdoor heated pool, penthouse terrace, or Argenti Sky Lounge at sunset.
- **Secondary Video (MP4 Fallback)**: `media/hero-ambient.mp4`
  - Encoded with H.264, Baseline/Main profile, under 3.5 MB.
- **Poster Image**: `media/hero-poster.webp` (or `media/hero-poster.jpg`)
  - Resolution: 1920x1080
  - Quality: Compressed WebP, under 180 KB.

---

## 2. Accommodation & Suite Imagery
Place high-resolution architectural photography in WebP or JPG format:

| Filename | Dimensions | Description |
| :--- | :--- | :--- |
| `suite-deluxe-hero.webp` | 1400 x 900 px | Deluxe Hotel Suite interior showing King bed and executive desk. |
| `suite-deluxe-thumb.webp` | 800 x 550 px | Card thumbnail for Stay and Bento overview. |
| `one-bed-apartment-hero.webp` | 1400 x 900 px | 1-Bedroom Apartment living lounge and balcony view. |
| `one-bed-apartment-thumb.webp`| 800 x 550 px | Card thumbnail for 1-Bedroom Serviced Apartment. |
| `two-bed-apartment-hero.webp` | 1400 x 900 px | 2-Bedroom Apartment open-plan kitchen and living space. |
| `two-bed-apartment-thumb.webp`| 800 x 550 px | Card thumbnail for 2-Bedroom Serviced Apartment. |
| `penthouse-hero.webp` | 1600 x 1000 px| Presidential Penthouse grand salon and rooftop terrace. |
| `penthouse-thumb.webp` | 800 x 550 px | Card thumbnail for Presidential Penthouse. |

---

## 3. Experience & Venue Imagery

| Filename | Dimensions | Description |
| :--- | :--- | :--- |
| `argenti-dining.webp` | 1200 x 800 px | Argenti Restaurant interior table setting and gourmet presentation. |
| `argenti-sky-lounge.webp` | 1200 x 800 px | Rooftop Sky Lounge at dusk overlooking Riverside tree canopy. |
| `spa-infinity-pool.webp` | 1200 x 800 px | Outdoor heated swimming pool with sun loungers and garden greenery. |
| `spa-treatment.webp` | 1200 x 800 px | Infinity Spa treatment suite with organic botanical oils. |
| `events-plenary.webp` | 1200 x 800 px | Plenary conference hall in banquet/theatre layout (10-180 guests). |
| `events-boardroom.webp` | 1200 x 800 px | Executive boardroom with 4K video conferencing bar. |

---

## 4. Optimization Recommendations
1. Convert all final production images to **WebP** or **AVIF** using Squoosh.app or Sharp.
2. Maintain aspect ratios: **16:10** or **16:9** for hero/suites, **4:3** for thumbnails.
3. Keep individual static images under **200 KB** to preserve Lighthouse performance scores above 90 on 4G networks.
