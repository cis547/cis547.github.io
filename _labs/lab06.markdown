---
layout: lab
_id: "6"
title: "Dataflow Analysis"
synopsis: Building a "division-by-zero" static analysis for a subset of the C language that includes branches and loops.
---

### Objective 
---
In this lab, you will build a static analyzer that detects potential divide-by-zero erros in C programs at compile-time.
You will accomplish this by writing an LLVM pass.
Since developing a static analyzer for a full-fledged language like C is a non-trivial endeavor, this lab will be split up into two parts. 

### Setup
---
The skeleton code for Lab4 is located under `/cis547vm/lab6/`.
We will frequently refer to the top level directory for Lab 6 as `lab6` when describing file locations for the lab.

**Step 1.** Set up the lab by using the [Cmake][Cmake ref]/[Makefile][Make ref] pattern seen before.

```sh
/lab6$ mkdir build && cd build
/lab6/build$ cmake -DUSE_REFERENCE=ON ..
/lab6/build$ make
```

Among the files genereated, you should now see `DivZeroPass.so` in the `lab6/build` directory.
`DivZeroPass.so` is built from `lab6/src/DivZeroAnalysis.cpp` which you will modify shortly.
We are now ready to run our bare-bones lab on a sample input C program.
One thing to note is the use of the `-DUSE_REFERENCE=ON` flag: this lab comprises two parts and this flag will allow you to focus on the features needed for Part 1 independently of Part 2.  

**Step 2.** Before running the pass, the LLVM IR code must be generated:

```sh
/lab6/test$ clang -emit-llvm -S -fno-discard-value-names -Xclang -disable-O0-optnone -c simple1.c
/lab6/test$ opt -mem2reg -S simple1.ll -o simple1.opt.ll
```

The first line (`clang`) generates vanilla LLVM IR code from the input C program `simple1.c`.
the last line (`opt`) optimizes the vanilla code and generates an equivalent LLVM IR program that is simpler to process for the analyzer you will build in this lab; in particular, `-mem2reg` promotes every [AllocaInst][LLVM AllocaInst] to a register, allowing your analyzer to ignore handling pointers in this lab. 
You will extend this lab to handle pointers in Lab 7.

**Step 3.** Similar to former labs, you will implement your analyzer as an LLVM pass, calld `DivZeroPass`.
User the `opt` command to run this pass on the optimized LLVM IR program as follows:

```sh
/lab6/test$ opt -load ../build/DivZeroPass.so -DivZero -disable-output simple1.opt.ll
```
Upon successful completion of this lab, the output should be as follows:

```sh
Running DivZero on main
Potential Instructions by DivZero:
  %div1 = sdiv i32 %div, %div
```

### Format of Input Programs
---
Input programs in this lab are assumed to have only sub-features of the C language as follows:
  * All values are integers (i.e. no floating points, pointers, structures, enums, arrays, etc).
    You can ignore other types of values.
  * You should handle assignments, signed and unsigned arithmetic operations (+, -, *. /), and comparison operations (<, <=, >, >=, ==, !=).
  All the other instructions are considered to be nop.
  * Input programs can have if-statements and loops.
  

### Lab Instructions
---

### Submission
---

Once you are done with the lab, you can create a `submission.zip` file by using the following command:
```sh
lab6$ make submit
...
submission.zip created successfully.
```

Then upload the submission file to Gradescope.


[LLVM template functions]: http://releases.llvm.org/8.0.0/docs/ProgrammersManual.html#the-isa-cast-and-dyn-cast-templates
[LLVM CmpInst]: https://llvm.org/doxygen/classllvm_1_1CmpInst.html
[LLVM CastInst]: https://llvm.org/doxygen/classllvm_1_1CastInst.html
[LLVM BinOps]: https://llvm.org/doxygen/classllvm_1_1BinaryOperator.html
[LLVM Instruction class]: http://releases.llvm.org/8.0.0/docs/ProgrammersManual.html#the-instruction-class
[LLVM AllocaInst]: https://llvm.org/doxygen/classllvm_1_1AllocaInst.html
[CMake Ref]: https://en.wikipedia.org/wiki/CMake
[Make Ref]: https://www.gnu.org/software/make/manual/html_node/Simple-Makefile.html#Simple-Makefile
[Menagerie of Program Abstraction]: https://drive.google.com/open?id=1uhCWzfBxsaBQQ6NyMTY64Y6x_qRR1YQwiTpWT0_N2Xc
