# VaultLM — NotebookLM Prompt Vault

> Built by **Yashwanth** · B.Tech CSE AI & Data Science · PIET Parul University (2024–2028)  
> GitHub: [github.com/Yash-1505](https://github.com/Yash-1505)

A zero-dependency static site with **51 field-tested NotebookLM Studio prompts**, full PIET syllabus data for 5 batches across Sem 2/4/6, and AI-powered context auto-fill.

## Features

- **51 prompts** — 33 core + 18 community across all 8 NotebookLM Studio tools
- **AI Auto-Context** — Groq or Gemini extracts context and auto-fills all placeholders
- **Full PIET Syllabus** — 5 batches · Sem 2, 4 & 6 · AI&DS · CSE-AIML · CSE-AI · 51 subjects · 220+ topic units
- **4 Themes** — Glass · Editorial · Terminal · Blocks
- **Mobile-first** — works at 360px, hamburger nav, bottom-sheet modals
- **Zero dependencies** — no npm, no build step, no server

## Syllabus Coverage

| Batch Key | Branch | Sem | Subjects |
|-----------|--------|-----|----------|
| `AIDS-2` | B.Tech CSE - AI & Data Science | 2 | 8 |
| `AIML-2` | B.Tech CSE - AI & Machine Learning | 2 | 8 |
| `AIDS-4` | B.Tech CSE - AI & Data Science | 4 | 11 |
| `AI-6` | B.Tech CSE - Artificial Intelligence | 6 | 12 |
| `AIML-6` | B.Tech CSE - AI & Machine Learning | 6 | 12 |

Source: Official Parul University Academic Booklets 2025-26 (EVEN semester)

## Pages

| Page | Content |
|------|---------|
| `index.html` | Landing, context setter, group cards |
| `media.html` | Audio Overview (4) · Slide Deck (2) · Video Overview (3) |
| `documents.html` | Reports — all 8 formats |
| `practice.html` | Flashcards (3 modes) · Quiz (3 modes) |
| `visuals.html` | Infographic (5) · Data Table (5) |
| `subjects.html` | Sem/branch selector · unit picker · context applier |
| `community.html` | 18 prompts from 3 GitHub repos |

## Deploy

This is a **pure static site** — no build step, no server, no framework. Works on any static host.

**Netlify** — Drag the `vault/` folder onto netlify.com → done.

**GitHub Pages** — Push repo → Settings → Pages → Branch: main → Root (`/`) or `/docs`.

**Vercel** — `cd vault && npx vercel --prod`

**Cloudflare Pages** — Connect repo → Build command: _(none)_ → Root directory: `vault`

**Apache / cPanel / shared hosting** — Upload contents of `vault/` to `public_html/`. The included `.htaccess` sets cache headers automatically.

**Any other host** — Upload the `vault/` folder contents. All cache headers are declared in `_headers` (Netlify/Cloudflare format), `.htaccess` (Apache format), `netlify.toml` (Netlify), and `vercel.json` (Vercel). Pick whichever your host supports; the rest are ignored.

### Local Preview

```bash
cd vault && npx serve .
# or
cd vault && python -m http.server 8080
```

## AI Setup (Free)

**Groq** — [console.groq.com](https://console.groq.com) → create key → ⚙ Settings → paste.

**Gemini** — [aistudio.google.com/apikey](https://aistudio.google.com/apikey) → create key → ⚙ Settings → paste.

Keys are stored locally in your browser only — never sent anywhere except your chosen AI provider.

---

*PIET Parul University · B.Tech CSE AI & DS · Sem 4 → 6 · 2025–26 · [github.com/Yash-1505](https://github.com/Yash-1505)*
