# FP CONSTRUCTION — Official Next.js Frontend Website

Corporate website for **FP CONSTRUCTION**, a French simplified joint-stock single-shareholder company (*Société par actions simplifiée à associé unique — SASU*) based in Le Havre, Normandy.

The platform showcases the company's dual-sector focus: physical execution of civil road works and urban utility networks (VRD), structural building trades, and the high-volume wholesale trade and import/export of construction materials and industrial hardware.

---

## 🏛️ Corporate Identification & Governance

All corporate information presented on the website strictly reflects the official registration with the **Greffe du Tribunal de Commerce du Havre**:

| Metric | Official Registered Value |
|---|---|
| **Corporate Name** | **FP CONSTRUCTION** |
| **Legal Status** | Société par actions simplifiée à associé unique (SASU) |
| **Commercial Registry (RCS)** | **106 568 231 R.C.S. Le Havre** |
| **Registration Date** | 19/06/2026 |
| **Statutory Duration** | 99 years (until 19/06/2125) |
| **Share Capital** | €1,000.00 |
| **European ID / VAT** | FR7606.106568231 |
| **Registered Office** | 5 Rue Armand Carrel, 76620 Le Havre, France |
| **Corporate President** | Dionysios Georgopoulos (Greek nationality) |
| **Financial Year-End** | December 31 (First closing: 31/12/2026) |

---

## 🏗️ Stated Activities & Business Scope

1. **Construction Materials Trading** — Wholesale buying, selling, and sourcing of structural steel, rebar, aggregates, cement, and timber.
2. **Industrial Hardware & Tools** — Distribution of heavy-duty mechanical fixings, fasteners, commercial power tools, and certified job-site PPE.
3. **Road Works (*Travaux Routiers*)** — Subgrade preparation, asphalt paving, road resurfacing, compaction, and industrial logistics yard pavement.
4. **Utility & VRD Works (*Voirie et Réseaux Divers*)** — Trench excavation, shoring, stormwater retention culverts, wastewater sewer networks, and dry utility conduit ducting.
5. **General Building Trades (*Bâtiment Général*)** — Structural reinforced concrete works, load-bearing masonry, and commercial building renovations.
6. **Import & Export Operations** — Containerized cargo handling, customs transit, and intermodal freight routing via the Port of Le Havre.
7. **Unregulated Goods Trading** — Cross-border trade, wholesale distribution, and sourcing of unregulated commercial goods.

---

## 💻 Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with native CSS variable theme tokens
- **Iconography**: [Iconify](https://iconify.design/) (`@iconify/react`) — *exclusive icon system*
- **Typography**: Inter Variable & Inter Display via `next/font/google` with OpenType `font-feature-settings: "ss03"`
- **Language**: JavaScript / JSX (`.js`, `.jsx`)
- **Deployment Presets**: Direct GitHub import configurations for **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`)

---

## 📁 Project Structure

```text
fp-construction/
├── components/                 # Reusable Server & Client Components
│   ├── Button.js               # Strict pill-geometry buttons (primary, outline, aloe)
│   ├── ContactForm.js          # Client component with complete validation & feedback
│   ├── CTASection.js           # Reusable call-to-action bands
│   ├── Footer.js               # Cinematic dark footer with complete RCS coordinates
│   ├── Hero.js                 # Cinematic hero with thin display typography
│   ├── Icon.js                 # Safe Iconify icon wrapper
│   ├── InfoCard.js             # Structured French SASU registry data cards
│   ├── Navbar.js               # Responsive navigation with active route pills & drawer
│   ├── SectionHeading.js       # Reusable header with category tag capsules
│   ├── ServiceCard.js          # Service card with deliverable checklists & imagery
│   └── ValueCard.js            # Institutional value cards
│
├── public/                     # Static assets & local photography
│   └── images/
│       ├── about/              # Le Havre maritime port & site coordination plans
│       ├── expertise/          # Civil road works, VRD, concrete structures, logistics
│       ├── hero/               # French civil engineering foundation site
│       └── services/           # Materials depot, hardware showroom, road pavers, VRD
│
├── src/app/                    # Next.js App Router
│   ├── about/page.js           # Company profile & verified legal registry cards
│   ├── contact/page.js         # Le Havre headquarters, coordinates & contact form
│   ├── expertise/page.js       # Areas of capability & technical compliance (no fake projects)
│   ├── services/page.js        # Comprehensive directory of all 7 stated activities
│   ├── globals.css             # Design tokens, ss03 font settings, shadows, and radii
│   ├── layout.js               # Root layout, fonts, Navbar/Footer wrappers, SEO metadata
│   └── page.js                 # Homepage with hero, services preview, values, and CTAs
│
├── design.md                   # Visual design system & token specification
├── netlify.toml                # Zero-config Netlify deployment preset
├── vercel.json                 # Zero-config Vercel deployment preset
├── package.json
└── README.md
```

---

## 🎨 Design System Compliance (`design.md`)

- **Dual-Track Canvas**:
  - **Cinematic Night Canvas** (`#000000`): Used for marketing heroes, dark cards (`#0a0a0a`), and the footer. High contrast, negative space, and white-stroked outline pills.
  - **Warm Cream Canvas** (`#fbfbf5` / `#ffffff`): Used for detailed content, service listings, tables, legal cards, and form interfaces.
- **Typography**: Thin display typography (weight 300/330) on display sizes (`display-xxl` through `display-md`), paired with Inter Variable (420–550) for UI body copy. OpenType `ss03` stylistic alternates are active globally.
- **Pill Geometry**: All buttons and tags strictly utilize the pill form factor (`rounded-full`, `9999px`).
- **Stacked Paper Shadows**: Light cards feature Level 3 elevation using layered tiny shadows (`shadow-level-3`) for a soft paper halo.
- **Authenticity Rule**: No fake projects, fabricated client logos, or false awards.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Installation
```bash
# Clone or navigate to the project directory
cd fp-construction

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts
- `npm run dev`: Launch local development server with Turbopack.
- `npm run build`: Build optimized production static bundle.
- `npm run start`: Start production server locally.
- `npm run lint`: Run ESLint checks (verified 0 errors, 0 warnings).

---

## ☁️ Deployment (Vercel & Netlify)

This repository includes pre-configured presets for zero-friction continuous deployment.

### Deploying to Vercel
1. Push this repository to your GitHub account.
2. Log into [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository (`FP-CONSTRUCTION`).
4. Vercel automatically detects the configuration via `vercel.json` and runs `npm run build`.
5. Click **Deploy**.

### Deploying to Netlify
1. Log into [Netlify](https://netlify.app) and click **Add new site > Import an existing project**.
2. Select GitHub and choose your repository (`FP-CONSTRUCTION`).
3. Netlify automatically reads `netlify.toml` (`@netlify/plugin-nextjs`).
4. Click **Deploy FP-CONSTRUCTION**.

---

## 📜 Compliance & Transparency Notice

FP CONSTRUCTION is a verified commercial entity registered in France. This web application is designed as a clean, accessible frontend interface. Contact form submissions on `/contact` are processed client-side with full validation; direct commercial inquiries should be directed to the registered office at 5 Rue Armand Carrel, 76620 Le Havre, France.

© 2026 FP CONSTRUCTION SASU. Registered with RCS Le Havre (106 568 231). All rights reserved.
