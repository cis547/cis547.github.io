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
/cis547vm$ cd lab7
/cis547vm/lab7$ mkdir build && cd build
/cis547vm/lab7/build$ cmake ..
/cis547vm/lab7/build$ make
/cis547vm/lab7/build$ export LD_LIBRARY_PATH="/cis547vm/lab7/build/:$LD_LIBRARY_PATH"
```

You should now see `CBIInstrumentPass.so` and `cbi` in the current directory.
**The `export LD_LIBRARY_PATH` should be run on each terminal session you begin.**

The `cbi` tool performs statistical debugging for a program using a feedback profile (which you will generate) for successful and erroneous program runs.
To help generate program runs that pass or fail, you will use your `fuzzer`:

```sh
/cis547vm$ cd lab7/test
/cis547vm/lab7/test$ make
/cis547vm/lab7/test$ rm -rf fuzz_output && mkdir fuzz_ouput
/cis547vm/lab7/test$ timeout 1 ../build/fuzzer ./fuzz0 fuzz_input fuzz_output 10
/cis547vm/lab7/test$ ../build/cbi ./fuzz0 fuzz_output
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
`lab7/lib/runtime.c` contains functions that you will use in your lab:

- `void __cbi_branch__(int line, int col, int cond)`
   - Append predicate information as "`branch,line,col,cond`" to the running process cbi file.
- `void __cbi_return__(int line, int col, int rv)`
   - Append predicate information as "`return,line,col,rv`" to the running process cbi file.

Like you ddi in Lab 3, your LLVM pass shoudl instrument the code with these functions.
Your pass should instrument each conditional branch with code records whether the branch conditional is true or false on execution.
Likewise, instrument each integer-returning call instruction with code to record the return value.


