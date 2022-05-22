---
layout: lab
_id: "3"
title: "Random Input Generation"
synopsis: |
  Building a coverage-guided random input generator a.k.a. “fuzzer” for testing C programs.
---

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

After runnning `make`, you should notice `InstrumentPass.so` and `fuzzer`
in `lab3/build`.
The `fuzzer` is the tool that will feed randomized input (that you will generate)
to a compiled C program that was instrumented to exit gracefully
when it hits a Divide-by-Zero error and report code coverage during execution.

##### Step 2.

Next, we want to prepare a test program to fuzz with the `fuzzer`.
This will be done by first instrumenting the program, similar to Lab 2.
So to instrument and build the program `sanity1.c` you would run:

```sh
lab3/test$ clang -emit-llvm -S -fno-discard-value-names -c -o sanity1.ll sanity1.c -g
lab3/test$ opt -load ../build/InstrumentPass.so -Instrument -S sanity1.ll -o sanity1.instrumented.ll
lab3/test$ clang -o sanity1 -L${PWD}/../build -lruntime -lm sanity1.instrumented.ll
```

Alternatively you can use tthe provided `Makefile` to do the same with:

```sh
lab3/test$ make sanity1  # To instrument an build just sanity1.
lab3/test$ make all      # To instrument and build everything.
```

##### Step 3.

Now to run the the `fuzzer` you will need to create the output directory
where fuzzer will store its results.

```sh
lab3/test$ mkdir fuzz_output_sanity1
```

You may recall from lab 1, that AFL could generate new inputs forever and never
stop running. This is also the case for your fuzzer.
So for this we will use `timeout` to stop the fuzzer after a specified time.

After this you can run your fuzzer on sanity for 1 second with:

```sh
lab3/test$ timeout 1s ../build/fuzzer ./sanity1 fuzz_input fuzz_output_sanity1
```

**Note:** the `./` before `sanity1` is required to let the fuzzer find the executable.

You can also use the Makefile to setup output directory and run the fuzzer for you:

```sh
lab3/test$ make fuzz-sanity1
```

This will run the `fuzzer` on `sanity1` for ten seconds and store the results to
`lab3/test/fuzz_output_sanity1`
Additionally, it will use the `lab3/config.txt` to set the `seed` which
used to generate random numbers and `freq`, which determines how often we write a
non-crashing input to output (larger is less frequent).
Since we expect to see many more non-crashing input `freq` is used to control how often
we log a non-crashing input.

Once you have run the `fuzzer` you should expect to see `failure` directory
to get populated with several randomly generated inputs that crash `sanity1.c`.
You may also see some of the randomly generated inputs that don't
cause a crash under the `success` directory.

```
fuzz_output_sanity1
├── success         # Some of the generated inputs that didn't cause a crash.
│   ├── input0
│   └──  ...
├── randomSeed.txt  # The seed that was used to generate random numbers.
└── failure         # All the generated inputs that cause a crash.
    ├── input0
    ├── input1
    │    ...
    └── inputN
```

Here `N` is the last case that caused a crash before the timeout.

### Lab Instructions

A full-fledged fuzzer consists of three key features:

1. test case generation matching the grammar of the program input,
2. strategies to mutate test inputs to increase code coverage,
3. a feedback mechanism to help drive the types of mutations used.

##### Mutation-Fuzzing Primer

Consider the following code that reads some string input from the command line:

```c
int main() {
  char input[65536];
  fgets(input, sizeof(input), stdin);
  int x = 13;
  int z = 21;

  if (strlen(input) % 13 == 0) {
    z = x / 0;
  }

  if (strlen(input) > 100 && input[25] == 'a') {
    z = x / 0;
  }

  return 0;
}
```

We have two very obvious cases that cause divide-by-zero errors in the program:

+ If the length of the program input is divisible by 13, or
+ if the length of the input is greater than 100 and the 25th character in the string is an `a`.

Now, let’s imagine that this program is a black box, and
we can only search for errors by running the code with different inputs.

We would likely try a random string, say `"abcdef"`, which would give us a successful run.
From there, we could take our first string as a starting point and
add some new characters,`"ghi"`, giving us `"abcdefghi"`.
Here we have mutated our original input string to generate a new test case.
We might repeat this process, finally stumbling on “abcdefghijklm”
which is divisible by 13 and causes the program to crash.

How about the second case?
We could keep inserting characters onto the end of our string,
which would eventually get us some large string that satisfies
the first condition of the if statement (input length greater than 100),
but we need to perform an additional type of mutation ---
randomly changing characters in the string ---
to eventually satisfy the second condition in the if statement.

Through the use of various mutations on an input string, we were able to
exhaust all program execution paths,
i.e., more varied mutations in the input increased our code coverage.
In its simplest form, this is exactly what a fuzzer does.
You may take a look at the [Mutation-Based Fuzzing][fuzzing-book-mutaion] chapter in the Fuzzing Book.


[course-vm-doc]: https://cis.upenn.edu/~cis547/vm.doc
[fuzzing-book-mutaion]: https://fuzzingbook.org/html/MutationFuzzer.html