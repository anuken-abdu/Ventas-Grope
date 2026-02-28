// ===========================
// GLOBAL FUNCTIONS (defined first to avoid ReferenceError from inline onclick)
// ===========================
window.setMain = function(carIndex, thumbEl, thumbIdx) {
  currentThumbIndex[carIndex] = thumbIdx;
  var mainImg = document.getElementById('main-img-' + carIndex);
  if (mainImg) {
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(1.02)';
    setTimeout(function() {
      mainImg.src = thumbEl.src;
      mainImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 150);
  }
  var panel = document.querySelector('.car-panel[data-car="' + carIndex + '"]');
  if (panel) {
    panel.querySelectorAll('.thumb').forEach(function(t) { t.classList.remove('active'); });
    thumbEl.classList.add('active');
  }
};

// ===========================
// TRANSLATIONS
// ===========================
const i18n = {
  ru: {
    nav_cars: 'Автомобили', nav_about: 'О нас', call: 'Позвонить',
    catalog_label: 'НАШ АВТОПАРК',
    catalog_title: 'Премиум автомобили на любой вкус',
    catalog_desc: '10 моделей премиум-класса для любых задач',
    about_label: 'О КОМПАНИИ',
    about_p1: 'Мы предоставляем услуги аренды премиум-автомобилей для деловых поездок, трансферов и особых мероприятий. Наш автопарк включает лучшие модели Mercedes-Benz, Lexus и Toyota.',
    about_p2: 'Каждый автомобиль регулярно обслуживается и оснащён всем необходимым для комфортной поездки. Профессиональные водители с опытом работы.',
    footer_tagline: 'Премиум аренда автомобилей',
    footer_copy: '© 2026 Ventas Group. Все права защищены.',
    book: 'Забронировать', specs_show: 'Характеристики', specs_hide: 'Скрыть',
    class_business_lux: 'Бизнес-класс · Люкс', class_minivan: 'Минивэн · Бизнес',
    class_bus: 'Микроавтобус · 16 мест', class_suv_lux: 'Внедорожник · Люкс',
    class_suv_prem: 'Внедорожник · Премиум', class_sedan: 'Бизнес-седан · Комфорт',
    desc_w223: 'Флагманский седан Mercedes-Benz нового поколения. Воплощение роскоши, технологий и комфорта.',
    desc_w222: 'Легендарный S-Class предыдущего поколения. Безупречный комфорт, представительный стиль и надёжность.',
    desc_vclass: 'Просторный премиум-минивэн для групповых поездок. Роскошный салон с капитанскими креслами.',
    desc_sprinter: 'Вместительный премиум-микроавтобус для групповых трансферов. Комфортные кресла бизнес-класса.',
    desc_lx600: 'Флагманский внедорожник Lexus нового поколения. Японское качество, роскошный интерьер.',
    desc_lx570: 'Классический премиум-внедорожник Lexus. Мощный V8, роскошный салон и непревзойдённая надёжность.',
    desc_lc300: 'Новейший Land Cruiser серии 300. Революционный дизайн и легендарная надёжность Toyota.',
    desc_lc200: 'Легендарный Land Cruiser 200 — символ надёжности и комфорта.',
    desc_camry80: 'Новейшее поколение легендарного Camry. Динамичный дизайн и высокий уровень оснащения.',
    desc_camry70: 'Проверенный временем Camry 7-го поколения. Надёжность, комфорт и элегантность.',
    spec_4pass: '4 пассажира', spec_7pass: '7 пассажиров', spec_6pass: '6 пассажиров', spec_16pass: '16 пассажиров',
    spec_3bag: '3 чемодана', spec_4bag: '4 чемодана', spec_6bag: '6 чемоданов', spec_16bag: '16 чемоданов',
    spec_climate: 'Климат-контроль', spec_wifi: 'Wi-Fi на борту', spec_leather: 'Кожаный салон',
    spec_audio: 'Премиум аудиосистема', spec_audio2: 'Аудиосистема',
    spec_audio_mark: 'Mark Levinson аудио', spec_audio_jbl: 'JBL аудиосистема',
    spec_park: 'Система парковки', spec_safe: 'Система безопасности', spec_auto: 'Автоматическая КПП',
    spec_4wd: 'Полный привод', spec_offroad: 'Внедорожный режим', spec_media: 'Мультимедиа',
    spec_captain: 'Капитанские кресла', spec_slide: 'Раздвижные двери', spec_screen: 'Задние экраны',
    spec_recline: 'Откидные кресла', spec_led: 'LED-освещение', spec_usb: 'USB-зарядки',
    spec_hybrid: 'Гибрид доступен', spec_popular: 'Популярный выбор',
    spec_engine_v6: 'Двигатель 3.0 V6', spec_engine_v8: 'Двигатель 4.7 V8',
    spec_engine_v4: 'Двигатель 2.0 V4', spec_engine_d: 'Дизель 2.2',
    spec_engine_v6t: 'Двигатель 3.5 V6 Twin Turbo', spec_engine_v8_5: 'Двигатель 5.7 V8',
    spec_engine_v8_4: 'Двигатель 4.6 V8', spec_engine_v6_25: 'Двигатель 2.5 V6',
  },
  kz: {
    nav_cars: 'Автомобильдер', nav_about: 'Біз туралы', call: 'Қоңырау шалу',
    catalog_label: 'БІЗДІҢ АВТОПАРК',
    catalog_title: 'Кез келген талғамға арналған премиум автомобильдер',
    catalog_desc: 'Кез келген міндет үшін 10 премиум-класс модель',
    about_label: 'КОМПАНИЯ ТУРАЛЫ',
    about_p1: 'Біз іссапарлар, трансферлер және арнайы іс-шаралар үшін премиум автомобильдерді жалға беру қызметтерін ұсынамыз.',
    about_p2: 'Әрбір автомобиль үнемі техникалық қызмет көреді. Тәжірибелі кәсіби жүргізушілер.',
    footer_tagline: 'Премиум автомобиль жалдау',
    footer_copy: '© 2026 Ventas Group. Барлық құқықтар қорғалған.',
    book: 'Брондау', specs_show: 'Сипаттамалар', specs_hide: 'Жасыру',
    class_business_lux: 'Бизнес-класс · Люкс', class_minivan: 'Минивэн · Бизнес',
    class_bus: 'Микроавтобус · 16 орын', class_suv_lux: 'Жол талғамайтын · Люкс',
    class_suv_prem: 'Жол талғамайтын · Премиум', class_sedan: 'Бизнес-седан · Комфорт',
    desc_w223: 'Mercedes-Benz жаңа буынының флагмандық седаны. Роскаш, технологиялар мен жайлылықтың бейнесі.',
    desc_w222: 'Алдыңғы буынның аңызға айналған S-Class. Мінсіз жайлылық және сенімділік.',
    desc_vclass: 'Топтық сапарлар үшін кең премиум-минивэн. Капитандық орындықтары бар роскаш салон.',
    desc_sprinter: 'Топтық трансферлер үшін сыйымды премиум-микроавтобус.',
    desc_lx600: 'Lexus жаңа буынының флагмандық жол талғамайтыны. Жапондық сапа мен роскаш интерьер.',
    desc_lx570: 'Lexus-тың классикалық премиум-жол талғамайтыны. Қуатты V8 және сенімділік.',
    desc_lc300: 'Ең жаңа Land Cruiser 300 сериясы. Революциялық дизайн және Toyota сенімділігі.',
    desc_lc200: 'Аңызға айналған Land Cruiser 200 — сенімділік пен жайлылықтың символы.',
    desc_camry80: 'Аңызға айналған Camry-дің ең жаңа буыны. Динамикалық дизайн.',
    desc_camry70: 'Уақыт сынынан өткен Camry 7-буыны. Сенімділік, жайлылық және элегантность.',
    spec_4pass: '4 жолаушы', spec_7pass: '7 жолаушы', spec_6pass: '6 жолаушы', spec_16pass: '16 жолаушы',
    spec_3bag: '3 чемодан', spec_4bag: '4 чемодан', spec_6bag: '6 чемодан', spec_16bag: '16 чемодан',
    spec_climate: 'Климат-бақылау', spec_wifi: 'Бортта Wi-Fi', spec_leather: 'Былғары салон',
    spec_audio: 'Премиум аудиожүйе', spec_audio2: 'Аудиожүйе',
    spec_audio_mark: 'Mark Levinson аудио', spec_audio_jbl: 'JBL аудиожүйе',
    spec_park: 'Тұрақ жүйесі', spec_safe: 'Қауіпсіздік жүйесі', spec_auto: 'Автоматты КПП',
    spec_4wd: 'Толық жетек', spec_offroad: 'Жол талғамайтын режим', spec_media: 'Мультимедиа',
    spec_captain: 'Капитандық орындықтар', spec_slide: 'Сырғымалы есіктер', spec_screen: 'Артқы экрандар',
    spec_recline: 'Еңкейетін орындықтар', spec_led: 'LED-жарықтандыру', spec_usb: 'USB-зарядтағыштар',
    spec_hybrid: 'Гибрид қолжетімді', spec_popular: 'Танымал таңдау',
    spec_engine_v6: '3.0 V6 қозғалтқыш', spec_engine_v8: '4.7 V8 қозғалтқыш',
    spec_engine_v4: '2.0 V4 қозғалтқыш', spec_engine_d: 'Дизель 2.2',
    spec_engine_v6t: '3.5 V6 Twin Turbo қозғалтқыш', spec_engine_v8_5: '5.7 V8 қозғалтқыш',
    spec_engine_v8_4: '4.6 V8 қозғалтқыш', spec_engine_v6_25: '2.5 V6 қозғалтқыш',
  },
  en: {
    nav_cars: 'Cars', nav_about: 'About', call: 'Call Us',
    catalog_label: 'OUR FLEET',
    catalog_title: 'Premium Cars for Every Taste',
    catalog_desc: '10 premium-class models for any occasion',
    about_label: 'ABOUT US',
    about_p1: 'We provide premium car rental services for business trips, transfers, and special events. Our fleet includes the finest models from Mercedes-Benz, Lexus, and Toyota.',
    about_p2: 'Every vehicle is regularly serviced and fully equipped for a comfortable ride. Professional drivers with extensive experience.',
    footer_tagline: 'Premium Car Rental',
    footer_copy: '© 2026 Ventas Group. All rights reserved.',
    book: 'Book Now', specs_show: 'Specifications', specs_hide: 'Hide',
    class_business_lux: 'Business Class · Luxury', class_minivan: 'Minivan · Business',
    class_bus: 'Minibus · 16 Seats', class_suv_lux: 'SUV · Luxury',
    class_suv_prem: 'SUV · Premium', class_sedan: 'Business Sedan · Comfort',
    desc_w223: 'The flagship sedan of the new Mercedes-Benz generation. The embodiment of luxury, technology, and comfort.',
    desc_w222: 'The legendary S-Class of the previous generation. Impeccable comfort and prestigious style.',
    desc_vclass: 'A spacious premium minivan for group travel. Luxurious cabin with captain seats.',
    desc_sprinter: 'A capacious premium minibus for group transfers. Business-class comfortable seats.',
    desc_lx600: 'The flagship SUV of the new Lexus generation. Japanese quality and luxurious interior.',
    desc_lx570: 'The classic premium Lexus SUV. Powerful V8 and unmatched reliability.',
    desc_lc300: "The latest Land Cruiser 300 series. Revolutionary design and Toyota's legendary reliability.",
    desc_lc200: "The legendary Land Cruiser 200 — a symbol of reliability and comfort.",
    desc_camry80: 'The latest generation of the legendary Camry. Dynamic design and high equipment level.',
    desc_camry70: 'The time-tested Camry 7th generation. Reliability, comfort, and elegance.',
    spec_4pass: '4 Passengers', spec_7pass: '7 Passengers', spec_6pass: '6 Passengers', spec_16pass: '16 Passengers',
    spec_3bag: '3 Luggage', spec_4bag: '4 Luggage', spec_6bag: '6 Luggage', spec_16bag: '16 Luggage',
    spec_climate: 'Climate Control', spec_wifi: 'Wi-Fi on Board', spec_leather: 'Leather Interior',
    spec_audio: 'Premium Audio System', spec_audio2: 'Audio System',
    spec_audio_mark: 'Mark Levinson Audio', spec_audio_jbl: 'JBL Audio System',
    spec_park: 'Parking System', spec_safe: 'Safety System', spec_auto: 'Automatic Transmission',
    spec_4wd: 'All-Wheel Drive', spec_offroad: 'Off-Road Mode', spec_media: 'Multimedia',
    spec_captain: 'Captain Seats', spec_slide: 'Sliding Doors', spec_screen: 'Rear Screens',
    spec_recline: 'Reclining Seats', spec_led: 'LED Lighting', spec_usb: 'USB Chargers',
    spec_hybrid: 'Hybrid Available', spec_popular: 'Popular Choice',
    spec_engine_v6: '3.0 V6 Engine', spec_engine_v8: '4.7 V8 Engine',
    spec_engine_v4: '2.0 V4 Engine', spec_engine_d: 'Diesel 2.2',
    spec_engine_v6t: '3.5 V6 Twin Turbo Engine', spec_engine_v8_5: '5.7 V8 Engine',
    spec_engine_v8_4: '4.6 V8 Engine', spec_engine_v6_25: '2.5 V6 Engine',
  }
};

let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ===========================
// SPECS TOGGLE (mobile accordion)
// ===========================
window.toggleSpecs = function(btn) {
  const specsList = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  if (isOpen) {
    btn.classList.remove('open');
    specsList.classList.remove('open');
    const spanEl = btn.querySelector('[data-i18n]');
    if (spanEl) spanEl.textContent = i18n[currentLang]['specs_show'] || 'Характеристики';
  } else {
    btn.classList.add('open');
    specsList.classList.add('open');
    const spanEl = btn.querySelector('[data-i18n]');
    if (spanEl) spanEl.textContent = i18n[currentLang]['specs_hide'] || 'Скрыть';
  }
};

// ===========================
// NAVBAR SCROLL
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
mobileClose.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

// ===========================
// BRAND TABS
// ===========================
document.querySelectorAll('.brand-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const brand = tab.dataset.brand;
    document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.brand-section').forEach(s => s.classList.remove('active'));
    const target = document.querySelector(`.brand-section[data-brand="${brand}"]`);
    if (target) target.classList.add('active');
  });
});

