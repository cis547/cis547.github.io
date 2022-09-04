---
layout: lecture
_id: 5
title: "Delta Debugging"
description: |
  This module introduces Delta Debugging -- a debugging technique that automates the task of minimizing a complex crashing test-case to help localize the cause of the program failure. Starting with an iterative binary search technique that cuts test-cases into half, you’ll learn a formal framework to shrink test-cases, culminating into the Delta Debugging Minimization algorithm. The running time and minimality guarantee provided by the algorithm are discussed. In the end, you’ll learn about applications of this technique to diverse debugging tasks in practice.
objectives: |
  + Explain the impact of input granularity on the progress of the iterative Binary Search technique and the chance of finding a failing input subset.
  + Understand the step-by-step process of decomposing a test-case into a set of changes as part of the Delta Debugging algorithm.
  + Apply the Delta Debugging Minimization algorithm to find a 1-minimal test-case from the given set of changes.
  + Discuss different real-world applications of the Delta Debugging Minimization algorithm.
slides: delta_debugging.pdf
video: "https://youtu.be/lGe2-y1xibY"
---
