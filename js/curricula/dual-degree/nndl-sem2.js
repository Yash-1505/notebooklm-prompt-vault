// curricula/dual-degree/nndl-sem2.js
// One Year Diploma in Neural Networks & Deep Learning
// Parul University · Semester 2
// Last synced: April 2026

export const NNDL_SEM2 = {
  key: 'NNDL-2',
  label: 'Sem 2 — Neural Networks & Deep Learning',
  branch: 'One Year Diploma — Neural Networks & Deep Learning',
  shortBranch: 'Diploma NNDL',
  program: 'dual-degree',
  year: 1,
  sem: 2,
  subjects: [
    {
      name: 'Fundamentals of Neural Network',
      code: '22905051',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Introduction — Why Neural Networks?, Research History, Biological Neuron Model, Artificial Neuron Model, Notations, Neuron Equation',
        'Model of Artificial Neuron — Artificial Neuron Basic Elements, Activation Functions (Threshold Function, Piecewise Linear Function, Sigmoidal Function), Examples',
        'Neural Network Architectures — Single Layer Feed-Forward Network, Multi Layer Feed-Forward Network, Recurrent Networks',
        'Learning Methods in Neural Networks — Unsupervised Learning (Hebbian Learning, Competitive Learning), Supervised Learning (Stochastic Learning, Gradient Descent Learning), Reinforced Learning',
        'Taxonomy of Neural Network Systems — Popular Neural Network Systems, Classification of Neural Network Systems with Respect to Learning Methods and Architecture Types',
        'Single-Layer NN System — Single Layer Perceptron: Learning Algorithm for Training Perceptron, Linearly Separable Task, XOR Problem; ADALINE: Architecture, Training',
      ],
    },
    {
      name: 'Basics of Deep Learning',
      code: '22905052',
      credits: 5,
      type: 'theory+lab',
      units: [
        'Introduction to Neural Networks — Basics of ANN: Artificial Neurons, Computational Models of Neurons, Structure of Neural Networks, Functional Units of ANN for Pattern Recognition Tasks',
        'Feedforward Neural Networks — Pattern Classification using Perceptron, Multilayer Feedforward Neural Networks (MLFFNNs), Backpropagation Learning, Empirical Risk Minimization, Regularization, Autoencoders',
        'Deep Neural Networks (DNNs) — Difficulty of Training DNNs, Greedy Layer-Wise Training, Optimization for Training DNNs, Newer Optimization Methods (AdaGrad, RMSProp, Adam), Second Order Methods for Training, Regularization Methods (Dropout, Drop Connect, Batch Normalization)',
        'Convolutional Neural Networks (CNNs) — Introduction to CNNs (Convolution, Pooling), Deep CNNs, Different Deep CNN Architectures (LeNet, AlexNet, VGG, PlacesNet), Training a CNN (Weights Initialization, Batch Normalization, Hyperparameter Optimization), Understanding and Visualizing CNNs',
        'Recurrent Neural Networks (RNNs) — Sequence Modeling using RNNs, Backpropagation Through Time, Long Short Term Memory (LSTM), Bidirectional LSTMs, Bidirectional RNNs, Gated RNN Architecture',
      ],
    },
    {
      name: 'Basics of SQL & Data Visualization',
      code: '22905053',
      credits: 4,
      type: 'theory+lab',
      units: [
        'Introduction to SQL — SQL Purpose, Subsets of SQL (DDL, DML, DCL), SQL vs. NoSQL, Database Objects, Database Tables, Table Records, Types of DBMS, Relational DBMS, SQL/Relational Databases vs. NoSQL Databases',
        'SQL: DDL — SQL Syntax, Data Types, Operations, Expressions, Comments, Data Definition Commands (Create, Alter, Drop, Truncate, Rename), DDL Operations (Create/Use/Rename/Drop Database, Create/Rename/Alter/Drop Table, Add/Modify/Rename/Drop Column, Truncate Table)',
        'SQL: DML — Data Manipulation Language Commands (SELECT, INSERT, UPDATE, DELETE), DML Operations (Retrieving Data from a Table, Inserting Data into a Table, Updating Existing Data, Deleting Records from a Table)',
        'SQL: DCL — Data Control Language Commands (GRANT and REVOKE), DCL Operations, SQL Functions, Queries and Sub Queries, SQL Clauses, SQL Joins, SQL Views, SQL Indexes, SQL Transactions, SQL Injection, SQL vs. NoSQL',
        'Data Visualization — Introduction to Data Visualization, Data Visualization Options, Filters, Map-Reduce, Dashboard Development Tools, Creating an Interactive Dashboard with dc.js',
      ],
    },
  ],
};
