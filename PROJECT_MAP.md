# PROJECT_MAP — Visual Designer & Illustrator Portfolio

> Current Date: June 2026
> Status: Ready for Deployment
> Owner: مراد لبحمادي — Graphic Designer & Illustrator
> Location: Morocco
> Email: businessemorad@gmail.com
> Domain: businessemorad.com

---

## [PROJECT_GOALS]

| Goal | Metric |
|------|--------|
| Build personal brand as premium Visual Designer & Illustrator | Brand recall among target clients |
| Convert visitors into paying clients | Contact form submission rate ≥ 3% |
| Showcase design range & quality | Average time on Portfolio section > 2 min |
| Establish authority in visual storytelling | Testimonials & case study engagement |
| Generate freelance leads organically | Monthly inbound inquiries ≥ 10 |

**Primary KPI:** Conversion rate (visitor → inquiry)
**Secondary KPI:** Portfolio page dwell time, scroll depth, about-to-contact flow completion

---

## [TARGET_AUDIENCE]

### Primary Segments

| Segment | Needs | Pain Points |
|---------|-------|-------------|
| **Marketing Agencies** (30-45, Art Directors, Creative Leads) | Need reliable visual talent for client campaigns; want consistent style + quick turnaround | Tired of vetting low-skill freelancers; need someone who "gets" brand strategy |
| **E-commerce Stores** (25-40, Founders, Marketing Managers) | Product illustrations, packaging design, social media visuals | Can't find illustrators who understand conversion-focused design |
| **Startups** (28-38, Founders, Design Leads) | Brand identity, pitch deck visuals, website illustrations | Limited budget but need premium look; need fast execution |
| **Small Business Owners** (35-55) | Logo, branding, marketing materials | Don't know design terminology; need hand-holding + clear packages |

### User Personas

**Persona A — "The Busy Creative Director"** (Amina, 38)
- Works at a mid-size ad agency in Riyadh
- Needs an illustrator for a 3-month campaign
- Values: reliability, style consistency, speed
- Fears: hiring someone who misses deadlines
- Decision trigger: seeing a similar project in portfolio + clear process

**Persona B — "The Bootstrapped Founder"** (Salem, 31)
- Launched an e-commerce brand 6 months ago
- Needs product illustrations and social assets monthly
- Values: clear pricing, quick turnaround, commercial usage rights
- Fears: hidden costs, unclear licensing
- Decision trigger: transparent packages + testimonials

---

## [CONTENT_STRATEGY]

### Core Message
> "I don't just draw — I solve visual problems that grow your business."

### Value Proposition

| Element | Statement |
|---------|-----------|
| **Headline (Hero)** | Visual Design & Illustration for brands that want to be remembered |
| **Sub-headline** | I help agencies, e-commerce brands, and startups turn complex ideas into clear, beautiful visuals — on time and on brand. |
| **Unique Differentiator** | Design-thinking approach + illustration craft = visuals that convert, not just decorate |

### Brand Tone
- Professional but warm
- Confident but not arrogant
- Clear and direct (no "designer speak")
- Arabic-friendly (bilingual considerations: English primary, Arabic secondary for Gulf clients)

### Emotional Response Goal
When a visitor lands: _"This is exactly what I've been looking for."_
After browsing: _"I can trust this person with my brand."_
After contacting: _"Finally, a designer who understands business."_

---

## [TECH_STACK]

### Versions (Verified June 2026)

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 6.4.5 | Static site framework (SSG + islands) |
| TailwindCSS | 4.3.0 | Utility-first CSS (dark mode via `class` strategy) |
| GSAP | 3.15.0 | Reserved for CSS-impossible animations only |
| TypeScript | 5.x | Type safety |
| MDX | latest | Content management (portfolio projects) |
| Vercel | — | Hosting + CI/CD |
| Cal.com | — | Booking widget (replaces Calendly) |

### Why This Stack

| Consideration | Choice | Why |
|---------------|--------|-----|
| Framework | **Astro** over Next.js | Portfolio is content-heavy, app-like interactivity minimal. Astro ships 0 JS by default = faster loads. Next.js would be overkill. Islands architecture perfect for isolated interactive zones (hero animation, contact form). |
| Styling | **TailwindCSS** | Rapid prototyping, consistent design tokens, tiny production CSS. |
| Animations | **CSS-first, GSAP last resort** | CSS transitions/animations preferred for perf. GSAP only for timelines CSS cannot express (e.g., chained scroll-driven sequences). No Framer Motion — keeping JS minimal. |
| Content | **MDX** | Portfolio projects as markdown with embedded components (images, galleries, video). No CMS overhead. |
| Hosting | **Vercel** | Native Astro support, global CDN, image optimization, Analytics. |

---

## [SYSTEM_FLOW]

