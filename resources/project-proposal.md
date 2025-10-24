---
layout: default
title: "Project Requirements"
parent: Resources
nav_order: 3
---

## Project Requirements

### Project Objective

The final project is a capstone that pushes you well beyond the course laboratories. Your team will design and implement an analysis pipeline that targets **two to three significant bug classes** in real programs. Each bug class must demand non-trivial reasoning that extends past the divide-by-zero sanitizer from Labs 1 and 6. Representative bug classes include:

- Null-pointer dereference
- Buffer overflow and out-of-bounds access
- Integer overflow and precision loss
- Use-after-free or double free

You may propose other classes, but they must be comparable in difficulty and require a substantial technique—for example, RedQueen-style input-to-state correspondence in a fuzzer or abstract interpretation that uses widening/narrowing over relational domains.

### Project Scope and Expectations

- Connect laboratory skills to a more challenging setting by extending or combining tooling from Labs 1–7.
- For each selected bug class, adopt at least one **advanced analysis technique** such as RedQueen fuzzing, structure-aware mutation, constraint-based reasoning with SMT, abstract interpretation with widening/narrowing and intervals, pointer or alias analysis, or hybrid symbolic execution.
- Build or curate a **benchmark suite** that exercises every targeted bug class. Document why the programs were chosen and what ground-truth behavior you expect.
- Automate the full pipeline: generate or collect benchmarks, run your analyses, process results, and compute metrics.
- Evaluate precision, recall, coverage, performance, or other well-justified metrics. Compare against baselines when possible (e.g., course lab solutions, open-source tools, or ablations of your own system).

### Project Team

Projects are completed in teams of two. After proposals are approved, each team is paired with a project TA who will serve as your primary contact. Schedule meetings with your TA early and often—they will help keep you on track.

### Project Timeline

To keep progress steady we will follow the timeline below.

| Project Proposal | Nov 7 |
| :---- | ----: |
| Check-in with Project TA | Nov 18 |
| Project Submission | Dec 7 |

Submit the proposal no later than Nov 7 so there is room for feedback. Aim to have a prototype analysis and evaluation harness ready for the Nov 18 check-in.

### Initial and Intermediate Deliverables

#### Project Proposal (Due Nov 7)

Submit a private Ed post for your team that includes:

- Team: names and emails of both members.
- Descriptive title.
- Target bug classes (2–3) with rationale drawn from Labs 1–7.
- Technique plan: for each bug class, identify the analysis paradigm(s) you will employ (e.g., RedQueen-inspired fuzzing, abstract interpretation with narrowing over intervals, solver-aided symbolic execution) and the key technical challenges you expect.
- Benchmark plan: describe existing suites you will reuse or new programs you will craft, including program sizes and how you will establish ground truth.
- Implementation tasks and milestones.
- Partial-success criteria (what you need for a meaningful result even if stretch goals slip).
- Full-success criteria (what “done” looks like, including evaluation metrics).
- Risk assessment and contingency plans.
- Work division between teammates.

Keep the proposal to roughly one page. Use the “Domain Tracks & Example Techniques” section below to align your ideas with course expectations.

#### Check-in (Due Nov 18)

No written submission. Schedule a 20-minute meeting with your TA to:

- Show the analysis architecture and early code.
- Demo progress on at least one bug class and its benchmark harness.
- Report preliminary metrics or experiments.
- Surface blockers and update the timeline for the final stretch.

### Final Deliverable (Due Dec 7)

#### Project Code

Provide TA access to your private GitHub repository; include the link in the report. The repository must contain:

- A top-level README with team information, repository layout, setup instructions, commands to reproduce experiments, and guidance on interpreting the outputs.
- Scripts or configuration files that build benchmarks, run analyses, and collect metrics.
- Docstrings or comments for the major components of your infrastructure.

#### Project Report

Submit a 3–5 page double-spaced PDF on Gradescope that contains:

- Cover page with descriptive title, team information, GitHub link, and a brief work-division summary.
- Introduction and motivation for the chosen bug classes and techniques.
- Technical overview of your design (include diagrams, workflow charts, or key algorithms as needed).
- Evaluation section with:
  - Benchmark description (names, sources, lines of code, or other scale indicators).
  - Metrics and results (tables/figures for precision/recall, coverage, performance, etc.).
  - Discussion of findings, surprising results, and limitations.
- Conclusion and future work.
- References for any external code, datasets, or papers you incorporated.

### Evaluation and Benchmark Requirements

- Benchmarks must be public or included in your repository. Provide build/run instructions and identify expected ground truth for each bug class.
- Report quantitative metrics and explain how you derived them. If precise ground truth is unavailable, justify proxy metrics.
- When feasible, compare against a baseline (previous lab solution, open-source analyzer, or a simpler variant of your own tool).
- Include at least one ablation or sensitivity analysis that highlights the contribution of an advanced technique you implemented.

### Domain Tracks & Example Techniques

Use the following tracks as inspiration. You can combine tracks as long as you honor the expectations above.

#### Fuzzing and Dynamic Test Generation

- Techniques: RedQueen or Angora-style input-to-state correspondence, structure-aware mutation, grammar-based fuzzing, sanitizer-guided power schedules, guided dictionaries built from LLVM comparison tracing.
- Bug classes to target: buffer overflows, integer overflows in arithmetic libraries, format-string exploits, unchecked memory copy routines.
- Benchmarks: open-source parsers, compression utilities, or micro-benchmarks you craft following Lab 3 guidance.

#### Constraint-Based and Symbolic Execution

- Techniques: path prioritization with concolic execution, SMT-based refinement, counterexample-guided abstraction refinement, demand-driven symbolic queries.
- Bug classes to target: null-pointer dereference, command-injection vulnerabilities (taint to sink), incorrect authorization checks.
- Benchmarks: multi-function C programs from SV-COMP, Juliet test suite subsets, or your own modular programs mirroring Lab 2 infrastructure.

#### Abstract Interpretation and Dataflow Extensions

- Techniques: relational domains (intervals with narrowing/widening, octagons), interprocedural propagation, path-sensitive refinement, pointer-aware join strategies.
- Bug classes to target: integer overflow, division precision issues, unreachable-state pruning, invariants for termination.
- Benchmarks: reuse Lab 6/7 test harnesses, extend with loops, pointer-heavy kernels, or embedded control code.

#### Memory Safety and Pointer Analysis

- Techniques: flow-insensitive/flow-sensitive points-to analysis, escape analysis, heap abstraction, combined alias and numeric domains.
- Bug classes to target: use-after-free, double free, stale pointer dereference, heap buffer overflow.
- Benchmarks: allocator micro-benchmarks, subsets of SPEC or LLVM test-suite programs, or crafted pointer-intensive workloads.

#### Hybrid or Cross-Domain Projects

- Blend fuzzing with solver-based triage, or static invariants with dynamic sanitizers.
- Bug classes to target: race-condition detection using fuzzing plus happens-before analysis, hybrid data races on shared-memory benchmarks, multi-step exploits requiring both input crafting and static reasoning.
- Benchmarks: thread-sanitizer litmus tests, network protocol parsers, or student-designed workloads that expose the interplay between techniques.

If you pursue a track not listed above, consult your TA early to confirm that it meets the advanced-project requirement.
