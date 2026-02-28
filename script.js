'use strict';

// ── Hero Video Fade-in ────────────────────────────────────────
const heroVideo = document.querySelector('.hero__video');
if (heroVideo) {
  const onVideoReady = () => heroVideo.classList.add('is-loaded');
  if (heroVideo.readyState >= 3) {
    onVideoReady();
  } else {
    heroVideo.addEventListener('canplay', onVideoReady, { once: true });
    // Fallback: show poster after 2s if video doesn't load (e.g., file missing)
    setTimeout(onVideoReady, 2000);
  }
}

// ── Catalog Tab Switcher ──────────────────────────────────────
const tabs = document.querySelectorAll('.catalog__tab');
const panels = document.querySelectorAll('.car-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetIndex = tab.dataset.index;

    // Update tabs
    tabs.forEach((t) => {
      t.classList.remove('catalog__tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('catalog__tab--active');
    tab.setAttribute('aria-selected', 'true');

    // Update panels
    panels.forEach((panel, i) => {
      if (String(i) === targetIndex) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });

    // Scroll tab into view on mobile
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});

// ── Gallery Modal ─────────────────────────────────────────────
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalOverlay = document.getElementById('modal-overlay');

const carImages = [
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/808086/2026-02-28/75c45277-35d0-453d-81a5-244c804b6008.png',
    alt: 'Mercedes-Benz S-Class'
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/808086/2026-02-28/aa690d71-bf82-442e-8ce9-ffc63ac86be5.png',
    alt: 'BMW 7 Series'
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/808086/2026-02-28/17af48f7-ad56-4596-9e59-6068a1dfb922.png',
    alt: 'Lexus LX 600'
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/808086/2026-02-28/5de4c516-9789-49e0-8999-853bcd99479f.png',
    alt: 'Mercedes-Benz Vito'
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/808086/2026-02-28/4e6491d1-c122-453e-9b80-f8119f42ed93.png',
    alt: 'Toyota Camry'
  }
];

const openModal = (carIndex) => {
  const car = carImages[carIndex];
  if (!car || !modal) return;
  modalImg.src = car.src;
  modalImg.alt = car.alt;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  modalImg.src = '';
};

// Gallery button click
document.querySelectorAll('.car-panel__gallery-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const carIndex = parseInt(btn.dataset.car, 10);
    openModal(carIndex);
  });
});

// Close on overlay click
if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal);
}

// Close on button click
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
    closeModal();
  }
});

// ── Scroll Fade-in Animations ─────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, i * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  // Fallback for older browsers
  fadeEls.forEach((el) => el.classList.add('is-visible'));
}

// ── Smooth scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
