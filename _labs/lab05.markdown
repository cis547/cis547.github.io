---
layout: lab
_id: "5"
title: "Statistical Debugging"
synopsis: |
    Building a statistical debugger for remote program monitoring and debugging.
---

### Objective

In this lab, you will implement cooperative bug isolation (CBI) to statistically localize error locations.
You need to implement an LLVM pass that instruments each branch and function call to report the values of their conditions and return values.
With the large number of inputs, you will obtain the data at runtime and measure different types of scores that help users find bugs.

### Setup

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

