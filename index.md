---
layout: default
title: Home
nav_order: 1
description: "CIS 5470: Software Analysis - Fall 2025 at University of Pennsylvania"
permalink: /
---

# CIS 5470: Software Analysis
{: .text-center}

**Fall 2025 • University of Pennsylvania**
{: .text-center .text-muted}

---

## 📋 Course Information

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
<div markdown="1">

### Instructor
**Prof. Mayur Naik**  
📍 AGH 642  
🕐 Office Hours: TBA
📧 [mhnaik@seas.upenn.edu](mailto:mhnaik@seas.upenn.edu)

### Teaching Assistants
**Mayank Keoliya**  
📧 [mkeoliya@seas.upenn.edu](mailto:mkeoliya@seas.upenn.edu)

**Zain Aamer**  
📧 [zaamer@seas.upenn.edu](mailto:zaamer@seas.upenn.edu)

📍 TA Office: AGH 642  
🕐 TA Hours: By Appointment

</div>
<div markdown="1">

### Lectures
📅 **Monday & Wednesday**  
🕐 **1:45pm - 3:15pm**  
📍 **AGH 203**

### Quick Links
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
<a href="https://edstem.org/" class="btn" style="background: #7B1FA2; color: white;">Ed Discussion</a>
<a href="https://canvas.upenn.edu/courses/1869358" class="btn" style="background: #4A90E2; color: white;">Canvas</a>
<a href="https://www.gradescope.com/courses/943452" class="btn" style="background: #00C853; color: white;">Gradescope</a>
</div>

</div>
</div>

---

## 📅 Course Schedule

<br>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
thead {
  background: #011F5B;
  color: #333;
}
th {
  padding: 15px;
  text-align: left;
  font-weight: 600;
}
td {
  padding: 12px;
}
.week-cell {
  font-weight: bold;
}
.odd-week {
  background: #e3f2fd;
}
.break-week {
  background: #f5f5f5;
  font-style: italic;
}
.finals-week {
  background: #ffebee;
}
.lab-link {
  color: #1976d2;
  text-decoration: none;
}
.current-week {
  background-color: #c8e6c9 !important;
  font-weight: bold;
}
.current-week td {
  background-color: #c8e6c9 !important;
  color: #1a1a1a !important;
  border-top: 2px solid #4caf50;
  border-bottom: 2px solid #4caf50;
}
.current-week td:first-child {
  border-left: 2px solid #4caf50;
}
.current-week td:last-child {
  border-right: 2px solid #4caf50;
}
.current-week .lab-link {
  color: #1565c0 !important;
  font-weight: 600;
  text-decoration: underline;
}
.current-week .lab-link:hover {
  color: #0d47a1 !important;
}
</style>

<script src="/assets/js/week-highlighter.js"></script>

<table>
<thead>
<tr>
<th>Week</th>
<th>Dates</th>
<th>Topic</th>
<th>Lab</th>
<th>Due</th>
</tr>
</thead>
<tbody>
<tr class="odd-week">
<td class="week-cell">1</td>
<td>27</td>
<td>Introduction to Software Analysis</td>
<td><a href="/labs/lab1" class="lab-link">Lab 1: Introduction to Software Analysis</a></td>
<td>-</td>
</tr>
<tr>
<td class="week-cell">2</td>
<td>Sep 1, 3</td>
<td>The LLVM Framework</td>
<td><a href="/labs/lab2" class="lab-link">Lab 2: The LLVM Framework</a></td>
<td>Lab 1</td>
</tr>
<tr>
<td class="week-cell">3</td>
<td>Sep 8, 10</td>
<td>Random Input Generation</td>
<td><a href="/labs/lab3" class="lab-link">Lab 3: Random Input Generation</a></td>
<td>Lab 2</td>
</tr>
<tr>
<td class="week-cell">4</td>
<td>Sep 15, 17</td>
<td>Automated Test Generation</td>
<td><a href="/labs/lab4" class="lab-link">Lab 4: Delta Debugging</a></td>
<td>Lab 3</td>
</tr>
<tr>
<td class="week-cell">5</td>
<td>Sep 22, 24</td>
<td>Delta Debugging</td>
<td><a href="/labs/lab5" class="lab-link">Lab 5: Statistical Debugging</a></td>
<td>Lab 4</td>
</tr>
<tr>
<td class="week-cell">6</td>
<td>Sep 29, Oct 1</td>
<td>Statistical Debugging</td>
<td><a href="/labs/lab6" class="lab-link">Lab 6: Dataflow Analysis</a></td>
<td>Lab 5</td>
</tr>
<tr>
<td class="week-cell">7</td>
<td>Oct 6, 8</td>
<td>Dataflow Analysis I</td>
<td>-</td>
<td>Lab 6</td>
</tr>
<tr class="break-week">
<td class="week-cell">8</td>
<td>Oct 13, 15</td>
<td>Fall Break (Oct 9-12) / Dataflow Analysis II</td>
<td><a href="/labs/lab7" class="lab-link">Lab 7: Pointer Analysis</a></td>
<td>-</td>
</tr>
<tr>
<td class="week-cell">9</td>
<td>Oct 20, 22</td>
<td>Pointer Analysis</td>
<td><a href="/labs/lab8" class="lab-link">Lab 8: Constraint-Based Analysis</a></td>
<td>Lab 7</td>
</tr>
<tr>
<td class="week-cell">10</td>
<td>Oct 27, 29</td>
<td>Constraint-Based Analysis</td>
<td><a href="/labs/lab9" class="lab-link">Lab 9: Dynamic Symbolic Execution</a></td>
<td>Lab 8</td>
</tr>
<tr>
<td class="week-cell">11</td>
<td>Nov 3, 5</td>
<td>Type Inference</td>
<td>-</td>
<td>Lab 9</td>
</tr>
<tr>
<td class="week-cell">12</td>
<td>Nov 10, 12</td>
<td>Symbolic Execution</td>
<td>Group Project</td>
<td>-</td>
</tr>
<tr>
<td class="week-cell">13</td>
<td>Nov 17, 19</td>
<td>Advanced Topics</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="break-week">
<td class="week-cell">14</td>
<td>Nov 24</td>
<td>Thanksgiving Break (Nov 27-30)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td class="week-cell">15</td>
<td>Dec 1, 3</td>
<td>Course Review & Project Presentations</td>
<td>-</td>
<td>Group Project</td>
</tr>
<tr>
<td class="week-cell">16</td>
<td>Dec 8</td>
<td>Last Day of Classes</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="finals-week">
<td class="week-cell">Finals</td>
<td><strong>Dec 11-18</strong></td>
<td><strong>Final Exam Period</strong></td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