```
User ──► Landing (Hero)
            │
            ▼
         About ──► (Why me? + Process)
            │
            ▼
         Services ──► (Packages + Pricing)
            │
            ▼
         Portfolio ──► (Case Studies / Gallery)
            │
            ▼
         Testimonials ──► (Social Proof)
            │
            ▼
         Contact ──► (Form + Cal.com booking)
            │
            ▼
        [Conversion] ──► Email notification + CRM
```

### User Journey Details

| Stage | Section | Goal | CTA | Success Criteria |
|-------|---------|------|-----|------------------|
| 1 | Hero | Hook visitor in < 3 sec | "See my work" / "Let's talk" | Bounce rate < 40% |
| 2 | About | Build trust + relatability | "How I work" (scroll) | Scroll depth > 70% |
| 3 | Services | Show value + clear offer | "Book a call" | Click rate > 5% |
| 4 | Portfolio | Demonstrate quality + range | "View project" → detail | Avg time > 120s |
| 5 | Testimonials | Remove doubt + risk | "Read more" | Social proof absorption |
| 6 | Contact | Convert | "Send message" | Form submission > 3% |

---

## [ARCHITECTURE]

### Design System Tokens

#### Color System

**Light Mode (default)**

| Token | Hex | Role |
|-------|-----|------|
| Primary (Brand) | `#0F172A` | Trust, premium, professional |
| Accent (Vibrant) | `#FF6B6B` | Energy, creativity, CTA |
| Secondary | `#F59E0B` | Premium, illustration-friendly |
| Neutral | `#475569` | Readability, calm |
| Surface | `#F8FAFC` | Clean, modern canvas |
| Gradient | Navy → Indigo (`#0F172A` → `#312E81`) | Hero/depth |

**Dark Mode**

| Token | Hex | Role |
|-------|-----|------|
| Surface (bg) | `#0B1120` | Deep dark canvas |
| Surface Card | `#1E293B` | Card / elevated surfaces |
| Text Primary | `#F1F5F9` | High-emphasis text |
| Text Secondary | `#94A3B8` | Low-emphasis text |
| Accent (Vibrant) | `#FF6B6B` | Unchanged — pops against dark |
| Secondary | `#FCD34D` | Slightly brighter for dark bg |
| Border | `#334155` | Subtle dividers |

**Accessibility:** All text combos pass WCAG AA (contrast ratio ≥ 4.5:1) in both modes.

**Theme Detection:** System preference first (`prefers-color-scheme`), localStorage override. No flash — inline critical script in `<head>`.

#### Typography Strategy

```
Headings:    Satoshi (or Inter) — geometric, modern, premium
Body:        Plus Jakarta Sans — warm, readable, clean
Display:     Clash Display (or Cabinet Grotesk) — bold, for hero / section titles
Monospace:   JetBrains Mono — for stats, years, numbers (optional accent)
Fallback:    system-ui, sans-serif
```

Scale: 16px base → 1.25 ratio → Major Third (16, 20, 25, 31, 39, 49, 61)

#### Layout System

```
Grid:     12-column responsive grid
Max-W:    1280px (content), 1440px (full-bleed sections)
Breakpts: 640 / 768 / 1024 / 1280
Spacing:  4px base (Tailwind defaults)
Gutter:   24px (mobile), 48px (desktop)
```

#### Animation Strategy

**Principle:** CSS-first. GSAP only when CSS cannot achieve the effect (e.g., chained scroll-linked timelines, scrub-based SVG path draw). Performance is non-negotiable — if an animation impacts INP or CLS, it's removed.

| Element | Technique | Implementation | Trigger |
|---------|-----------|----------------|---------|
| Hero headline | Staggered text reveal | CSS `@keyframes` with `animation-delay` on spans | On load |
| Hero visual | Subtle parallax | CSS `transform: translateZ()` with `scroll-timeline` | Scroll |
| Section transitions | Fade + translate up | CSS `@keyframes` + Intersection Observer class toggle | Scroll into view |
| Portfolio thumbnails | Scale + shadow | CSS `transition: transform 0.3s ease` | Hover |
| Stats / counters | Number count-up | Vanilla JS `requestAnimationFrame` | Scroll into view |
| Testimonials cards | Staggered fade-in | CSS `@keyframes` with cascade delay | Scroll into view |
| CTA buttons | Scale on hover | CSS `transition: transform 0.2s` | Hover |
| Page transitions | Crossfade | View Transitions API (native, zero JS) | Navigation |
| Theme toggle | Icon morph | CSS transition on `transform` + `opacity` | Click |

**GSAP reserved for** (if needed): complex timeline sequences, scrub-linked animations, SVG path drawing. Evaluate each case: if CSS can do it in < 20 lines, use CSS.

