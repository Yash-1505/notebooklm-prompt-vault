// curricula/dual-degree/nndl-sem1.js
// One Year Diploma in Neural Networks & Deep Learning
// Parul University · Semester 1
// AY: the academic year the student enrolls in the diploma
// Last synced: April 2026

export const NNDL_SEM1 = {
  key: 'NNDL-1',
  label: 'Sem 1 — Neural Networks & Deep Learning',
  branch: 'One Year Diploma — Neural Networks & Deep Learning',
  shortBranch: 'Diploma NNDL',
  program: 'dual-degree',
  year: 1,
  sem: 1,
  subjects: [
    {
      name: 'Basics of Artificial Intelligence',
      code: '22905001',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Introduction to AI — Fundamental of Artificial Intelligence, History, Motivation and Need of AI, Production Systems, Characteristics of Production Systems, Goals and Contribution of AI to Modern Technology',
        'Problem Solving, Search and Control Strategies — General Problem Solving, Production Systems, Control Strategies, Forward and Backward Chaining, Exhaustive Searches, Depth First & Breadth First Search',
        'Heuristic Search Techniques — Hill Climbing, Branch and Bound Technique, Best First Search & A* Algorithm, AND/OR Graphs, Problem Reduction & AO* Algorithm, Constraint Satisfaction Problems',
        'Knowledge Representation — Problems in Representing Knowledge, Knowledge Representation using Propositional and Predicate Logic, Comparison of Propositional and Predicate Logic, Resolution, Refutation, Deduction, Theorem Proving, Inferencing, Monotonic and Non-Monotonic Reasoning',
        "Probabilistic Reasoning — Baye's Theorem, Semantic Networks, Scripts, Schemas, Frames, Conceptual Dependency, Forward and Backward Reasoning",
        'Natural Language Processing — Introduction to Understanding, NLP Components, Application of NLP to Design Expert Systems',
        'Game Playing — Game Playing Techniques (Mini-Max Procedure, Alpha-Beta Cut-offs), Planning, Study of the Block World Problem in Robotics',
        'Expert Systems — Expert Systems (ES) and its Characteristics, Requirements of ES, Components and Capability, Inference Engine (Forward & Backward Chaining), ES Limitations, ES Development Environment, Technology, Benefits of Expert Systems',
      ],
    },
    {
      name: 'Fundamentals of Machine Learning',
      code: '22905002',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Introduction to Machine Learning — Definition & Overview of ML, Human Learning versus Machine Learning, Types of ML, Applications of ML, Tools for ML',
        'Data Preprocessing & Visualization — Data Cleaning & Data Preparation, Exploratory Data Analysis, Data Visualization Techniques, Learning the use of Python Libraries (Pandas, Matplotlib, NumPy)',
        'Supervised Learning — Overview of Supervised Learning, Types (Regression & Classification), Linear Regression, Logistic Regression, Advantages and Disadvantages, Naïve Bayes Classifier, KNN Classifier, Advantages & Disadvantages of Classifier',
        'Unsupervised Learning — Overview of Unsupervised Learning, Types, Applications, Clustering, K-Means Algorithm, Advantages and Disadvantages, Measuring Cluster Similarity & Choosing Number of Clusters, Definition and Overview of Association, Apriori Algorithm',
        'Neural Network — Overview of Neural Network, Basic Structure of Neural Network, Application of Neural Network, Types of Neural Network, Feed Forward Neural Network, Activation Function, Loss Function, Backpropagation Algorithm',
      ],
    },
    {
      name: 'Python for Machine Learning',
      code: '22905003',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Programming Environment and Python Basics — Getting Started with Python Programming, Running Code in the Interactive Shell, Editing, Saving, and Running a Script, Using Editors (IDLE, Jupyter), Software Development Process, Basic Coding Skills (Data Types, Numeric Data, Keywords, Variables, Operators, Expressions, Type Conversions, Comments), Input, Processing, and Output, Formatting Output, How Python Works, Detecting and Correcting Syntax Errors, Built-in Functions and Math Module',
        'Building Python Programs — Control Statements (if-else, switch-case), Iteration Structures (for, while), Testing the Control Statements, Lazy Evaluation, Functions (Hiding Redundancy, Arguments, Return Values, Variable Scopes, Named Arguments, Main Function, Recursion, Lambda Functions), Strings and Number Systems (String Function, Handling Numbers in Various Formats)',
        'Data Representation — Lists (Basic Operations, List of Lists, Slicing, Searching, Sorting, Comprehension), Tuples, Sets, Work with Dates and Times, Dictionaries (Functions, Literals, Adding/Removing Keys, Accessing/Replacing Values, Traversing, Reverse Lookup), Case Study — Data Structure Selection',
        'Object Oriented Programming — Design with Classes (Objects and Classes, Methods, Instance Variables, Constructor, Accessors, Mutators), Structuring Classes with Inheritance and Polymorphism, Abstract Classes, Exceptions (Handle Single, Handle Multiple)',
        'Data Processing — os and sys Modules, Introduction to File I/O (Reading/Writing Text Files, Manipulating Binary Files), NumPy (Basics, Creating Arrays, Arithmetic, Slicing, Matrix Operations, Random Numbers), Plotting and Visualization, Matplotlib (Basic Plot, Ticks, Labels, Legends), Working with CSV Files, Pandas (Reading, Manipulating, and Processing Data)',
      ],
    },
    {
      name: 'Statistics, Exploratory Data Analysis and Data Pre-processing',
      code: '22905004',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Data Collection and Presentation — Introduction to Statistics, Collection of Data, Classification and Tabulation, Types of Data (Primary, Secondary), Presentation of Data, Diagrammatic and Graphical Representation (Histogram, Frequency Curve, Frequency Polygon, Ogive Curves, Stem and Leaf Chart)',
        'Data Preprocessing — Introduction to Data Preprocessing, Handling Missing Data and Outliers, Data Normalization and Scaling, Feature Selection and Dimensionality Reduction, Text Preprocessing',
        'Exploratory Data Analysis — Measures of Central Tendency (Concept, Requirements, Locational Averages: Median, Mode, Quartiles, Deciles, Percentiles, Box Plot, Mathematical Averages: Arithmetic Mean, Geometric Mean, Harmonic Mean, Empirical Relation between Mean/Median/Mode, Merits and Demerits, Applicability), Measures of Dispersion, Skewness & Kurtosis (Concept, Absolute and Relative Measures: Range, Quartile Deviation, Mean Absolute Deviation, Standard Deviation, Variance and Combined Variance, Raw Moments and Central Moments, Skewness: Karl Pearson\'s, Bowley\'s and Coefficient of Skewness, Kurtosis)',
        'Mean Square Deviation — Definition, Minimality Property of Mean Square Deviation (with Proof), Variance and Standard Deviation (Definition, Merits and Demerits, Effect of Change of Origin and Scale, Combined Variance and Standard Deviation for 2 and n Groups), Measures of Dispersion for Comparison (Coefficient of Range, QD, MD, CV)',
        'Model Development, Correlation and Regression Analysis — Scatter Diagram, Product Moment Correlation Coefficient and its Properties, Spearman\'s Rank Correlation (With and Without Ties), Concept of Linear Regression, Principle of Least Squares, Fitting a Straight Line by Method of Least Squares, Relation between Regression Coefficients and Correlation Coefficient, Fitting of Curves Reducible to Linear Form, Coefficient of Determination (R²)',
        'Sampling Theory and Tests of Significance — Methods of Sampling (Description Only: SRSWR and SRWOR, Stratified Random Sampling, Systematic Sampling), Tests of Significance (z, t, Chi-Square and F)',
      ],
    },
  ],
};
