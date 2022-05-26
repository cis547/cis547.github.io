---
layout: lab
_id: "5"
title: "Statistical Debugging"
synopsis: |
    Building a statistical debugger for remote program monitoring and debugging.
---

### Objective  

---

In this lab, you will implement cooperative bug isolation (CBI) to statistically localize error locations.
You need to implement an LLVM pass that instruments each branch and function call to report the values of their conditions and return values.
With the large number of inputs, you will obtain the data at runtime and measure different types of scores that help users find bugs.

### Setup

---

The skeleton code for Lab 5 is located under `/cis547vm/lab5/`.
We will frequently refer to the top level directory for Lab 5 as `lab5` when describing file locations for the lab.

The following commands setup the lab:

```sh
/cis547vm$ cd lab5
/cis547vm/lab5$ mkdir build && cd build
/cis547vm/lab5/build$ cmake ..
/cis547vm/lab5/build$ make
/cis547vm/lab5/build$ export LD_LIBRARY_PATH="/cis547vm/lab5/build/:$LD_LIBRARY_PATH"
```

You should now see `CBIInstrumentPass.so` and `cbi` in the current directory.
**The `export LD_LIBRARY_PATH` should be run on each terminal session you begin.**

The `cbi` tool performs statistical debugging for a program using a feedback profile (which you will generate) for successful and erroneous program runs.
To help generate program runs that pass or fail, you will use your `fuzzer`:

```sh
/cis547vm$ cd lab5/test
/cis547vm/lab5/test$ make
/cis547vm/lab5/test$ rm -rf fuzz_output && mkdir fuzz_ouput
/cis547vm/lab5/test$ timeout 1 ../build/fuzzer ./fuzz0 fuzz_input fuzz_output 10
/cis547vm/lab5/test$ ../build/cbi ./fuzz0 fuzz_output
```
The last argument (10) on the `../build/fuzzer` invocation controls the frequency at which successful runs are written out in the `fuzz_output/success` directory.
Additionally, before running another invocation of `../build/cbi`, make sure to clean up the `fuzz_output` directory.
You can do this by running `rm -rf fuzz_output && mkdir fuzz_output`.

You should see the sample output as follows:

```sh
Generating log files...
== S(P) ==
== F(P) ==
== Failure(P) ==
== Context(P) ==
== Increase(P) ==
```

### Lab Instructions

---

In this lab, you will need to edit the `lab5/src/CBIInstrument.cpp` file to implement the cooperative bug isolation which will instrument branches and return instructions with code to extract and monitor predicates.
`lab5/lib/runtime.c` contains functions that you will use in your lab:

- `void __cbi_branch__(int line, int col, int cond)`
   - Append predicate information as "`branch,line,col,cond`" to the running process cbi file.
- `void __cbi_return__(int line, int col, int rv)`
   - Append predicate information as "`return,line,col,rv`" to the running process cbi file.

Like you did in Lab 3, your LLVM pass should instrument the code with these functions.
Your pass should instrument each conditional branch with code records whether the branch conditional is true or false on execution.
Likewise, instrument each integer-returning call instruction with code to record the return value.
This will create a *feedback profile* for you to perform statistical debugging and generate a *feedback report*.  

In short, the lab consists of the following tasks:
   1. Implement the `instrumentCBIBranches` function to insert a `__cbi_branch__` call for a predicate (conditional).
   2. Modify `runOnFunction` to instrument all branching instructions with the predicate recording logic.
   3. Implement the `instrumentCBIReturns` function to insert a `__cbi_return__` call for a return value.
   4. Modify `runOnFunction` to instrument all integer return instructions with the return recording logic. 
   5. Using the feedback profile you construct in 1-4, modify `generateReport` to implement statistical debugging.
   You should compute `F(P), S(P), Failure(P), Context(P)`, and `Increase(P)` which should be stored in the corresponding data structures in `include/Utils.h`.

**_Revisiting Instrumentation._** By now you should feel comfortable working with the LLVM compiler infrastructure, but for a refresher, consult Lab 3 and see the paragraphs titled "Inserting Instruction into LLVM Code" and "Loading C functions into LLVM".

