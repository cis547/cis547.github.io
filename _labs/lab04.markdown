---
layout: lab
_id: "4"
title: "Delta Debugging"
synopsis: |
  Building a delta debugger for minimizing inputs that cause a
  program to crash --- making it easier for the user to
  understand the bug.
---

### Objective

In this lab, you will build a delta debugger that implements
an efficient algorithm for finding a 1-minimal crashing input
given a large crashing input.
You will combine this tool with a fuzzer like the one you built
in `lab3` to minimize the crashing inputs found by the fuzzer.

### Setup

The code for Lab 4 is located under `cis547vm/lab4/`.
We will frequently refer to this directory `lab4`.
Open the `lab4` directory in VSCode following the Instructions from
[Course VM document][course-vm-doc].

This lab builds on top of the previous labs.
We have provided you with pre-compiled binaries for
the `runtime` library,
`InstrumentPass` for `coverage` and `sanitize`,
and a `fuzzer` executable; you can find them under `lab4/lib`.
Their implementations are identical to the implementations in `lab3`.


##### Step 1.

This lab uses python to implement delta debugger.
We do so by building a python package called `delta_debugger`.

To build and install the package, run:

```sh
/lab4$ make install
```

Unlike with `c++`, you *won't* need to re-run this command
after making changes to your code.
Further, you will be able to use your delta debugger using the
`delta_debugger` command from the terminal.

The `delta_debugger` tool performs delta debugging to shrink
a crashing input to a program.

##### Step 2.

To use `delta_debugger` with a program you first need to find some input
that will crash the program.
To find such an input we will use a fuzzer.

Just like `lab3`, to run the `fuzzer` you will first need to instrument
the program and setup appropriate output directories
where fuzzer will store its results.

```sh
/lab4/test$ make sanity1               # Instrument and build sanity1
/lab4/test$ mkdir fuzz_output_sanity1  # Create output directory
# Run the fuzzer on sanity1 with a timeout of 6 seconds.
/lab4/test$ timeout 6s fuzzer ./sanity1 fuzz_input fuzz_output_sanity1
```

You can also use the Makefile to instrument, build,
setup output directory and run the fuzzer for you:

```sh
/lab4/test$ make sanity1               # Instrument and build sanity1
/lab4/test$ make fuzz-sanity1          # Run the fuzzer on sanity1
```

##### Step 3.

Once you have run the fuzzer you will find inputs
that couse the program to crash under
`test/fuzz_output_sanity1/failure`.

```
fuzz_output_sanity1
├── success
├── randomSeed.txt
└── failure                            # Inputs that cause a crash.
    ├── input0
    ├── input1
    │    ...
    └── inputN
```

You can now use `delta_debugger` to minimize the crashing
inputs found by the fuzzer.

```
/lab4/test$ delta-debugger ./sanity1 fuzz_output_sanity1/failure/input1
```

The last argument (`fuzz_output/failure/input1`) is subject to change depending on what files are available in the `fuzz_output/failure` directory. The reduced input is stored in `fuzz_output/failure/input1.delta`. Additionally, before running another invocation of `delta_debugger`, make sure to clean up the `fuzz_output` directory. You can do this by running `rm -rf fuzz_output && mkdir fuzz_output`.

### Lab Instructions

You will need to edit the `lab4/src/delta.py` file to build a delta debugging tool. We have provided a template function - `delta` - for you to implement your minimization logic. `delta` should take a `Target` input program, and an `Input` bytestring that causes the Target program to crash, and find a 1-minimal input that still crashes the input program.

To perform delta debugging, you will have to repeatedly run the target input with various input strings. The skeleton code provides a couple of auxiliary functions in `lab4/include/Utils.h` to help you with this task:


   - int run_target(Target, Input)
    - Run the program (command) `Target`, and pipe `Input` into the running `Target` process. Will return the result of the 'Target' process.

Overall, you need to modify the `delta_debugger` function to implement the 1-minimal minimization algorithm from class. You can break the lab down into subtasks:

   1. Implement the logic to partition the set of changes into delta subsets along with the nabla complement sets.
   2. Use the `run_target` function to see which - if any - of the sets cause program failure.
   3. Repeat (1) and (2) until you have a 1-minimal input.

### Example Input and Output

Your delta debugger should run on any C code that accepts standard input. As we demonstrated in the Setup section, we will compile code to LLVM and instrument the code with the fuzzer pass.

```sh
/lab4$ cd test
/lab4/test$ clang -emit-llvm -S -fno-discard-value-names -c fuzz1.c -g
/lab4/test$ opt -load ../build/InstrumentPass.so -Instrument -S fuzz1.11 -o fuzz1.instrumented.11
/lab4/test$ clang -o fuzz1 -L../build -lruntime fuzz1.instrumented.11
```

After, we will run the fuzzer to generate a set of passing and failing inputs. Your delta debugger should minimize any of the failing input cases.

```sh
/lab4/test$ rm -rf fuzz_output && mkdir fuzz_output
/lab4/test$ timeout 1 ../build/fuzzer ./fuzz2 fuzz_input fuzz_output
/lab4/test$ delta_debugger ./fuzz2 fuzz_output/failure/input1
```

The 1-minimal input should be stored at `fuzz_output/failure/input1.delta`.

As a specific example consider the string: "abckdanmvelcbaghcajbtkzxmntplwqsrakstuvbxyz", which causes `fuzz2` to fail:

```sh
/lab4/test$ echo -n "abckdanmvelcbaghcajbtkzxmntplwqsrakstuvbxyz" > tmp
/lab4/test$ delta_debugger ./fuzz2 tmp
/lab4/test$ cat tmp.delta
abckdanmvel
```

### Items to Submit

Once you are done with the lab, you can create a `submission.zip` file by using the following command:

```sh
lab4$ make submit
...
submission.zip created successfully.
```
Then upload the `submission.zip` file to Gradescope.

[course-vm-doc]: https://cis.upenn.edu/~cis547/vm.doc