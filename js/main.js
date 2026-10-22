/**
 * GemSuites Hotel & Apartments, Riverside - Core Interactions (Vanilla JS)
 * =========================================================================
 * No frameworks or external libraries required.
 * Fully compatible with file:// protocol and modern browsers.
 */

(function () {
  'use strict';

  // Wait for DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initHeaderScroll();
    initMobileNavigation();
    initAmbientMedia();
    init3DTiltCards();
    initFaqAccordions();
    initDataHydration();
    initFloatingWhatsApp();
    initCopyButtons();
    initGalleryLightbox();
    initBookingBarEnhancements();
    initCardDescriptionClamping();
    initSuiteFilters();
    initMobileCarouselDots();
  });

  /* -------------------------------------------------------------
     0. Dark Sky Blue / Light Mode Atmosphere Controller
     ------------------------------------------------------------- */
  function initThemeToggle() {
    const THEME_KEY = 'gemsuites_theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';

    function getPreferredTheme() {
      try {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === THEME_DARK || stored === THEME_LIGHT) {
          return stored;
        }
      } catch (e) {}
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEME_DARK;
      }
      return THEME_LIGHT;
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', theme === THEME_DARK ? '#071526' : '#FAF6EE');
      }
      updateToggleButtons(theme);
    }

    const moonSvg = '<svg class="theme-icon icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    const sunSvg = '<svg class="theme-icon icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

    function updateToggleButtons(theme) {
      const isDark = theme === THEME_DARK;
      const buttons = document.querySelectorAll('.theme-toggle-btn');
      buttons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(isDark));
        btn.setAttribute('title', isDark ? 'Switch to Daylight Light Mode' : 'Switch to Dark Sky Blue Mode');
        btn.setAttribute('aria-label', isDark ? 'Switch to Daylight Light Mode' : 'Switch to Dark Sky Blue Mode');

        const label = btn.querySelector('.theme-toggle-label');
        if (label) {
          label.textContent = isDark ? 'Light' : 'Dark Sky';
        }
      });
    }

    // Ensure header actions has the toggle button
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !headerActions.querySelector('.theme-toggle-btn')) {
      const headerBtn = document.createElement('button');
      headerBtn.type = 'button';
      headerBtn.className = 'theme-toggle-btn';
      headerBtn.id = 'theme-toggle-header';
      headerBtn.setAttribute('title', 'Toggle between Light and Dark Sky Blue mode');
      headerBtn.innerHTML = '<span class="theme-toggle-icon-wrap" aria-hidden="true">' + moonSvg + sunSvg + '</span><span class="theme-toggle-label">Dark Sky</span>';
      
      const mobileToggle = headerActions.querySelector('.mobile-nav-toggle');
      if (mobileToggle) {
        headerActions.insertBefore(headerBtn, mobileToggle);
      } else {
        headerActions.appendChild(headerBtn);
      }
    }

    // Ensure mobile drawer has the atmosphere switch row
    const mobileDrawer = document.querySelector('.mobile-drawer');
    if (mobileDrawer && !mobileDrawer.querySelector('.mobile-theme-row')) {
      const mobileRow = document.createElement('div');
      mobileRow.className = 'mobile-theme-row';
      mobileRow.innerHTML = '<div class="mobile-theme-title"><span class="mobile-theme-label">Atmosphere</span><span class="mobile-theme-sub">Light • Dark Sky</span></div><button type="button" class="theme-toggle-btn mobile-theme-btn" aria-label="Toggle atmosphere"><span class="theme-toggle-icon-wrap" aria-hidden="true">' + moonSvg + sunSvg + '</span><span class="theme-toggle-label">Dark Sky</span></button>';
      
      const navLinks = mobileDrawer.querySelector('.mobile-nav-links');
      if (navLinks) {
        mobileDrawer.insertBefore(mobileRow, navLinks);
      } else {
        mobileDrawer.prepend(mobileRow);
      }
    }

    // Click delegation for all theme toggle buttons
    document.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.theme-toggle-btn');
      if (!toggleBtn) return;

      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') === THEME_DARK ? THEME_DARK : THEME_LIGHT;
      const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

      applyTheme(nextTheme);
      try {
        localStorage.setItem(THEME_KEY, nextTheme);
      } catch (err) {}

      window.dispatchEvent(new CustomEvent('gemsuitesThemeChange', { detail: { theme: nextTheme } }));
    });

    // Cross-tab synchronization
    window.addEventListener('storage', function (e) {
      if (e.key === THEME_KEY && e.newValue) {
        applyTheme(e.newValue);
      }
    });

    // System theme sync if user hasn't set explicit choice
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        try {
          if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
          }
        } catch (err) {}
      });
    }

    // Initial sync
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);
  }

  /* -------------------------------------------------------------
     1. Header Scroll Shadow & Transparency Transition
     ------------------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* -------------------------------------------------------------
     2. Accessible Mobile Navigation Drawer
     ------------------------------------------------------------- */
  function initMobileNavigation() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (!toggleBtn || !drawer) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('active');
      toggleBtn.classList.toggle('open', isOpen);
      drawer.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    toggleBtn.addEventListener('click', function () {
      toggleMenu();
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        toggleMenu(false);
      }
    });

    // Close when clicking a nav link inside drawer
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });
  }

  /* -------------------------------------------------------------
     3. Ambient Video & Ken Burns Fallback Slideshow Controller
     ------------------------------------------------------------- */
  function initAmbientMedia() {
    const video = document.querySelector('.ambient-video');
    const slides = document.querySelectorAll('.ambient-slideshow .slide-item');

    // Video fallback handler: if video files are absent or fail, gracefully hide video to reveal slideshow
    if (video) {
      video.addEventListener('error', function () {
        video.style.display = 'none';
      }, true);
      setTimeout(() => {
        if (video.readyState === 0 && !video.currentSrc) {
          video.style.display = 'none';
        }
      }, 800);

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        }, { threshold: 0.15 });

        observer.observe(video);
      }
    }

    // Fallback Ken Burns Slideshow rotator if multiple slides exist
    if (slides.length > 1) {
      let currentSlide = 0;
      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 7000);
    }
  }

  /* -------------------------------------------------------------
     4. Lightweight 3D Tilt Card Interaction
     ------------------------------------------------------------- */
  function init3DTiltCards() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    // Check if user prefers reduced motion or is on touch/mobile device
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOrMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia('(hover: none)').matches);
    if (prefersReducedMotion || isTouchOrMobile) return;

    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* -------------------------------------------------------------
     5. FAQ Accordion Toggle
     ------------------------------------------------------------- */
  function initFaqAccordions() {
    const triggers = document.querySelectorAll('.faq-question-btn');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('active');
        
        // Close siblings if desired, or toggle current
        document.querySelectorAll('.faq-item').forEach(el => {
          if (el !== item) el.classList.remove('active');
        });

        item.classList.toggle('active', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  /* -------------------------------------------------------------
     6. Dynamic Data Hydration from site-data.js
     ------------------------------------------------------------- */
  function initDataHydration() {
    const data = window.GEMSUITES_DATA;
    if (!data) return;

    // Populate contact fields dynamically
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      const key = el.getAttribute('data-bind');
      const val = resolveObjectPath(data, key);
      if (val !== undefined && val !== null) {
        if (el.tagName === 'A' && el.getAttribute('data-bind-attr') === 'href') {
          el.href = val;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Hydrate TripAdvisor verified links
    const taLinks = document.querySelectorAll('.tripadvisor-external-link');
    if (taLinks.length && data.property && data.property.tripAdvisor) {
      taLinks.forEach(link => {
        link.href = data.property.tripAdvisor.url;
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
    }

    // Hydrate Rates Validity Labels
    const rateValidityLabels = document.querySelectorAll('.rate-validity-label');
    if (rateValidityLabels.length && data.bookingSettings) {
      rateValidityLabels.forEach(label => {
        label.textContent = data.bookingSettings.ratesValidityPeriod;
      });
    }

    // Hydrate Confirmation Notice
    const confNotices = document.querySelectorAll('.confirmation-notice-text');
    if (confNotices.length && data.bookingSettings) {
      confNotices.forEach(box => {
        box.textContent = data.bookingSettings.confirmationTimeNotice;
      });
    }
  }

  /* -------------------------------------------------------------
     7. Floating WhatsApp Concierge Button Generator
     ------------------------------------------------------------- */
  function initFloatingWhatsApp() {
    const waBtn = document.querySelector('.floating-whatsapp');
    const data = window.GEMSUITES_DATA;
    if (!waBtn || !data || !data.property || !data.property.contact) return;

    const number = data.property.contact.whatsappNumber || '254110677149';
    const pageTitle = document.title || 'GemSuites Riverside';
    const defaultMsg = encodeURIComponent(`Hello GemSuites Riverside Concierge, I am inquiring from your website (${pageTitle}).`);

    waBtn.href = `https://wa.me/${number}?text=${defaultMsg}`;
    waBtn.setAttribute('target', '_blank');
    waBtn.setAttribute('rel', 'noopener noreferrer');
    waBtn.setAttribute('aria-label', 'Chat with GemSuites Concierge on WhatsApp');
  }

  /* -------------------------------------------------------------
     8. Copy to Clipboard Utility (for M-Pesa Paybill / Accounts)
     ------------------------------------------------------------- */
  function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-copy-target');
        const textElement = document.getElementById(targetId);
        if (!textElement) return;

        const text = textElement.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('btn-copied');
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('btn-copied');
          }, 2000);
        }).catch(err => {
          console.error('Copy failed: ', err);
        });
      });
    });
  }

  /* -------------------------------------------------------------
     9. Vanilla Lightbox for Gallery
     ------------------------------------------------------------- */
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-thumb-item');
    const lightboxModal = document.getElementById('gallery-lightbox');
    if (!galleryItems.length || !lightboxModal) return;

    const lightboxImg = lightboxModal.querySelector('.lightbox-image');
    const lightboxCaption = lightboxModal.querySelector('.lightbox-caption');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const fullSrc = item.getAttribute('data-full') || item.querySelector('img').src;
        const caption = item.getAttribute('data-caption') || '';

        lightboxImg.src = fullSrc;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', e => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* -------------------------------------------------------------
     10. Floating Glass Booking Bar Smart Date & Night Calculator
     ------------------------------------------------------------- */
  function initBookingBarEnhancements() {
    const barCheckin = document.getElementById('bar-checkin');
    const barCheckout = document.getElementById('bar-checkout');
    const barForm = document.getElementById('hero-booking-bar');
    const durationPill = document.getElementById('bar-duration-pill');
    const checkinSub = document.getElementById('bar-checkin-weekday');
    const checkoutSub = document.getElementById('bar-checkout-weekday');

    if (!barCheckin || !barCheckout) return;

    // Helper: format YYYY-MM-DD local string
    function formatYMD(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    // Helper: human readable short weekday and date, e.g., "Thu, Oct 22"
    function formatHumanDate(dateStr, defaultNote) {
      if (!dateStr) return defaultNote;
      try {
        const parts = dateStr.split('-');
        if (parts.length === 3) {
          const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
          return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }
      } catch (e) {}
      return defaultNote;
    }

    // Smart default dates (today + 2 nights)
    const now = new Date();
    // If it's late evening (after 20:00), default start to tomorrow
    if (now.getHours() >= 20) {
      now.setDate(now.getDate() + 1);
    }
    const todayStr = formatYMD(now);

    const checkOutDate = new Date(now);
    checkOutDate.setDate(checkOutDate.getDate() + 2);
    const defaultCheckoutStr = formatYMD(checkOutDate);

    // Set min date to prevent selecting past dates
    barCheckin.min = todayStr;

    // If input has no value yet, prefill with smart defaults
    if (!barCheckin.value) {
      barCheckin.value = todayStr;
    }

    // Sync checkout min based on checkin
    function syncDatesAndDuration() {
      if (!barCheckin.value) return;

      const checkinDate = new Date(barCheckin.value + 'T00:00:00');
      const minCheckout = new Date(checkinDate);
      minCheckout.setDate(minCheckout.getDate() + 1);
      const minCheckoutStr = formatYMD(minCheckout);

      barCheckout.min = minCheckoutStr;

      // If checkout is missing or earlier than minCheckout, adjust it
      if (!barCheckout.value || barCheckout.value < minCheckoutStr) {
        barCheckout.value = minCheckoutStr;
      }

      // Compute night duration
      const checkoutDate = new Date(barCheckout.value + 'T00:00:00');
      const diffTime = checkoutDate - checkinDate;
      const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

      // Update duration pill
      if (durationPill) {
        const pillText = durationPill.querySelector('.pill-text');
        if (pillText) {
          pillText.textContent = `${nights} ${nights === 1 ? 'Night' : 'Nights'}`;
        }
        // Micro pop animation
        durationPill.style.animation = 'none';
        // force reflow
        void durationPill.offsetWidth;
        durationPill.style.animation = 'pillPopIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }

      // Update contextual subtexts
      if (checkinSub) {
        checkinSub.textContent = `${formatHumanDate(barCheckin.value, 'From 14:00')} • 14:00`;
      }
      if (checkoutSub) {
        checkoutSub.textContent = `${formatHumanDate(barCheckout.value, 'Until 11:00')} • 11:00`;
      }
    }

    // Initialize on load
    if (!barCheckout.value) {
      barCheckout.value = defaultCheckoutStr;
    }
    syncDatesAndDuration();

    // Event listeners
    barCheckin.addEventListener('change', syncDatesAndDuration);
    barCheckout.addEventListener('change', syncDatesAndDuration);

    // Clicking anywhere in a booking-field focuses its input/select
    const bookingFields = document.querySelectorAll('.booking-bar-card .booking-field');
    bookingFields.forEach(field => {
      field.addEventListener('click', function (e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'LABEL') {
          const input = field.querySelector('input, select');
          if (input) {
            if (typeof input.showPicker === 'function' && input.type === 'date') {
              try {
                input.showPicker();
              } catch (err) {
                input.focus();
              }
            } else {
              input.focus();
            }
          }
        }
      });
    });

    // Button ripple / press effect
    const submitBtn = document.getElementById('bar-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        submitBtn.style.transform = 'scale(0.97)';
        setTimeout(() => {
          submitBtn.style.transform = '';
        }, 150);
      });
    }
  }

  /* -------------------------------------------------------------
     12. Card Description Clamping & "Read more" Expander
     ------------------------------------------------------------- */
  function initCardDescriptionClamping() {
    const descElements = document.querySelectorAll('.bento-desc, .experience-body .bento-desc');

    descElements.forEach(function (desc) {
      const nextEl = desc.nextElementSibling;
      if (nextEl && nextEl.classList.contains('card-read-more-btn')) {
        return;
      }

      const text = (desc.textContent || '').trim();
      if (text.length > 95) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'card-read-more-btn';
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Read more';

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isExpanded = desc.classList.toggle('is-expanded');
          btn.setAttribute('aria-expanded', String(isExpanded));
          btn.textContent = isExpanded ? 'Show less' : 'Read more';
        });

        desc.parentNode.insertBefore(btn, desc.nextSibling);
      }
    });
  }

  /* -------------------------------------------------------------
     12. Accommodation Collection Category Filters
     ------------------------------------------------------------- */
  function initSuiteFilters() {
    const filterBtns = document.querySelectorAll('.suite-filter-bar .filter-btn');
    const cards = document.querySelectorAll('.suite-tilt-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter') || 'all';

        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        cards.forEach(function (card) {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            requestAnimationFrame(function () {
              card.style.opacity = '1';
              card.style.transform = '';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px) scale(0.98)';
            setTimeout(function () {
              if (btn.getAttribute('data-filter') !== 'all' && card.getAttribute('data-category') !== btn.getAttribute('data-filter')) {
                card.style.display = 'none';
              }
            }, 250);
          }
        });
      });
    });
  }

  /* -------------------------------------------------------------
     12. Mobile Carousel Dot Indicators
     ------------------------------------------------------------- */
  function initMobileCarouselDots() {
    const carouselSelectors = [
      '.suite-tilt-grid',
      '.bento-grid',
      '.experiences-grid',
      '.testimonials-track',
      '.packages-carousel',
      '.spaces-carousel',
      '.treatments-carousel',
      '.dining-menu-carousel'
    ];

    carouselSelectors.forEach(function (sel) {
      const container = document.querySelector(sel);
      if (!container) return;

      const items = Array.from(container.children).filter(function (child) {
        return !child.classList.contains('carousel-dots-wrap');
      });
      if (items.length <= 1) return;

      let dotsWrap = container.parentNode.querySelector('.carousel-dots-wrap[data-for="' + sel + '"]');
      if (!dotsWrap) {
        dotsWrap = document.createElement('div');
        dotsWrap.className = 'carousel-dots-wrap';
        dotsWrap.setAttribute('data-for', sel);
        dotsWrap.setAttribute('aria-hidden', 'true');

        items.forEach(function (_, idx) {
          const dot = document.createElement('span');
          dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
          dot.addEventListener('click', function () {
            items[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          });
          dotsWrap.appendChild(dot);
        });

        if (container.nextSibling) {
          container.parentNode.insertBefore(dotsWrap, container.nextSibling);
        } else {
          container.parentNode.appendChild(dotsWrap);
        }
      }

      let scrollTimer = null;
      container.addEventListener('scroll', function () {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
          const containerLeft = container.getBoundingClientRect().left;
          const containerCenter = containerLeft + container.offsetWidth / 2;
          let closestIndex = 0;
          let minDistance = Infinity;

          items.forEach(function (item, idx) {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const dist = Math.abs(containerCenter - itemCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIndex = idx;
            }
          });

          const dots = dotsWrap.querySelectorAll('.carousel-dot');
          dots.forEach(function (d, i) {
            if (i === closestIndex) {
              d.classList.add('active');
            } else {
              d.classList.remove('active');
            }
          });
        }, 50);
      }, { passive: true });
    });
  }

  /* -------------------------------------------------------------
     Helper: Safe nested object path resolver
     ------------------------------------------------------------- */
  function resolveObjectPath(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  // Export helper globally if needed
  window.GemSuitesHelper = {
    resolveObjectPath: resolveObjectPath
  };

})();
