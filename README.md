# GemSuites Hotel & Apartments, Riverside - Website Documentation

A bespoke, calm-luxury website designed for **GemSuites Hotel & Apartments, Riverside** (Riverside Lane, Nairobi, Kenya).

Built strictly with **plain HTML5, CSS3, and vanilla JavaScript**.
- **Zero build tools**, no Node server, no React/Next/Vue, no npm packages required.
- **Double-click `index.html` to run locally** — works seamlessly under `file://` protocol.
- **Single data source**: All property facts, rates, contact details, policies, and perks live in `data/site-data.js`.

---

## 1. Directory Structure

```text
/
├── index.html              # Flagship homepage with live moving background
├── stay.html               # Hotel suites, 1 & 2-bed apartments, penthouse
├── book.html               # Interactive booking engine, price calculator & M-Pesa
├── offers.html             # Direct booking perks & extended stay packages
├── spa.html                # Infinity Spa treatments & appointment request form
├── argenti.html            # Argenti dining, sky lounge & table reservation form
├── events.html             # Conferencing & banquet RFP form (10 to 180+ guests)
├── gallery.html            # Categorized portfolio with vanilla lightbox modal
├── location.html           # Riverside neighborhood guide & transit times
├── about.html              # Brand philosophy, TripAdvisor link, and FAQs
├── contact.html            # 24/7 concierge directory & general inquiry form
├── policies.html           # Plain-language cancellation charter & guest policies
├── state-house.html        # Sister property: GemSuites State House
├── 404.html                # Custom branded error page
├── sitemap.xml             # Search engine XML sitemap
├── robots.txt              # Crawler guidelines
├── favicon.svg             # Luxury monogram favicon
├── css/
│   └── styles.css          # Design system, cream tokens, bento grid, 3D tilt
├── js/
│   ├── main.js             # Navigation, video controller, tilt, accordions
│   └── booking.js          # Live rate math, WhatsApp prefill, Formspree
├── data/
│   └── site-data.js        # Central property data object (window.GEMSUITES_DATA)
├── media/
│   ├── README.md           # Video/Image specs and replacement guide
│   ├── og-share.svg        # Social sharing graph card
│   └── [placeholder SVGs]  # Vector graphics for suites, spa, dining & events
├── QA-CHECKLIST.md         # Comprehensive QA verification guide
└── LAUNCH-CHECKLIST.md     # Catalog of all [CONFIRM] placeholders
```

---

## 2. How to Update Content & Rates (`data/site-data.js`)

The hotel owner can update rates, phone numbers, TripAdvisor links, or dates in **ONE file** without editing HTML:

1. Open `data/site-data.js` in any text editor (Notepad, VS Code, etc.).
2. Locate the relevant section:
   - **Contact numbers / WhatsApp**: `window.GEMSUITES_DATA.property.contact`
   - **Room Rates & Descriptions**: `window.GEMSUITES_DATA.accommodations`
   - **M-Pesa Paybill / Till Details**: `window.GEMSUITES_DATA.bookingSettings.mpesaPayment`
   - **Dining Menus**: `window.GEMSUITES_DATA.dining`
   - **Spa Treatments**: `window.GEMSUITES_DATA.spa`
   - **Events Capacities**: `window.GEMSUITES_DATA.events`
   - **Guest Policies**: `window.GEMSUITES_DATA.policies`
3. Save the file and refresh your browser. All pages automatically reflect the changes.

---

## 3. How to Replace Media with Real Footage

See `media/README.md` for complete dimensions and specs.

- **Hero Moving Video**:
  - Place your compressed video files in `media/`:
    - `media/hero-ambient.webm` (under 3 MB, muted)
    - `media/hero-ambient.mp4` (H.264 fallback)
  - Ensure a poster image is saved as `media/hero-poster.svg` or `media/hero-poster.webp`.
- **Suite & Experience Imagery**:
  - Replace the placeholder SVGs in `media/` with actual WebP/JPG architectural photographs using identical filenames (e.g. `suite-deluxe-thumb.webp`).

---

## 4. Setting up Formspree or Web3Forms for Email Submissions

All forms (`book.html`, `events.html`, `argenti.html`, `spa.html`, `contact.html`) are configured to submit cleanly to Formspree or Web3Forms without requiring backend code:

1. Create a free account at [Formspree.io](https://formspree.io) or [Web3Forms.com](https://web3forms.com).
2. Create a new form (e.g. "GemSuites Reservations") and copy your unique Form ID.
3. In `data/site-data.js`, update:
   ```javascript
   bookingSettings: {
     emailEndpoint: "https://formspree.io/f/YOUR_FORM_ID_HERE"
   }
   ```
4. Update the `action="https://formspree.io/f/YOUR_FORM_ID_HERE"` attributes in the HTML form tags.

---

## 5. Deployment Options

This site is 100% static and requires zero build scripts (`npm run build` is NOT needed).

### Option A: Netlify Drop (Instant)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `Gemsuites` folder directly into your browser window.
3. Your site is live in under 15 seconds with free SSL.

### Option B: Vercel CLI / Web Import
1. Run `npx vercel` in the project root, or push to GitHub and import into Vercel.
2. Leave the "Build Command" and "Output Directory" blank.

### Option C: GitHub Pages
1. Push this directory to a GitHub repository.
2. In Repository Settings > Pages, select `main` branch, root `/` folder, and save.

### Option D: Shared Hosting (cPanel / Apache / Nginx)
1. Upload all files into `public_html` via FTP or cPanel File Manager.
