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
  * Assume that user inputs are only introduced via the `getchar` library function.
  The skeleton code provides an auxiliary function `isInput` that checks whether a given instruction is a function call to `getchar`.
  You can ignore other call instructions to other functions.  


### Lab Instructions
---
A full-fledged static analyzer has three components: 
  1. an abstract domain
  2. abstract transfer functions for individual instructions
  3. combining analysis results of individual instructions to obtain analysis results for entire functions or programs.
In this lab, we will focus only on implementing (part 2), and only for the limited subset of instructions as described above.
More concretely, your task is to implement how the analysis evaluates different LLVM IR instructions on abstract values from a provided abstract domain.

We have provided a framework to build your division-by-zero static analyzer. The framework is composed of files `Domain.cpp` and `DivZeroAnalysis.cpp` under `lab6/src/`.

##### **Part 1: Transfer Functions**


##### Step 1
  Refresh your understanding about program abstractions by reading the article on [A Menagerie of Program Abstractions][Menagerie Link]. 

  Once you have a good understanding of abstract domains, study the `Domain` class to understand the abstract domain that we have defined for you to use in this lab.
  The files `lab6/include/Domain.h` and `lab6/src/Domain.cpp` include the abstract values and operations on them.
  These operations will perform an abstract evaluation *without running the program*.
  As described in the article, we have defined abstract operators for addition, subtraction, multiplication and division.

##### Step 2
  Inspect `DivZeroAnalysis::runOnFunction` to understand how, at a high-level, the compiler pass performs the analysis:
  ```cpp
  bool DivZeroAnalysis::runOnFunction(Function &F) {
      outs() << "Running " << getAnalysisName() << " on " << F.getName() << "\n";
      for (inst_iterator I = inst_begin(F), E = inst_end(F); I != E; ++I) {
        InMap[&(*I)] = new Memory;
        OutMap[&(*I)] = new Memory;
      }
      PointerAnalysis *PA = new PointerAnalysis(F);
      doAnalysis(F, PA);
  
      collectErrorInsts(F);
      ...
  }
``` 
The procedure `runOnFunction` is called for each function in the input C program that the compiler encounters during a pass.
Each instruction `I` is used as the key to initialize a new `Memory` object in the global `InMap` and `OutMap` hash maps.
These maps are described in more detail in the next step, but for now you can think of them as storing hte abstract values of each variable before and after an instruction.
For example, the abstract state might store facts like "*at the point before instruction i, the variable x is positive*".
Since `InMap` and `OutMap` are global, feel free to use them directly in your code.  


Once the **In** and **Out** Maps are initialized, `runOnFunction` calls `doAnalysis`: a function that you will implement in Part 2 to perform the chaotic iteration algorithm.
For Part 1, you can assume that it simply calls `transfer` using the appropriate `InMap` and `OutMap` maps.

So, at a high level, `runOnFunction` will:
  1. Initialize the **In** and **Out** maps
  2. Fill them using a chaotic iteration algorithm
  3. Find potential divide by zero errors by using the `InMap` entries for each divide instruction to check whether the divisor may be zero  

##### Step 3

Understand the memory abstraction in the provided framework. 
For each `Instruction`, `DivZeroAnalysis::InMap` and `DivZeroAnalysis::OutMap` store the *abstract state* before and after the instruction, respectively. 
An abstract state is a mapping from LLVM variables to abstract values; in particular, we have defined `Memory` as a `std::map<std::string, Domain *>`. 
Since we refer to variables as `std::string`, we have provided an auxiliary function named `variable` that encodes an LLVM `Value` into our internal string representation for variables.
Note that an `Instruction` is also a `Value`. 
For example, consider the following LLVM program. 
We have shown the abstract state, denoted **M**, before and after each instruction:

|  ID  | Instruction                    |  Before Instruction    |  After Instruction    |
| :--: | :----------------------------- | :--------------------- | :-------------------- |
| I1   | %x = call i32 (...) @input()   | {}                     | {%x: T}               |
| I2   | %y = add i32 %x, 1             | {%x: T}                | {%x: T, %y: %x + 1}   |





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
[Menagerie Link]: https://drive.google.com/open?id=1uhCWzfBxsaBQQ6NyMTY64Y6x_qRR1YQwiTpWT0_N2Xc
