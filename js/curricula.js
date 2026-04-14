// curricula.js — PIET Parul University syllabus data
// Source: Official Academic Booklets 2025-26 (EVEN semester)
// Batches: AIDS-2 · AIML-2 · AIDS-4 · AI-6 · AIML-6
// Last synced: April 2026 · github.com/Yash-1505

const CURRICULA = {

  // ─────────────────────────────────────────────────────────────────────────
  // Sem 2 — B.Tech AI & Data Science
  // ─────────────────────────────────────────────────────────────────────────
  'AIDS-2': {
    label: 'Sem 2 — AI & Data Science',
    branch: 'B.Tech CSE - AI & Data Science',
    shortBranch: 'CSE AI & Data Science',
    year: 1, sem: 2,
    subjects: [
      { name: 'Foundation of AI-ML', code: '03012402PC02', credits: 4, type: 'theory+lab',
        units: [
          'Introduction to AI — Definition & History of AI, AI vs ML vs DL, Types (Narrow/General/Super), Weak vs Strong AI',
          'AI Techniques & Ethics — Symbolic AI, ML-based AI, Hybrid Systems, AI Bias, Privacy, Job Automation',
          'Fundamentals of ML — Learning Paradigms (Supervised/Unsupervised/Semi-Supervised/RL), PAC Learning, Version Spaces',
          'ML in Practice — Data Collection, Preprocessing, Missing Values, Normalization, Outlier Analysis (Z-Score), Model Evaluation',
          'Supervised Learning — Linear/Non-Linear Models, Regression, Classification (Decision Trees, KNN, Logistic Regression), Performance Metrics',
          'Advanced Supervised Learning — Perceptron, Multi-layer Models, SVM, Multi-Class & Multi-Label Classification, Semi-Supervised Assumptions',
          'Unsupervised Learning — Clustering (K-Means, Hierarchical, DBSCAN), Dimensionality Reduction (PCA, t-SNE), Self-Organizing Maps',
          'Ensemble Learning & RL — Bias-Variance Tradeoff, Bagging, Boosting (AdaBoost/XGBoost), SMOTE, Hyperparameter Tuning, MDP, Q-Learning'
        ]
      },
      { name: 'Privacy & Security in OSN', code: '03M10002UE01', credits: 3, type: 'theory',
        units: [
          'Introduction to OSNs — Definition & Evolution, Data Collection from Social Networks, Challenges & Opportunities, Social Media APIs',
          'Data Collection & Analysis — Techniques for Collecting Social Media Data, Ethical Considerations, Data Processing & Cleaning, Case Studies',
          'Trust, Credibility & Reputation — Trust in Online Communities, Reputation Systems, Detecting Misinformation & Fake News',
          'Security, Privacy & Fraud Detection — Law Enforcement & OSNs, Information Privacy Disclosure, Phishing Attacks, Fake Profiles & Fraudulent Entities',
          'Research & Practical Applications — Key Topic Review, Real-World OSN Case Studies, Research Paper Discussions, Future Trends in OSN Security'
        ]
      },
      { name: 'Linear Algebra', code: '03019102BS01', credits: 4, type: 'math',
        units: [
          'Matrices — System of Linear Equations (Gauss Elimination, LU Decomposition), Rank, Eigenvalues & Eigenvectors, Algebraic & Geometric Multiplicity',
          'Matrix Applications — Diagonalization, Cayley-Hamilton Theorem, Coding-Decoding Applications, Principal Component Analysis (PCA)',
          'Vector Space — Vector Spaces over Real Numbers, Elementary Properties, Subspaces, Spanning Set, Linear Independence, Basis & Dimension',
          'Linear Transformation — Definition from Rⁿ to Rᵐ, Standard Linear Transformations, Null Space & Column Space, Rank-Nullity Theorem, Matrix of LT',
          'Inner Product Spaces — Inner-Product Spaces, Norm & Properties, Angle between Vectors, Orthogonal Vectors, Gram-Schmidt Process, Orthonormal Basis'
        ]
      },
      { name: 'Physics for Engineering', code: '03019202BS01', credits: 4, type: 'theory+lab',
        units: [
          'Oscillations & Waves — Damped & Forced Oscillations, Resonance, Q Factor, Sharpness, Transverse Waves, Longitudinal Wave Equations, Impedance Matching',
          'Electrodynamics — Field Concepts, Gradient, Divergence, Curl, Maxwell\'s Equations, Displacement Current, Wave Equation, Poynting Theorem, Energy Density',
          'Magnetic & Superconducting Materials — Classification of Magnetic Materials, Soft/Hard Magnets, Ferrites, Meissner Effect, Type-1 & Type-2 Superconductors',
          'Scientific Computing with Python — Python Basics, Loops & Functions, NumPy, SciPy, Matplotlib, Laplace/Poisson/Diffusion/Schrödinger Equation Applications'
        ]
      },
      { name: 'OOP with C++', code: '03010502ES01', credits: 3, type: 'theory+lab',
        units: [
          'OOP Principles — Object-Oriented Languages, C++ Concepts, Basic & User-Defined Data Types, Reference Variables, Operators, Scope Resolution, Access Specifiers',
          'Functions, Class & Objects — Function Prototyping, Inline, Default & Constant Arguments, Function Overloading, Defining Classes, Friend Functions, Nesting',
          'Constructor & Destructor — Default Constructor, Parameterized Constructor, Copy Constructor, Destructor',
          'Inheritance — Defining Derived Classes, Single, Multiple, Multilevel, Hybrid Inheritance, Function Overriding, Virtual Base Class, Abstract Classes',
          'Pointers & Virtual Functions — Pointers to Objects & Derived Classes, Virtual Functions, Pointer to Virtual Functions, \'this\' Pointer'
        ]
      },
      { name: 'ICT Workshop', code: '03010702ES01', credits: 1, type: 'lab',
        units: [
          'Electronics Basics — Breadboard & DMM, CRO & Function Generator, Circuit Analysis (Voltage & Current), Voltage Regulator ICs',
          'Arduino Projects — LED Blinking, Button-Controlled LED, Buzzer Alarm, LCD Display, Relay Control, Temperature (DHT11), Ultrasonic Sensor, PIR Sensor, Water Flow Sensor'
        ]
      },
      { name: 'Adv. Communication & Interpersonal Skills', code: '03010002HM01', credits: 2, type: 'soft',
        units: [
          'Grammar Skills — Subject-Verb Agreement, Reported Speech (Direct & Indirect), Active & Passive Voice Conversion',
          'Vocabulary Building — Word Meanings, Synonyms & Antonyms, Homonyms, Homophones, Homographs, Idioms',
          'Personality Development — Grooming & Professional Etiquette, Building Confidence & Body Language, SWOT Analysis, Self Introduction',
          'Comprehension Skills — Reading Comprehension (Main Ideas & Details), Listening Comprehension (Tone, Purpose, Inquiry-Based)',
          'Writing & Productivity — Essay Structure (Introduction, Body, Conclusion), Logical Organisation, Time Management & Prioritization'
        ]
      },
      { name: 'Environmental Science', code: '03010002MC01', credits: 0, type: 'theory',
        units: [
          'Fundamentals of Environmental Science — Definition, Scope, Atmosphere/Hydrosphere/Lithosphere/Biosphere, Laws of Thermodynamics, Meteorological Parameters',
          'Environmental Pollution & Control — Air, Noise, Water, Soil, Thermal, Marine & Radioactive Pollution, Measurement Techniques, Control Devices',
          'Environment Management & Legislation — Indian Constitutional Provisions, Forest Conservation Act, Water & Air Pollution Acts, EPA 1986, Solid Waste Rules',
          'Contemporary Environmental Issues — Water Resource Projects, Rain Water Harvesting, Namami Gange, Wetland Conservation, Wildlife Projects (Tiger, Elephant)',
          'Climate Resilient City — Climate Resilience, Urban Heat Islands, Sustainable Urban Planning, Green Infrastructure, Nature-Based Solutions, Case Studies'
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sem 2 — B.Tech CSE - AI & Machine Learning
  // ─────────────────────────────────────────────────────────────────────────
  'AIML-2': {
    label: 'Sem 2 — CSE AI & ML',
    branch: 'B.Tech CSE - AI & Machine Learning',
    shortBranch: 'CSE AI & Machine Learning',
    year: 1, sem: 2,
    subjects: [
      { name: 'Python Programming', code: '03014602PC01', credits: 4, type: 'theory+lab',
        units: [
          'Introduction to Python — History & Features, Installation, Python Syntax & Semantics, Variables, Identifiers, Keywords, Data Types & Conversions, I/O Functions',
          'Control Structures & Functions — Conditional Statements (if/elif/else), Looping (while/for/break/continue/pass), Function Definition, Arguments, Return Values',
          'Advanced Functions — Recursion, Lambda Functions, map(), filter(), reduce()',
          'Strings, Lists, Tuples & Dictionaries — String Operations & Slicing, List Operations, Set & Frozenset, Tuple Immutability, Dictionary Key-Value Access, Comprehensions',
          'OOP in Python — Classes & Objects, __init__() Method, Encapsulation, Inheritance, Polymorphism, Special Methods, Operator Overloading, Class vs Instance Variables',
          'File Handling, Modules & Exceptions — File Operations (open/read/write/append), Exception Handling (try/except/finally/raise), Built-in Exceptions, Modules & Packages, Standard Libraries'
        ]
      },
      { name: 'OOP with C++', code: '03010502ES01', credits: 3, type: 'theory+lab',
        units: [
          'OOP Principles — Object-Oriented Languages, C++ Concepts, Basic & User-Defined Data Types, Reference Variables, Operators, Scope Resolution, Access Specifiers',
          'Functions, Class & Objects — Function Prototyping, Inline, Default & Constant Arguments, Function Overloading, Defining Classes, Friend Functions, Nesting',
          'Constructor & Destructor — Default Constructor, Parameterized Constructor, Copy Constructor, Destructor',
          'Inheritance — Defining Derived Classes, Single, Multiple, Multilevel, Hybrid Inheritance, Function Overriding, Virtual Base Class, Abstract Classes',
          'Pointers & Virtual Functions — Pointers to Objects & Derived Classes, Virtual Functions, Pointer to Virtual Functions, \'this\' Pointer'
        ]
      },
      { name: 'Electrical & Electronics Engineering', code: '03010601ES02', credits: 4, type: 'theory+lab',
        units: [
          'DC Circuits — Electrical Current, Voltage, Power & Energy, Ohm\'s Law, Kirchhoff\'s Laws, Series & Parallel Resistance, Superposition, Thevenin\'s & Norton\'s Theorems, Star-Delta',
          'AC Circuits — Sinusoidal Voltages & Currents, Phasor Representation, RLC Series Circuits, Resonance, Q-Factor, Power Factor, Three-Phase Balanced Star & Delta Loads',
          'Diodes & Transistors — Ideal Diode, Forward & Reverse Bias, Half/Full/Bridge Wave Rectifiers, Clipper & Clamper, BJT Characteristics (PNP & NPN), Biasing, Q-Point',
          'Voltage Regulators & Transducers — Series & Shunt Regulators, Fixed/Adjustable IC Regulators (78XX/79XX), DC Regulated Power Supply, Introduction to Transducers & Types'
        ]
      },
      { name: 'Linear Algebra', code: '03019102BS01', credits: 4, type: 'math',
        units: [
          'Matrices — System of Linear Equations (Gauss Elimination, LU Decomposition), Rank, Eigenvalues & Eigenvectors, Algebraic & Geometric Multiplicity',
          'Matrix Applications — Diagonalization, Cayley-Hamilton Theorem, Coding-Decoding Applications, Principal Component Analysis (PCA)',
          'Vector Space — Vector Spaces over Real Numbers, Elementary Properties, Subspaces, Spanning Set, Linear Independence, Basis & Dimension',
          'Linear Transformation — Definition from Rⁿ to Rᵐ, Standard Linear Transformations, Null Space & Column Space, Rank-Nullity Theorem, Matrix of LT',
          'Inner Product Spaces — Inner-Product Spaces, Norm & Properties, Angle between Vectors, Orthogonal Vectors, Gram-Schmidt Process, Orthonormal Basis'
        ]
      },
      { name: 'Privacy & Security in OSN', code: '03M10002UE01', credits: 3, type: 'theory',
        units: [
          'Introduction to OSNs — Definition & Evolution, Data Collection from Social Networks, Challenges & Opportunities, Social Media APIs',
          'Data Collection & Analysis — Techniques for Collecting Social Media Data, Ethical Considerations, Data Processing & Cleaning, Case Studies',
          'Trust, Credibility & Reputation — Trust in Online Communities, Reputation Systems, Detecting Misinformation & Fake News',
          'Security, Privacy & Fraud Detection — Law Enforcement & OSNs, Information Privacy Disclosure, Phishing Attacks, Fake Profiles & Fraudulent Entities',
          'Research & Practical Applications — Key Topic Review, Real-World OSN Case Studies, Research Paper Discussions, Future Trends in OSN Security'
        ]
      },
      { name: 'ICT Workshop', code: '03010702ES01', credits: 1, type: 'lab',
        units: [
          'Electronics Basics — Breadboard & DMM, CRO & Function Generator, Circuit Analysis (Voltage & Current), Voltage Regulator ICs',
          'Arduino Projects — LED Blinking, Button-Controlled LED, Buzzer Alarm, LCD Display, Relay Control, Temperature (DHT11), Ultrasonic Sensor, PIR Sensor, Water Flow Sensor'
        ]
      },
      { name: 'Adv. Communication & Interpersonal Skills', code: '03010002HM01', credits: 2, type: 'soft',
        units: [
          'Grammar Skills — Subject-Verb Agreement, Reported Speech (Direct & Indirect), Active & Passive Voice Conversion',
          'Vocabulary Building — Word Meanings, Synonyms & Antonyms, Homonyms, Homophones, Homographs, Idioms',
          'Personality Development — Grooming & Professional Etiquette, Building Confidence & Body Language, SWOT Analysis, Self Introduction',
          'Comprehension Skills — Reading Comprehension (Main Ideas & Details), Listening Comprehension (Tone, Purpose, Inquiry-Based)',
          'Writing & Productivity — Essay Structure (Introduction, Body, Conclusion), Logical Organisation, Time Management & Prioritization'
        ]
      },
      { name: 'Environmental Science', code: '03010002MC01', credits: 0, type: 'theory',
        units: [
          'Fundamentals of Environmental Science — Definition, Scope, Atmosphere/Hydrosphere/Lithosphere/Biosphere, Laws of Thermodynamics, Meteorological Parameters',
          'Environmental Pollution & Control — Air, Noise, Water, Soil, Thermal, Marine & Radioactive Pollution, Measurement Techniques, Control Devices',
          'Environment Management & Legislation — Indian Constitutional Provisions, Forest Conservation Act, Water & Air Pollution Acts, EPA 1986, Solid Waste Rules',
          'Contemporary Environmental Issues — Water Resource Projects, Rain Water Harvesting, Namami Gange, Wetland Conservation, Wildlife Projects (Tiger, Elephant)',
          'Climate Resilient City — Climate Resilience, Urban Heat Islands, Sustainable Urban Planning, Green Infrastructure, Nature-Based Solutions, Case Studies'
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sem 4 — B.Tech CSE - AI & Data Science
  // ─────────────────────────────────────────────────────────────────────────
  'AIDS-4': {
    label: 'Sem 4 — AI & Data Science',
    branch: 'B.Tech CSE - AI & Data Science',
    shortBranch: 'CSE AI & Data Science',
    year: 2, sem: 4,
    subjects: [
      { name: 'Operating System', code: '303105251', credits: 3, type: 'theory',
        units: [
          'Introduction to OS — Concept, Generations, Types of OS, OS Services, System Calls, Layered/Monolithic/Microkernel Structure, Virtual Machine',
          'Processes & Threads — Process Definition, States & Transitions, PCB, Context Switching, Thread Types & States, Benefits of Multithreading',
          'Process Scheduling — Scheduling Objectives, Types of Schedulers, Scheduling Criteria (CPU Utilization, Throughput, Turnaround Time), FCFS, SJF, Round Robin',
          'Inter-Process Communication — Critical Section, Race Conditions, Mutual Exclusion, Semaphores, Monitors, Message Passing, Reader-Writer Problem, Dining Philosopher Problem',
          'Deadlocks — Necessary & Sufficient Conditions, Prevention, Avoidance (Banker\'s Algorithm), Deadlock Detection & Recovery',
          'Memory Management — Contiguous Allocation, Fixed & Variable Partition, Internal & External Fragmentation, Paging, Hardware Support, Advantages & Disadvantages',
          'Virtual Memory — Basics, Hardware & Control Structures, Locality of Reference, Page Fault, Demand Paging, Page Replacement (Optimal/FIFO/LRU/NRU/SC)',
          'I/O & File Systems — I/O Hardware, Device Controllers, DMA, Interrupt Handlers, Device Drivers, File Concepts, Access Methods, Allocation Methods, Disk Scheduling (FCFS/SSTF/SCAN/C-SCAN)'
        ]
      },
      { name: 'OS Laboratory', code: '303105252', credits: 1, type: 'lab',
        units: [
          'Linux & Shell Scripting — Basic Linux Commands, Shell Script Basics, Sum of Digits, Date Validation, Palindrome Check, Time-Based Greetings, File Existence Check',
          'Process Management — C Program for Child Process Creation (fork), FCFS Algorithm, Round Robin Algorithm, Banker\'s Algorithm Implementation'
        ]
      },
      { name: 'Software Engineering', code: '303105253', credits: 3, type: 'theory',
        units: [
          'Software Process Models — Waterfall, Incremental, Prototype, Spiral, Concurrent Development Model, Agility & Agile Process, XP, Scrum',
          'Software Project Management — Management Spectrum (People/Product/Process/Project), W5HH Principle, Team Management, Scope & Feasibility, Effort Estimation',
          'Risk & Quality Planning — Risk Identification, Assessment & Control, Quality Planning, Project Monitoring, Detailed Scheduling',
          'Requirements Engineering — Problem Recognition, RE Tasks & Processes, Requirements Specification, Use Cases, Functional Specification, Requirements Validation',
          'Structured System Design — Design Concepts & Models, Software Architecture, Architectural Styles & Patterns, Component-Level Design, OO Design',
          'Data-Oriented Analysis & Design — E-R Diagram, Dataflow Model, Control Flow Model, Data Dictionary, DFD & Structure Chart',
          'Coding & Unit Testing — Programming Principles, Coding Standards, Incremental Development, Unit Testing (Procedural Units & Classes), Code Inspection',
          'Software Metrics — Size Measure, Complexity Metrics, Cyclomatic Complexity, Halstead Measure, Knot Count, Metric Comparison',
          'Software Testing & QA — Testing Psychology, Levels of Testing, Test Plan, Black-Box Testing, White-Box Testing, QA Standards (ISO 9000 & 9001)',
          'Advanced SE — CASE Tools, SCRUM, Dependable Systems, Reliability, Safety, Security, Resilience Engineering, Component-Based & Service-Oriented SE'
        ]
      },
      { name: 'SE Laboratory', code: '303105254', credits: 1, type: 'lab',
        units: [
          'Project Planning & SRS — Project Definition, Requirements Engineering Process, Software Requirement Specification (SRS), Design Model Identification',
          'SPMP & Estimation — Software Project Management Plan (SPMP), COCOMO Cost Estimation, Effort & Schedule Planning',
          'Structural Design — DFD with Data Dictionary, Structure Chart for System Analysis & Design',
          'UML Diagrams — Use Case Diagram with Scenarios, Class Diagram, State Diagram, Collaboration Diagram, Sequence Diagram, Activity Diagram',
          'Testing & Quality — Coding Standards & Walkthrough, Test Cases, Testing Tools Comparison, Security & Quality Aspects'
        ]
      },
      { name: 'Computer Network', code: '303105255', credits: 3, type: 'theory',
        units: [
          'Data Communication Components — Data Representation, Network Topologies, OSI Model, Protocols & Standards, Transmission Media, LAN (Wired & Wireless), VLAN, Multiplexing (FDM/TDM/WDM), Spread Spectrum',
          'Data Link Layer — Error Detection & Correction (Hamming Distance, CRC, Block Coding), Flow Control, ARQ Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat), Sliding Window, Piggybacking',
          'Medium Access Sub-Layer — Random Access, Pure ALOHA, Slotted ALOHA, CSMA/CD, CDMA/CA',
          'Network Layer — Switching, Logical Addressing (IPv4 & IPv6), Address Mapping (ARP, RARP, BOOTP, DHCP), Delivery, Forwarding & Unicast Routing Protocols',
          'Transport Layer — Process-to-Process Communication, UDP, TCP, SCTP, Congestion Control, QoS, Leaky Bucket & Token Bucket Algorithm',
          'Application Layer — DNS, DDNS, TELNET, EMAIL, FTP, WWW, HTTP, SNMP, Bluetooth, Firewalls, Basic Concepts of Cryptography'
        ]
      },
      { name: 'CN Laboratory', code: '303105256', credits: 1, type: 'lab',
        units: [
          'Simulation Tools — Cisco Packet Tracer (Network Device Behaviour), Wireshark (Packet Capture)',
          'LAN Configuration — Data Link Layer Error Correction, Virtual LAN, Wireless LAN',
          'Inter-Networking — Router Experiments (Same Subnet & Cross-Subnet), Subnetting Implementation, Routing at Network Layer, Transport Layer Experiments'
        ]
      },
      { name: 'Python & Full Stack Development', code: '303105257', credits: 3, type: 'theory',
        units: [
          'Introduction to Python — Variables, Data Types, Conditional Statements, Loops, Lists, Sets, Tuples, Dictionaries, Common Operations & Built-in Functions',
          'Functions, OOP & Exception Handling — Defining Functions, Arguments, Return Values, OOP Concepts (Class/Object/Encapsulation/Polymorphism/Inheritance), File Handling',
          'Modules, Packages & DB Connectivity — Python Modules & Packages, Popular Libraries, Git Integration with PyCharm, PyTests, MySQL & MongoDB CRUD Operations',
          'Flask Framework — Routing, App Settings, URL Building, HTTP Methods, Templates, Static & Media Files, Form Data, DB Connectivity (SQLite3/MySQL), Flask-Login, Deployment',
          'Django Framework — Project Installation, App Structure, Admin Console, Views, URL Mapping, Template System, Models, Form Processing, Static & Media Files, Deployment',
          'RESTful APIs — REST Architectural Style, HTTP Protocol Role, RESTful API Design, GET/POST/PUT/DELETE, URL & Resource Representations, Status Codes, Versioning, FastAPI/Flask'
        ]
      },
      { name: 'Python Full Stack Laboratory', code: '303105258', credits: 1, type: 'lab',
        units: [
          'Python Basics — Temperature Converter, Area Calculator, Random Password Generator, Average Calculator, Leap Year Check, Factorial, Palindrome, Sorting, Multiplication Table, Base Conversion',
          'OOP & File Handling — Bank Account Model, School Management System, Text File Word Count, CSV Average Calculator, Excel Data Reader',
          'Web Application Development — Simple Web Server, User Registration & Login, File Upload/Download, Database Display, User Input Processing, Template Engine, AJAX Support, Django Auth, Third-Party API Integration',
          'RESTful API Development — Simple API (Users JSON), CRUD Resource API, JWT Authentication API, Paginated API, API with Data Validation & Error Handling'
        ]
      },
      { name: 'Competitive Coding', code: '303105259', credits: 2, type: 'lab',
        units: [
          'Stacks — MINSTACK (push/pop/min), Expression Evaluation (Postfix/Prefix Notation), LIFO Principle',
          'Queues — Next Greater Element (NGE), Circular Queue (Enqueue/Dequeue/Front/Rear), Shunting Yard Algorithm (Infix to Postfix), Priority Queue (Product of 3 Largest)',
          'Linked Lists — Merge Two Sorted Lists, Find Merge Point, Swap Nodes Pairwise',
          'Trees & BST — Build BST, Validate BST (ISVALID), Tree Depth (MAXDEPTH), Pre/In/Post-Order Traversal, Boundary Traversal, Level Order Traversal, Mirrored Trees, Lowest Common Ancestor (LCA)',
          'Hashing — Basic Hash Function (Key-Value Store), Hash Table with Separate Chaining, Two Sum using HashMap',
          'Tries & Advanced — Trie (Search/Insert/Remove), Huffman Coding, Distinct Substrings, Count Words in Trie, Left View of Tree'
        ]
      },
      { name: 'Probability, Statistics & Numerical Methods', code: '303191251', credits: 4, type: 'math',
        units: [
          'Correlation, Regression & Curve Fitting — Correlation & Regression, Rank Correlation, Curve Fitting by Least Squares (Straight Lines, Second Degree Parabola)',
          'Probability & Distributions — Probability Spaces, Conditional Probability, Bayes\' Rule, Discrete & Continuous Random Variables, Expectation, Variance, Binomial/Poisson/Normal Distributions',
          'Testing of Hypothesis — Large Sample Tests (Single & Difference of Proportions, Means, Standard Deviations), t-test, F-test (Ratio of Variances), Chi-Square (Goodness of Fit, Independence)',
          'Solution of Linear & Transcendental Equations — Gauss-Jacobi, Gauss-Seidel Methods, Bisection Method, Newton-Raphson Method, Regula-Falsi Method',
          'Finite Differences & Interpolation — Finite Differences, Relation between Operators, Newton\'s Forward & Backward Difference Formulae, Newton\'s Divided Differences, Lagrange\'s Formula',
          'Numerical Integration & ODEs — Trapezoidal Rule, Simpson\'s 1/3rd & 3/8th Rules, Gaussian Quadrature, Taylor\'s Series, Euler & Modified Euler\'s Methods, Runge-Kutta 4th Order'
        ]
      },
      { name: 'Professional Grooming & Personality Dev.', code: '303193252', credits: 1, type: 'soft',
        units: [
          'Self Development & Assessment — Change, Grow, Persist, Prioritize, Read, Learn, Listen, Record, Think, Communicate, Relate',
          'Corporate Etiquette — Developing Personality, Telephone Etiquette, Foreign Business Trips, Small Talks, Respecting Privacy, Learning to Say No',
          'Public Speaking — Communicating Information to an Audience, Choosing Pattern, Art of Persuasion, Making Effective Speeches, Delivering Speech Types',
          'Reading & Listening Skills — Reading Activity & Comprehension (Intermediate), Inquiry-Based Listening Practice, Finding Details from Conversations',
          'Resume Writing & Interview Prep — Career Assessments, Mock GD Round, Mock Personal Interview, Employer Expectations, Case Interview'
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sem 6 — B.Tech CSE - Artificial Intelligence
  // ─────────────────────────────────────────────────────────────────────────
  'AI-6': {
    label: 'Sem 6 — CSE Artificial Intelligence',
    branch: 'B.Tech CSE - Artificial Intelligence',
    shortBranch: 'CSE Artificial Intelligence',
    year: 3, sem: 6,
    subjects: [
      { name: 'Project - 1', code: '303105300', credits: 3, type: 'lab',
        units: [
          'Introductory Guidelines — General Instructions on Project Definition, Different Platforms, Planning the Programme',
          'Analysis — Deep Study about Project Title, Available System, User Requirements',
          'Design — Designing Architecture & System from Requirements Gathered in Analysis',
          'Implementation — Implement the Design Work',
          'Testing — Implement Different Test Cases for the Project',
          'Documentation — Project Report, Seminar & Poster Presentation'
        ]
      },
      { name: 'Compiler Design', code: '303105350', credits: 3, type: 'theory',
        units: [
          'Overview of Compilation & Lexical Analysis — Compiler Structure & Applications, Role of Lexical Analyzer, Specification & Recognition of Tokens, LEX Tool & Example Programs',
          'Syntax Analysis — Role of Parser, Context-Free Grammars (CFG), Techniques for Writing Grammars, Left Recursion Removal, Non-Context-Free Constructs, Parse Trees & Ambiguity',
          'Top-Down Parsing — FIRST & FOLLOW Sets, LL(1) Conditions, Predictive Parsing, Recursive Descent Parsing, Error Recovery',
          'Bottom-Up (LR) Parsing — Handle Pruning, Shift-Reduce Parsing, Viable Prefixes, LR(0) Automaton, LR-Parsing Algorithm, SLR(1), LR(1), LALR(1)',
          'YACC — YACC Specifications, Error Recovery with YACC, Examples of YACC Programs',
          'Syntax-Directed Definitions — Attribute Grammars, Synthesized & Inherited Attributes, Evaluation Orders, Dependency Graphs, S-Attributed & L-Attributed SDDs',
          'Semantic Analysis — Symbol Tables & Data Structures, Scope Representation, Expressions, Assignment & Control-Flow Statements, Function Declarations & Calls, Semantic Error Recovery',
          'Intermediate Code Generation — Quadruples, Triples, Trees, Flow Graphs, SSA Forms, Expression Translation, Control-Flow Statements, Boolean Expressions, Back Patching',
          'Run-Time Environments — Stack Allocation, Activation Records, Access to Non-Local Data, Procedures with & without Nesting',
          'Machine Code Generation & Optimization — Simple Machine Code Generation, Machine-Independent Code Optimizations'
        ]
      },
      { name: 'Compiler Design Laboratory', code: '303105350', credits: 1, type: 'lab',
        units: [
          'Lexical Analysis in C — Lexical Analyzer Implementation, Count Digits/Vowels/Symbols, Username & Password Validation',
          'Parsing in C — LL(1) Predictive Parsing, Recursive Descent Parsing, Operator Precedence Parsing, LALR Parsing',
          'LEX Programs — Character/Line/Word Counter from File, Vowel & Consonant Counter, Number Extractor, HTML Tag Extractor, Line Numbering Program'
        ]
      },
      { name: 'Machine Learning', code: '303105353', credits: 3, type: 'theory',
        units: [
          'Introduction to ML — Learning Paradigms, PAC Learning, Basics of Probability, Version Spaces',
          'ML in Practice — Data Collection, Preprocessing (Missing Values, Normalization), Outlier Analysis (Z-Score), Model Selection & Evaluation, Hyperparameter Tuning, Result Visualization',
          'Supervised Learning I — Linear & Non-Linear Examples, Multi-Class & Multi-Label Classification, Linear Regression, Multilinear Regression, Naïve Bayes Classifier, Decision Trees (ID3, CART), Error Bounds',
          'Supervised Learning II — K-NN Classifier, Logistic Regression, Perceptrons (Single & Multi-layer), Support Vector Machines (Linear & Non-linear), Semi-Supervised Learning',
          'Unsupervised Learning — Clustering (Partitioned, Hierarchical, Density-Based), K-Means, K-Mode, Self-Organizing Maps, Expectation Maximization, PCA, Reinforcement Learning',
          'Evaluation Metrics & Ensemble Learning — ROC Curves, Significance Tests, Error Correction in Perceptrons, Bagging, Boosting, Random Forests, AdaBoost, XGBoost'
        ]
      },
      { name: 'ML Laboratory', code: '303105354', credits: 1, type: 'lab',
        units: [
          'Data Handling — NumPy, Pandas, Statistics Library, Diwali Sales Dataset Analysis & Visualization',
          'Supervised Learning — Linear Regression, Logistic Regression, Naïve Bayes Classifier (CSV), Decision Tree ID3, KNN (Iris Dataset), SVM Comparison',
          'Unsupervised & Advanced — K-Means Clustering, EM Algorithm, Bayesian Network (Heart Disease Dataset), Unsupervised Comparison (K-Means vs K-Mode), ANN with Backpropagation'
        ]
      },
      { name: 'High Performance Computing', code: '303105356', credits: 3, type: 'theory',
        units: [
          'Introduction to Parallel Computing — Motivating Parallelism, Scope, Parallel Programming Platforms, Implicit Parallelism, Trends in Microprocessor Architectures, Memory System Limitations',
          'Parallel Platform Models — Levels of Parallelism (Instruction/Transaction/Task/Thread/Memory/Function), SIMD/MIMD/SIMT/SPMD, N-wide Superscalar, Multi-core, Multi-threaded',
          'Parallel Algorithm Design — Decomposition Techniques, Task & Interaction Characteristics, Load Balancing, Interaction Overhead, Parallel Algorithm Models',
          'Message-Passing (MPI) — Principles of Message-Passing, Send & Receive Operations, MPI Interface, Topology & Embedding, Communication with Computation, Collective Communication',
          'Synchronization & OpenMP — Scheduling, Job Allocation, Thread Basics, POSIX Pthreads API, Thread Creation/Termination, Synchronization Primitives, OpenMP Directive-Based Parallel Programming',
          'GPGPU & CUDA — Overview of GPGPU, DGX Architecture, GPGPU Programming, GPGPU Memory Hierarchy, CUDA Programming Basics',
          'Performance Measures — Speedup, Efficiency, Scalability, Abstract Performance Metrics (Work, Critical Paths), Amdahl\'s Law, Granularity & Real Performance'
        ]
      },
      { name: 'HPC Laboratory', code: '303105356', credits: 1, type: 'lab',
        units: [
          'Setup & Linux — Google Colab Facilities, Basic Linux Commands, Task Distribution using Gprof',
          'Parallel Programming — Concurrent QuickSort using Divide & Conquer (C++), MPI Functions Demo, OpenMP & Pthreads Demonstration',
          'CUDA Programming — Hello World CUDA, Add Two Numbers CUDA, Add Two Arrays CUDA, Code Analysis with Nvidia-Profilers'
        ]
      },
      { name: 'Employability Skills', code: '303193353', credits: 1, type: 'soft',
        units: [
          'IELTS Mock Test — Developing English Learning, Employment Prospects, Practice on Listening, Speaking, Reading & Writing',
          'Resume Building — Cover Letter & Resume Writing, Creating Functional Resume for Job/College/Scholarship Applications',
          'Advanced Group Discussion — Mock GD Round, Training in Interpersonal Skills, Generating New Ideas, Problem-Solving Approaches',
          'Personal Interview — Mock Interview, Preparing for Interview, Review Questions, Employer\'s Expectations, Case Interview'
        ]
      },
      { name: 'MEA(R)N Stack Web Development', code: '303105385', credits: 3, type: 'theory',
        units: [
          'Introduction to MEAN Stack — Overview of Web Development, Introduction to MEAN Stack, Setting up the Development Environment',
          'MongoDB — Introduction to NoSQL Databases, Installation & Configuration, CRUD Operations, Indexing & Querying, Schema Design & Data Modeling',
          'Node.js & Express.js — Introduction to Node.js & Express.js, Middleware & Routing, Authentication & Security with Passport.js, Error Handling & Logging',
          'Angular — Introduction, Setting up Angular App, Components, Modules & Services, Data Binding & Templates, Forms & Validation, Routing & Navigation, HTTP & Observables',
          'Integration & Deployment — Angular Frontend with Express.js API, Authentication & User Management, WebSockets for Real-Time Data, Error Handling & Testing, Hosting, Security Best Practices, Performance, Version Control & CI',
          'Final Project — Full-Stack MEAN Application Development'
        ]
      },
      { name: 'MEAN Stack Laboratory', code: '303105386', credits: 1, type: 'lab',
        units: [
          'Setup & Overview — Introduction to MEAN Stack, Development Environment Setup, Overview of MongoDB, Express.js, Angular & Node.js',
          'Backend Development — Creating & Configuring MongoDB, Creating & Configuring Express.js, Building RESTful APIs with Express.js',
          'Frontend Development — Introduction to Angular, Building Basic UI Components, Creating Single-Page Application (SPA)',
          'Server-Side Development — Introduction to Node.js, Creating & Configuring Node.js, Building Server-Side Applications',
          'Integration & Deployment — Integrating All Components, Testing & Debugging the Full-Stack Application, Deploying on Cloud Platform'
        ]
      },
      { name: 'Cybersecurity', code: '303105341', credits: 3, type: 'theory',
        units: [
          'Information Security — Introduction to Information Systems, Types, Development, Introduction to InfoSec, Need for Security, Threats to Information Systems, CIA Triad, Security Risk Analysis',
          'Systems Vulnerability Scanning — Vulnerability Scanning Overview, Port/Service Identification, Banner/Version Check, Traffic & Vulnerability Probes, Netcat, Port & Services Tools, Nmap Reconnaissance, Wireshark',
          'Network Defense Tools — Firewall Basics, Packet Filter vs Firewall, Stateless vs Stateful Firewalls, NAT & Port Forwarding, VPN Basics, Linux Firewall, Windows Firewall, Snort IDS',
          'Cyber Crime & Law — Cybercrime Types, Hacking, Attack Vectors, Cyberspace & Criminal Behavior, Incident Response, Digital Forensics, History of Internet, IT Act 2000',
          'Cyber Crime Investigation — Password Cracking, Key Loggers & Spyware, Virus & Worms, Trojans & Backdoors, Steganography, DoS & DDoS Attacks, SQL Injection, Buffer Overflow, Wireless Network Attacks'
        ]
      },
      { name: 'Cybersecurity Laboratory', code: '303105342', credits: 1, type: 'lab',
        units: [
          'Reconnaissance — Gathering Information using Whois, Port Scanners, Network Scanning, Angry IP Scanner',
          'Firewall & Proxy — Experiments with Open Source Firewall/Proxy (iptables, squid)',
          'Attack Techniques — Implementation of Steganography, MITM Attack using Wireshark/Network Sniffers, Windows Security using Firewalls',
          'Web Vulnerability — Identify Web Vulnerabilities using OWASP Project',
          'Digital Forensics — IT Audit, Malware Analysis, Vulnerability Assessment & Report, OS Hardening, RAM Dump Analysis, Mobile Audit, Cyber Forensics Tools (Disk Imaging, Data Acquisition & Recovery)'
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sem 6 — B.Tech CSE - AI & Machine Learning
  // ─────────────────────────────────────────────────────────────────────────
  'AIML-6': {
    label: 'Sem 6 — CSE AI & ML',
    branch: 'B.Tech CSE - AI & Machine Learning',
    shortBranch: 'CSE AI & Machine Learning',
    year: 3, sem: 6,
    subjects: [
      { name: 'Project - 1', code: '303105300', credits: 3, type: 'lab',
        units: [
          'Introductory Guidelines — General Instructions on Project Definition, Different Platforms, Planning the Programme',
          'Analysis — Deep Study about Project Title, Available System, User Requirements',
          'Design — Designing Architecture & System from Requirements Gathered in Analysis',
          'Implementation — Implement the Design Work',
          'Testing — Implement Different Test Cases for the Project',
          'Documentation — Project Report, Seminar & Poster Presentation'
        ]
      },
      { name: 'Compiler Design', code: '303105349', credits: 3, type: 'theory',
        units: [
          'Overview of Compilation & Lexical Analysis — Compiler Structure & Applications, Role of Lexical Analyzer, Specification & Recognition of Tokens, LEX Tool & Example Programs',
          'Syntax Analysis — Role of Parser, Context-Free Grammars (CFG), Techniques for Writing Grammars, Left Recursion Removal, Non-Context-Free Constructs, Parse Trees & Ambiguity',
          'Top-Down Parsing — FIRST & FOLLOW Sets, LL(1) Conditions, Predictive Parsing, Recursive Descent Parsing, Error Recovery',
          'Bottom-Up (LR) Parsing — Handle Pruning, Shift-Reduce Parsing, Viable Prefixes, LR(0) Automaton, LR-Parsing Algorithm, SLR(1), LR(1), LALR(1)',
          'YACC — YACC Specifications, Error Recovery with YACC, Examples of YACC Programs',
          'Syntax-Directed Definitions — Attribute Grammars, Synthesized & Inherited Attributes, Evaluation Orders, Dependency Graphs, S-Attributed & L-Attributed SDDs',
          'Semantic Analysis — Symbol Tables & Data Structures, Scope Representation, Expressions, Assignment & Control-Flow Statements, Function Declarations & Calls, Semantic Error Recovery',
          'Intermediate Code Generation — Quadruples, Triples, Trees, Flow Graphs, SSA Forms, Expression Translation, Control-Flow Statements, Boolean Expressions, Back Patching',
          'Run-Time Environments — Stack Allocation, Activation Records, Access to Non-Local Data, Procedures with & without Nesting',
          'Machine Code Generation & Optimization — Simple Machine Code Generation, Machine-Independent Code Optimizations'
        ]
      },
      { name: 'Compiler Design Laboratory', code: '303105350', credits: 1, type: 'lab',
        units: [
          'Lexical Analysis in C — Lexical Analyzer Implementation, Count Digits/Vowels/Symbols, Username & Password Validation',
          'Parsing in C — LL(1) Predictive Parsing, Recursive Descent Parsing, Operator Precedence Parsing, LALR Parsing',
          'LEX Programs — Character/Line/Word Counter from File, Vowel & Consonant Counter, Number Extractor, HTML Tag Extractor, Line Numbering Program'
        ]
      },
      { name: 'Deep Learning', code: '303105346', credits: 3, type: 'theory',
        units: [
          'Introduction to Deep Learning — Basics of ML vs DL, ML Concepts Review (Supervised/Unsupervised/RL), Neural Network Basics (Perceptron, Activation Functions: Sigmoid/ReLU/Softmax)',
          'Backpropagation & DL Frameworks — Gradient Descent, Backpropagation, Deep Learning Frameworks (TensorFlow, Keras, Anaconda)',
          'Artificial Neural Networks — Structure of ANN, Feed-Forward Neural Networks (FNN), Loss Functions (MSE, Cross-Entropy), Optimizers (SGD, Adam, RMSProp), Vanishing Gradient, Batch Normalization, Dropout',
          'Convolutional Neural Networks — Introduction to CNN, Convolution, Pooling, Padding, Stride, Popular Architectures (LeNet, AlexNet, VGG, ResNet), Transfer Learning & Fine-Tuning',
          'CNN Applications — Image Classification, Object Detection, Face Recognition',
          'Recurrent Neural Networks & LSTMs — Understanding Sequential Data & Time-Series, RNN Working & Challenges, LSTM Networks, Gated Recurrent Units (GRU), Speech Recognition, Text Generation, Sentiment Analysis',
          'Deep Auto-Encoders & GANs — Autoencoders (Concept, Structure, Applications), Variational Autoencoders (VAEs), GAN Architecture (Generator & Discriminator), Training a GAN, Image Synthesis & Data Augmentation',
          'Applications of Deep Learning — DL in Computer Vision, NLP & Robotics, DL in Healthcare, Finance & Cybersecurity, Ethics in DL, Future Trends'
        ]
      },
      { name: 'Deep Learning Laboratory', code: '303105346', credits: 1, type: 'lab',
        units: [
          'Environment Setup — TensorFlow, Keras & Anaconda Installation, ORANGE Data Analysis Tool, Google Colab GPU Check',
          'ANN for MNIST — Building Simple ANN for MNIST Digit Classification',
          'CNN for Image Classification — Developing CNN Model for CIFAR-10 Image Classification',
          'Transfer Learning — Fine-Tuning VGG16/VGG19 on Custom Dataset, Fine-Tuning ResNet on Custom Dataset',
          'RNN & LSTM — Basic RNN for Time-Series Forecasting or Text Classification, LSTM-based Sentiment Analysis on IMDb Dataset',
          'Generative Models — Training GAN on MNIST Dataset, Implementing Autoencoders on Custom Dataset',
          'Vision & Deployment — Object Detection using YOLOv8, Deploying Trained Deep Learning Model for Real-World Application'
        ]
      },
      { name: 'Machine Learning', code: '303105353', credits: 3, type: 'theory',
        units: [
          'Introduction to ML — Learning Paradigms, PAC Learning, Basics of Probability, Version Spaces',
          'ML in Practice — Data Collection, Preprocessing (Missing Values, Normalization), Outlier Analysis (Z-Score), Model Selection & Evaluation, Hyperparameter Tuning, Result Visualization',
          'Supervised Learning I — Linear & Non-Linear Examples, Multi-Class & Multi-Label Classification, Linear Regression, Multilinear Regression, Naïve Bayes Classifier, Decision Trees (ID3, CART), Error Bounds',
          'Supervised Learning II — K-NN Classifier, Logistic Regression, Perceptrons (Single & Multi-layer), Support Vector Machines (Linear & Non-linear), Semi-Supervised Learning',
          'Unsupervised Learning — Clustering (Partitioned, Hierarchical, Density-Based), K-Means, K-Mode, Self-Organizing Maps, Expectation Maximization, PCA, Reinforcement Learning',
          'Evaluation Metrics & Ensemble Learning — ROC Curves, Significance Tests, Error Correction in Perceptrons, Bagging, Boosting, Random Forests, AdaBoost, XGBoost'
        ]
      },
      { name: 'ML Laboratory', code: '303105354', credits: 1, type: 'lab',
        units: [
          'Data Handling — NumPy, Pandas, Statistics Library, Diwali Sales Dataset Analysis & Visualization',
          'Supervised Learning — Linear Regression, Logistic Regression, Naïve Bayes Classifier (CSV), Decision Tree ID3, KNN (Iris Dataset), SVM Comparison',
          'Unsupervised & Advanced — K-Means Clustering, EM Algorithm, Bayesian Network (Heart Disease Dataset), Unsupervised Comparison (K-Means vs K-Mode), ANN with Backpropagation'
        ]
      },
      { name: 'Employability Skills', code: '303193353', credits: 1, type: 'soft',
        units: [
          'IELTS Mock Test — Developing English Learning, Employment Prospects, Practice on Listening, Speaking, Reading & Writing',
          'Resume Building — Cover Letter & Resume Writing, Creating Functional Resume for Job/College/Scholarship Applications',
          'Advanced Group Discussion — Mock GD Round, Training in Interpersonal Skills, Generating New Ideas, Problem-Solving Approaches',
          'Personal Interview — Mock Interview, Preparing for Interview, Review Questions, Employer\'s Expectations, Case Interview'
        ]
      },
      { name: 'MEA(R)N Stack Web Development', code: '303105385', credits: 3, type: 'theory',
        units: [
          'Introduction to MEAN Stack — Overview of Web Development, Introduction to MEAN Stack, Setting up the Development Environment',
          'MongoDB — Introduction to NoSQL Databases, Installation & Configuration, CRUD Operations, Indexing & Querying, Schema Design & Data Modeling',
          'Node.js & Express.js — Introduction to Node.js & Express.js, Middleware & Routing, Authentication & Security with Passport.js, Error Handling & Logging',
          'Angular — Introduction, Setting up Angular App, Components, Modules & Services, Data Binding & Templates, Forms & Validation, Routing & Navigation, HTTP & Observables',
          'Integration & Deployment — Angular Frontend with Express.js API, Authentication & User Management, WebSockets for Real-Time Data, Error Handling & Testing, Hosting, Security Best Practices, Performance, Version Control & CI',
          'Final Project — Full-Stack MEAN Application Development'
        ]
      },
      { name: 'MEAN Stack Laboratory', code: '303105386', credits: 1, type: 'lab',
        units: [
          'Setup & Overview — Introduction to MEAN Stack, Development Environment Setup, Overview of MongoDB, Express.js, Angular & Node.js',
          'Backend Development — Creating & Configuring MongoDB, Creating & Configuring Express.js, Building RESTful APIs with Express.js',
          'Frontend Development — Introduction to Angular, Building Basic UI Components, Creating Single-Page Application (SPA)',
          'Server-Side Development — Introduction to Node.js, Creating & Configuring Node.js, Building Server-Side Applications',
          'Integration & Deployment — Integrating All Components, Testing & Debugging the Full-Stack Application, Deploying on Cloud Platform'
        ]
      },
      { name: 'Cybersecurity', code: '303105341', credits: 3, type: 'theory',
        units: [
          'Information Security — Introduction to Information Systems, Types, Development, Introduction to InfoSec, Need for Security, Threats to Information Systems, CIA Triad, Security Risk Analysis',
          'Systems Vulnerability Scanning — Vulnerability Scanning Overview, Port/Service Identification, Banner/Version Check, Traffic & Vulnerability Probes, Netcat, Port & Services Tools, Nmap Reconnaissance, Wireshark',
          'Network Defense Tools — Firewall Basics, Packet Filter vs Firewall, Stateless vs Stateful Firewalls, NAT & Port Forwarding, VPN Basics, Linux Firewall, Windows Firewall, Snort IDS',
          'Cyber Crime & Law — Cybercrime Types, Hacking, Attack Vectors, Cyberspace & Criminal Behavior, Incident Response, Digital Forensics, History of Internet, IT Act 2000',
          'Cyber Crime Investigation — Password Cracking, Key Loggers & Spyware, Virus & Worms, Trojans & Backdoors, Steganography, DoS & DDoS Attacks, SQL Injection, Buffer Overflow, Wireless Network Attacks'
        ]
      },
      { name: 'Cybersecurity Laboratory', code: '303105342', credits: 1, type: 'lab',
        units: [
          'Reconnaissance — Gathering Information using Whois, Port Scanners, Network Scanning, Angry IP Scanner',
          'Firewall & Proxy — Experiments with Open Source Firewall/Proxy (iptables, squid)',
          'Attack Techniques — Implementation of Steganography, MITM Attack using Wireshark/Network Sniffers, Windows Security using Firewalls',
          'Web Vulnerability — Identify Web Vulnerabilities using OWASP Project',
          'Digital Forensics — IT Audit, Malware Analysis, Vulnerability Assessment & Report, OS Hardening, RAM Dump Analysis, Mobile Audit, Cyber Forensics Tools (Disk Imaging, Data Acquisition & Recovery)'
        ]
      }
    ]
  }

};

window.CURRICULA = CURRICULA;
