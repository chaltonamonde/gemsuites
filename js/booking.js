/**
 * GemSuites Hotel & Apartments, Riverside - Interactive Booking Journey Engine
 * ============================================================================
 * Handles dynamic stay price estimation, date math, room selection,
 * multi-channel request dispatching (WhatsApp, Formspree/Email, Booking Engine),
 * and M-Pesa proof submission.
 * Zero external libraries or npm dependencies required.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-calculation-form');
    if (!bookingForm) return;

    initBookingEngine();
  });

  function initBookingEngine() {
    const data = window.GEMSUITES_DATA;
    if (!data) {
      console.error('GemSuites Data Store not loaded.');
      return;
    }

    // Form inputs
    const checkinInput = document.getElementById('book-checkin');
    const checkoutInput = document.getElementById('book-checkout');
    const suiteSelect = document.getElementById('book-suite');
    const guestsSelect = document.getElementById('book-guests');
    const currencySelect = document.getElementById('book-currency');

    // Guest details
    const guestNameInput = document.getElementById('guest-name');
    const guestEmailInput = document.getElementById('guest-email');
    const guestPhoneInput = document.getElementById('guest-phone');
    const specialRequestsInput = document.getElementById('special-requests');

    // Summary Elements
    const summarySuiteName = document.getElementById('summary-suite-name');
    const summaryDates = document.getElementById('summary-dates');
    const summaryNights = document.getElementById('summary-nights');
    const summaryGuests = document.getElementById('summary-guests');
    const summaryRatePerNight = document.getElementById('summary-rate-per-night');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryTaxes = document.getElementById('summary-taxes');
    const summaryTotal = document.getElementById('summary-total');

    // Action Triggers
    const whatsappActionBtn = document.getElementById('btn-dispatch-whatsapp');
    const emailActionBtn = document.getElementById('btn-dispatch-email');
    const bookingIframeContainer = document.getElementById('booking-engine-embed-slot');

    // 1. Populate Suite Options from site-data.js
    populateSuiteDropdown(suiteSelect, data.accommodations);

    // 2. Read query params (e.g. from index.html floating bar or stay.html)
    parseUrlParameters(checkinInput, checkoutInput, suiteSelect, guestsSelect);

    // Set minimum date for checkin to today
    const today = new Date().toISOString().split('T')[0];
    if (checkinInput) checkinInput.min = today;

    // 3. Recalculate whenever inputs change
    const triggerCalculation = () => {
      calculateEstimate(data);
    };

    [checkinInput, checkoutInput, suiteSelect, guestsSelect, currencySelect].forEach(el => {
      if (el) el.addEventListener('change', triggerCalculation);
    });

    if (checkinInput) {
      checkinInput.addEventListener('change', () => {
        // Enforce checkout after checkin
        if (checkinInput.value) {
          const nextDay = new Date(checkinInput.value);
          nextDay.setDate(nextDay.getDate() + 1);
          const nextDayStr = nextDay.toISOString().split('T')[0];
          checkoutInput.min = nextDayStr;
          if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
            checkoutInput.value = nextDayStr;
          }
        }
        triggerCalculation();
      });
    }

    // 4. Initial calculation on page load
    calculateEstimate(data);

    // 5. WhatsApp Booking Request Dispatcher
    if (whatsappActionBtn) {
      whatsappActionBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dispatchWhatsAppRequest(data);
      });
    }

    // 6. Formspree / Email Booking Request Dispatcher
    const directEmailForm = document.getElementById('booking-calculation-form');
    if (directEmailForm) {
      directEmailForm.addEventListener('submit', function (e) {
        // Handled via standard action or fetch fallback if hosted
        // Formspree action url is dynamically injected
        if (data.bookingSettings && data.bookingSettings.emailEndpoint) {
          directEmailForm.action = data.bookingSettings.emailEndpoint;
        }
      });
    }

    // 7. Embedded Booking Engine Toggle
    if (bookingIframeContainer && data.bookingSettings && data.bookingSettings.embeddedEngine) {
      if (data.bookingSettings.embeddedEngine.enabled && data.bookingSettings.embeddedEngine.iframeUrl) {
        bookingIframeContainer.innerHTML = `<iframe src="${data.bookingSettings.embeddedEngine.iframeUrl}" width="100%" height="650" frameborder="0" title="Hotel Booking Engine"></iframe>`;
      }
    }
  }

  /* -------------------------------------------------------------
     Helper: Populate Suite Dropdown
     ------------------------------------------------------------- */
  function populateSuiteDropdown(selectEl, accommodations) {
    if (!selectEl || !accommodations) return;
    selectEl.innerHTML = '';
    accommodations.forEach(acc => {
      const opt = document.createElement('option');
      opt.value = acc.id;
      opt.textContent = `${acc.name} (${acc.category})`;
      selectEl.appendChild(opt);
    });
  }

  /* -------------------------------------------------------------
     Helper: Parse URL Parameters
     ------------------------------------------------------------- */
  function parseUrlParameters(checkinEl, checkoutEl, suiteEl, guestsEl) {
    const params = new URLSearchParams(window.location.search);
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    const suite = params.get('suite');
    const guests = params.get('guests');

    if (checkin && checkinEl) checkinEl.value = checkin;
    if (checkout && checkoutEl) checkoutEl.value = checkout;
    if (suite && suiteEl) suiteEl.value = suite;
    if (guests && guestsEl) guestsEl.value = guests;
  }

  /* -------------------------------------------------------------
     Calculation Engine: Nights, Rates, Taxes
     ------------------------------------------------------------- */
  function calculateEstimate(data) {
    const checkinVal = document.getElementById('book-checkin')?.value;
    const checkoutVal = document.getElementById('book-checkout')?.value;
    const suiteId = document.getElementById('book-suite')?.value;
    const guests = document.getElementById('book-guests')?.value || 1;
    const currency = document.getElementById('book-currency')?.value || 'USD';

    // Summary targets
    const summarySuiteName = document.getElementById('summary-suite-name');
    const summaryDates = document.getElementById('summary-dates');
    const summaryNights = document.getElementById('summary-nights');
    const summaryGuests = document.getElementById('summary-guests');
    const summaryRatePerNight = document.getElementById('summary-rate-per-night');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryTaxes = document.getElementById('summary-taxes');
    const summaryTotal = document.getElementById('summary-total');

    // Find selected suite
    const suite = data.accommodations.find(a => a.id === suiteId) || data.accommodations[0];
    if (summarySuiteName) summarySuiteName.textContent = suite ? suite.name : 'Select Suite';
    if (summaryGuests) summaryGuests.textContent = `${guests} Guest(s)`;

    // Calculate nights
    let nights = 1;
    if (checkinVal && checkoutVal) {
      const d1 = new Date(checkinVal);
      const d2 = new Date(checkoutVal);
      const diffTime = d2 - d1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      nights = diffDays > 0 ? diffDays : 1;
      if (summaryDates) summaryDates.textContent = `${checkinVal} to ${checkoutVal}`;
    } else {
      if (summaryDates) summaryDates.textContent = 'Dates to be selected';
    }
    if (summaryNights) summaryNights.textContent = `${nights} Night(s)`;

    // Rate calculation with placeholder protection
    const rawRateUSD = suite ? suite.baseRateUSD : '';
    const rawRateKES = suite ? suite.baseRateKES : '';

    const isNumericUSD = !isNaN(parseFloat(rawRateUSD));
    const isNumericKES = !isNaN(parseFloat(rawRateKES));

    let displayRateStr = '';
    let totalDisplayStr = '';
    let taxesDisplayStr = '';
    let subtotalDisplayStr = '';

    if (currency === 'KES') {
      if (isNumericKES) {
        const rate = parseFloat(rawRateKES);
        const subtotal = rate * nights;
        const taxes = subtotal * 0.16; // Standard VAT/Tourism levy estimate
        const total = subtotal + taxes;
        displayRateStr = `KES ${rate.toLocaleString()}`;
        subtotalDisplayStr = `KES ${subtotal.toLocaleString()}`;
        taxesDisplayStr = `KES ${taxes.toLocaleString()} (Est. 16% Levies)`;
        totalDisplayStr = `KES ${total.toLocaleString()}`;
      } else {
        displayRateStr = `KES ${rawRateKES}`;
        subtotalDisplayStr = `${rawRateKES} × ${nights} nights`;
        taxesDisplayStr = 'Applicable local taxes (16% VAT & levies)';
        totalDisplayStr = `Rate to be confirmed`;
      }
    } else {
      // USD default
      if (isNumericUSD) {
        const rate = parseFloat(rawRateUSD);
        const subtotal = rate * nights;
        const taxes = subtotal * 0.16;
        const total = subtotal + taxes;
        displayRateStr = `$${rate.toLocaleString()}`;
        subtotalDisplayStr = `$${subtotal.toLocaleString()}`;
        taxesDisplayStr = `$${taxes.toLocaleString()} (Est. 16% Levies)`;
        totalDisplayStr = `$${total.toLocaleString()}`;
      } else {
        displayRateStr = `$${rawRateUSD}`;
        subtotalDisplayStr = `${rawRateUSD} × ${nights} nights`;
        taxesDisplayStr = 'Applicable local taxes (16% VAT & levies)';
        totalDisplayStr = `Rate to be confirmed`;
      }
    }

    if (summaryRatePerNight) summaryRatePerNight.textContent = displayRateStr;
    if (summarySubtotal) summarySubtotal.textContent = subtotalDisplayStr;
    if (summaryTaxes) summaryTaxes.textContent = taxesDisplayStr;
    if (summaryTotal) summaryTotal.textContent = totalDisplayStr;

    // Attach calculated values to hidden fields for Formspree submit
    const hiddenSummary = document.getElementById('hidden-calculated-summary');
    if (hiddenSummary) {
      hiddenSummary.value = `Suite: ${suite.name} | Dates: ${checkinVal || 'TBD'} to ${checkoutVal || 'TBD'} (${nights} nights) | Guests: ${guests} | Est. Rate: ${displayRateStr}/night | Total Estimate: ${totalDisplayStr}`;
    }
  }

  /* -------------------------------------------------------------
     WhatsApp Request Dispatcher
     ------------------------------------------------------------- */
  function dispatchWhatsAppRequest(data) {
    const checkin = document.getElementById('book-checkin')?.value || 'Not specified';
    const checkout = document.getElementById('book-checkout')?.value || 'Not specified';
    const suiteId = document.getElementById('book-suite')?.value;
    const suite = data.accommodations.find(a => a.id === suiteId) || data.accommodations[0];
    const guests = document.getElementById('book-guests')?.value || '1';
    const currency = document.getElementById('book-currency')?.value || 'USD';
    const totalEst = document.getElementById('summary-total')?.textContent || 'To be confirmed';

    const guestName = document.getElementById('guest-name')?.value.trim();
    const guestEmail = document.getElementById('guest-email')?.value.trim();
    const guestPhone = document.getElementById('guest-phone')?.value.trim();
    const specialRequests = document.getElementById('special-requests')?.value.trim();

    if (!guestName) {
      alert('Please provide your Full Name before sending the WhatsApp booking request.');
      document.getElementById('guest-name')?.focus();
      return;
    }

    const number = data.property.contact.whatsappNumber || '254715162432';

    let message = `*NEW DIRECT RESERVATION REQUEST - GEMSUITES RIVERSIDE*\n\n`;
    message += `*Guest Name:* ${guestName}\n`;
    if (guestPhone) message += `*Guest Phone:* ${guestPhone}\n`;
    if (guestEmail) message += `*Guest Email:* ${guestEmail}\n\n`;

    message += `*Accommodation:* ${suite.name} (${suite.category})\n`;
    message += `*Check-in Date:* ${checkin}\n`;
    message += `*Check-out Date:* ${checkout}\n`;
    message += `*Guests:* ${guests}\n`;
    message += `*Estimated Total:* ${totalEst} (${currency})\n\n`;

    if (specialRequests) {
      message += `*Special Inquiries / Requests:* ${specialRequests}\n\n`;
    }

    message += `_Sent via GemSuites Riverside Direct Website_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${number}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

})();

/* =========================================================================
   FUTURE PAYMENT INTEGRATION HOOK (DARAJA STK PUSH / CARD PAYMENT)
   =========================================================================
   To connect automated M-Pesa STK Push via Safaricom Daraja API or Stripe/Pesapal:
   
   async function initiateDarajaStkPush(phoneNumber, amount, reservationRef) {
     // POST request to your secure serverless function (e.g., /api/mpesa-express)
     // const response = await fetch('/api/mpesa-express', {
     //   method: 'POST',
     //   headers: { 'Content-Type': 'application/json' },
     //   body: JSON.stringify({ phone: phoneNumber, amount: amount, ref: reservationRef })
     // });
     // return await response.json();
     console.log('Daraja STK Push hook placeholder for:', phoneNumber, amount, reservationRef);
   }
   ========================================================================= */
