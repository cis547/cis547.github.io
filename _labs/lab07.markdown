---
layout: lab
_id: "7"
title: "Pointer Analysis"
synopsis: Writing a “division-by-zero” static analysis for C programs as an LLVM pass that handles pointer aliasing and dynamically allocated memory.
---

### Objective 

The goal of this lab is to extend the static divide-by-zero sanitizer in Lab 6 to perform its analysis in the presence of pointers.
You will combine the dataflow analysis from the previous lab with a flow-insensitive pointer analysis, resulting in a more comprehensive overall static analysis.

### Setup

The skeleton code for Lab 7 is located under `/cis547vm/lab7/`.
We will frequently refer to the top level directory for Lab 7 as `lab7` when describing file locations.
This lab is built upon your work from Lab 6, so you can reuse the contents of `DivZeroAnalysis.cpp`.

#### Step 1.

The following commands set up the lab, using the CMake/Makefile pattern seen before.

```sh
/lab7$ mkdir build && cd  build
/lab7$ cmake ..
/lab7$ make
```

Among the files generated, you should now see `DivZeroPass.so` in the `lab7/build` directory, similar to the previous lab.
In this lab you will modify `DivZeroAnalysis.cpp`.
We are now ready to run our bare-bones lab on a sample input C program.

#### Step 2.

Before running the pass, the LLVM IR code must be generated.

The first line (`clang`) generates vanilla LLVM IR code from the input C program pointer0.c.

The last line (opt) runs the pass over the compiled LLVM assembly code.

In prior labs, we used an intermediate step with the argument `-mem2reg` which promoted every [AllocaInst][LLVM AllocaInst] to a register, allowing your analyzer to ignore handling pointers in this lab.
However, this is no longer needed because you will extend your previous code to handle pointers.

```sh
/lab7/test$ clang -emit-llvm -S -fno-discard-value-names -Xclang -disable-O0-optnone -c pointer0.c -o pointer0.opt.ll
/lab7/test$ opt -load ../build/DivZeroPass.so -DivZero pointer0.opt.ll
```

Upon successful completion of this lab, the output should be as follows:

```sh
Running DivZero on f
Potential Instructions by DivZero:
    %div = sdiv i32 1, %2
```

### Format of Input Programs

The input format of this lab is the same as that of Lab 6 except now you will handle pointers:

* You can ignore precisely handling values other than integers but your LLVM pass must not raise a segmentation fault when encountered with other kinds of values.
* You should handle assignments, arithmetic operations (+, -, *, /), comparison operations (<, <=, >, >=, ==, !=), and branches.
You do not have to handle XOR, OR, AND, and Shift operations precisely but your program must not raise a segmentation fault in these cases.
* Input programs can have if-statements and loops.
* User inputs are only introduced via the set of functions where the provided `isInput` function returns `True`.
You can ignore other call instructions to other functions.

### Lab Instructions

In this lab, you will extend your divide-by-zero analysis that you implemented in Lab 6 to analyze and catch potential divide-by-zero errors in the presence of aliased memory locations.

During lecture, you learned that introducing aliasing into a language makes reasoning about a program's behavior more difficult, and requires some form of pointer analysis.
You will perform **flow-insensitive pointer analysis** --- where we abstract away control flow and build a global **points-to graph** --- to help your sanitizer analyze more meaningful programs.

#### Part 1: Function Arguments/Call Instructions









[LLVM AllocaInst]: https://llvm.org/doxygen/classllvm_1_1AllocaInst.html