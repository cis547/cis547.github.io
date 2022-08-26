---
layout: lab
_id: "2"
title: "The LLVM Framework"
synopsis: |
  "Building an understanding of the LLVM framework: IR, API, and the toolchain."


---

### Objective

The objective of this lab is three-fold:
+ Understanding a representation of C programs called [LLVM IR][llvm-lang-ref] that we will use in our labs.
It is the intermediate representation used by [LLVM][llvm.org], a popular compiler framework for a variety of programming languages.
+ Understanding the [LLVM API][llvm-api] by using it to write a [LLVM pass][llvm-pass] and running it to statically find all the binary operators in a program and instrument them.
+ Understanding the differences between static and dynamic properties of a program, by executing instrumented code.


### Pre-Requisites

+ Watch the video lectures corresponding to the module on “The LLVM Framework”. 
The lectures introduce the LLVM framework and the toolchain which will be used throughout
the entire course.
+ Read the [LLVM Primer][llvm-primer]: Part I (Overview of LLVM) and Part II (Structure of LLVM IR).
This is required for the first part of this lab as well as throughout the rest of the course to be able to read LLVM IR for debugging purposes.
+ Keep [LLVM Primer][llvm-primer]: Part III (The LLVM API) at hand as a quick reference for most of the LLVM API in this lab and also throughout the course.

### Setup

+ Navigate to the `lab2` folder on your computer and open it in VS code.
+ Press F1 key to display a search bar, search and select `Reopen in Container`.
+ This will set up the development environment for this lab in VS Code.
+ Inside the development environment the skeleton code for Lab 2 will be located under `/lab2`.
+ Afterwards, if VS Code prompts you to select a kit for the lab then pick Clang 8.

### Part 1: Understanding the LLVM IR

##### Step 1

Study the [LLVM Primer][llvm-primer] to understand the structure of the LLVM IR.
The primer shows how to run LLVM on a sample C program to generate the corresponding LLVM IR program.
You can use the C programs under `/lab2/test` directory to try it out:
```sh
/lab2$ cd test
/lab2/test$ clang -emit-llvm -S -fno-discard-value-names -c simple0.c
```
`clang` is a compiler front-end for C that uses LLVM as a back-end.
The user manual of clang has a useful reference to its [command-line options][clang-cli-opts]. Briefly, 
+ `-S` instructs clang to perform preprocessing and compilation steps only
+ `-emit-llvm` instructs the compiler to generate LLVM IR (which will be saved to simple0.ll)
+ `-fno-discard-value-names` preserves names of values in the generated LLVM for improving readability.


##### Step 2

Write by hand the C programs corresponding to the LLVM IR programs under the `/lab2/ir_programs` directory by filling in the provided template code in the `/lab2/c_programs` directory.
Ensure that running the above command on your hand-written C programs generates the exact LLVM IR programs provided as we will auto-grade them.
You can do so by using the diff command-line utility to check if your files are the same.

```sh
/lab2$ cd c_programs
/lab2/c_programs$ clang -emit-llvm -S -fno-discard-value-names -c test1.c
/lab2/c_programs$ diff test1.ll ../ir_programs/test1.ll
```

Alternatively you can let the provided Makefile automatically do this for you:

```sh
/lab2/c_programs$ make test1
```

### Part 2: Understanding the LLVM API

##### Step 1

In this and future labs, we will use `CMake`, a modern tool for managing the build process.
If you are unfamiliar with `CMake`, you are strongly advised to read the [CMake tutorial][cmake-tutorial] first (especially Step 1 and Step 2 in the tutorial).
Running `cmake` produces a Makefile that you might be more familiar with.
If not, read the [Makefile tutorial][makefile-tutorial] before proceeding.
*Once a Makefile is generated, you need only call `make` to rebuild your project after editing the source files.*
Run the following commands to set up this part of the lab:

```sh
/lab2$ mkdir -p build && cd build
/lab2/build$ cmake ..
/lab2/build$ make
```

You should see several files created in the `lab2/build` directory. Among other files, this builds two LLVM pass named `DynamicAnalysisPass.so` and `StaticAnalysisPass.so` from code that we have provided in `lab2/src/DynamicAnalysisPass.cpp` and `lab2/src/StaticAnalysisPass.cpp` (you will modify both these files in this lab), and a runtime library, named `libruntime.so` that provides some functions that are used in the lab.
The remaining steps follow the depicted workflow from left to right:



### Submission

Once you are done with the lab, you can create a `submission.zip` file by using the following command:

```sh
lab2$ make submit
...
submission.zip created successfully.
```
Then upload the `submission.zip` file to Gradescope.


[course-vm-doc]: https://cis.upenn.edu/~cis547/vm.doc
[llvm-primer]: https://cis.upenn.edu/~cis547/primer.doc
[llvm-lang-ref]: https://llvm.org/docs/LangRef.html
[llvm-api]: https://releases.llvm.org/8.0.1/docs/index.html
[llvm-pass]: https://llvm.org/docs/WritingAnLLVMPass.html
[llvm.org]: https://llvm.org/
[clang-clie-opts]: https://releases.llvm.org/8.0.0/tools/clang/docs/UsersManual.html#command-line-options
[cmake-tutorial]: https://cmake.org/cmake/help/latest/guide/tutorial/index.html
[makefile-tutorial]: https://www.gnu.org/software/make/manual/html_node/Simple-Makefile.html#Simple-Makefile

