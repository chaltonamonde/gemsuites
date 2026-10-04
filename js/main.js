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
    initHeaderScroll();
    initMobileNavigation();
    initAmbientMedia();
    init3DTiltCards();
    initFaqAccordions();
    initDataHydration();
    initFloatingWhatsApp();
    initCopyButtons();
    initGalleryLightbox();
  });

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
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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

    const number = data.property.contact.whatsappNumber || '254700000000';
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
