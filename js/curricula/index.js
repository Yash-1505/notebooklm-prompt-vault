// js/curricula/index.js — barrel that assembles window.CURRICULA
// ─────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW SEMESTER
//   1. Create  js/curricula/<program>/<key>.js  (copy any existing as template)
//   2. Export a named const following the same shape as the others
//   3. Import it below and add to ALL_CURRICULA array
//   4. Done — subjects.html, year pages, and app.js pick it up automatically
//
// PROGRAM TAGS:
//   'btech'       — B.Tech semesters (any branch/batch)
//   'dual-degree' — One Year Diploma (Neural Networks & Deep Learning)
//
// BATCH MAPPING — who currently has which semesters:
//   AIDS-2  · AIML-2  → Junior batch (AY 2025-29, Sem 2 ongoing)
//   AIDS-4            → Yash's batch  (AY 2024-28, Sem 4 ongoing)
//   AI-6    · AIML-6  → Senior batch  (AY 2023-27, Sem 6 ongoing)
//   NNDL-1  · NNDL-2  → Dual Degree Diploma (One Year, 2025-26)
//
// NOTE: Curricula are stored independently — nothing is tied to a
//       single person's batch. The AY system on year pages lets any
//       student pick their admission year to see their own AY labels.
//
// AY COMPUTATION (batch-agnostic):
//   AY = `${batchYear + (year - 1)}–${batchYear + year}`
//   where batchYear = user-selected admission year (e.g. 2024)
//   and   year      = curriculum's year field (1–4 for B.Tech, 1 for Diploma)
// ─────────────────────────────────────────────────────────────────

// ── B.Tech modules ───────────────────────────────────────────────
import { AIDS_2 }  from './btech/aids-2.js';
import { AIDS_4 }  from './btech/aids-4.js';
import { AIML_2 }  from './btech/aiml-2.js';
import { AIML_6 }  from './btech/aiml-6.js';
import { AI_6   }  from './btech/ai-6.js';

// ── Dual Degree (Diploma) modules ────────────────────────────────
import { NNDL_SEM1 } from './dual-degree/nndl-sem1.js';
import { NNDL_SEM2 } from './dual-degree/nndl-sem2.js';
// TODO: Add project module when syllabus is ready:
// import { NNDL_PROJECT } from './dual-degree/nndl-project.js';

// ── Master registry ──────────────────────────────────────────────
const ALL_CURRICULA = [
  // B.Tech — sorted by sem ascending
  AIDS_2,
  AIML_2,
  AIDS_4,
  AI_6,
  AIML_6,

  // Dual Degree
  NNDL_SEM1,
  NNDL_SEM2,
];

const CURRICULA = {};
for (const c of ALL_CURRICULA) {
  CURRICULA[c.key] = c;
}

// ── AY helper ────────────────────────────────────────────────────
function getAcademicYear(curriculum, batchYear) {
  const startYear = batchYear + (curriculum.year - 1);
  return `${startYear}-${String(startYear + 1).slice(-2)}`;
}

function getCurriculaByProgram(program) {
  return ALL_CURRICULA.filter(c => c.program === program);
}

function getCurriculaByYear(year, program = 'btech') {
  return ALL_CURRICULA.filter(c => c.program === program && c.year === year);
}

// ── Expose globally ──────────────────────────────────────────────
window.CURRICULA             = CURRICULA;
window.ALL_CURRICULA         = ALL_CURRICULA;
window.getAcademicYear       = getAcademicYear;
window.getCurriculaByProgram = getCurriculaByProgram;
window.getCurriculaByYear    = getCurriculaByYear;

export {
  CURRICULA,
  ALL_CURRICULA,
  getAcademicYear,
  getCurriculaByProgram,
  getCurriculaByYear,
};
