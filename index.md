---
layout: default
title: Home
nav_order: 1
description: "CIS 5470: Software Analysis - Fall 2025 at University of Pennsylvania"
permalink: /
---

# CIS 5470: Software Analysis
{: .text-center}

**Spring 2025 • University of Pennsylvania**
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

<table class="table" style="width: 100%;">
<thead style="background: #011F5B; color: white;">
<tr>
<th>Week</th>
<th>Date</th>
<th>Topic</th>
<th>Lab</th>
<th>Due</th>
</tr>
</thead>
<tbody>
<tr style="background: #e3f2fd;">
<td><strong>1</strong></td>
<td>Jan 14, 16</td>
<td><strong>Introduction to Software Analysis</strong></td>
<td><a href="/labs/lab01">Lab 1: LLVM Setup</a></td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Jan 21, 23</td>
<td>LLVM Framework & IR</td>
<td><a href="/labs/lab02">Lab 2: LLVM Passes</a></td>
<td>Lab 1</td>
</tr>
<tr>
<td>3</td>
<td>Jan 28, 30</td>
<td>Software Specifications</td>
<td><a href="/labs/lab03">Lab 3: Random Testing</a></td>
<td>Lab 2</td>
</tr>
<tr>
<td>4</td>
<td>Feb 4, 6</td>
<td>Random Testing & Fuzzing</td>
<td>-</td>
<td>Lab 3</td>
</tr>
<tr>
<td>5</td>
<td>Feb 11, 13</td>
<td>Delta Debugging</td>
<td><a href="/labs/lab04">Lab 4: Delta Debug</a></td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Feb 18, 20</td>
<td>Statistical Debugging</td>
<td><a href="/labs/lab05">Lab 5: Stats Debug</a></td>
<td>Lab 4</td>
</tr>
<tr style="background: #ffebee;">
<td>7</td>
<td>Feb 25, 27</td>
<td><strong>MIDTERM EXAM</strong></td>
<td>-</td>
<td>Lab 5</td>
</tr>
<tr style="background: #f5f5f5;">
<td>8</td>
<td>Mar 4, 6</td>
<td><em>Spring Break</em></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9</td>
<td>Mar 11, 13</td>
<td>Dataflow Analysis I</td>
<td><a href="/labs/lab06">Lab 6: Dataflow</a></td>
<td>-</td>
</tr>
<tr>
<td>10</td>
<td>Mar 18, 20</td>
<td>Dataflow Analysis II</td>
<td>-</td>
<td>Lab 6</td>
</tr>
<tr>
<td>11</td>
<td>Mar 25, 27</td>
<td>Pointer Analysis</td>
<td><a href="/labs/lab07">Lab 7: Pointers</a></td>
<td>-</td>
</tr>
<tr>
<td>12</td>
<td>Apr 1, 3</td>
<td>Constraint-Based Analysis</td>
<td><a href="/labs/lab08">Lab 8: Constraints</a></td>
<td>Lab 7</td>
</tr>
<tr>
<td>13</td>
<td>Apr 8, 10</td>
<td>Type Systems</td>
<td>-</td>
<td>Lab 8</td>
</tr>
<tr>
<td>14</td>
<td>Apr 15, 17</td>
<td>Symbolic Execution</td>
<td><a href="/labs/lab09">Lab 9: SymEx</a></td>
<td>-</td>
</tr>
<tr>
<td>15</td>
<td>Apr 22, 24</td>
<td>Advanced Topics & Review</td>
<td>-</td>
<td>Lab 9</td>
</tr>
<tr style="background: #ffebee;">
<td>16</td>
<td>May 1</td>
<td><strong>FINAL EXAM</strong></td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

---

## 📚 Course Description

This course provides a **rigorous and hands-on introduction** to the field of software analysis — a body of powerful techniques and tools for analyzing modern software, with applications to:

- 🐛 Systematically uncover insidious bugs
- 🔒 Prevent security vulnerabilities  
- ⚙️ Automate testing and debugging
- ✅ Improve confidence in software behavior

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

All topics include **hands-on implementation** using the **LLVM compiler infrastructure**.

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