---

## 📚 Course Description

Your 500-line vibe-coded class project works perfectly. Google's 100+ million line codebase? That's a different universe.

At scale, software is complex, buggy, and insecure. Enter **software analysis**: a suite of techniques to automatically analyze code, uncover bugs, and ensure reliability. And this has real-world impact: when Google deploys to billions of devices, a *single* divide-by-zero error can drain millions of batteries worldwide -- or worse, [crash a warship](https://web.archive.org/web/20221230163646/https://www.wired.com/1998/07/sunk-by-windows-nt/) or [rocket's](https://www-users.cse.umn.edu/~arnold/disasters/ariane5rep.html) propulsion system. Software analys tools are live: [Meta's Infer has prevented thousands of crashes](https://engineering.fb.com/2021/10/20/security/static-analysis-award/) has prevented thousands of crashes, while [Google's Tricoder fixes 5000+ bugs daily](https://cacm.acm.org/research/lessons-from-building-static-analysis-tools-at-google/), to name a few.

This course provides a **rigorous and hands-on introduction** to the field of software analysis — a body of powerful techniques and tools for analyzing modern software, with applications to:

- 🐛 Systematically uncover insidious bugs
- 🔒 Prevent security vulnerabilities  
- ⚙️ Automate testing and debugging
- ✅ Improve confidence in software behavior, even _mathematically_

⚠️ **New:** Starting this semester, we'll also address the trillion-parameter elephant in the room: Large Language Models (LLMs). With LLMs writing more vibe-code than ever, it's important to devise _automatic_ ways of ensuring code doesn't blow up in production. We'll explore how LLMs can assist in software analysis tasks and their limitations. Our team is re-working the labs as we go, so bear with us!

---
### Topics Covered

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
<div markdown="1">

**Dynamic Analysis**
- Random testing & fuzzing
- Delta debugging
- Statistical debugging
- Runtime monitoring

</div>
<div markdown="1">

**Static Analysis**
- Dataflow analysis
- Pointer analysis
- Type systems
- Constraint-based analysis

</div>
</div>

All topics include **hands-on implementation** using the [**LLVM compiler infrastructure**](https://llvm.org/). LLVM, created by [Chris Lattner](https://nondot.org/sabre/) during his [UIUC PhD](https://llvm.org/pubs/2005-05-04-LattnerPHDThesis-book.pdf), powers modern compiler technology. His work led to [Clang](https://clang.llvm.org/), caught Apple's attention, and enabled Swift's development. Today LLVM underlies Apple's toolchain, Google's optimizations, and Meta's production tools—making it ideal for understanding real-world analysis.

---

## 🎯 Learning Objectives

Upon completion of this course, you will be able to:

✓ **Understand** fundamental methods for analyzing, testing, and verifying software  
✓ **Analyze** trade-offs between different techniques (scalability vs. precision)  
✓ **Implement** analysis algorithms using LLVM  
✓ **Apply** appropriate techniques to real-world problems  
✓ **Evaluate** the effectiveness of different approaches  

---

## 📋 Prerequisites

- **CIS 240/CIT 595**: Systems Programming (C/C++ required)
- **CIS 120/CIT 594**: Data Structures and Algorithms  
- **CIS 160/CIT 592**: Mathematical Foundations

⚠️ **Note:** Labs involve substantial C++ programming with LLVM

---

## 📊 Grading

| Component | Weight |
|:----------|:-------|
| **Labs** (9 total) | 54% |
| **Quizzes** | 3% |
| **Group Project** | 20% |
| **Final Exam** | 23% |

**Late Policy:** 6 late days total, then -10% per day

---

## 📖 Resources

### Textbooks
- **No required textbook** - All materials provided
- *Recommended:* [Static Program Analysis](https://cs.au.dk/~amoeller/spa/) (free online)
- *Reference:* Principles of Program Analysis (Nielson et al.)

### Links
- [Course GitHub](https://github.com/cis547vm)
- [LLVM Documentation](https://llvm.org/docs/)

---

## ⚖️ Academic Integrity

All submitted work must be your own. You may discuss concepts, but code must be written independently.

**AI Policy:** ChatGPT/Copilot allowed for understanding concepts only - no direct code generation. Must disclose usage.

Violations → Failing grade + referral to OSC