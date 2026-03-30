# elinarosato.com — Personal Portfolio Design Spec

**Date:** 2026-03-30
**Status:** Approved
**Scope:** New personal portfolio site for elinarosato.com (phase 1). The current repo becomes elinarosato.studio in phase 2.

---

## Overview

A personal portfolio site targeting both ML/research and software/product engineering recruiters. The primary differentiator is a **story-first** structure: the site leads with Elina's life journey and trajectory, with projects appearing as supporting evidence rather than the main event. The design inherits the current site's editorial boldness and kinetic energy, with terminal emulator elements woven in as technical accent.

---

## Goals

- Convince ML/research recruiters: IoT specialisation, drone/PPO project, upcoming MSc at Lund
- Convince software/product recruiters: Qlik experience, multiplatform app, full-stack web work
- Stand out from standard project-dump portfolios through a narrative-driven structure
- Feel personal, human, and technically credible simultaneously

---

## Non-Goals

- This spec does not cover elinarosato.studio (phase 2)
- No CMS, no blog, no authentication
- No contact form backend (email link only)

---

## Site Structure

### Pages

| Route | Description |
|---|---|
| `/` | Homepage — single scroll narrative |
| `/projects/[slug]` | Individual project case study |

### Homepage Sections (top to bottom)

1. **Hero** — Full-viewport, dark background. Large display typography ("CREATIVE ENGINEER" or similar). Subtitle describing Elina's roles. Scroll prompt.
2. **The Journey** — Animated vertical timeline. Each node: date, role/institution, short descriptor. Nodes: BSc HKR → TA HKR × 2 → Qlik → Studio (ongoing) → MSc Lund (upcoming, visually distinct/faded).
3. **Technical DNA** — Terminal emulator block showing `$ elina --skills` command output. Lists: languages, ML/AI, embedded/IoT, web, tools. Animated typewriter effect.
4. **Projects** — Unified card grid. All projects together, no domain grouping. Each card: title + tag chips (tech + domain keywords). Clicking opens the case study page.
5. **Contact** — Dark section. Bold CTA line. Email link. Links to GitHub, LinkedIn.

### Project Case Study Page (`/projects/[slug]`)

Sections in order:
1. **Header** — Tags, title, context (course/year/company)
2. **Hero image** — Full-width visual, diagram, or demo gif
3. **TL;DR** — 1–2 sentence summary
4. **The Problem** — What was being solved and why it mattered
5. **Approach** — How it was tackled, with a terminal snippet (training output, sensor logs, build output, etc. adapted per project)
6. **Stack & Tools** — Pill list of technologies used
7. **Results** — Key metrics displayed as large numbers (collision-free %, training steps, user count, etc.)
8. **Visuals** — Image gallery: diagrams, screenshots, demo video
9. **Navigation** — ← back to projects / next project →

---

## Projects Inventory

| Project | Tags |
|---|---|
| Autonomous Forest Drone | Python, PPO, RL, PyTorch, ML |
| Face Recognition Door System | Python, OpenCV, Raspberry Pi, IoT, ML |
| Plant Monitor | Arduino, C++, MQTT, IoT |
| Team Management App | React Native, Node.js, Product, Mobile |
| UniFlow — Student Course Manager | Next.js, TypeScript, Web, Product |

---

## Visual Identity

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `darkest-dark` | `#202124` | Hero bg, section headers, timeline line |
| `almost-white` | `#f0eff5` | Body bg, alternating sections |
| `accent` | `#3682fd` | Links, tag chips, terminal prompt, cursor |
| `terminal-black` | `#111111` | Terminal/code block backgrounds only |
| `white` | `#ffffff` | Project cards |

### Typography

Carry over font config from the current repo exactly.

| Role | Font | CSS Variable |
|---|---|---|
| Display / Hero + Body / UI | Bricolage Grotesque | `--font-sans` / `--font-roboto` |
| Terminal / Code | System monospace (`font-family: monospace`) | n/a — only inside terminal blocks |
| Handwritten accent | DotGothic16 | `--font-handwritten` |

Fonts are loaded via Google Fonts in `globals.css`. Use the same `@import` statements.

---

## Technology Stack

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15, App Router, TypeScript | Familiar, SSG for fast loads, dynamic routes for case studies |
| Styling | Tailwind CSS | Same config as current site, extend with `terminal-black` |
| Animation | Framer Motion + GSAP | GSAP for hero display text; Framer Motion for scroll reveals, timeline entrance animations, and card hover states |
| Content | MDX files in `content/projects/` | Write case studies in Markdown, render as React pages; no CMS needed |
| Deployment | Vercel | Free tier, auto-deploys from `main` branch |
| Repository | New GitHub repo: `elinarosato-com` | Separate from studio repo |

---

## Phase 2 — elinarosato.studio

Out of scope for this spec. Work is lighter since the current repo is the base:

- Rebrand from generic portfolio → studio/agency identity
- Replace small projects section with a Services page
- Polish existing client case studies (3dcenter, baccello, haparanda, orthoteam)
- Point `elinarosato.studio` domain at the existing Vercel deployment

---

## Open Questions

- What are the courses Elina taught as TA at HKR? (for timeline detail)
- What was the scope of Elina's work at Qlik? (for timeline + potential case study)
- Are there existing screenshots/assets for the drone, face recognition, and plant monitor projects?
- What is the multiplatform team app built with (React Native confirmed, backend stack?)
- Does UniFlow have a name, or should one be chosen?