**Performance guarantees:**
- All animations GPU-composited (`opacity`, `transform` only)
- `will-change` applied scoped and removed after animation
- `prefers-reduced-motion: reduce` respected globally — no motion, no GSAP load
- No layout-triggering properties animated (`width`, `height`, `top`, `margin`)
- LCP element (hero visual) never animated — loaded immediately
- No animation on first load below the fold (defer with IntersectionObserver)
- 60fps target; any animation causing dropped frames is removed

### Project Structure

```
portfolio/
├── public/
│   ├── fonts/              # Self-hosted woff2
│   ├── images/             # Static assets (og, favicon)
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── sections/       # Hero, About, Services, Portfolio, Testimonials, Contact
│   │   └── ui/             # Button, Card, Badge, Tag, Cursor, etc.
│   ├── content/
│   │   └── projects/       # MDX files, one per portfolio project
│   │       ├── project-01.mdx
│   │       └── project-02.mdx
│   ├── data/
│   │   ├── services.ts     # Services / packages data
│   │   ├── testimonials.ts # Testimonials content
│   │   └── stats.ts        # Stats / counters
│   ├── layouts/
│   │   └── BaseLayout.astro # Global structure, meta, fonts
│   ├── pages/
│   │   ├── index.astro     # Landing page (single-page sections)
│   │   ├── projects/
│   │   │   └── [slug].astro # Individual project detail
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css      # Tailwind directives + custom
│   ├── lib/
│   │   └── utils.ts        # cn(), helpers
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

**Rules:**
- No shared component library until 3+ consumers of the same component exist
- No abstracted "api layer" — this is a static site
- Sections are self-contained; section-specific components live inside sections/
- MDX for all portfolio content — no CMS overhead
- One page (index.astro) with scroll-based sections + [slug] for project details

---

## [MILESTONES]

| Phase | Tasks | Duration |
|-------|-------|----------|
| **P0 — Foundation** | Astro init, Tailwind setup, typography, color tokens, BaseLayout, responsive grid | 1 day |
| **P1 — Core UI** | Navigation (sticky + transparent), Button, Card, Section container, grid system | 1 day |
| **P2 — Hero Section** | Full-bleed hero, animated headline, CTA, background illustration/visual, parallax | 1.5 days |
| **P3 — About + Services** | Bio section with stats, services cards with pricing, animated process timeline | 1.5 days |
| **P4 — Portfolio** | Grid gallery with filters (category), hover effects, project detail page (MDX) | 2 days |
| **P5 — Social Proof + Contact** | Testimonials carousel/grid, contact form with validation, Cal.com booking embed | 1.5 days |
| **P6 — Polish** | Custom cursor, page transitions, 404 page, SEO meta, lazy loading, performance audit | 1 day |
| **P7 — Launch** | Domain + Vercel deploy, analytics, favicon, OG image, sitemap | 0.5 day |

**Total:** ~8-9 days (single developer)

---

## [ORPHANS & PENDING]

| Item | Status | Decision Needed |
|------|--------|----------------|
| Blog / Articles section | ❌ Postponed indefinitely | Not part of MVP. No thought leadership content. |
| Multi-language (Arabic) | ❓ Right-to-left support for Gulf clients? | Depends on target market |
| CMS integration (Sanity / Strapi) | ❌ Not needed. MDX is sufficient and simpler. | No admin panel needed |
| Case study template | ✅ Deep-dive for 2-3 featured projects | In P4 scope |
| Newsletter signup | ❌ Not in scope | Post-launch if needed |
| Testimonials video | ❓ Embed client video testimonials? | If available — high trust signal |
| Animations with respected motion preferences | ✅ Reduced motion media query | Scoped in P0 |
| Loading strategy | ✅ Critical CSS inline, fonts preload | Scoped in P0 |
| Server-side rendering | ✅ Static generation only. No SSR. | No backend needed |

---

## [TECHNICAL DECISIONS LOG]

| Decision | Rationale |
|----------|-----------|
| Single-page scroll for landing | Better scroll-based animation control; fewer page loads; cohesive narrative journey |
| MDX for portfolio | No database, no admin panel, no API calls. Write a file, get a page. Maximum simplicity. |
| No React/Vue/Svelte framework | Astro islands + vanilla JS for animations. Less JS = faster. GSAP only as last resort. |
| View Transitions API | Native browser API for smooth page transitions (project details). Zero JS cost. |
| Static generation | Every page pre-rendered at build. No server. No runtime costs. Instant loads globally. |
| Dark mode via Tailwind `class` strategy | System preference default + localStorage override. Inline critical script prevents FOUC. |
| Cal.com over Calendly | Open-source, self-hostable, more flexible branding, no vendor lock-in. |
| CSS-first animations | Prioritize performance. GSAP reserved for CSS-impossible sequences only. |
| No JS animation library loaded by default | GSAP loaded async only on pages that need it (check at build time). |

---

*This document is a living plan. Updates require team consensus.*
