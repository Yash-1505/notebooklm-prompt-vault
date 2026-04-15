// curricula/btech/aids-2.js
// B.Tech CSE – AI & Data Science · Semester 2 (Year 1)
// AY: batch_year + 0  →  e.g. 2024 batch = AY 2024-25
// Last synced: April 2026

export const AIDS_2 = {
  key: 'AIDS-2',
  label: 'Sem 2 — AI & Data Science',
  branch: 'B.Tech CSE - AI & Data Science',
  shortBranch: 'CSE AI & Data Science',
  program: 'btech',
  year: 1,
  sem: 2,
  // AY is computed dynamically: `${batchYear}–${batchYear + 1}`
  subjects: [
    {
      name: 'Foundation of AI-ML',
      code: '03012402PC02',
      credits: 4,
      type: 'theory+lab',
      units: [
        'Introduction to AI — Definition & History of AI, AI vs ML vs DL, Types (Narrow/General/Super), Weak vs Strong AI',
        'AI Techniques & Ethics — Symbolic AI, ML-based AI, Hybrid Systems, AI Bias, Privacy, Job Automation',
        'Fundamentals of ML — Learning Paradigms (Supervised/Unsupervised/Semi-Supervised/RL), PAC Learning, Version Spaces',
        'ML in Practice — Data Collection, Preprocessing, Missing Values, Normalization, Outlier Analysis (Z-Score), Model Evaluation',
        'Supervised Learning — Linear/Non-Linear Models, Regression, Classification (Decision Trees, KNN, Logistic Regression), Performance Metrics',
        'Advanced Supervised Learning — Perceptron, Multi-layer Models, SVM, Multi-Class & Multi-Label Classification, Semi-Supervised Assumptions',
        'Unsupervised Learning — Clustering (K-Means, Hierarchical, DBSCAN), Dimensionality Reduction (PCA, t-SNE), Self-Organizing Maps',
        'Ensemble Learning & RL — Bias-Variance Tradeoff, Bagging, Boosting (AdaBoost/XGBoost), SMOTE, Hyperparameter Tuning, MDP, Q-Learning',
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
      name: 'Physics for Engineering',
      code: '03019202BS01',
      credits: 4,
      type: 'theory+lab',
      units: [
        'Oscillations & Waves — Damped & Forced Oscillations, Resonance, Q Factor, Sharpness, Transverse Waves, Longitudinal Wave Equations, Impedance Matching',
        "Electrodynamics — Field Concepts, Gradient, Divergence, Curl, Maxwell's Equations, Displacement Current, Wave Equation, Poynting Theorem, Energy Density",
        'Magnetic & Superconducting Materials — Classification of Magnetic Materials, Soft/Hard Magnets, Ferrites, Meissner Effect, Type-1 & Type-2 Superconductors',
        'Scientific Computing with Python — Python Basics, Loops & Functions, NumPy, SciPy, Matplotlib, Laplace/Poisson/Diffusion/Schrödinger Equation Applications',
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
