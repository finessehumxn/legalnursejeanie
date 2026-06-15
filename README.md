# Nurse Jeanie Legal

> Legal Nurse Consulting website for **Jeanie Vatelia, BSN, RN** — California & New Zealand licensed Legal Nurse Consultant serving plaintiff and defense attorneys remotely.

🌐 **Live:** [nursejeanielegal.com](https://www.legalnursejeanie.com)  
🚀 **Deployed on Railway** — auto-deploys on every push to `main`

---

## 🧑‍💻 Built by

**L.Finesse Humxn** — Full-stack developer & creative technologist  
Portfolio · LinkedIn

---

## 🏗 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, accessible, SEO-optimized |
| Styling | CSS3 — design tokens, CSS variables, responsive grid |
| Scripting | Vanilla JavaScript ES6+ |
| Icons | Tabler Icons (CDN) |
| Fonts | Google Fonts — Cormorant Garamond + DM Sans |
| Deployment | Railway (Node.js `serve`) |
| Version control | GitHub — auto-deploy on push |
| Domain | GoDaddy custom domain + Railway DNS |
| Booking | Calendly integration |
| Schema | JSON-LD structured data |

---

## ✨ Features

### Conversion & Business
- 3-role LNC pricing system ($150 / $200 / $350/hr)
- Calendly direct booking integration
- Floating sticky CTA (scroll-triggered — Book + Call)
- Attorney inquiry form → pre-filled mailto
- Nurse team application form → separate mailto
- Role-specific form pre-fill on every CTA click

### 18 Content Sections
Hero · Trust bar · Credentials bar · Market stats · Quick nav · Who I work with · How it works (4-step process) · Case types (8 categories) · Rates · Expert roles · Services (9 cards) · Deliverables + sample work product · FAQ (8 Q&As) · Story · Testimonials (6) + CTA · Not-AI rebuttal · Contact · Apply

### SEO & Technical
- Schema.org JSON-LD (ProfessionalService type)
- Full Open Graph + Twitter Card meta tags
- Canonical URL + robots + author + keywords
- Semantic HTML5 landmark elements
- Mobile-first responsive (breakpoints: 900px, 720px, 560px)
- Accessible — aria-labels, semantic nav, alt text
- External CSS/JS separated from HTML

### Design System
```css
--black: #0D0B12  --purple: #4A2D8C  --purple-mid: #6B45C1
--blue: #1C4FA0   --nude: #E8D9CC    --cream: #F7F3EF
```
**Fonts:** Cormorant Garamond (display) · DM Sans (body)

---

## 📁 Structure

```
nursejeanielegal/
├── index.html                        # Main HTML
├── css/
│   └── styles.css                    # Full design system (~400 lines)
├── js/
│   └── main.js                       # Nav, forms, scroll, sticky CTA
├── assets/
│   └── NURSE_JEANIE_transparent.png  # Brand logo
├── package.json                      # Railway/Node config
├── railway.json                      # Railway deploy config
└── README.md
```

---

## 🚀 Deploy

```bash
# Local
npm install && npm run dev  # → localhost:3000

# Railway — auto-deploys from GitHub main branch
# GitHub Pages — Settings → Pages → main / root
```

---

## 📞 Client

**Jeanie Vatelia, BSN, RN**  
CA RN License Active · NCNZ Registered · APC Active (New Zealand)  
(909) 638-2111 · contact@nursejeanielegal.com · nursejeanielegal.com
