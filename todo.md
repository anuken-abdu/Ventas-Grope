# Ventas Group — Аренда авто с водителем (Landing Page)

## Design Guidelines

### Design References
- Premium dark automotive sites: rolls-royce.com, bentleymotors.com
- Style: Premium Minimalist, Dark Mode, Luxury Automotive

### Color Palette
- Background: #0A0A0A (Deep Black)
- Surface/Cards: #121212 (Dark Graphite)
- Surface elevated: #1A1A1A
- Border subtle: rgba(255,255,255,0.08)
- Border accent: rgba(255,255,255,0.15)
- Text primary: #FFFFFF
- Text secondary: #E0E0E0
- Text muted: #A0A0A0
- Accent gold: #C9A84C (premium gold)
- Accent gold light: #E2C47A
- WhatsApp green: #25D366
- Overlay: rgba(0,0,0,0.65)

### Typography
- Font: 'Montserrat', sans-serif (Google Fonts)
- H1: 700, 52px desktop / 32px mobile
- H2: 600, 36px desktop / 26px mobile
- H3 (car name): 600, 24px desktop / 20px mobile
- Body: 400, 15px, line-height 1.6
- Price: 700, 20px, accent gold
- Navigation tabs: 500, 14px

### Key Component Styles
- Cards: bg #121212, border 1px solid rgba(255,255,255,0.08), border-radius 12px
- Buttons primary: bg #C9A84C, text #0A0A0A, border-radius 8px, font-weight 600
- Button WhatsApp: bg #25D366, text #FFFFFF, border-radius 8px
- Button active: transform scale(0.96)
- Car tabs: border-bottom 2px solid transparent, active: border-bottom #C9A84C
- Modal overlay: rgba(0,0,0,0.85), backdrop-filter blur(4px)

### Images to Generate
1. **hero-bg-poster.jpg** — Dark luxury car interior at night, cinematic, dramatic lighting (photorealistic, dark mood)
2. **car-mercedes-s-class.jpg** — Mercedes-Benz S-Class black, studio shot, dark background (photorealistic)
3. **car-bmw-7-series.jpg** — BMW 7 Series black, elegant studio shot, dark background (photorealistic)
4. **car-lexus-lx.jpg** — Lexus LX black SUV, premium studio shot, dark background (photorealistic)
5. **car-mercedes-vito.jpg** — Mercedes-Benz Vito black minivan, dark background (photorealistic)
6. **car-toyota-camry.jpg** — Toyota Camry black, business class, dark background (photorealistic)

---

## Development Tasks

1. **index.html** — Main HTML structure: hero, catalog (tab switcher), footer, modal
2. **style.css** — Full BEM CSS: reset, typography, hero, catalog tabs, cards, modal, footer, animations, responsive
3. **script.js** — Vanilla JS ES6+: tab switching, scroll animations (IntersectionObserver), modal gallery, video fade-in