**_CBI File Infrastructure._** the `cbi` executable will execute the input program on each of the trace `input` files from a `fuzzer` output directory.
This includes both successful program runs (`fuzz_output/sucess`) and erroneous program runs (`fuzz_output/failure`).
Each run will generate an analogous feedback profile for each input file.
The resulting directory tree will look like this:
```
   -  fuzz_output/
      -  success/
         -  input1
         -  input1.cbi
         -  input2
         -  input2.cbi
         -  ...
      -  failure/
         -  input1
         -  input1.cbi
         - ...
```
You will use these `.cbi` files to generate the feedback report.

**_Generating the feedback report._** During the lesson, you saw how we use several metrics to help determine which predicates correlate with bugs.
 One such metric, `Failure(P)`, calculates how often predicate P is true in a failing run.
 Another metric, `Context(P)`, calculates the background chance of failure when predicate P is observed.
 Finally, `Increase(P)` calculates the likelihood that P influences the success or failure of the program.  

 We have defined maps `F`, `S`, `Failure`, `Context`, and `Increase` in `lab5/include/Utils.h` that you should populate in `generateReport` located in `lab5/src/CBI.cpp`.
 Notice each is a mapping from `std::tuple<int, int, State>` to `double`.
 Here, the tuple represents a predicate, which consists of a line, column, and a State data type that encodes the possible predicates a branch or return has.  

Note that your instrumentation will record where a branch or return occurs and its result, but you need to encode that into a predicate.
For example, if we encounter `if (p == 10) { ... }` in the code, we need to store two predicates, (p == 10), and (p != 10), which you would represent as `State::BranchTrue` and `State::BranchFalse`.  

The skeleton code will go through and print out your maps via `printReport`.  


### Example Input and Output

---

Your statistical debugger should run on any C code that compiles to LLVM IR.
As we demonstrated in the Setup section, we will compile code to LLVM and instrument the code with the fuzzer and cbi passes.

```sh
/cis547vm$ cd lab5/test
/cis547vm/lab5/test$ clang -emit-llvm -S -fno-discard-value-names -c fuzz1.c -g
/cis547vm/lab5/test$ opt -load ../build/InstrumentPass.so -Instrument -S fuzz1.ll -o fuzz1.instruented.ll
/cis547vm/lab5/test$ opt -load ../build/CBIInstrumentPass.so -CBIInstrument -S fuzz1.instrumented.ll -o fuzz1.cbi.instrumented.ll
/cis547vm/lab5/test$ clang -o fuzz1 -L../build -lruntime fuzz1.cbi.instrumented.ll
```
After, we will run the fuzzer to generate a set of passing and failing inputs for use with the cbi tool.

```sh
/cis547vm/lab5/test$ rm -rf fuzz_output && mkdir fuzz_output
/cis547vm/lab5/test$ timeout 1 ../build/fuzzer ./fuzz1 fuzz_input fuzz_output 10
/cis547vm/lab5/test$ ../build/cbi ./fuzz1 fuzz_output
```

You should expect to generate output similar to the following:

```sh
== S(P) ==
Line 10, Col 7, BranchTrue: 0
Line 10, Col 7, BranchFalse: 4
Line 14, Col 7, BranchTrue: 2
Line 14, Col 7, BranchFalse: 2
== F(P) ==
Line 10, Col 7, BranchTrue: 1
Line 10, Col 7, BranchFalse: 0
Line 14, Col 7, BranchTrue: 0
Line 14, Col 7, BranchFalse: 0
== Failure(P) ==
Line 10, Col 7, BranchTrue: 1
Line 10, Col 7, BranchFalse: 0
Line 14, Col 7, BranchTrue: 0
Line 14, Col 7, BranchFalse: 0
== Context(P) ==
Line 10, Col 7, BranchTrue: 0.2
Line 10, Col 7, BranchFalse: 0.2
Line 14, Col 7, BranchTrue: 0
Line 14, Col 7, BranchFalse: 0
== Increase(P) ==
Line 10, Col 7, BranchTrue: 0.8 
Line 10, Col 7, BranchFalse: -0.2 
Line 14, Col 7, BranchTrue: 0 
Line 14, Col 7, BranchFalse: 0
```


### Items to Submit

---

Submit files `CBIInstrument.cpp` and `CBI.cpp`.


[lab2 instructions]: /labs/lab02.html



