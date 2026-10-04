# GemSuites Riverside - Pre-Launch Confirmation Checklist

Before taking the website live on production hosting, review and confirm the following property details with GemSuites management. Update these values directly in `data/site-data.js`.

---

## 1. Property Contact & Communications

| Item | File Location (`data/site-data.js`) | Placeholder in Code | Confirmed Value |
| :--- | :--- | :--- | :--- |
| **Primary Phone** | `property.contact.phone` | `[CONFIRM: Primary Hotel Phone, e.g. +254 700 000 000]` | |
| **Alternative Telephone** | `property.contact.phoneSecondary` | `[CONFIRM: Alternative Telephone, e.g. +254 20 000 0000]` | |
| **WhatsApp Number (API Digits)** | `property.contact.whatsappNumber` | `254700000000` (Digits only without `+`) | |
| **WhatsApp (Display Format)** | `property.contact.whatsappFormatted` | `[CONFIRM: WhatsApp Number, e.g. +254 700 000 000]` | |
| **Reservations Email** | `property.contact.emailReservations` | `reservations@gemsuites-riverside.com` | |
| **Events & Conferences Email**| `property.contact.emailEvents` | `events@gemsuites-riverside.com` | |
| **General Inquiries Email** | `property.contact.emailGeneral` | `info@gemsuites-riverside.com` | |
| **Postal Code** | `property.address.postalCode` | `[CONFIRM: Postal Code, e.g. 00100]` | |
| **Official Star Rating** | `property.starRating` | `[CONFIRM: Official Star Rating, e.g. 5-Star]` | |

---

## 2. TripAdvisor & Social Media Channels

| Item | File Location (`data/site-data.js`) | Placeholder in Code | Confirmed Value |
| :--- | :--- | :--- | :--- |
| **TripAdvisor Listing URL** | `property.tripAdvisor.url` | `https://www.tripadvisor.com/[CONFIRM: full property url]` | |
| **Instagram Profile** | `property.socialLinks.instagram` | `https://instagram.com/[CONFIRM: handle]` | |
| **Facebook Page** | `property.socialLinks.facebook` | `https://facebook.com/[CONFIRM: handle]` | |
| **LinkedIn Page** | `property.socialLinks.linkedin` | `https://linkedin.com/company/[CONFIRM: handle]` | |

---

## 3. Accommodation Rates & Floor Areas

Update base nightly rates in `data/site-data.js` under `accommodations`:

| Accommodation | Size / Area | Base Rate (USD) | Base Rate (KES) |
| :--- | :--- | :--- | :--- |
| **Luxury Hotel Suite** | `[CONFIRM: e.g. 45 m² / 484 sq ft]` | `[CONFIRM: rate, e.g. 180]` | `[CONFIRM: rate, e.g. 25000]` |
| **1-Bedroom Apartment** | `[CONFIRM: e.g. 85 m² / 915 sq ft]` | `[CONFIRM: rate, e.g. 240]` | `[CONFIRM: rate, e.g. 33000]` |
| **2-Bedroom Apartment** | `[CONFIRM: e.g. 135 m² / 1,453 sq ft]`| `[CONFIRM: rate, e.g. 340]` | `[CONFIRM: rate, e.g. 47000]` |
| **Presidential Penthouse** | `[CONFIRM: e.g. 260 m² / 2,800 sq ft]`| `[CONFIRM: rate, e.g. 650]` | `[CONFIRM: rate, e.g. 90000]` |

---

## 4. Booking Engine & Payment Settings

| Item | File Location (`data/site-data.js`) | Placeholder in Code | Confirmed Value |
| :--- | :--- | :--- | :--- |
| **Confirmation Notice Timeline** | `bookingSettings.confirmationTimeNotice` | `Rooms are confirmed by our team within [CONFIRM: timeframe, e.g. 2 hours]` | |
| **Rates Validity Period** | `bookingSettings.ratesValidityPeriod` | `Rates valid from [CONFIRM: Start Date] to [CONFIRM: End Date]` | |
| **M-Pesa Business Type** | `bookingSettings.mpesaPayment.businessType` | `[CONFIRM: Paybill or Till]` | |
| **M-Pesa Paybill / Till Number** | `bookingSettings.mpesaPayment.paybillNumber`| `[CONFIRM: Paybill / Till Number, e.g. 123456]` | |
| **M-Pesa Registered Account Name**| `bookingSettings.mpesaPayment.accountName` | `[CONFIRM: Registered Name, e.g. GemSuites Riverside Ltd]` | |
| **External Engine Provider** | `bookingSettings.embeddedEngine.providerName` | `[CONFIRM: Beds24 / Cloudbeds / SabeeApp / Other]` | |
| **Formspree / Web3Forms Endpoint**| `bookingSettings.emailEndpoint` | `https://formspree.io/f/[CONFIRM: form-id]` | |

---

## 5. Experience Menus & Treatment Rates

| Item | File Location (`data/site-data.js`) | Placeholder in Code | Confirmed Value |
| :--- | :--- | :--- | :--- |
| **Morning Artisan Breakfast Price** | `dining.menuHighlights[0].price` | `[CONFIRM: price]` | |
| **Pan-Seared Line-Caught Fish Price**| `dining.menuHighlights[1].price` | `[CONFIRM: price]` | |
| **Prime Aged Beef Fillet Price** | `dining.menuHighlights[2].price` | `[CONFIRM: price]` | |
| **Skyline Cocktails Price** | `dining.menuHighlights[3].price` | `[CONFIRM: price]` | |
| **GemSignature Massage Rate** | `spa.treatments[0].rate` | `[CONFIRM: rate, e.g. KES 6,500]` | |
| **Deep Muscle Release Rate** | `spa.treatments[1].rate` | `[CONFIRM: rate, e.g. KES 7,000]` | |
| **Botanical Radiance Facial Rate** | `spa.treatments[2].rate` | `[CONFIRM: rate, e.g. KES 6,000]` | |
| **Kenyan Coffee Body Polish Rate** | `spa.treatments[3].rate` | `[CONFIRM: rate, e.g. KES 5,500]` | |

---

## 6. Guest Policies Confirmation

| Item | File Location (`data/site-data.js`) | Placeholder in Code | Confirmed Value |
| :--- | :--- | :--- | :--- |
| **Pet Policy** | `policies.petPolicy` | `[CONFIRM: Pet Policy, e.g. Guide dogs permitted; companion pets by prior arrangement]` | |
| **Events Response Time** | `events.html` copy | `[CONFIRM: 4 hours]` | |
