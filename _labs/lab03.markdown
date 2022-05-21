---
layout: default
_id: "3"
title: "Lab 3: Random Input Generation"
---

### Synopsis

Building a coverage-guided random input generator a.k.a. “fuzzer” for testing C programs.

### Objective

In this lab, you will develop a _fuzzer_ for testing C programs.
Fuzzing is a popular software testing technique wherein the program under test
is fed randomly generated inputs. Such inputs help uncover a wide range of
security-critical and crashing bugs in programs.
For this purpose, your fuzzer will begin with seed inputs, and generate new
inputs by mutating previous inputs. It will use output from previous rounds
of test as _feedback_ to direct future test generation.
You will use the code coverage metrics you saw in Lab 2 to help select interesting
inputs for your fuzzer to mutate.

### Pre-Requisites

+ Watch the video lectures corresponding to the module on “Random Testing”.
The lectures introduce various terminology used throughout this lab
such as seed inputs, mutations, and feedback-directed testing.

### Setup

The code for Lab3 is located under `cis547vm/lab3`.
We will frequently refer to the top level directory for Lab 3 as `lab3`
when describing file locations for the lab.
Open the `lab3` directory in VSCode following the Instructions from [Course VM document][course-vm-doc]

This lab builds off the code coverage instrumentation from Lab 2.
You are provided with a `Instrument.cpp` file in `lab3/src`;
it contains two instrumentations, namely coverage and sanitize.
You have already seen code coverage in the previous lab and the implementation
here is identical to it.
In lab 1, you have seen that when a program encounters a divide-by-zero error it causes a Floating Point Exception and leads to a core dump.
The sanitizer instrumentation inserts a call to the `__sanitize__` function
before every division instruction.
This function gracefully exits the program with return code `1`
if the denominator is zero, otherwise the program continues running normally.

##### Step 1.

The fuzzer and the instrumentation is built using CMake and you can run the following commant to build both of them:

```sh
lab3$ mkdir build && cd build
lab3/build$ cmake ..
lab3/build$ make
```


[course-vm-doc]: https://cis.upenn.edu/~cis547/vm.doc