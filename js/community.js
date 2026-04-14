// community.js — 18 community prompts
const COMMUNITY = [
  {id:'c1',title:'Cinematic Video — Short & Sharp',source:'GMartin-Data',badge:'Research-backed',category:'video',
   tip:'Optimized for the new Cinematic format. Forces dense, high-impact storytelling.',
   text:`[SUBJECT] — [UNIT] — Cinematic Overview, SHORT format.
Direct: open with the single most surprising insight from this unit.
No preamble. No "In this video we will cover…"
Visual direction: begin with a concrete real-world scene, then zoom into the concept.
Anchor every abstraction to something tangible.
Close with: one sentence that reframes how the viewer sees [TOPIC] forever.`},

  {id:'c2',title:'Cinematic Video — Non-Technical Tone',source:'GMartin-Data',badge:'Research-backed',category:'video',
   tip:'Explains technical concepts to non-specialists. Great for presentations to mixed audiences.',
   text:`Explain [TOPIC] in [SUBJECT] for someone with zero technical background.
Cinematic style. No jargon without immediate plain-English explanation.
Use one extended metaphor throughout the entire video (pick one from everyday life).
The metaphor must survive from the intro to the conclusion.
End with: why a non-technical person should care about [TOPIC].
Unit context: [UNIT]`},

  {id:'c3',title:'Audio — Gap Hunter (Critique)',source:'GMartin-Data',badge:'Audit',category:'audio',
   tip:'Finds what your source documents DON\'t cover. Critical for spotting study blind spots.',
   text:`Critique mode: Analyze [UNIT] in [SUBJECT] for GAPS.
What does this source material NOT explain adequately?
What questions would a curious student ask that these documents leave unanswered?
What connections to other subjects or real-world applications are missing?
Output: a "Gap Report" — ordered by severity (Critical gap → Minor gap).
For each gap: what's missing, why it matters, where I might find it.
Focus: [TOPIC]`},

  {id:'c4',title:'Audio — Technical Trade-off Debate',source:'GMartin-Data',badge:'Community',category:'audio',
   tip:'Forces you to think in trade-offs — the most important engineering skill.',
   text:`Generate a Technical Trade-off Debate for [TOPIC] in [UNIT] — [SUBJECT].
Two engineers debate in a podcast format. Neither is wrong — both have valid cases.
Engineer A: argues for approach/algorithm/method X
Engineer B: argues for approach/algorithm/method Y
Rules: every claim must cite a real scenario. No hand-waving.
Round 3: they find common ground — when does X win, when does Y win?
Conclude: the interviewer asks "what would you use in a real system?" Both answer.`},

  {id:'c5',title:'Slides — Minimal Editorial Style',source:'serenakeyitan',badge:'Design',category:'slides',
   tip:'Clean, print-magazine aesthetic. One idea per slide. High visual impact.',
   text:`Create slide content for [TOPIC] in [SUBJECT] in Minimal Editorial style.
Design direction for each slide:
- One dominant image/diagram (describe it precisely)
- Maximum 8 words of text on the slide itself
- Full speaker notes (what to say verbally)
- Typography: large, confident headline + one supporting line
No bullet lists. Each slide = one complete thought.
Sequence: [UNIT] narrative arc, 10 slides.`},

  {id:'c6',title:'Slides — Data-Forward Scientific',source:'serenakeyitan',badge:'Design',category:'slides',
   tip:'Every slide leads with data, chart, or diagram. Scientific presentation style.',
   text:`Build Data-Forward Scientific slides for [UNIT] in [SUBJECT].
Every slide must open with: a chart, graph, table, or data point.
Text is secondary — numbers and visuals lead.
For each slide: describe the exact visualization needed, the key data to show, and the one-sentence takeaway.
Focus: [TOPIC] must appear in at least 4 slides with supporting data/metrics.
Final slide: "Implications" — what this data means for practice.`},

  {id:'c7',title:'Slides — Bold Technical Deck',source:'serenakeyitan',badge:'Design',category:'slides',
   tip:'High-contrast, diagram-heavy deck. Built for technical audiences who want depth.',
   text:`Design a Bold Technical Slide Deck for [TOPIC] in [UNIT] — [SUBJECT].
Target audience: fellow engineers and faculty who know the basics.
Go deep immediately — skip introductory explanations.
Every slide: one technical diagram or architecture (describe in detail), technical terminology without apology, and 3–5 precise bullet points.
Include: at least one code snippet slide, one "How it fails" slide, one "Best practices" slide.
Total: 12–15 slides.`},

  {id:'c8',title:'Report — Skeptical Evaluator',source:'danielrosehill',badge:'Critical',category:'reports',
   tip:'Steelmans the weaknesses in your source material. Essential for viva preparation.',
   text:`Act as a Skeptical Evaluator of [UNIT] in [SUBJECT].
Your goal: find everything that is oversimplified, possibly outdated, or lacking nuance in this material.
For each claim or concept in [TOPIC], ask:
- Is this still true in 2025 practice?
- What are the exceptions not mentioned here?
- What would a domain expert push back on?
- What context is assumed but not stated?
Output: a Skeptic's Annotated Summary — original claim vs. the fuller picture.`},

  {id:'c9',title:'Report — Original Insight Finder',source:'danielrosehill',badge:'Critical',category:'reports',
   tip:'Surfaces non-obvious connections. Gives you original things to say in exams and vivas.',
   text:`Find original insights in [UNIT] — [SUBJECT] that are NOT obvious from a surface reading.
Look for:
- Non-obvious connections between [TOPIC] and other concepts in this material
- Implications the source documents hint at but don't state directly
- Patterns across multiple topics that suggest a deeper principle
- Historical or future significance not explicitly covered
Output: 5–7 original insights, each with: the insight itself, supporting evidence from the material, and why most students would miss it.`},

  {id:'c10',title:'Report — Exam Question Predictor',source:'GMartin-Data',badge:'Exam',category:'reports',
   tip:'Highest ROI prompt for exam preparation. Predicts what the examiner will ask.',
   text:`Predict the top exam questions for [UNIT] in [SUBJECT].
Analyze the source material and identify:
1. The 5 most concept-heavy topics (likely long-answer)
2. The 3 most formula/algorithm-heavy topics (likely numerical/code)
3. The 2 most comparison-heavy topics (likely compare-and-contrast)
4. The 1 most likely "trick" question topic
For each predicted question:
- Write the question exactly as an examiner would phrase it
- Give a model answer outline (key points to hit for full marks)
- Mark scheme estimate
Focus on [TOPIC].`},

  {id:'c11',title:'Report — Multi-Source Synthesis',source:'GMartin-Data',badge:'Advanced',category:'reports',
   tip:'Combines insights across all sources in a notebook. Best when you have multiple unit PDFs.',
   text:`Synthesize [UNIT] in [SUBJECT] across ALL source documents in this notebook.
Do not treat each source separately.
Find: where sources agree (consensus view), where they differ (conflicting explanations), where one source extends another (source B builds on source A's concept).
For [TOPIC] specifically: create a unified, synthesized explanation that represents the best of all sources combined.
Output format: Synthesis Report with Consensus, Conflicts, and Gaps sections.`},

  {id:'c12',title:'Infographic — Citation Verification',source:'serenakeyitan',badge:'Quality',category:'visuals',
   tip:'Verifies claims in your infographic against source material. Quality check before submission.',
   text:`Verify the accuracy of claims about [TOPIC] in [UNIT] — [SUBJECT].
For each major claim or statistic related to this topic:
1. Confirm it is supported by the source documents
2. Flag anything that seems to be an assumption not backed by sources
3. Identify any numbers or percentages that need a citation
4. Suggest more precise language where current descriptions are vague
Output: a Claim Verification Table: | Claim | Supported? | Source reference | Suggested correction |`},

  {id:'c13',title:'Infographic — Formula Visualization',source:'GMartin-Data',badge:'Math',category:'visuals',
   tip:'Makes formulas visual. Essential for PSNM, Physics, CN, and any math-heavy unit.',
   text:`Create a Formula Visualization guide for [TOPIC] in [UNIT] — [SUBJECT].
For each formula or mathematical relationship in this topic:
1. State the formula clearly
2. Describe a visual representation (graph, diagram, geometric shape)
3. Map each variable to something physical or intuitive
4. Show what happens when each variable increases or decreases (sensitivity)
5. Give a worked numerical example with real numbers
Make the math visual. If I can't draw it, describe it precisely enough that I can.`},

  {id:'c14',title:'Flashcards — Misconception Busters',source:'GMartin-Data',badge:'Exam',category:'flashcards',
   tip:'Targets the exact mistakes students make in exams. Most high-value flashcard format.',
   text:`Create Misconception Buster Flashcards for [UNIT] in [SUBJECT].
Front of each card: a WRONG statement (something students commonly believe but is false)
Back of each card: 
- Why it's wrong (the actual truth)
- What leads students to this misconception
- The correct mental model
- One memory device to never make this mistake again
Generate 12 cards. Focus on [TOPIC] for at least 5 cards.
Base misconceptions on what's implicitly tested in this source material.`},

  {id:'c15',title:'Flashcards — Concept Connection Cards',source:'GMartin-Data',badge:'Advanced',category:'flashcards',
   tip:'Tests understanding of relationships between concepts — harder than simple recall.',
   text:`Generate Concept Connection Flashcards for [UNIT] in [SUBJECT].
These cards test RELATIONSHIPS, not just definitions.
Front: "[Concept A] and [Concept B] — how are they related?"
Back:
- The connection in one sentence
- Why Concept A must be understood before Concept B (or vice versa)
- An example that uses BOTH concepts simultaneously
- Exam question that tests this connection
Generate 10 cards. Include [TOPIC] in at least 3. Difficulty: medium-hard.`},

  {id:'c16',title:'Quiz — Predict-Your-Errors Mode',source:'GMartin-Data',badge:'Strategy',category:'quiz',
   tip:'Focuses on the questions YOU are likely to get wrong. Personalized exam prep.',
   text:`Create a Predict-Your-Errors Quiz for [UNIT] in [SUBJECT].
Design questions that target the most common student errors — not easy questions, not impossibly hard ones.
Structure:
- 5 questions where the wrong answer is very tempting (near-miss questions)
- 3 questions that require distinguishing between two very similar concepts
- 2 questions where students typically run out of time or panic
For each question: after the answer, explain EXACTLY why the tempting wrong answer is wrong.
Focus on [TOPIC]. This quiz should sting a little.`},

  {id:'c17',title:'Data Table — Prerequisite Dependency Map',source:'GMartin-Data',badge:'Planning',category:'data-table',
   tip:'Tells you what order to study things. Prevents wasted time studying the wrong thing first.',
   text:`Build a Prerequisite Dependency Map for [UNIT] in [SUBJECT].
Table format: | Topic | Must know first | Enables understanding of | Can skip if | Study order |
For each topic in this unit:
- What previous knowledge is assumed
- What becomes possible to understand after this topic
- Whether it's safe to skip (and under what conditions)
- The recommended study sequence number
Highlight [TOPIC]'s position in the dependency chain.
Add: "Minimum viable path" — the fewest topics to study to pass vs. to excel.`},

  {id:'c18',title:'Data Table — Exam Trap Hunter',source:'GMartin-Data',badge:'Exam',category:'data-table',
   tip:'Finds every trick, trap, and gotcha that examiners love. Prevents lost marks.',
   text:`Build an Exam Trap Hunter Table for [UNIT] in [SUBJECT].
Find every trap, trick, and common mistake in this unit.
Columns: | Topic | The Trap | Why students fall for it | Correct answer | Marks typically lost |
For each trap:
- State the exact confusing question type
- Explain the cognitive trick being used
- Give the completely correct answer
- Estimate how many marks this trap typically costs
Cover [TOPIC] in detail. Minimum 10 traps. Sort by: marks lost (highest first).`}
];

const COMMUNITY_CATEGORIES = ['all','video','audio','slides','reports','visuals','flashcards','quiz','data-table'];

window.COMMUNITY = COMMUNITY;
window.COMMUNITY_CATEGORIES = COMMUNITY_CATEGORIES;
