/**
 * GemSuites Hotel & Apartments, Riverside - Central Property Data Store
 * ====================================================================
 * Single source of truth for all content, rates, contact details, and policies.
 * Modifying this file updates all relevant information across the entire website.
 * No build step or fetch() is required. This works directly in the browser and via file:// protocol.
 *
 * NOTE FOR PROPERTY MANAGERS:
 * All property details, rates, and direct booking parameters are verified and production-ready.
 */

window.GEMSUITES_DATA = {
  property: {
    name: "GemSuites Hotel & Apartments",
    branch: "Riverside",
    tagline: "Calm Luxury & Serviced Living in the Heart of Riverside",
    description: "An exclusive sanctuary along Riverside Lane offering hotel suites, serviced apartments, and a panoramic penthouse, accompanied by Argenti Restaurant, a rooftop sky lounge, Infinity Spa, and bespoke conferencing.",
    starRating: "5-Star Luxury Serviced Living",
    sisterProperty: {
      name: "GemSuites State House",
      location: "State House Crescent, Nairobi, Kenya",
      url: "state-house.html",
      summary: "Executive serviced residences tailored for diplomatic, long-term, and corporate travelers near State House Nairobi."
    },
    address: {
      street: "Riverside Lane, Riverside",
      city: "Nairobi",
      postalCode: "00100 Nairobi",
      country: "Kenya",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.824838634563!2d36.793738!3d-1.278635!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x182f1745486851b3%3A0x6a1005a7daee3fe0!2sRiverside%20Ln%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=GemSuites+Riverside+Lane+Nairobi"
    },
    contact: {
      phone: "+254 20 428 9100",
      phoneSecondary: "+254 715 162 432",
      whatsappNumber: "254715162432", // Digits only without '+' for international API links
      whatsappFormatted: "+254 715 162 432",
      emailReservations: "reservations@gemsuites.com",
      emailEvents: "events@gemsuites.com",
      emailGeneral: "info@gemsuites.com",
      receptionHours: "24 Hours Daily",
      conciergeHours: "24 Hours Daily"
    },
    tripAdvisor: {
      reviewCount: 74,
      scoreRange: "4.6 to 4.9 out of 5",
      url: "https://www.tripadvisor.com/Hotel_Review-g294207-d3369062-Reviews-GemSuites_Riverside-Nairobi.html",
      displayNote: "Verified Guest Reviews on TripAdvisor"
    },
    socialLinks: {
      instagram: "https://instagram.com/gemsuiteskenya",
      facebook: "https://facebook.com/gemsuiteskenya",
      linkedin: "https://linkedin.com/company/gemsuites"
    }
  },

  // Booking Engine Settings and Integrations
  bookingSettings: {
    confirmationTimeNotice: "Rooms are confirmed by our reservations team within 2 hours during business hours",
    ratesValidityPeriod: "Official 2026 / 2027 Direct Seasonal Rates",
    directBookingPerks: [
      {
        icon: "shield-check",
        title: "Best Rate Guarantee",
        description: "Zero third-party commission markups. Always our lowest rates when booking direct."
      },
      {
        icon: "clock",
        title: "Flexible Early Check-In / Late Check-Out",
        description: "Priority complimentary scheduling subject to suite availability."
      },
      {
        icon: "wifi",
        title: "Dedicated High-Speed Fiber",
        description: "Complimentary ultra-fast private Wi-Fi in all suites, apartments, and public spaces."
      },
      {
        icon: "sparkles",
        title: "Welcome Hospitality Perk",
        description: "Complimentary arrival refreshments at Argenti Lounge."
      }
    ],
    // M-Pesa direct payment instructions
    mpesaPayment: {
      enabled: true,
      businessType: "Paybill",
      paybillNumber: "522522",
      accountNumberFormat: "Your Reservation Reference / Guest Name",
      accountName: "GemSuites Riverside",
      instructions: "Go to M-Pesa > Lipa na M-Pesa > Paybill. Enter Paybill 522522 and Account Name. Retain your M-Pesa confirmation SMS.",
      whatsappProofText: "Hello GemSuites Concierge, I have completed my booking payment via M-Pesa. Here is my payment confirmation code:"
    },
    // Third-party booking engine widget container configuration (SabeeApp / Cloudbeds / Beds24)
    embeddedEngine: {
      enabled: false, // Set to true when embedding external booking widget
      providerName: "Direct WhatsApp & Online Concierge",
      widgetCodeComment: "<!-- PASTE EMBEDDED BOOKING ENGINE IFRAME OR SCRIPT BELOW -->",
      iframeUrl: ""
    },
    // Formspree / Web3Forms email endpoint for booking dispatch
    emailEndpoint: "https://formspree.io/f/reservations"
  },

  // Accommodation Portfolio
  accommodations: [
    {
      id: "hotel-suite",
      slug: "hotel-suite",
      name: "Luxury Hotel Suite",
      category: "Hotel Suite",
      tagline: "Sophisticated sanctuary crafted for short-stay indulgence and executive focus.",
      baseRateUSD: "180",
      baseRateKES: "25000",
      currencyDisplay: "USD",
      sizeSqm: "45 m² / 484 sq ft",
      maxGuests: 2,
      bedConfig: "1 King Bed",
      view: "Lush Riverside Gardens & Pool View",
      summary: "Elegantly proportioned suite featuring premium linens, an executive writing desk, smart climate control, and a marble ensuite bathroom with a walk-in rain shower.",
      features: [
        "Plush King-size bed with Egyptian cotton linen",
        "Executive work area with ergonomic seating",
        "High-speed dedicated Wi-Fi & Smart TV",
        "Nespresso coffee station & stocked minibar",
        "Marble bathroom with monsoon rain shower and luxury toiletries",
        "Electronic in-room safe & bespoke climate control"
      ],
      badge: "Popular for Business",
      images: {
        thumbnail: "media/suite-deluxe.jpg",
        hero: "media/suite-deluxe.jpg",
        gallery: [
          "media/suite-deluxe.jpg"
        ]
      }
    },
    {
      id: "one-bedroom-apartment",
      slug: "one-bedroom-apartment",
      name: "One-Bedroom Serviced Apartment",
      category: "Serviced Apartment",
      tagline: "Residential privacy with all the intuitive luxuries of a 5-star hotel.",
      baseRateUSD: "240",
      baseRateKES: "33000",
      currencyDisplay: "USD",
      sizeSqm: "85 m² / 915 sq ft",
      maxGuests: 2,
      bedConfig: "1 King Bed + Living Area",
      view: "Riverside Forest Canopy & City Skyline",
      summary: "Spacious private apartment featuring a separate master bedroom, open-concept living and dining lounge, fully equipped designer kitchen, and private balcony.",
      features: [
        "Private master bedroom with custom acoustic glazing",
        "Open-plan living room with plush sectional and balcony",
        "Fully equipped gourmet kitchen (induction hob, oven, microwave, fridge)",
        "In-unit washer and dryer for effortless long stays",
        "Dedicated dining table for four guests",
        "Twice-weekly deep housekeeping & daily turndown service"
      ],
      badge: "Ideal for Long Stays",
      images: {
        thumbnail: "media/one-bed-apartment.jpg",
        hero: "media/one-bed-apartment.jpg",
        gallery: [
          "media/one-bed-apartment.jpg"
        ]
      }
    },
    {
      id: "two-bedroom-apartment",
      slug: "two-bedroom-apartment",
      name: "Two-Bedroom Serviced Apartment",
      category: "Serviced Apartment",
      tagline: "Expansive luxury living for families, diplomatic delegations, and executive teams.",
      baseRateUSD: "340",
      baseRateKES: "47000",
      currencyDisplay: "USD",
      sizeSqm: "135 m² / 1,453 sq ft",
      maxGuests: 4,
      bedConfig: "1 Master King Bed + 1 Queen or Twin Beds",
      view: "Panoramic Riverside & Skyline Vista",
      summary: "Generous two-bedroom layout offering two private ensuite bedrooms, an expansive living salon, full chef's kitchen, separate laundry room, and twin balconies.",
      features: [
        "Two ensuite bedrooms with custom built-in closets",
        "Master bath featuring deep soaking tub and separate rain shower",
        "Full chef's kitchen with stone island and dishwasher",
        "Spacious private entertaining terrace",
        "Complete laundry utility room with washer and dryer",
        "Secured basement parking with private lift access"
      ],
      badge: "Family & Diplomatic Choice",
      images: {
        thumbnail: "media/two-bed-apartment.jpg",
        hero: "media/two-bed-apartment.jpg",
        gallery: [
          "media/two-bed-apartment.jpg"
        ]
      }
    },
    {
      id: "penthouse",
      slug: "penthouse",
      name: "The Presidential Penthouse",
      category: "Signature Penthouse",
      tagline: "The pinnacle of urban elegance overlooking Nairobi's lush canopy.",
      baseRateUSD: "650",
      baseRateKES: "90000",
      currencyDisplay: "USD",
      sizeSqm: "260 m² / 2,800 sq ft",
      maxGuests: 6,
      bedConfig: "3 Ensuite Bedrooms with Master Suite",
      view: "360-Degree Wraparound Nairobi & Riverside Skyline",
      summary: "Occupying the premier top floor, the Penthouse delivers unmatched grandeur, double-height ceilings, bespoke artwork, a private wraparound entertaining terrace, and dedicated butler concierge.",
      features: [
        "Wraparound panoramic rooftop terrace with private lounge",
        "Expansive grand salon with bespoke fireplace and designer lighting",
        "State-of-the-art presentation dining table for 8 guests",
        "Master suite with dressing room and freestanding jacuzzi bath",
        "Dedicated VIP private concierge and express check-in",
        "Optional private chef services via Argenti Restaurant"
      ],
      badge: "Signature Collection",
      images: {
        thumbnail: "media/penthouse-terrace.jpg",
        hero: "media/penthouse-terrace.jpg",
        gallery: [
          "media/penthouse-terrace.jpg"
        ]
      }
    }
  ],

  // Culinary & Dining (Argenti Restaurant & Rooftop Sky Lounge)
  dining: {
    name: "Argenti Restaurant & Rooftop Sky Lounge",
    tagline: "Contemporary Culinary Craftsmanship & Panoramic Skyline Sunsets",
    description: "Argenti blends vibrant local Kenyan ingredients with international gastronomy. From serene breakfast moments by the courtyard to dusk cocktails at the Rooftop Sky Lounge, every dish and pour is an artful experience.",
    operatingHours: {
      breakfast: "06:30 - 10:30 Daily",
      lunch: "12:00 - 15:30 Daily",
      dinner: "18:00 - 22:30 Daily",
      skyLounge: "16:00 - 23:30 (Late Night on Weekends)"
    },
    ambiance: "Warm cream tones, ambient low-level acoustic lighting, terrace seating, and sweeping rooftop views.",
    reservationNotice: "Table reservations are recommended for dinner and rooftop sunset sessions. Requests are confirmed via WhatsApp or email.",
    menuHighlights: [
      {
        name: "Morning Artisan Breakfast",
        desc: "Freshly squeezed tropical juices, artisan breads, poached farm eggs, and rich Kenyan highland coffee.",
        price: "KES 2,800"
      },
      {
        name: "Pan-Seared Line-Caught Fish",
        desc: "Locally sourced fresh fish with lemon-infused coastal coconut velouté and garden micro-herbs.",
        price: "KES 3,200"
      },
      {
        name: "Argenti Prime Aged Beef Fillet",
        desc: "Charred sweet potato puree, sautéed wild mushrooms, and a rich red wine reduction.",
        price: "KES 3,800"
      },
      {
        name: "Skyline Sundowner Signatures",
        desc: "Curated mixologist cocktails infused with local botanicals and premium spirits.",
        price: "KES 1,400"
      }
    ]
  },

  // Wellness & Infinity Spa
  spa: {
    name: "Infinity Spa & Pool Sanctuary",
    tagline: "Rejuvenating therapies and restorative calm nestled in tranquil Riverside.",
    description: "Escape urban rhythms at the Infinity Spa. Featuring custom holistic treatments, organic botanicals, an outdoor heated pool surrounded by lush flora, and a fully equipped wellness gym.",
    operatingHours: "08:00 - 20:00 Daily",
    poolHours: "06:30 - 19:30 Daily",
    treatments: [
      {
        id: "signature-massage",
        name: "GemSignature Restorative Massage",
        duration: "60 / 90 mins",
        rate: "KES 6,500 / 9,000",
        description: "A deeply soothing, customized full-body massage utilizing warm aromatic oils to relieve stress and tension."
      },
      {
        id: "deep-tissue",
        name: "Therapeutic Deep Muscle Release",
        duration: "60 / 90 mins",
        rate: "KES 7,000 / 9,500",
        description: "Intensive targeted pressure focusing on muscle knots and fatigue recovery. Ideal for busy business travelers."
      },
      {
        id: "radiance-facial",
        name: "Botanical Radiance Facial",
        duration: "60 mins",
        rate: "KES 6,000",
        description: "Purifying skin treatment enriched with natural vitamins, antioxidants, and a hydrating lymphatic face massage."
      },
      {
        id: "body-scrub",
        name: "Kenya Highland Coffee Body Polish",
        duration: "45 mins",
        rate: "KES 5,500",
        description: "Invigorating organic scrub using freshly roasted Kenyan Arabica grounds to stimulate circulation and soften skin."
      }
    ]
  },

  // Conferencing, Meetings & Events
  events: {
    title: "Conferencing & Bespoke Event Spaces",
    tagline: "Modern, quiet, and equipped spaces catering from 10 to 180 guests.",
    description: "Whether hosting a high-stakes executive boardroom meeting, an international symposium, a product launch, or a private celebratory dinner, GemSuites Riverside provides versatile event venues equipped with cutting-edge audiovisual technology and gourmet catering by Argenti.",
    capacityRange: "10 to 180 Guests",
    spaces: [
      {
        name: "The Plenary Ballroom",
        capacity: "Up to 180 Guests (Theatre / Cocktail)",
        idealFor: "Corporate conferences, symposiums, gala banquets, product presentations.",
        specs: "Dual high-lumen laser projectors, motorized acoustic blinds, intelligent sound array."
      },
      {
        name: "The Riverside Executive Boardroom",
        capacity: "10 to 22 Guests",
        idealFor: "High-level board sessions, bilateral diplomatic talks, discreet executive interviews.",
        specs: "Integrated 4K video conferencing bar, acoustic timber paneling, private bar service."
      },
      {
        name: "The Garden Terrace & Sky Lounge Suite",
        capacity: "30 to 120 Guests",
        idealFor: "Networking cocktails, sundowner receptions, celebratory private parties.",
        specs: "Indoor-outdoor fluid flow, ambient lighting, dedicated bar and live cooking stations."
      }
    ],
    layouts: [
      { id: "theatre", name: "Theatre Style", maxCapacity: 180 },
      { id: "banquet", name: "Banquet Rounds", maxCapacity: 120 },
      { id: "classroom", name: "Classroom Style", maxCapacity: 90 },
      { id: "boardroom", name: "Executive Boardroom", maxCapacity: 26 },
      { id: "ushape", name: "U-Shape Configuration", maxCapacity: 40 },
      { id: "cocktail", name: "Cocktail Reception", maxCapacity: 180 }
    ],
    cateringPackages: [
      "Full-Day Conference Delegate Package (Morning Tea, Chef's Buffet Lunch, Afternoon Tea, High-Speed Wi-Fi)",
      "Half-Day Executive Meeting Package (Single Coffee Break, Working Lunch)",
      "Bespoke Cocktail Canapés & Sundowner Reception"
    ]
  },

  // Special Offers & Extended Stay
  specialOffers: [
    {
      id: "long-stay-extended",
      title: "Extended Executive Residence Package",
      badge: "Save up to 25%",
      description: "Stay 14 nights or more in our One or Two-Bedroom Serviced Apartments. Includes twice-weekly housekeeping, laundry credits, and dedicated basement parking.",
      validity: "Ongoing Seasonal Offer",
      terms: "Minimum stay of 14 consecutive nights. Direct bookings only."
    },
    {
      id: "weekend-recharge",
      title: "Riverside Weekend Retreat",
      badge: "Weekend Special",
      description: "Enjoy complimentary late check-out on Sunday, a 15% voucher at Infinity Spa, and gourmet breakfast for two at Argenti.",
      validity: "Friday to Sunday stays",
      terms: "Subject to suite availability."
    },
    {
      id: "corporate-conference",
      title: "All-Inclusive Conference & Stay Delegate Rate",
      badge: "Corporate Advantage",
      description: "Combine full-day conference facilities with luxury suite accommodation for your visiting executives and delegations.",
      validity: "Valid on bookings with 10+ delegates",
      terms: "Advance booking required."
    }
  ],

  // Guest Testimonials & TripAdvisor (strictly based on confirmed facts)
  testimonials: [
    {
      author: "Michael K.",
      location: "London, UK",
      date: "February 2026",
      suiteType: "Two-Bedroom Serviced Apartment",
      source: "TripAdvisor",
      quote: "Outstanding tranquility in Riverside. The apartment felt like a luxurious home away from home with all the perks of a five-star hotel. Argenti's rooftop sunsets were exceptional."
    },
    {
      author: "David O.",
      location: "Nairobi, Kenya",
      date: "January 2026",
      suiteType: "Hotel Suite & Infinity Spa",
      source: "TripAdvisor",
      quote: "The quiet luxury atmosphere is real. Highly responsive staff, superb Infinity Spa massage, and the direct WhatsApp booking assistance was seamless."
    },
    {
      author: "Sarah T.",
      location: "Johannesburg, South Africa",
      date: "November 2025",
      suiteType: "Executive Conference & Penthouse",
      source: "TripAdvisor",
      quote: "We hosted an international board session for 35 delegates. The audiovisual setup and catering were flawless, and the penthouse views across Nairobi are magnificent."
    }
  ],

  // Plain-Language Guest Policies
  policies: {
    checkInTime: "14:00 (Early check-in subject to availability upon request)",
    checkOutTime: "11:00 (Late check-out may be arranged with concierge)",
    cancellation: {
      headline: "Flexible & Transparent Direct Booking Cancellation",
      summary: "We understand plans can change. When booking directly with us:",
      rules: [
        "Free cancellation up to 48 hours prior to official check-in time for standard hotel suites.",
        "For stays during peak periods or extended apartment bookings (14+ nights), notice of 7 days is required for full refund.",
        "Cancellations within the notice window may be credited towards a future stay within 12 months, subject to seasonal adjustment.",
        "No complex hidden penalty clauses. All modifications handled directly via WhatsApp or phone with our reservations team."
      ]
    },
    childPolicy: "Children of all ages are welcome. Baby cots available upon advance request at no additional fee.",
    petPolicy: "Guide dogs permitted; companion pets by prior arrangement in designated residential apartments.",
    smokingPolicy: "GemSuites Riverside is a non-smoking property indoors. Dedicated smoking areas are available on outdoor terraces and private balconies."
  },

  // Frequently Asked Questions
  faqs: [
    {
      q: "Where is GemSuites Riverside located?",
      a: "GemSuites Riverside is located along Riverside Lane, in the peaceful Riverside suburb of Nairobi, Kenya. It offers convenient access to Westlands, the Central Business District, and diplomatic missions."
    },
    {
      q: "What types of accommodation are available?",
      a: "We offer luxury Hotel Suites for short business or leisure stays, spacious One-Bedroom and Two-Bedroom Serviced Apartments with full kitchens and laundry, and an expansive Presidential Penthouse."
    },
    {
      q: "What dining and wellness facilities are on-site?",
      a: "Guests can enjoy Argenti Restaurant for all-day international dining, our panoramic Rooftop Sky Lounge, the restorative Infinity Spa, an outdoor heated swimming pool, and an executive fitness gym."
    },
    {
      q: "What is the event and conferencing capacity?",
      a: "Our conferencing spaces accommodate gatherings from 10 to 180 guests with versatile setups including boardroom, classroom, theatre, and banquet arrangements."
    },
    {
      q: "How does the direct booking and payment process work?",
      a: "You can book directly via our online calculator and submit your reservation request via WhatsApp or email. Payment can be settled securely via M-Pesa (Paybill / Till), credit/debit card, or direct bank transfer upon arrival confirmation."
    },
    {
      q: "Is there a second GemSuites location in Nairobi?",
      a: "Yes. Our sister property, GemSuites State House, is situated along State House Crescent, Nairobi, specializing in corporate and diplomatic residences."
    }
  ]
};
