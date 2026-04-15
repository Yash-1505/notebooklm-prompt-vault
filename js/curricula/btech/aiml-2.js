// curricula/btech/aiml-2.js
// B.Tech CSE – AI & Machine Learning · Semester 2 (Year 1)
// AY: batch_year + 0  →  e.g. 2024 batch = AY 2024-25
// Last synced: April 2026

export const AIML_2 = {
  key: 'AIML-2',
  label: 'Sem 2 — CSE AI & ML',
  branch: 'B.Tech CSE - AI & Machine Learning',
  shortBranch: 'CSE AI & Machine Learning',
  program: 'btech',
  year: 1,
  sem: 2,
  subjects: [
    {
      name: 'Python Programming',
      code: '03014602PC01',
      credits: 4,
      type: 'theory+lab',
      units: [
        'Introduction to Python — History & Features, Installation, Python Syntax & Semantics, Variables, Identifiers, Keywords, Data Types & Conversions, I/O Functions',
        'Control Structures & Functions — Conditional Statements (if/elif/else), Looping (while/for/break/continue/pass), Function Definition, Arguments, Return Values',
        'Advanced Functions — Recursion, Lambda Functions, map(), filter(), reduce()',
        'Strings, Lists, Tuples & Dictionaries — String Operations & Slicing, List Operations, Set & Frozenset, Tuple Immutability, Dictionary Key-Value Access, Comprehensions',
        'OOP in Python — Classes & Objects, __init__() Method, Encapsulation, Inheritance, Polymorphism, Special Methods, Operator Overloading, Class vs Instance Variables',
        'File Handling, Modules & Exceptions — File Operations (open/read/write/append), Exception Handling (try/except/finally/raise), Built-in Exceptions, Modules & Packages, Standard Libraries',
      ],
    },
    {
      name: 'OOP with C++',
      code: '03010502ES01',
      credits: 3,
      type: 'theory+lab',
      units: [
        'OOP Principles — Object-Oriented Languages, C++ Concepts, Basic & User-Defined Data Types, Reference Variables, Operators, Scope Resolution, Access Specifiers',
        "Functions, Class & Objects — Function Prototyping, Inline, Default & Constant Arguments, Function Overloading, Defining Classes, Friend Functions, Nesting",
        'Constructor & Destructor — Default Constructor, Parameterized Constructor, Copy Constructor, Destructor',
        'Inheritance — Defining Derived Classes, Single, Multiple, Multilevel, Hybrid Inheritance, Function Overriding, Virtual Base Class, Abstract Classes',
        "Pointers & Virtual Functions — Pointers to Objects & Derived Classes, Virtual Functions, Pointer to Virtual Functions, 'this' Pointer",
      ],
    },
    {
      name: 'Electrical & Electronics Engineering',
      code: '03010601ES02',
      credits: 4,
      type: 'theory+lab',
      units: [
        "DC Circuits — Electrical Current, Voltage, Power & Energy, Ohm's Law, Kirchhoff's Laws, Series & Parallel Resistance, Superposition, Thevenin's & Norton's Theorems, Star-Delta",
        'AC Circuits — Sinusoidal Voltages & Currents, Phasor Representation, RLC Series Circuits, Resonance, Q-Factor, Power Factor, Three-Phase Balanced Star & Delta Loads',
        'Diodes & Transistors — Ideal Diode, Forward & Reverse Bias, Half/Full/Bridge Wave Rectifiers, Clipper & Clamper, BJT Characteristics (PNP & NPN), Biasing, Q-Point',
        'Voltage Regulators & Transducers — Series & Shunt Regulators, Fixed/Adjustable IC Regulators (78XX/79XX), DC Regulated Power Supply, Introduction to Transducers & Types',
      ],
    },
    {
      name: 'Linear Algebra',
      code: '03019102BS01',
      credits: 4,
      type: 'math',
      units: [
        'Matrices — System of Linear Equations (Gauss Elimination, LU Decomposition), Rank, Eigenvalues & Eigenvectors, Algebraic & Geometric Multiplicity',
        'Matrix Applications — Diagonalization, Cayley-Hamilton Theorem, Coding-Decoding Applications, Principal Component Analysis (PCA)',
        'Vector Space — Vector Spaces over Real Numbers, Elementary Properties, Subspaces, Spanning Set, Linear Independence, Basis & Dimension',
        'Linear Transformation — Definition from Rⁿ to Rᵐ, Standard Linear Transformations, Null Space & Column Space, Rank-Nullity Theorem, Matrix of LT',
        'Inner Product Spaces — Inner-Product Spaces, Norm & Properties, Angle between Vectors, Orthogonal Vectors, Gram-Schmidt Process, Orthonormal Basis',
      ],
    },
    {
      name: 'Privacy & Security in OSN',
      code: '03M10002UE01',
      credits: 3,
      type: 'theory',
      units: [
        'Introduction to OSNs — Definition & Evolution, Data Collection from Social Networks, Challenges & Opportunities, Social Media APIs',
        'Data Collection & Analysis — Techniques for Collecting Social Media Data, Ethical Considerations, Data Processing & Cleaning, Case Studies',
        'Trust, Credibility & Reputation — Trust in Online Communities, Reputation Systems, Detecting Misinformation & Fake News',
        'Security, Privacy & Fraud Detection — Law Enforcement & OSNs, Information Privacy Disclosure, Phishing Attacks, Fake Profiles & Fraudulent Entities',
        'Research & Practical Applications — Key Topic Review, Real-World OSN Case Studies, Research Paper Discussions, Future Trends in OSN Security',
      ],
    },
    {
      name: 'ICT Workshop',
      code: '03010702ES01',
      credits: 1,
      type: 'lab',
      units: [
        'Electronics Basics — Breadboard & DMM, CRO & Function Generator, Circuit Analysis (Voltage & Current), Voltage Regulator ICs',
        'Arduino Projects — LED Blinking, Button-Controlled LED, Buzzer Alarm, LCD Display, Relay Control, Temperature (DHT11), Ultrasonic Sensor, PIR Sensor, Water Flow Sensor',
      ],
    },
    {
      name: 'Adv. Communication & Interpersonal Skills',
      code: '03010002HM01',
      credits: 2,
      type: 'soft',
      units: [
        'Grammar Skills — Subject-Verb Agreement, Reported Speech (Direct & Indirect), Active & Passive Voice Conversion',
        'Vocabulary Building — Word Meanings, Synonyms & Antonyms, Homonyms, Homophones, Homographs, Idioms',
        'Personality Development — Grooming & Professional Etiquette, Building Confidence & Body Language, SWOT Analysis, Self Introduction',
        'Comprehension Skills — Reading Comprehension (Main Ideas & Details), Listening Comprehension (Tone, Purpose, Inquiry-Based)',
        'Writing & Productivity — Essay Structure (Introduction, Body, Conclusion), Logical Organisation, Time Management & Prioritization',
      ],
    },
    {
      name: 'Environmental Science',
      code: '03010002MC01',
      credits: 0,
      type: 'theory',
      units: [
        'Fundamentals of Environmental Science — Definition, Scope, Atmosphere/Hydrosphere/Lithosphere/Biosphere, Laws of Thermodynamics, Meteorological Parameters',
        'Environmental Pollution & Control — Air, Noise, Water, Soil, Thermal, Marine & Radioactive Pollution, Measurement Techniques, Control Devices',
        'Environment Management & Legislation — Indian Constitutional Provisions, Forest Conservation Act, Water & Air Pollution Acts, EPA 1986, Solid Waste Rules',
        'Contemporary Environmental Issues — Water Resource Projects, Rain Water Harvesting, Namami Gange, Wetland Conservation, Wildlife Projects (Tiger, Elephant)',
        'Climate Resilient City — Climate Resilience, Urban Heat Islands, Sustainable Urban Planning, Green Infrastructure, Nature-Based Solutions, Case Studies',
      ],
    },
  ],
};
