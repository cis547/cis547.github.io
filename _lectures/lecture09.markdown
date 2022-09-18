---
layout: lecture
_id: 9
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
slides: pointer-analysis.pdf
video: "https://youtu.be/4_TTHz54_vc"
---
