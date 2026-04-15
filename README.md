# VaultLM — NotebookLM Prompt Vault

A curated prompt library for Parul University students using NotebookLM, organised by subject, unit, and topic across multiple programs and batches.

**Live:** [Vercel](https://notebooklm-prompt-vault.vercel.app/) · [Netlify](https://notebooklm-prompt-vault.netlify.app/)

---

## Project structure

```
notebooklm-prompt-vault/
├── index.html                  Core prompts page
├── media.html                  Media / podcast prompts
├── practice.html               Practice & quiz prompts
├── documents.html              Document prompts
├── visuals.html                Visual prompts
├── community.html              Community prompts
├── subjects.html               Subject + unit selector (all programs)
├── years.html                  Hub — links to all year pages
│
├── years/
│   ├── btech/
│   │   ├── year1.html          B.Tech Year 1 (Sem 1 & 2)
│   │   ├── year2.html          B.Tech Year 2 (Sem 3 & 4)
│   │   ├── year3.html          B.Tech Year 3 (Sem 5 & 6)
│   │   └── year4.html          B.Tech Year 4 (Sem 7 & 8) — placeholder
│   └── dual-degree/
│       └── year1.html          Dual Degree NNDL Year 1 (Sem 1 & 2)
│
├── js/
│   ├── app.js                  Core app logic (Context, ThemeManager, etc.)
│   ├── prompts.js              Core prompt data
│   ├── community.js            Community prompt data
│   ├── shell.js                Shell/navigation helpers
│   ├── curricula.js            ← LEGACY — kept for reference only, not loaded
│   └── curricula/              ← ACTIVE — modular curricula system
│       ├── index.js            Barrel: imports all modules, sets window.CURRICULA
│       ├── btech/
│       │   ├── aids-2.js       B.Tech CSE AI & Data Science — Sem 2 (AY 2025-29 juniors)
│       │   ├── aids-4.js       B.Tech CSE AI & Data Science — Sem 4 (AY 2024-28)
│       │   ├── aiml-2.js       B.Tech CSE AI & ML — Sem 2 (AY 2025-29 juniors)
│       │   ├── aiml-6.js       B.Tech CSE AI & ML — Sem 6 (AY 2023-27 seniors)
│       │   └── ai-6.js         B.Tech CSE AI — Sem 6 (AY 2023-27 seniors)
│       └── dual-degree/
│           ├── nndl-sem1.js    NNDL Diploma Sem 1 — 4 subjects (22905001–22905004)
│           └── nndl-sem2.js    NNDL Diploma Sem 2 — 3 subjects (22905051–22905053)
│                               ↑ Project syllabus TBD — add when received
└── css/
    └── styles.css
```

---

## How to add a new semester

### 1. Create the data file

Copy the closest existing file as a template:

```
js/curricula/btech/aids-2.js        ← template for B.Tech
js/curricula/dual-degree/nndl-sem1.js ← template for Dual Degree
```

File naming convention:
- B.Tech: `<branch-short>-<sem>.js`  e.g. `aids-6.js`, `aiml-4.js`
- Dual Degree: `nndl-sem<N>.js`       e.g. `nndl-project.js`

Required fields per curriculum object:

```js
export const MY_KEY = {
  key:         'UNIQUE-KEY',       // stable — stored in localStorage/URL
  label:       'Sem N — Branch',   // shown in dropdowns
  branch:      'Full branch name',
  shortBranch: 'Short name',       // shown in chips
  program:     'btech',            // 'btech' | 'dual-degree'
  year:        2,                  // 1–4 for B.Tech, 1 for Diploma
  sem:         3,
  subjects: [
    {
      name:    'Subject Name',
      code:    'CODE123',
      credits: 4,
      type:    'theory+lab',       // 'theory' | 'lab' | 'theory+lab' | 'math' | 'soft'
      units:   [
        'Unit Title — subtopic 1, subtopic 2, subtopic 3',
        // ...
      ],
    },
  ],
};
```

### 2. Register in the barrel

Open `js/curricula/index.js` and add two lines:

```js
// import
import { MY_KEY } from './btech/my-file.js';   // or ./dual-degree/...

// add to ALL_CURRICULA array
const ALL_CURRICULA = [
  // ...existing entries...
  MY_KEY,   // ← add here
];
```

### 3. Update the year page

- **B.Tech new sem in existing year:** open `years/btech/yearN.html`, find the `Promise.allSettled` block, add:
  ```js
  import('../../js/curricula/btech/my-file.js').then(m => m.MY_EXPORT),
  ```
- **New B.Tech year page:** copy `year3.html` as a template, update `PAGE_YEAR` and the import list.
- **Dual Degree:** `years/dual-degree/year1.html` auto-loads via `ALL_CURRICULA` — just register in `index.js`.

### 4. Update `years.html` metadata

In `years.html`, update the `BTECH_META` or `DIPLOMA_META` array to reflect the new subject count.

---

## Batch mapping (current as of April 2026)

| Curricula key | Program / Branch | Batch | AY |
|---|---|---|---|
| `AIDS-2`  | B.Tech CSE AI & Data Science — Sem 2  | 2025–29 (juniors) | 2025-26 |
| `AIML-2`  | B.Tech CSE AI & ML — Sem 2            | 2025–29 (juniors) | 2025-26 |
| `AIDS-4`  | B.Tech CSE AI & Data Science — Sem 4  | 2024–28           | 2025-26 |
| `AI-6`    | B.Tech CSE AI — Sem 6                 | 2023–27 (seniors) | 2025-26 |
| `AIML-6`  | B.Tech CSE AI & ML — Sem 6            | 2023–27 (seniors) | 2025-26 |
| `NNDL-1`  | Diploma NNDL — Sem 1                  | 2025–26 (Diploma) | 2025-26 |
| `NNDL-2`  | Diploma NNDL — Sem 2                  | 2025–26 (Diploma) | 2025-26 |

> Curricula are **not tied to any single student's batch.** The AY picker on every year page lets any student enter their own admission year and see their correct academic year labels automatically.

---

## Bug fixes shipped (vs original repo)

| Fix | File | Detail |
|---|---|---|
| Prompts don't fill on load | `js/app.js` | `Context.init()` now calls `_refreshPrompts()` |
| Context wiped on page load | `js/app.js` | Removed broken 50ms cascade `setTimeout` chain |
| Cross-tab sync broken | `js/app.js` | Added `window.addEventListener('storage', …)` |
| `subjects.html` old script tag | `subjects.html` | Updated from `curricula.js` → `curricula/index.js` (module) |

---

## Future additions planned

- [ ] B.Tech Sem 1 data (any branch) — when syllabus provided
- [ ] B.Tech Sem 3/5 (odd sems) — when provided  
- [ ] B.Tech Year 4 (Sem 7 & 8) — when provided
- [ ] Dual Degree Project subject — syllabus TBD (slot reserved in `index.js`)
- [ ] Additional dual-degree programs as enrolled

