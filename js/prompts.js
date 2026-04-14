// prompts.js — 33 core prompt data objects
const PROMPTS = [
  // ── AUDIO OVERVIEW ──────────────────────────────────────────────
  {id:'ao1',tool:'Audio Overview',fmt:'Deep Dive',
   settings:['Format: Deep Dive','Length: Long','Two hosts'],
   tip:'Best for mastering a full unit before exams. Takes 15–25 min.',
   text:`Create a Deep Dive Audio Overview for [SUBJECT], [UNIT].

Cover every major concept in this unit. The two hosts should:
- Start with WHY this unit matters in the real world
- Explain each topic using an analogy before the technical definition
- Challenge each other's explanations to test accuracy
- End with 3 exam-likely questions and their answers

Focus especially on [TOPIC]. Keep it engaging and academically rigorous.`},

  {id:'ao2',tool:'Audio Overview',fmt:'Brief',
   settings:['Format: Brief','Length: Short','Core idea'],
   tip:'5-minute refresher. Use the morning of a lecture or exam.',
   text:`Give me a Brief Audio Overview of [TOPIC] in [SUBJECT].

Condense the single most important idea into 5 minutes. The host should:
- State the core concept in one sentence
- Give the simplest possible explanation
- Name 2 things students always confuse about this
- End with one exam tip

No digressions. Dense, fast, useful.`},

  {id:'ao3',tool:'Audio Overview',fmt:'Critique',
   settings:['Format: Default','Expert review'],
   tip:'Use after studying. Tests whether your understanding holds up to scrutiny.',
   text:`Create a Critique Audio Overview of [UNIT] in [SUBJECT].

One host presents the standard textbook explanation.
The other expert host critiques it by:
- Identifying oversimplifications
- Pointing out edge cases and exceptions
- Asking hard "but what about…" questions
- Suggesting the deeper or more accurate view

Topic focus: [TOPIC]. Make the critique academically sharp, not hostile.`},

  {id:'ao4',tool:'Audio Overview',fmt:'Debate',
   settings:['Format: Default','Two sides'],
   tip:'Great for topics with trade-offs: OS scheduling, network protocols, SE methodologies.',
   text:`Generate a Debate Audio Overview on [TOPIC] in [SUBJECT].

Two knowledgeable hosts take opposing positions on:
- Whether approach A or approach B is better in practice
- Trade-offs, edge cases, and real-world implications
- What examiners and industry professionals actually think

Keep both sides credible. End with a balanced verdict.
Context: [UNIT]`},

  // ── SLIDE DECK ──────────────────────────────────────────────────
  {id:'sd1',tool:'Slide Deck',fmt:'Detailed Deck',
   settings:['Format: Default','Full text on slides'],
   tip:'Use when building a presentation deck to submit or present in class.',
   text:`Create a Detailed Slide Deck for [SUBJECT] — [UNIT].

Structure:
- Slide 1: Title, subject, semester
- Slides 2–3: Unit overview and learning objectives
- Slides 4–(n-2): One slide per major topic in [UNIT], each with: heading, 3–5 bullet points, one diagram suggestion
- Slide (n-1): Key formulas / definitions summary
- Slide n: References and further reading

Topic emphasis: [TOPIC]
Make every bullet point exam-relevant.`},

  {id:'sd2',tool:'Slide Deck',fmt:'Presenter Slides',
   settings:['Format: Short','Talking points only'],
   tip:'Use when YOU will speak. Minimal text — forces you to explain rather than read.',
   text:`Build Presenter Slides for [UNIT] in [SUBJECT].

Rules:
- Maximum 6 words per bullet
- No complete sentences — keywords and fragments only
- Each slide has a clear visual prompt (what diagram/image to show)
- Speaker notes: 2–3 sentences per slide for what to say verbally
- Focus on [TOPIC] for the core slides

Output the slide text AND speaker notes for each slide.`},

  // ── VIDEO OVERVIEW ───────────────────────────────────────────────
  {id:'vo1',tool:'Video Overview',fmt:'Cinematic',
   settings:['Narrative-led','Cinematic (New!)'],
   tip:'The newest format. Creates a documentary-style video with storytelling.',
   text:`Produce a Cinematic Video Overview for [UNIT] in [SUBJECT].

Narrative direction: Tell the story of why [TOPIC] was invented or discovered.
- Open with the problem that existed before this concept
- Introduce the breakthrough or key insight
- Show how it changed computing / science / engineering
- Use visual metaphors: describe what should appear on screen at each moment
- Close with its modern relevance

Tone: BBC documentary. Pace: measured, weighty. Duration: 3–5 minutes.`},

  {id:'vo2',tool:'Video Overview',fmt:'Explainer',
   settings:['Concept connectivity'],
   tip:'Maps how concepts in a unit connect. Best for complex topics like OS or Networks.',
   text:`Create an Explainer Video Overview that maps [UNIT] in [SUBJECT].

The video should visually show:
- How the 4–6 main concepts in this unit connect to each other
- Which concept is foundational (must know first)
- Where [TOPIC] sits in the dependency chain
- One real-world scenario that ties all concepts together

Use animated diagram descriptions. Each concept gets a 30-second deep-pause explanation.`},

  {id:'vo3',tool:'Video Overview',fmt:'Brief',
   settings:['One key idea','Short'],
   tip:'90-second explainer. Perfect for last-minute revision of one concept.',
   text:`Generate a Brief Video Overview (90 seconds) explaining [TOPIC] in [SUBJECT].

Structure:
- 0–10s: Hook — one surprising or counter-intuitive fact about [TOPIC]
- 10–60s: Core explanation with one visual analogy
- 60–80s: One exam question this topic appears in + correct answer
- 80–90s: One line to remember forever

Unit context: [UNIT]. No unnecessary padding.`},

  // ── REPORTS ─────────────────────────────────────────────────────
  {id:'rp1',tool:'Reports',fmt:'Create Your Own',
   settings:['Length: Long','Total control'],
   tip:'Full flexibility. Use when you want a custom-structured document.',
   text:`Create a comprehensive report on [TOPIC] from [UNIT] in [SUBJECT].

Structure this report as follows:
1. Executive Summary (½ page)
2. Introduction and Background
3. Core Concepts and Definitions
4. Detailed Technical Explanation
5. Real-World Applications
6. Comparison with Alternatives (if applicable)
7. Exam-Relevant Points and Common Mistakes
8. References to source material

Use academic language. Length: 4–6 pages equivalent.`},

  {id:'rp2',tool:'Reports',fmt:'Briefing Doc',
   settings:['Length: Short–Medium','Pre-lecture prep'],
   tip:'Read before attending a lecture on this topic. Sets mental context.',
   text:`Write a Briefing Document for [TOPIC] in [UNIT] — [SUBJECT].

This briefing prepares me to attend a lecture on this topic. Include:
- What this topic is (2 sentences max)
- Why it matters (practical + exam relevance)
- 3 terms I must know before the lecture
- 2 questions I should try to get answered during the lecture
- One connection to something I already know

Keep it to 1 page. Dense, scannable, useful.`},

  {id:'rp3',tool:'Reports',fmt:'Study Guide',
   settings:['Length: Long','Exam prep'],
   tip:'The single most useful report format for exam preparation.',
   text:`Generate a complete Study Guide for [UNIT] in [SUBJECT].

The guide must include:
- Unit overview and scope
- All key definitions (term → definition → example)
- Concept summaries per topic (3–5 bullet points each)
- Important formulas or algorithms (if applicable)
- Common exam question patterns for this unit
- Memory aids and mnemonics
- "Examiner's perspective" box: what they love to test
- Self-test questions with answers

Emphasize [TOPIC] within the broader unit coverage.`},

  {id:'rp4',tool:'Reports',fmt:'Blog Post',
   settings:['Length: Medium','Concept solidification'],
   tip:'Writing it as a blog forces you to explain concepts simply. Great for deep understanding.',
   text:`Write a technical blog post explaining [TOPIC] in [SUBJECT].

Target audience: a fellow B.Tech student who hasn't studied this yet.
Tone: clear, conversational, technically accurate. No hand-waving.

Structure:
- Catchy title + one-sentence hook
- The "before" — what problem existed
- The concept explained simply, then rigorously
- A code snippet or diagram (describe it if visual)
- A real application in industry or research
- 3 takeaways

Context: [UNIT]. Length: 600–900 words.`},

  {id:'rp5',tool:'Reports',fmt:'Curriculum Strategy',
   settings:['Length: Long','AI Suggested','Semester planning'],
   tip:'Use at the start of a semester to plan your entire study strategy.',
   text:`Design a Curriculum Strategy for [SUBJECT] — Semester [UNIT].

Based on the source material, create:
1. A week-by-week study plan for the semester
2. Topic dependency map (what must be studied before what)
3. Time allocation recommendation (hours per unit based on complexity/weightage)
4. Assessment alignment: which units typically appear in mid-sem vs end-sem
5. Resource priority list: which source documents to read first
6. High-risk topics (complex + frequently examined)
7. Quick-win topics (simple + always in exams)

Focus area: [TOPIC]`},

  {id:'rp6',tool:'Reports',fmt:'Position Paper',
   settings:['Length: Long','AI Suggested','Viva preparation'],
   tip:'Simulates the kind of questions a viva examiner would ask. Argue and defend.',
   text:`Write a Technical Position Paper arguing for or against: [TOPIC] in [SUBJECT].

This should read like a viva answer. Structure:
- Thesis statement (your position in 1 sentence)
- Technical background (establish credibility)
- Main argument (3 points, each with evidence from source material)
- Counter-argument section (steelman the opposing view)
- Rebuttal (why your position still holds)
- Conclusion with implications

Context: [UNIT]. Length: 3–4 pages. Use formal academic tone.`},

  {id:'rp7',tool:'Reports',fmt:'Conceptual Anatomy',
   settings:['Length: Long','AI Suggested','Hardest concepts'],
   tip:'Dissects one concept completely. Use for the single hardest topic in a unit.',
   text:`Perform a Conceptual Anatomy of [TOPIC] in [UNIT] — [SUBJECT].

Dissect this concept completely:
1. What it IS (precise definition)
2. What it IS NOT (common misconceptions)
3. Why it EXISTS (the problem it solves)
4. How it WORKS (mechanism, step by step)
5. Where it BREAKS (limitations, failure conditions)
6. How it RELATES to 3 other concepts in this unit
7. How it is TESTED in exams (question types + sample answers)
8. One sentence that captures its essence

Leave no ambiguity. This is a deep dissection.`},

  {id:'rp8',tool:'Reports',fmt:'Technology Primer',
   settings:['Length: Medium–Long','AI Suggested','Lab sessions'],
   tip:'Bridges theory and lab. Read before any practical session.',
   text:`Create a Technology Primer for [TOPIC] in [UNIT] — [SUBJECT].

This is for use before a lab session. Include:
- What this technology/tool/algorithm actually does
- The 3–5 commands, functions, or steps I will use in the lab
- Expected outputs and how to verify correctness
- Common errors students make and how to fix them
- Connection to theory: which textbook concept does this lab practice
- A "minimum viable understanding" checklist before I start

Practical focus. No theory for theory's sake.`},

  // ── FLASHCARDS ───────────────────────────────────────────────────
  {id:'fc1',tool:'Flashcards',fmt:'Exam Pressure',
   settings:['Count: More','Difficulty: Hard','Exam week only'],
   tip:'Only use during exam week. High difficulty, many cards, full recall required.',
   text:`Generate Exam Pressure Flashcards for [UNIT] in [SUBJECT].

Requirements:
- 20+ cards targeting the hardest 20% of content
- Front: scenario-based or multi-step question (not simple definitions)
- Back: precise answer with key terms bolded
- Include: edge cases, exception scenarios, comparative questions
- Tag each card with difficulty: ⚡Hard / 💀Expert
- Include 3–5 cards on [TOPIC] specifically

Format: | Front | Back | Difficulty | Unit |`},

  {id:'fc2',tool:'Flashcards',fmt:'Balanced Study',
   settings:['Count: Standard','Difficulty: Medium','Mid-study default'],
   tip:'The everyday default. 15 cards covering an entire unit evenly.',
   text:`Create Balanced Study Flashcards for [UNIT] in [SUBJECT].

Generate 15 cards with even difficulty distribution:
- 5 basic recall (definitions, names, formulas)
- 7 conceptual understanding (explain, compare, why)
- 3 application (given scenario, what happens / which is correct)

Front: clear, specific question
Back: concise answer (2–4 lines max)
Cover all major topics in the unit. Include [TOPIC] in at least 3 cards.`},

  {id:'fc3',tool:'Flashcards',fmt:'Progressive Start',
   settings:['Count: Fewer','Difficulty: Easy','Day 1 of new topic'],
   tip:'Use on Day 1 of studying a new unit. Builds foundation before complexity.',
   text:`Make Progressive Starter Flashcards for [TOPIC] in [SUBJECT].

10 cards only. Rules:
- Start with "What is X?" style questions
- Answers must use plain English — no jargon without explanation
- Each card should build on the previous one
- Card 10 should be a simple application of what was learned
- No tricks, no edge cases — pure foundation

Unit context: [UNIT]. Goal: zero confusion after completing these 10 cards.`},

  // ── QUIZ ────────────────────────────────────────────────────────
  {id:'qz1',tool:'Quiz',fmt:'Exam Simulation',
   settings:['Count: More','Difficulty: Hard','Pre-exam'],
   tip:'Simulates actual university exam conditions. Full marks pressure.',
   text:`Generate an Exam Simulation Quiz for [UNIT] in [SUBJECT].

Create 20 questions in university exam format:
- 5 MCQ (4 options, one correct, explain why others are wrong)
- 5 short answer (2–4 marks each, keyword-based marking scheme)
- 5 medium answer (5 marks each, structured response required)
- 5 analytical (8–10 marks, multi-part, [TOPIC] focus)

Include marking scheme. Questions should match the pattern of previous university exams for this type of subject.`},

  {id:'qz2',tool:'Quiz',fmt:'Balanced Practice',
   settings:['Count: Standard','Difficulty: Medium','Regular revision'],
   tip:'10-question weekly quiz. Tracks your progress on a unit.',
   text:`Create a Balanced Practice Quiz for [UNIT] in [SUBJECT].

10 questions with variety:
- 3 MCQ (test recognition)
- 3 fill-in-the-blank (test recall)
- 2 short answer (test understanding)
- 2 application (test ability to use knowledge)

For each question provide:
- The question
- Correct answer
- Brief explanation of why it's correct
- Common wrong answer and why students choose it

Emphasize [TOPIC].`},

  {id:'qz3',tool:'Quiz',fmt:'Baseline Check',
   settings:['Count: Fewer','Difficulty: Easy','Before studying'],
   tip:'Take BEFORE studying a unit to diagnose what you already know.',
   text:`Generate a Baseline Check Quiz for [UNIT] in [SUBJECT].

5 diagnostic questions to measure prior knowledge:
- Question 1: Could any intelligent person answer this without studying?
- Questions 2–3: Requires having heard of the topic
- Questions 4–5: Requires actual study of the unit

After the quiz, provide: "If you answered X correctly, start at [topic]. If fewer, start at [earlier topic]."

Focus area: [TOPIC]. Diagnose, don't intimidate.`},

  // ── INFOGRAPHIC ──────────────────────────────────────────────────
  {id:'ig1',tool:'Infographic',fmt:'Comparison Chart',
   settings:['Orientation: Landscape','Style: Standard'],
   tip:'Compare two approaches, protocols, algorithms, or paradigms side by side.',
   text:`Design an Infographic Comparison Chart: [TOPIC] in [UNIT] — [SUBJECT].

Compare the two main approaches/variants/alternatives in this topic.

Layout: side-by-side landscape format
For each side include:
- Name and brief definition
- How it works (3–4 steps)
- Key strengths (✓)
- Key weaknesses (✗)
- When to use it
- Real-world example

Bottom row: verdict — when would an engineer choose one over the other?`},

  {id:'ig2',tool:'Infographic',fmt:'Process Flow',
   settings:['Orientation: Portrait','Style: Detailed Beta'],
   tip:'Step-by-step flows: OS scheduling, network packet journey, compilation, auth flow.',
   text:`Create a Process Flow Infographic for [TOPIC] in [UNIT] — [SUBJECT].

Portrait format with detailed step-by-step flow.
For each step include:
- Step number and name
- What happens technically
- What input enters and what output leaves
- Any decision points (diamond shapes) with both paths
- Error/exception path if applicable

End with: "Common exam question about this flow:" + 2 example questions.`},

  {id:'ig3',tool:'Infographic',fmt:'Concept Poster',
   settings:['Orientation: Square','Style: Standard'],
   tip:'A poster-style single-page summary of one entire concept. Print-worthy.',
   text:`Create a Concept Poster for [TOPIC] in [UNIT] — [SUBJECT].

Square format. One page. Designed to be printed and pinned above a desk.

Sections:
- Large title: [TOPIC]
- One-line definition (memorable, precise)
- Key components: 4–6 items with icons/symbols suggested
- Core formula or algorithm (if applicable)
- One diagram (describe layout)
- 3 facts that always appear in exams
- One "aha moment" insight students usually miss`},

  {id:'ig4',tool:'Infographic',fmt:'Timeline',
   settings:['Orientation: Landscape','Style: Concise'],
   tip:'Development of a technology, protocol versions, or historical evolution of a concept.',
   text:`Build a Timeline Infographic for the evolution of [TOPIC] in [SUBJECT].

Landscape format, concise labels.
For each milestone on the timeline:
- Year / version / era
- What changed or was introduced
- Why it mattered
- Who or what drove the change

Include [UNIT] context. End with: "Current state" and "Where it's heading".
Keep labels short — this is a visual timeline, not a wall of text.`},

  {id:'ig5',tool:'Infographic',fmt:'Hierarchy Map',
   settings:['Orientation: Portrait','Style: Standard'],
   tip:'Topic dependency trees, taxonomy charts, inheritance hierarchies.',
   text:`Create a Hierarchy Map Infographic for [UNIT] in [SUBJECT].

Portrait format showing the hierarchical structure of this unit's concepts.

Top level: The core principle or parent concept
Mid level: 3–5 sub-categories or derived concepts
Leaf level: Specific techniques, algorithms, or implementations

For each node:
- Name
- One-line description
- Arrow label showing the relationship to its parent

Focus on [TOPIC]'s position in the hierarchy. Show which nodes are exam-critical with a star ⭐.`},

  // ── DATA TABLE ───────────────────────────────────────────────────
  {id:'dt1',tool:'Data Table',fmt:'Concept Comparison',
   settings:['Use: Reference'],
   tip:'Master reference table. Compare all major concepts across consistent dimensions.',
   text:`Build a Concept Comparison Data Table for [UNIT] in [SUBJECT].

Columns: | Concept | Definition | How it works | Key properties | When to use | Exam tip |
Rows: every major concept in [UNIT] (minimum 6 rows)

Rules:
- Each cell: maximum 15 words
- Highlight [TOPIC] row
- Add a "Memory hook" column with one memorable phrase per concept
- Sort by complexity (simplest first)`},

  {id:'dt2',tool:'Data Table',fmt:'Formula Bank',
   settings:['Use: Formula-heavy subjects'],
   tip:'For PSNM, Physics, CN. Every formula in one scannable table.',
   text:`Generate a Formula Bank Data Table for [UNIT] in [SUBJECT].

Columns: | Formula / Algorithm | Notation | What each variable means | When to use it | Derived from | Exam frequency |
Include: all formulas, equations, complexity notations, and algorithms in this unit.

For [TOPIC] specifically: include worked example showing how to apply the formula.
Sort by: frequency of appearance in exams (most frequent first).`},

  {id:'dt3',tool:'Data Table',fmt:'Unit Summary',
   settings:['Use: Full-subject overview'],
   tip:'One row per topic within a unit. Full unit on one page.',
   text:`Create a Unit Summary Data Table for [UNIT] in [SUBJECT].

Columns: | Topic | Core concept | Key terms | Related topic | Weightage estimate | Done? |
One row per topic within the unit.

For [TOPIC]: expand into a sub-table with 3–5 sub-concepts.
Add a "Prerequisite" column showing what you need to know before each topic.
Final row: unit totals and overall difficulty rating.`},

  {id:'dt4',tool:'Data Table',fmt:'Exam Cheat Table',
   settings:['Use: Last-night prep'],
   tip:'The night before an exam. Everything you need, nothing you don\'t.',
   text:`Build an Exam Cheat Table for [SUBJECT] — [UNIT].

The single most exam-useful table possible. Columns:
| Topic | Most likely exam question type | Key answer points (3 bullets max) | Trap to avoid | Quick memory hook |

Cover every topic that could appear. Prioritize [TOPIC].
Keep every cell scannable in under 10 seconds.
Mark with ⚠️ any topic where students commonly lose easy marks.`},

  {id:'dt5',tool:'Data Table',fmt:'Pros and Cons Grid',
   settings:['Use: Compare and contrast'],
   tip:'Examiner favourite: "Compare X and Y". This table gives you instant answers.',
   text:`Generate a Pros and Cons Grid for [TOPIC] in [UNIT] — [SUBJECT].

Compare all major approaches, algorithms, or paradigms related to [TOPIC].

Columns: | Approach | Pros | Cons | Best case | Worst case | Complexity / Cost | Preferred by industry? |
Minimum 4 rows (4 approaches/variants).

Add a "Verdict" row at the bottom: one-sentence recommendation for each approach.
Context: [SUBJECT] exam perspective.`}
];

// Tool color map
const TOOL_COLORS = {
  'Audio Overview':'#6366f1','Slide Deck':'#8b5cf6',
  'Video Overview':'#ec4899','Reports':'#06b6d4',
  'Flashcards':'#f59e0b','Quiz':'#ef4444',
  'Infographic':'#10b981','Data Table':'#3b82f6'
};

window.PROMPTS = PROMPTS;
window.TOOL_COLORS = TOOL_COLORS;