// ===========================
// MODEL TABS (per brand section)
// ===========================
document.querySelectorAll('.brand-section').forEach(section => {
  section.querySelectorAll('.car-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const carIndex = tab.dataset.car;
      section.querySelectorAll('.car-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      section.querySelectorAll('.car-panel').forEach(p => p.classList.remove('active'));
      const target = section.querySelector(`.car-panel[data-car="${carIndex}"]`);
      if (target) target.classList.add('active');
    });
  });
});

// ===========================
// GALLERY — collect all images per car
// ===========================
var carImages = {};

function buildCarImages() {
  document.querySelectorAll('.car-panel').forEach(panel => {
    const idx = parseInt(panel.dataset.car);
    carImages[idx] = Array.from(panel.querySelectorAll('.thumb')).map(t => t.src);
  });
}
buildCarImages();

var currentThumbIndex = {};

// ===========================
// LIGHTBOX
// ===========================
let lightboxCar = 0;
let lightboxIndex = 0;

window.openLightbox = function(carIndex, startIndex) {
  lightboxCar = carIndex;
  lightboxIndex = (currentThumbIndex[carIndex] !== undefined) ? currentThumbIndex[carIndex] : startIndex;
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
};

window.lightboxNav = function(dir) {
  const imgs = carImages[lightboxCar];
  if (!imgs) return;
  lightboxIndex = (lightboxIndex + dir + imgs.length) % imgs.length;
  updateLightboxImage();
};

function updateLightboxImage() {
  const imgs = carImages[lightboxCar];
  if (!imgs) return;
  const img = document.getElementById('lightbox-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = imgs[lightboxIndex];
    img.style.transition = 'opacity 0.25s ease';
    img.style.opacity = '1';
  }, 120);
  document.getElementById('lightbox-counter').textContent = `${lightboxIndex + 1} / ${imgs.length}`;
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'Escape') closeLightbox();
});

// Touch/swipe support
let touchStartX = 0;
document.getElementById('lightbox').addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
document.getElementById('lightbox').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) lightboxNav(dx < 0 ? 1 : -1);
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
