---
layout: lecture
_id: 1
title: "Introduction to Software Analysis"
description: |
  This module will introduce you to the domain of Software Analysis -- interchangeably called Program Analysis -- and its role in checking correctness properties of programs. You will learn about a general class of properties, called program invariants, and how they can be checked using static and dynamic analyses. Then, you’ll learn a step-by-step process of designing a static analysis to check program invariants. Through different examples, you will witness how this process achieves its objective by abstractly evaluating programs.

  Additionally, this module covers fundamental tradeoffs in program analysis. Based on these tradeoffs, program analyses are characterized along two dimensions: Soundness and Completeness. You’ll learn how to calculate precision, recall, and F-measure of program analysis that will enable you to measure its accuracy. You will also learn how the Undecidability of program correctness properties necessitates these tradeoffs. In the end, you’ll learn about the primary consumers of program analysis and their examples.
objectives: |
  + Understand the need to learn Program Analysis and classify different analysis approaches into Static, Dynamic, and Hybrid.
  + Recall Program Invariants and how to check them using Static and Dynamic analysis.
  + Develop an iterative approach to design Static Analysis including components such as Program Representation, Abstract Domain, Transfer Functions, and Fixed-Point Computation Algorithm.
  + Characterize program analyses (static and dynamic) on the basis of Soundness and Completeness and determine the tradeoffs made.
  + Characterize program analyses (static and dynamic) and quantify the accuracy of an analysis on the basis of Precision, Recall, and F-Measure.
  + List the primary consumers of program analysis: Compilers, Software Quality Tools, and Integrated Development Environments and give their examples.
slides: intro_to_software_analysis.pdf
video: "https://youtu.be/v0dKdfmziHs"
---
