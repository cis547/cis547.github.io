---
layout: lectures
title: Lectures
lectures:
  - id: "1"
    title: "Introduction to Software Analysis"
    description: |
      This module will introduce you to the domain of Software Analysis and its role in checking correctness properties of programs. You will learn about a general class of properties, called Program Invariants, and how they can be checked using Static and Dynamic analyses. Then, you’ll learn a step-by-step process of designing a static analysis to check program invariants. Through different examples, you will witness how this process achieves its objective by abstractly evaluating programs.

      Additionally, this module covers fundamental tradeoffs in program analysis. Based on these tradeoffs, program analyses are characterized along two dimensions: Soundness and Completeness. You’ll learn how to calculate Precision, Recall, and F-Measure of program analysis that will enable you to measure its accuracy. You will also learn how the Undecidability of program correctness properties necessitates these tradeoffs. In the end, you’ll learn about the primary consumers of program analysis and their examples.
    objectives: |
      + Understand the need to learn Program Analysis and classify different analysis approaches into Static, Dynamic, and Hybrid.
      + Recall Program Invariants and how to check them using Static and Dynamic analysis.
      + Develop an iterative approach to design Static Analysis including components such as Program Representation, Abstract Domain, Transfer Functions, and Fixed-Point Computation Algorithm.
      + Characterize program analyses (static and dynamic) on the basis of Soundness and Completeness and determine the tradeoffs made.
      + Characterize program analyses (static and dynamic) and quantify the accuracy of an analysis on the basis of Precision, Recall, and F-Measure.
      + List the primary consumers of program analysis: Compilers, Software Quality Tools, and Integrated Development Environments and give their examples.
    slides: intro_to_software_analysis.pdf
    lessons:
      - title: "Course Introduction"
        segments:
          - title: "Why Take This Course"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fbda97cf-3fd7-4495-aad4-abfa015ebea4"
          - title: "Reading: From Software Bugs to Security Vulnerabilities"
            url: ""
          - title: "Reading: Course VM and Lab Instructions"
            url: ""
          - title: "Walkthrough: Setting up the Course VM"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2563080d-efd4-4518-9389-ac2a010016c3"
      - title: "Introduction to Software Analysis"
        segments:
          - title: "What is Program Analysis?"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cec6430a-6e07-4499-9a73-abfa01717517"
          - title: "Discovering Invariants by Dynamic and Static Analysis"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=42b69bf4-201b-4404-a071-abfa01717fa5"
          - title: "Anatomy of a Static Analysis"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=44d37968-15f2-43f4-9946-abfa017185ac"
          - title: "Quiz 1.1 [Question] Example Static Analysis Problem"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=64a9f1df-b13a-464f-a73a-abfa01718e7d"
          - title: "Quiz 1.1 [Solution] Example Static Analysis Problem"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b147f209-da05-4167-a37f-abfa017194b4"
          - title: "Reading: A Menagerie of Program Abstractions"
            url: ""

      - title: "Tradeoffs in Software Analysis"
        segments:
          - title: "Characterizing Analyses: Soundness and Completeness"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3e7bd9f3-b1a3-476f-a6a8-abfe0154d76e"
          - title: "Quiz 1.2 [Question] Dynamic vs. Static Analysis"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cbfbaaa2-03dd-43c7-a947-abfe0154e004"
          - title: "Quiz 1.2 [Solution] Dynamic vs. Static Analysis"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4a6a10cb-97d9-4e5e-9e35-abfe0154e801"
          - title: "Characterizing Analyses: F-Measure and Undecidability"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fdef7dbc-f147-4436-b8b7-abfe0154ef4f"
          - title: "Quiz 1.3 [Question] Comparing Program Analyses"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ff1d6826-b827-4784-8a85-abfe01570e5d"
          - title: "Quiz 1.3 [Solution] Comparing Program Analyses"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=29c0a969-9148-4071-99e4-abfe015713c9"
          - title: "Reading: Undecidability of Program Properties"
            url: ""
          - title: "Who Needs Program Analysis?"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ce420ed7-bf4b-4c04-a9f0-abfe0158bb4b"
          - title: "Quiz 1.4 [Question] Choosing a Program Analysis (Part 1)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=630fb292-0cf8-45d6-a036-abfe0158dac1"
          - title: "Quiz 1.4 [Solution] Choosing a Program Analysis (Part 1)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=96499a1d-6e7d-4b7f-b419-abfe0158e537"
          - title: "Quiz 1.4 [Question] Choosing a Program Analysis (Part 2)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9ee60aae-ec65-4cdd-be70-abfe0158ecd4"
          - title: "Quiz 1.4 [Solution] Choosing a Program Analysis (Part 2)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bace1312-f719-44f0-b4d3-abfe015b7a2d"
          - title: "Quiz 1.4 [Question] Choosing a Program Analysis (Part 3)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a07981e7-7269-4c64-ad2b-abfe015b8928"
          - title: "Quiz 1.4 [Solution] Choosing a Program Analysis (Part 3)"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b2ba04f5-26a1-4f3a-9f2e-abfe015b9376"
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: "https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a84f999f-0607-46ad-83bc-abfe015b99cf"

  - id: "2"
    title: "Software Specifications"
    description: |
      This module introduces you to software specifications and their role in software testing. You will learn about the landscape of testing methods and how program analysis can be used to automate testing. You’ll learn about different kinds of specifications, including pre- and post-conditions and loop- and class- invariants, and how they help improve program reliability. You’ll then learn how to automatically infer such specifications using the Houdini algorithm and how to measure the quality of a test suite to make it more robust.
    objectives: |
      + Classify and compare different testing approaches: Automated testing, Manual testing, Black-box testing, and White-box testing.
      + Classify program specifications into two categories: Safety Properties and Liveness Properties. Give examples of each category.
      + Explain and give examples of specifications of different units of a program such as functions, loops, and classes: Pre- and Post- Conditions, Loop Invariants, and Class Invariants.
      + Apply the Houdini algorithm on programs to automatically infer specifications and explain its pros and cons.
      + Measure the quality of a test suite using approaches: Code Coverage and Mutation Analysis.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Software Development Scenario"
            url: ""
          - title: "The Role of Specifications"
            url: ""
          - title: "Landscape of Testing Approaches"
            url: ""
      - title: "Kinds of Specifications"
        segments:
          - title: "Safety and Liveness"
            url: ""
          - title: "Pre- and Post-Conditions"
            url: ""
          - title: "Quiz 2.1 [Question] Pre-Conditions"
            url: ""
          - title: "Quiz 2.1 [Solution] Pre-Conditions"
            url: ""
          - title: "Quiz 2.2 [Question] Post-Conditions"
            url: ""
          - title: "Quiz 2.2 [Solution] Post-Conditions"
            url: ""
          - title: "Invariants"
            url: ""
          - title: "Reading: Hardening C/C++ Code with Clang Sanitizers"
            url: ""
      - title: "Inferring Specifications"
        segments:
          - title: "The Houdini Algorithm"
            url: ""
          - title: "Houdini on an Example"
            url: ""
          - title: "Quiz 2.3 [Question] Inferring Contracts with Houdini"
            url: ""
          - title: "Quiz 2.3 [Solution] Inferring Contracts with Houdini"
            url: ""
          - title: "Pros and Cons of Houdini"
            url: ""
          - title: "Reading: Verifying Program Correctness with Dafny"
            url: ""
      - title: "Measuring Test Suite Quality"
        segments:
          - title: "How Good Is Your Test Suite?"
            url: ""
          - title: "Code Coverage"
            url: ""
          - title: "Quiz 2.4 [Question] Code Coverage Metrics"
            url: ""
          - title: "Quiz 2.4 [Solution] Code Coverage Metrics"
            url: ""
          - title: "Mutation Analysis"
            url: ""
          - title: "Quiz 2.5 [Question] Mutation Analysis (Part 1)"
            url: ""
          - title: "Quiz 2.5 [Solution] Mutation Analysis (Part 1)"
            url: ""
          - title: "Quiz 2.5 [Question] Mutation Analysis (Part 2)"
            url: ""
          - title: "Quiz 2.5 [Solution] Mutation Analysis (Part 2)"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "3"
    title: "Random Testing"
    description: |
      This module introduces the concept of Random Testing and describes its evolution over three generations from its inception to today’s sophisticated fuzzers. You will learn about general-purpose fuzzers, their strengths and limitations, and how to effectively apply them to uncover crashing bugs and security vulnerabilities. You’ll also learn how the random testing paradigm is adapted to test programs in two important domains, mobile applications and multi-threaded programs, and how it can provide a probabilistic worst-case guarantee on finding concurrency bugs.
    objectives: |
      + Describe the three generations of Random Testing along with its uses and pros and cons.
      + Describe different fuzzing tools and their usage: AFL, LibFuzzer, OSS Fuzz, and ClusterFuzz.
      + Explain with examples grammar-based fuzzing in mobile applications.
      + Explain with examples fuzzing of multi-threaded programs using Bug Depth, the Cuzz algorithm, and its probabilistic guarantee.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Random Testing: Motivation and Background"
            url: ""
          - title: "The First Fuzzing Study"
            url: ""
      - title: "General-Purpose Fuzzing"
        segments:
          - title: "Three Generations of Fuzzers"
            url: ""
          - title: "Pros and Cons of Random Testing"
            url: ""
          - title: "Fuzzers in the Wild"
            url: ""
          - title: "Reading: A Fuzzing Lesson (AFL)"
            url: ""
      - title: "Domain-Specific Fuzzing"
        segments:
          - title: "Two Case Studies"
            url: ""
          - title: "Testing Mobile Apps"
            url: ""
          - title: "Grammar-Based Fuzzing"
            url: ""
          - title: "Quiz 3.1 [Question] Monkey Events (Mobile Apps)"
            url: ""
          - title: "Quiz 3.1 [Solution] Monkey Events (Mobile Apps)"
            url: ""
          - title: "Testing Concurrent Programs"
            url: ""
          - title: "Depth of a Concurrency Bug"
            url: ""
          - title: "Quiz 3.2 [Question] Concurrency Bug Depth"
            url: ""
          - title: "Quiz 3.2 [Solution] Concurrency Bug Depth"
            url: ""
          - title: "Cuzz Algorithm"
            url: ""
          - title: "Cuzz Case Study & Key Takeaways"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "4"
    title: "Automated Test Generation"
    description: |
      This module introduces the concept of automating test generation for units of code. The presented techniques guide test generation by leveraging different kinds of program specifications, such as types, invariants, and pre- and post-conditions. You’ll learn two orthogonal but complementary approaches: Randoop and Korat. Randoop is designed to test classes and libraries while Korat is used to test data structures.
    objectives: |
      + Describe how to leverage different forms of specifications (types, invariants, and pre- and post-conditions) to guide test generation.
      + Apply the Randoop approach to test classes and libraries by creating and classifying method sequences.
      + Apply Korat to test data structures by representing and enumerating different shapes and using pre- and post-conditions and invariants for test generation.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Motivation and Outline"
            url: ""
          - title: "Leveraging the Specifications"
            url: ""
      - title: "Testing Classes and Libraries"
        segments:
          - title: "Key Ideas of Randoop"
            url: ""
          - title: "The Randoop Algorithm"
            url: ""
          - title: "Randoop in Practice"
            url: ""
          - title: "Quiz 4.1 [Question] Randoop Test Generation (Part 1)"
            url: ""
          - title: "Quiz 4.1 [Solution] Randoop Test Generation (Part 1)"
            url: ""
          - title: "Quiz 4.1 [Question] Randoop Test Generation (Part 2)"
            url: ""
          - title: "Quiz 4.1 [Solution] Randoop Test Generation (Part 2)"
            url: ""
          - title: "Quiz 4.1 [Question] Randoop Test Generation (Part 3)"
            url: ""
          - title: "Quiz 4.1 [Solution] Randoop Test Generation (Part 3)"
            url: ""
          - title: "Reading: Testing Classes and Libraries with Randoop"
            url: ""
      - title: "Testing Data Structures"
        segments:
          - title: "Key Ideas of Korat"
            url: ""
          - title: "Quiz 4.2 [Question] Representing Shapes"
            url: ""
          - title: "Quiz 4.2 [Solution] Representing Shapes"
            url: ""
          - title: "A Simple Algorithm"
            url: ""
          - title: "Using the Invariant"
            url: ""
          - title: "Enumerating Tests"
            url: ""
          - title: "Quiz 4.3 [Question] Enumerating Binary Trees (Part 1)"
            url: ""
          - title: "Quiz 4.3 [Solution] Enumerating Binary Trees (Part 1)"
            url: ""
          - title: "Quiz 4.3 [Question] Enumerating Binary Trees (Part 2)"
            url: ""
          - title: "Quiz 4.3 [Solution] Enumerating Binary Trees (Part 2)"
            url: ""
          - title: "Korat in Practice"
            url: ""
          - title: "Reading: Property-Based Testing with QuickCheck"
            url: ""
      - title: "Review"
        segments:
          - title: "Quiz 4.4 [Question] Korat and Randoop"
            url: ""
          - title: "Quiz 4.4 [Solution] Korat and Randoop"
            url: ""
          - title: "The Bigger Picture"
            url: ""
          - title: "What Have We Learned?"
            url: ""

  - id: "5"
    title: "Dataflow Analysis - Part I"
    description: |
      This module delves into dataflow analysis -- a popular type of static analysis widely used in compilers and software quality tools. It introduces the WHILE language and the control-flow graph representation of WHILE programs on which dataflow analyses operate. Two classic dataflow analyses are presented: Reaching Definitions Analysis and Very Busy Expressions Analysis. The similarities and differences of the two analyses are discussed.
    objectives: |
      + Define and represent the result of a Dataflow Analysis using control-flow graphs and the WHILE language.
      + Understand the properties of Dataflow Analysis and list some of their applications in compilers and software quality tools.
      + Define the operations and abstract domain of Reaching Definitions Analysis and Very Busy Expressions Analysis.
      + Demonstrate how Reaching Definitions Analysis works on a program in the WHILE language.
      + Demonstrate how Very Busy Expressions Analysis works on a program in the WHILE language.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Dataflow Analysis for the While Language"
            url: ""
          - title: "Quiz 5.1 [Question & Solution] Control Flow Graphs"
            url: ""
          - title: "Properties and Uses of Dataflow Analysis"
            url: ""
      - title: "Reaching Definitions Analysis"
        segments:
          - title: "What is Reaching Definitions Analysis"
            url: ""
          - title: "Quiz 5.2 [Question] Reaching Definitions Example"
            url: ""
          - title: "Quiz 5.2 [Solution] Reaching Definitions Example"
            url: ""
          - title: "Computing Reaching Definitions"
            url: ""
          - title: "Example: Reaching Definitions Analysis"
            url: ""
          - title: "Quiz 5.3 [Question] Reaching Definitions Analysis"
            url: ""
          - title: "Quiz 5.3 [Solution] Reaching Definitions Analysis"
            url: ""
      - title: "Other Classical Dataflow Analyses"
        segments:
          - title: "Very Busy Expressions Analysis"
            url: ""
          - title: "Example: Very Busy Expressions Analysis"
            url: ""
          - title: "Quiz 5.4 [Question] Very Busy Expressions Analysis"
            url: ""
          - title: "Quiz 5.4 [Solution] Very Busy Expressions Analysis"
            url: ""

  - id: "6"
    title: "Dataflow Analysis - Part II"
    description: |
      This module introduces the two of the remaining classic dataflow analyses – Available Expressions Analysis and Live Variables Analysis. Then you’ll learn about the overall pattern followed by the four classic dataflow analyses. The module also delves into Interval Analysis, a modern dataflow analysis with many applications to finding security bugs. In the end, you’ll learn about the concept of widening to ensure termination of interval analysis.
    objectives: |
      + Demonstrate how Available Expressions Analysis and Live Variables Analysis work on a program in the WHILE language.
      + Compare and contrast the four classic Dataflow Analyses based on the dataflow pattern.
      + Understand the importance of Interval Analysis in finding common errors in software.
      + Define the operations and abstract domain of Interval Analysis.
      + Apply the chaotic iteration algorithm to understand the step-by-step operation of Interval Analysis and recognize the importance of Widening.
    lessons:
      - title: "Other Classical Dataflow Analyses"
        segments:
          - title: "Available Expressions Analysis"
            url: ""
          - title: "Live Variables Analysis"
            url: ""
      - title: "Characterizing Dataflow Analyses"
        segments:
          - title: "Overall Pattern of Dataflow Analyses"
            url: ""
          - title: "Quiz 6.1 [Question] Available Expressions Analysis"
            url: ""
          - title: "Quiz 6.1 [Solution] Available Expressions Analysis"
            url: ""
          - title: "Quiz 6.2 [Question] Live Variables Analysis"
            url: ""
          - title: "Quiz 6.2 [Solution] Live Variables Analysis"
            url: ""
          - title: "Quiz 6.3 [Question] Classifying Dataflow Analyses"
            url: ""
          - title: "Quiz 6.3 [Solution] Classifying Dataflow Analyses"
            url: ""
      - title: "Interval Analysis"
        segments:
          - title: "What is Interval Analysis"
            url: ""
          - title: "Computing Interval Analysis"
            url: ""
          - title: "Quiz 6.4 [Question] Interval Analysis (Part 1)"
            url: ""
          - title: "Quiz 6.4 [Solution] Interval Analysis (Part 1)"
            url: ""
          - title: "Example: Interval Analysis"
            url: ""
          - title: "Quiz 6.4 [Question] Interval Analysis (Part 2)"
            url: ""
          - title: "Quiz 6.4 [Solution] Interval Analysis (Part 2)"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "7"
    title: "Pointer Analysis"
    description: |
      This module introduces the concept of Pointer Analysis -- a form of dataflow analysis that reasons about the flow of pointers. A popular pointer analysis called Andersen's algorithm and the points-to graph representation is described. Different dimensions for classifying pointer analyses based on accuracy and cost are presented. A more scalable but less precise pointer analysis called Steensgaard's algorithm is introduced. In the end, an important security application of pointer analysis, called Control Flow Integrity, is discussed.
    objectives: |
      + Understand the need for Pointer Analysis and the two variants of May-alias analysis and Must-alias analysis.
      + Apply Andersen’s algorithm to compute a Points-to Graph for a program that creates and manipulates objects.
      + Apply different Heap Abstractions to a program and understand the differences between them.
      + Classify Pointer Analysis algorithms using four dimensions: Flow Sensitivity, Context Sensitivity, Heap Abstraction, and Aggregate Modeling.
      + Apply Andersen’s and Steensgaard’s algorithms to a program with stack-directed pointers.
      + Understand how Pointer Analysis is applied in Control Flow Integrity to enforce security policies.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "May- and Must- Alias Analysis"
            url: ""
          - title: "Why is Pointer Analysis Hard?"
            url: ""
      - title: "Crafting a Pointer Analysis"
        segments:
          - title: "Abstractions for Pointer Analysis"
            url: ""
          - title: "A Simple Language"
            url: ""
          - title: "Quiz 7.1 [Question & Solution] Normal Form of Programs"
            url: ""
          - title: "Andersen's Algorithm"
            url: ""
          - title: "Quiz 7.2 [Question] Points-To Graphs"
            url: ""
          - title: "Quiz 7.2 [Solution] Points-To Graphs"
            url: ""
      - title: "Pointer Analysis Design Choices"
        segments:
          - title: "Dimensions of Pointer Analysis"
            url: ""
          - title: "Heap Abstraction Schemes"
            url: ""
          - title: "Quiz 7.3 [Question] May-Alias Analysis (Part 1)"
            url: ""
          - title: "Quiz 7.3 [Solution] May-Alias Analysis (Part 1)"
            url: ""
          - title: "Quiz 7.3 [Question] May-Alias Analysis (Part 2)"
            url: ""
          - title: "Quiz 7.3 [Solution] May-Alias Analysis (Part 2)"
            url: ""
          - title: "Modeling Aggregate Data Types"
            url: ""
          - title: "Quiz 7.4 [Question] Pointer Analysis Classification"
            url: ""
          - title: "Quiz 7.4 [Solution] Pointer Analysis Classification"
            url: ""
          - title: "Stack-Based Pointer Analysis"
            url: ""
          - title: "Quiz 7.5 [Question & Solution] Normal Form of Programs"
            url: ""
      - title: "Real-World Applications"
        segments:
          - title: "Steensgaard's Algorithm"
            url: ""
          - title: "A Security Application: CFI"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "8"
    title: "Constraint-Based Analysis"
    description: |
      In this module, you’ll learn about Constraint-Based Analysis, a popular approach to program analysis, and its benefits over the approaches studied earlier. You’ll learn a constraint language called Datalog and how it is used to specify intra-procedural and inter-procedural dataflow analyses. The module will also describe tradeoffs made in context-insensitive and context-sensitive inter-procedural analysis. In the end, you’ll learn about other constraint languages, SAT and SMT, and their applications to program analysis.
    objectives: |
      + Understand Constraint-Based Analysis and its benefits over other approaches.
      + Understand the syntax and semantics of the Datalog constraint language.
      + Use the Datalog constraint language to specify intra-procedural and inter-procedural dataflow analyses.
      + Understand Context-Insensitive and Context-Sensitive inter-procedural dataflow analysis and their challenges and solutions.
      + Understand the constraint languages SAT and SMT through applications to program analysis.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Motivation and Background"
            url: ""
          - title: "Quiz 8.1 [Question] Specification and Implementation"
            url: ""
          - title: "Quiz 8.1 [Solution] Specification and Implementation"
            url: ""
      - title: "An Overview of Datalog"
        segments:
          - title: "Datalog Syntax and Semantics"
            url: ""
          - title: "Quiz 8.2 [Question] Computation Using Datalog"
            url: ""
          - title: "Quiz 8.2 [Solution] Computation Using Datalog"
            url: ""
      - title: "Analysis Using Datalog"
        segments:
          - title: "Reaching Definitions Analysis"
            url: ""
          - title: "Quiz 8.3 [Question] Live Variables Analysis"
            url: ""
          - title: "Quiz 8.3 [Solution] Live Variables Analysis"
            url: ""
          - title: "Intra-Procedural Pointer Analysis"
            url: ""
          - title: "Inter-Procedural Pointer Analysis"
            url: ""
          - title: "Quiz 8.4 [Question] Querying Pointer Analysis"
            url: ""
          - title: "Quiz 8.4 [Solution] Querying Pointer Analysis"
            url: ""
          - title: "Context-Sensitive Analysis"
            url: ""
      - title: "Analysis Using SAT and SMT"
        segments:
          - title: "Constraint Languages"
            url: ""
          - title: "Analysis Using SAT"
            url: ""
          - title: "Analysis Using SMT"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "9"
    title: "Statistical Debugging"
    description: |
      This module introduces a technique for automated test generation called Dynamic Symbolic Execution (DSE). DSE is an example of a hybrid analysis: it collaboratively combines static analysis and dynamic analysis. You’ll learn how it outperforms both random testing, which is based on purely dynamic analysis, and symbolic execution, which is based on purely static analysis. You’ll also learn about the effectiveness of the DSE approach in testing various real-world applications.
    objectives: |
      + Understand the step-by-step process for Statistical Debugging and identify its benefits and challenges.
      + Identify the kinds of program predicates to observe in user runs for the purpose of isolating bugs.
      + Summarize the arrays of predicate counts in a user run and report them in a feedback profile.
      + Understand different approaches for sampling program predicates and the uncertainty involved in the process.
      + Compute Failure, Context and Increase metrics to express the likelihood of a bug in a predicate sample.
      + Apply Statistical Debugging algorithms to isolate bugs in programs.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Why Statistical Debugging?"
            url: ""
          - title: "The Statistical Debugging Approach"
            url: ""
      - title: "How to Get Data for Debugging"
        segments:
          - title: "Step 1: A Model of Program Behaviors"
            url: ""
          - title: "Quiz 9.1 [Question] Identify the Predicates"
            url: ""
          - title: "Quiz 9.1 [Solution] Identify the Predicates"
            url: ""
          - title: "Step 2: Summarization and Reporting"
            url: ""
          - title: "Quiz 9.2 [Question] Abstracting Predicate Counts"
            url: ""
          - title: "Quiz 9.2 [Solution] Abstracting Predicate Counts"
            url: ""
          - title: "Quiz 9.3 [Question] Populate the Predicates"
            url: ""
          - title: "Quiz 9.3 [Solution] Populate the Predicates"
            url: ""
          - title: "Step 3: Sampling Program Predicates"
            url: ""
          - title: "Quiz 9.4 [Question] Uncertainty Due to Sampling"
            url: ""
          - title: "Quiz 9.4 [Solution] Uncertainty Due to Sampling"
            url: ""
      - title: "What To Do with Data to Debug"
        segments:
          - title: "Step 4: Finding Causes of Bugs"
            url: ""
          - title: "Quiz 9.5 [Question] Computing Increase()"
            url: ""
          - title: "Quiz 9.5 [Solution] Computing Increase()"
            url: ""
          - title: "Step 5.1: Isolating a Bug"
            url: ""
          - title: "Step 5.2: Handling Programs with Multiple Bugs"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "10"
    title: "Type Systems - Part I"
    description: |
      This module will introduce you to the most widely used form of static analysis known as Type Systems. You’ll learn a core language, the Lambda Calculus, and notation for specifying a type system for the language in the form of rules. You will then use the rules to determine whether a program is accepted or rejected by the type system. In the end, you’ll learn about soundness and completeness properties of type systems.
    objectives: |
      + Remember the notation for Type Systems and the type rules for the Lambda Calculus language.
      + Derive the type of a given program in the Lambda Calculus by constructing a Type Derivation.
      + Explain the concept of Type Soundness and the guarantee that a sound type system provides for well-typed programs.
      + Understand the relationship between types in a type system and abstract values in other forms of static analysis.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Introduction"
            url: ""
          - title: "Motivation and Background"
            url: ""
          - title: "Types and Abstraction"
            url: ""
      - title: "A Simple Typed Language"
        segments:
          - title: "The Lambda Calculus"
            url: ""
          - title: "Quiz 10.1 [Question] Programs and Types"
            url: ""
          - title: "Quiz 10.1 [Solution] Programs and Types"
            url: ""
          - title: "Typing Rules: Part I"
            url: ""
          - title: "Typing Rules: Part II"
            url: ""
          - title: "Quiz 10.2 [Question] Type Derivations"
            url: ""
          - title: "Quiz 10.2 [Solution] Type Derivations"
            url: ""
      - title: "Properties of Type Systems"
        segments:
          - title: "Quiz 10.3 [Question] Properties of Type Systems"
            url: ""
          - title: "Quiz 10.3 [Solution] Properties of Type Systems"
            url: ""

  - id: "11"
    title: "Delta Debugging"
    description: |
      This module introduces Delta Debugging -- a debugging technique that automates the task of minimizing a complex crashing test-case to help localize the cause of the program failure. Starting with an iterative binary search technique that cuts test-cases into half, you’ll learn a formal framework to shrink test-cases, culminating into the Delta Debugging Minimization algorithm. The running time and minimality guarantee provided by the algorithm are discussed. In the end, you’ll learn about applications of this technique to diverse debugging tasks in practice.
    objectives: |
      + Explain the impact of input granularity on the progress of the iterative Binary Search technique and the chance of finding a failing input subset.
      + Understand the step-by-step process of decomposing a test-case into a set of changes as part of the Delta Debugging algorithm.
      + Apply the Delta Debugging Minimization algorithm to find a 1-minimal test-case from the given set of changes.
      + Discuss different real-world applications of the Delta Debugging Minimization algorithm.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Delta Debugging: Introduction"
            url: ""
          - title: "Why Simplify?"
            url: ""
          - title: "A First Solution"
            url: ""
      - title: "Delta Debugging Groundwork"
        segments:
          - title: "Choosing Input Granularity"
            url: ""
          - title: "Quiz 11.1 [Question] Impact of Input Granularity"
            url: ""
          - title: "Quiz 11.1 [Solution] Impact of Input Granularity"
            url: ""
          - title: "Test Cases as Sets of Changes"
            url: ""
      - title: "Delta Debugging Algorithm"
        segments:
          - title: "Minimizing Test Cases"
            url: ""
          - title: "Quiz 11.2 [Question] Minimizing Test Cases"
            url: ""
          - title: "Quiz 11.2 [Solution] Minimizing Test Cases"
            url: ""
          - title: "Minimization Algorithm"
            url: ""
          - title: "Quiz 11.3 [Question] Minimization Algorithm"
            url: ""
          - title: "Quiz 11.3 [Solution] Minimization Algorithm"
            url: ""
      - title: "Real-World Applications"
        segments:
          - title: "Debugging a Crashing Compiler"
            url: ""
          - title: "Other Debugging Applications"
            url: ""
      - title: "Review"
        segments:
          - title: "Quiz 11.4 [Question] Delta Debugging"
            url: ""
          - title: "Quiz 11.4 [Solution] Delta Debugging"
            url: ""
          - title: "What Have We Learned?"
            url: ""

  - id: "12"
    title: "Type Systems - Part II"
    description: |
      This module elucidates connections between type systems and other forms of static analysis. It sets out by showing how to perform Type Inference using constraint solving and thereby alleviate annotation burden on programmers. It then demonstrates how other forms of static analyses can be described using the notation of type systems. You will learn how to describe three broad classes of static analyses -- flow-insensitive, flow-sensitive, and path-sensitive -- using type rules and understand their strengths and tradeoffs.
    objectives: |
      + Apply the Type Inference algorithm to infer the type of a given program in the Lambda Calculus language.
      + Understand how to specify other forms of Static Analysis using Type System notation.
      + Explain the type rules for Flow-insensitive, Flow-sensitive, and Path-sensitive analysis.
      + Determine whether a certain property of a given program can be verified using a Flow-insensitive, Flow-sensitive, or Path-sensitive analysis.
    lessons:
      - title: "Type Inference"
        segments:
          - title: "Type Inference"
            url: ""
          - title: "Example 1 of 2"
            url: ""
          - title: "Example 2 of 2"
            url: ""
      - title: "Notation for Static Analyses"
        segments:
          - title: "Static Analysis Using Type Rules"
            url: ""
          - title: "Quiz 12.1 [Question] Example Rules - Part I"
            url: ""
          - title: "Quiz 12.1 [Solution] Example Rules - Part I"
            url: ""
          - title: "Revisiting Abstract Domains"
            url: ""
          - title: "Quiz 12.2 [Question] Example Rules - Part II"
            url: ""
          - title: "Quiz 12.2 [Solution] Example Rules - Part II"
            url: ""
          - title: "Flow and Path Sensitivity"
            url: ""
          - title: "Quiz 12.3 [Question] Flow and Path Sensitivity"
            url: ""
          - title: "Quiz 12.3 [Solution] Flow and Path Sensitivity"
            url: ""
          - title: "Summary of Type Systems"
            url: ""
          - title: "Reading: The Checker Framework"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""

  - id: "13"
    title: "Dynamic Symbolic Execution"
    description: |
      This module introduces a technique for automated test generation called Dynamic Symbolic Execution (DSE). DSE is an example of a hybrid analysis: it collaboratively combines static analysis and dynamic analysis. You’ll learn how it outperforms both random testing, which is based on purely dynamic analysis, and symbolic execution, which is based on purely static analysis. You’ll also learn about the effectiveness of the DSE approach in testing various real-world applications.
    objectives: |
      + Visualize execution paths of a program using its Computation Tree to understand how Dynamic Symbolic Execution works.
      + Apply a combination of Concrete Execution and Symbolic Execution to generate numeric and pointer inputs as part of Dynamic Symbolic Execution.
      + Compare Dynamic Symbolic Execution to Random Testing and Symbolic Execution.
      + Apply the Dynamic Symbolic Execution approach to test data structures.
      + Illustrate real-world applications of Dynamic Symbolic Execution using examples.
    lessons:
      - title: "Introduction"
        segments:
          - title: "Dynamic Symbolic Execution: Introduction"
            url: ""
          - title: "Motivation and Approach"
            url: ""
          - title: "Execution Paths of a Program"
            url: ""
          - title: "Existing Approaches for Automated Test Generation"
            url: ""
      - title: "The DSE Approach"
        segments:
          - title: "Example 1: Combined Approach"
            url: ""
          - title: "Quiz 13.1 [Question] Computation Tree"
            url: ""
          - title: "Quiz 13.1 [Solution] Computation Tree"
            url: ""
          - title: "Example 2: A More Complex Example"
            url: ""
          - title: "Quiz 13.2 [Question] Example Application"
            url: ""
          - title: "Quiz 13.2 [Solution] Example Application"
            url: ""
          - title: "Example 3: How Dynamic Differs from Static"
            url: ""
          - title: "Quiz 13.3 [Question] Properties of DSE"
            url: ""
          - title: "Quiz 13.3 [Solution] Properties of DSE"
            url: ""
          - title: "Example 4: Testing Data Structures"
            url: ""
          - title: "Quiz 13.4 [Question] Characteristics of DSE"
            url: ""
          - title: "Quiz 13.4 [Solution] Characteristics of DSE"
            url: ""
      - title: "Real-World Applications"
        segments:
          - title: "Case Studies"
            url: ""
          - title: "The SAGE Tool at Microsoft"
            url: ""
      - title: "Review"
        segments:
          - title: "What Have We Learned?"
            url: ""
---