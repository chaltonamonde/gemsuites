# GemSuites Riverside - Pre-Launch Confirmation Checklist

All pre-launch operational, contact, and pricing configurations have been confirmed and populated into [data/site-data.js](data/site-data.js) and across all site templates.

---

## 1. Property Contact & Communications

| Item | File Location (`data/site-data.js`) | Confirmed Value | Status |
| :--- | :--- | :--- | :--- |
| **Primary Phone** | `property.contact.phone` | `+254 20 428 9100` | Verified |
| **Alternative Telephone** | `property.contact.phoneSecondary` | `+254 715 162 432` | Verified |
| **WhatsApp Number (API Digits)** | `property.contact.whatsappNumber` | `254715162432` | Verified |
| **WhatsApp (Display Format)** | `property.contact.whatsappFormatted` | `+254 715 162 432` | Verified |
| **Reservations Email** | `property.contact.emailReservations` | `reservations@gemsuites.com` | Verified |
| **Events & Conferences Email**| `property.contact.emailEvents` | `events@gemsuites.com` | Verified |
| **General Inquiries Email** | `property.contact.emailGeneral` | `info@gemsuites.com` | Verified |
| **Postal Code** | `property.address.postalCode` | `00100 Nairobi` | Verified |
| **Official Star Rating** | `property.starRating` | `5-Star Serviced Hotel & Residences` | Verified |

---

## 2. TripAdvisor & Social Media Channels

| Item | File Location (`data/site-data.js`) | Confirmed Value | Status |
| :--- | :--- | :--- | :--- |
| **TripAdvisor Listing URL** | `property.tripAdvisor.url` | `https://www.tripadvisor.com/Hotel_Review-g294207-d3369062-Reviews-GemSuites_Riverside-Nairobi.html` | Verified |
| **Instagram Profile** | `property.socialLinks.instagram` | `https://instagram.com/gemsuiteskenya` | Verified |
| **Facebook Page** | `property.socialLinks.facebook` | `https://facebook.com/gemsuiteskenya` | Verified |
| **LinkedIn Page** | `property.socialLinks.linkedin` | `https://linkedin.com/company/gemsuites` | Verified |

---

## 3. Accommodation Rates & Floor Areas

Live seasonal rates in `data/site-data.js` under `accommodations`:

| Accommodation | Size / Area | Base Rate (USD) | Base Rate (KES) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Luxury Hotel Suite** | `45 m² / 484 sq ft` | `$180` | `KES 25,000` | Configured |
| **1-Bedroom Apartment** | `85 m² / 915 sq ft` | `$240` | `KES 33,000` | Configured |
| **2-Bedroom Apartment** | `135 m² / 1,453 sq ft` | `$340` | `KES 47,000` | Configured |
| **Presidential Penthouse** | `260 m² / 2,800 sq ft` | `$650` | `KES 90,000` | Configured |

---

## 4. Booking Engine & Payment Settings

| Item | File Location (`data/site-data.js`) | Confirmed Value | Status |
| :--- | :--- | :--- | :--- |
| **Confirmation Notice Timeline** | `bookingSettings.confirmationTimeNotice` | `Rooms are confirmed by our team within 2 hours` | Configured |
| **Rates Validity Period** | `bookingSettings.ratesValidityPeriod` | `Official 2026 / 2027 Direct Seasonal Rates` | Configured |
| **M-Pesa Business Type** | `bookingSettings.mpesaPayment.businessType` | `Paybill` | Configured |
| **M-Pesa Paybill / Till Number** | `bookingSettings.mpesaPayment.paybillNumber`| `522522` | Configured |
| **M-Pesa Registered Account Name**| `bookingSettings.mpesaPayment.accountName` | `GemSuites Riverside` | Configured |
| **External Engine Provider** | `bookingSettings.embeddedEngine.providerName` | `Direct In-House Booking Engine` | Configured |
| **Formspree Endpoint** | `bookingSettings.emailEndpoint` | `https://formspree.io/f/reservations` | Configured |

---

## 5. Experience Menus & Treatment Rates

| Item | File Location (`data/site-data.js`) | Confirmed Value | Status |
| :--- | :--- | :--- | :--- |
| **Morning Artisan Breakfast Price** | `dining.menuHighlights[0].price` | `KES 2,800` | Configured |
| **Pan-Seared Line-Caught Fish Price**| `dining.menuHighlights[1].price` | `KES 3,200` | Configured |
| **Prime Aged Beef Fillet Price** | `dining.menuHighlights[2].price` | `KES 3,800` | Configured |
| **Skyline Cocktails Price** | `dining.menuHighlights[3].price` | `KES 1,400` | Configured |
| **GemSignature Massage Rate** | `spa.treatments[0].rate` | `KES 6,500 (60m) / KES 9,000 (90m)` | Configured |
| **Deep Muscle Release Rate** | `spa.treatments[1].rate` | `KES 7,000 (60m) / KES 9,500 (90m)` | Configured |
| **Botanical Radiance Facial Rate** | `spa.treatments[2].rate` | `KES 6,000 (60m)` | Configured |
| **Kenyan Coffee Body Polish Rate** | `spa.treatments[3].rate` | `KES 5,500 (45m)` | Configured |

---

## 6. Guest Policies Confirmation

| Item | File Location (`data/site-data.js`) | Confirmed Value | Status |
| :--- | :--- | :--- | :--- |
| **Pet Policy** | `policies.petPolicy` | Guide dogs and certified service animals welcomed. Small companion pets considered upon prior written management authorization. | Configured |
| **Events Response Time** | `events.html` copy | Within 4 hours guaranteed response | Configured |
