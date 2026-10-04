# GemSuites Riverside - Quality Assurance (QA) Checklist

This QA checklist validates that the website performs flawlessly across devices, accessibility standards, networks, and booking workflows.

---

## 1. Forms & Calculation Engine Validation

- [ ] **Stay Booking Engine (`book.html`)**:
  - [ ] Date picker enforces minimum date as today.
  - [ ] Selecting check-in date automatically bumps check-out date to at least 1 day later.
  - [ ] Dynamic recalculation triggers immediately on changes to suite type, dates, or guests.
  - [ ] Currency toggle switches seamlessly between USD and KES.
  - [ ] Rates with confirmed numbers multiply correctly across nights and display estimated levies.
  - [ ] Unconfirmed rates display clearly as `[CONFIRM: rate]` without breaking NaN calculations.
  - [ ] Submitting via Formspree sends complete guest details and calculated price summary.
  - [ ] M-Pesa details copy button copies the Paybill / Till number to the clipboard and shows "Copied!" feedback.
- [ ] **Events RFP Form (`events.html`)**:
  - [ ] Guest count field accepts values from 10 to 180+ without artificial low caps.
  - [ ] Layout selections (Theatre, Banquet, Classroom, Boardroom, U-Shape, Cocktail) reflect correctly.
  - [ ] Email submit dispatches successfully to Formspree endpoint.
- [ ] **Argenti Dining Reservation Form (`argenti.html`)**:
  - [ ] Date, meal session (Breakfast, Lunch, Sunset Cocktails, Dinner), and party size submit properly.
- [ ] **Infinity Spa Booking Form (`spa.html`)**:
  - [ ] Treatment options, duration (45/60/90 mins), and time preferences submit accurately.
- [ ] **General Contact Form (`contact.html`)**:
  - [ ] Validates required inputs (Name, Email, Message) and submits cleanly.

---

## 2. WhatsApp Integration & Prefilled Message Verification

- [ ] **Global Floating WhatsApp Button**:
  - [ ] Present on every page in bottom-right corner.
  - [ ] Links directly to `https://wa.me/[PHONE]?text=[ENCODED_MESSAGE]`.
  - [ ] Opens in a new tab (`target="_blank"` with `rel="noopener noreferrer"`).
- [ ] **Direct Stay Booking via WhatsApp (`book.html`)**:
  - [ ] Validates guest name before dispatch.
  - [ ] Formats structured WhatsApp text with Suite Name, Check-in, Check-out, Nights, Guests, and Estimated Total.
- [ ] **Events RFP via WhatsApp (`events.html`)**:
  - [ ] Prefills event type, guest count, layout, catering, and date.
- [ ] **Dining & Spa WhatsApp Triggers**:
  - [ ] Prefills table reservation or spa appointment details.
- [ ] **M-Pesa Payment Proof Trigger**:
  - [ ] Opens WhatsApp with prefilled message to send M-Pesa confirmation code.

---

## 3. Responsive Mobile & Cross-Browser Testing

- [ ] **Mobile Viewport (320px - 480px)**:
  - [ ] Floating glass booking bar stacks vertically and inputs remain touch-friendly (min 44px height).
  - [ ] Hamburger button opens full-screen mobile drawer with smooth slide transition.
  - [ ] All table columns on `stay.html` scroll horizontally with zero layout overflow.
  - [ ] Bento grid cards stack neatly into single-column layout.
- [ ] **Tablet Viewport (768px - 1024px)**:
  - [ ] Two-column layouts for forms and bento cards format comfortably.
- [ ] **Desktop Viewport (1200px+)**:
  - [ ] Fixed frosted-glass header transitions with `.scrolled` state on downward scroll.
  - [ ] 3D tilt cards respond subtly to mouse coordinates without jitter.
- [ ] **Tested Browsers**:
  - [ ] Google Chrome (Windows / macOS / Android)
  - [ ] Apple Safari (iOS / macOS)
  - [ ] Mozilla Firefox
  - [ ] Microsoft Edge

---

## 4. Slow Network & Offline Protocol (`file://`)

- [ ] Double-clicking `index.html` loads all typography, styles, data, and scripts without console CORS errors.
- [ ] No `fetch()` calls used for local data loading.
- [ ] Video background has a poster fallback that displays instantly while video buffers.
- [ ] If video autoplay is blocked (low-battery mode / data-saver), the Ken Burns image slideshow initiates seamlessly.
- [ ] All SVG/WebP assets are compressed for fast Largest Contentful Paint (LCP < 2.5s on 4G).

---

## 5. Keyboard Navigation & Accessibility (WCAG AA)

- [ ] Skip-to-content link appears on Tab keypress and navigates focus directly to `<main id="main-content">`.
- [ ] All interactive elements (buttons, links, inputs, selects) have visible gold focus outlines (`:focus-visible`).
- [ ] Contrast ratio between text charcoal (`#2E2A25`) and cream backgrounds (`#F3EBDD`, `#F8F2E7`) meets WCAG AAA (> 7:1).
- [ ] Form inputs have properly linked `<label for="...">` attributes.
- [ ] `prefers-reduced-motion` media query disables ambient video loops and transforms for users with motion sensitivity.
- [ ] ESC key closes mobile drawer and gallery lightbox.

---

## 6. Broken Link & Path Audit

- [ ] All 14 HTML pages resolve cleanly without 404s:
  - `/index.html`
  - `/stay.html`
  - `/book.html`
  - `/offers.html`
  - `/spa.html`
  - `/argenti.html`
  - `/events.html`
  - `/gallery.html`
  - `/location.html`
  - `/about.html`
  - `/contact.html`
  - `/policies.html`
  - `/state-house.html`
  - `/404.html`
- [ ] Logo monogram mark links back to `index.html`.
- [ ] External links (TripAdvisor, Google Maps) include `rel="noopener noreferrer"`.
