'use strict';

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

const toggleMobileMenu = (open) => {
  const isOpen = open ?? !mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open', isOpen);
  mobileOverlay.classList.toggle('active', isOpen);
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger?.addEventListener('click', () => toggleMobileMenu());
mobileOverlay?.addEventListener('click', () => toggleMobileMenu(false));
mobileClose?.addEventListener('click', () => toggleMobileMenu(false));
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => toggleMobileMenu(false));
});

const panels = [...document.querySelectorAll('.car-panel')];
const carTabs = document.getElementById('carTabs');
const brandTabs = [...document.querySelectorAll('.brand-tab')];

const buildModelTabs = (brand) => {
  carTabs.innerHTML = '';
  const brandPanels = panels.filter((panel) => panel.dataset.brand === brand);

  brandPanels.forEach((panel, index) => {
    const btn = document.createElement('button');
    btn.className = `car-tab ${index === 0 ? 'active' : ''}`;
    btn.dataset.car = panel.dataset.car;
    btn.textContent = panel.querySelector('.car-name')?.textContent || 'Модель';
    btn.addEventListener('click', () => showCar(panel.dataset.car));
    carTabs.appendChild(btn);
  });

  if (brandPanels.length) showCar(brandPanels[0].dataset.car);
};

const showCar = (carId) => {
  panels.forEach((panel) => panel.classList.toggle('active', panel.dataset.car === String(carId)));
  document.querySelectorAll('.car-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.car === String(carId)));
};

brandTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    brandTabs.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');
    buildModelTabs(tab.dataset.brand);
  });
});
buildModelTabs('mercedes');

window.setMain = (carIndex, thumb) => {
  const main = document.getElementById(`main-img-${carIndex}`);
  if (!main) return;
  main.src = thumb.src;
  const thumbs = thumb.closest('.gallery-thumbs')?.querySelectorAll('.thumb') || [];
  thumbs.forEach((item) => item.classList.remove('active'));
  thumb.classList.add('active');
};

const extraSpecs = [
  ['<i class="fas fa-gas-pump"></i> Гибридный/бензиновый двигатель', '<i class="fas fa-couch"></i> Массаж и вентиляция сидений'],
  ['<i class="fas fa-gas-pump"></i> Экономичный двигатель', '<i class="fas fa-chair"></i> Раскладные задние сиденья'],
  ['<i class="fas fa-tv"></i> Мультимедиа для пассажиров', '<i class="fas fa-door-open"></i> Электропривод дверей'],
  ['<i class="fas fa-route"></i> Идеален для трансферов', '<i class="fas fa-plug"></i> USB-зарядки для каждого ряда'],
  ['<i class="fas fa-mountain"></i> Пневмоподвеска', '<i class="fas fa-camera"></i> Камеры кругового обзора'],
  ['<i class="fas fa-cogs"></i> Надёжный V8', '<i class="fas fa-road"></i> Подходит для дальних поездок'],
  ['<i class="fas fa-mountain"></i> Улучшенная проходимость', '<i class="fas fa-shield-alt"></i> Toyota Safety Sense'],
  ['<i class="fas fa-cogs"></i> Мощный двигатель V8', '<i class="fas fa-road"></i> Премиум комфорт на трассе'],
  ['<i class="fas fa-bolt"></i> Экономичный расход топлива', '<i class="fas fa-mobile-alt"></i> Apple CarPlay / Android Auto'],
  ['<i class="fas fa-check-circle"></i> Проверенная надёжность', '<i class="fas fa-briefcase"></i> Оптимален для бизнеса']
];

panels.forEach((panel, index) => {
  const specs = panel.querySelector('.car-specs');
  if (!specs) return;
  extraSpecs[index]?.forEach((html) => {
    const li = document.createElement('li');
    li.innerHTML = html;
    specs.appendChild(li);
  });

  const toggle = document.createElement('button');
  toggle.className = 'specs-toggle';
  toggle.type = 'button';
  toggle.textContent = 'Показать все характеристики';
  toggle.addEventListener('click', () => {
    specs.classList.toggle('expanded');
    toggle.textContent = specs.classList.contains('expanded') ? 'Скрыть характеристики' : 'Показать все характеристики';
  });
  specs.after(toggle);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxZoom = document.getElementById('lightboxZoom');

let galleryImages = [];
let currentImageIndex = 0;
let zoomed = false;

const openLightbox = (panel, startSrc) => {
  galleryImages = [...panel.querySelectorAll('.thumb')].map((img) => img.src);
  currentImageIndex = Math.max(0, galleryImages.indexOf(startSrc));
  lightboxImg.src = galleryImages[currentImageIndex];
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
};

const updateLightboxImage = (direction) => {
  if (!galleryImages.length) return;
  currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentImageIndex];
  zoomed = false;
  lightboxImg.classList.remove('zoomed');
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImg.src = '';
  zoomed = false;
  lightboxImg.classList.remove('zoomed');
  document.body.style.overflow = '';
};

document.querySelectorAll('.gallery-main img, .thumb').forEach((img) => {
  img.addEventListener('click', () => {
    const panel = img.closest('.car-panel');
    openLightbox(panel, img.src);
  });
});

lightboxPrev?.addEventListener('click', () => updateLightboxImage(-1));
lightboxNext?.addEventListener('click', () => updateLightboxImage(1));
lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightboxZoom?.addEventListener('click', () => {
  zoomed = !zoomed;
  lightboxImg.classList.toggle('zoomed', zoomed);
});

document.addEventListener('keydown', (event) => {
  if (lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') updateLightboxImage(1);
  if (event.key === 'ArrowLeft') updateLightboxImage(-1);
});

const i18n = {
  ru: {
    nav_home: 'Главная', nav_cars: 'Автомобили', nav_about: 'О нас',
    catalog_title: 'Премиум автомобили на любой вкус',
    catalog_desc: '10 моделей премиум-класса для любых задач',
    call: 'Позвонить'
  },
  kz: {
    nav_home: 'Басты бет', nav_cars: 'Көліктер', nav_about: 'Біз туралы',
    catalog_title: 'Кез келген талғамға сай премиум көліктер',
    catalog_desc: 'Кез келген сапарға арналған 10 премиум модель',
    call: 'Қоңырау шалу'
  },
  en: {
    nav_home: 'Home', nav_cars: 'Cars', nav_about: 'About us',
    catalog_title: 'Premium cars for every taste',
    catalog_desc: '10 premium models for every purpose',
    call: 'Call'
  }
};

const langs = ['ru', 'kz', 'en'];
let currentLang = 'ru';
const langToggle = document.getElementById('langToggle');
const mobileLang = document.getElementById('mobileLang');

const applyLanguage = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (i18n[lang][key]) element.textContent = i18n[lang][key];
  });
  langToggle.textContent = lang.toUpperCase();
  mobileLang.textContent = `RU · KZ · EN`;
};

langToggle?.addEventListener('click', () => {
  const next = langs[(langs.indexOf(currentLang) + 1) % langs.length];
  applyLanguage(next);
});
mobileLang?.addEventListener('click', () => langToggle.click());

applyLanguage('ru');
