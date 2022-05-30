---
layout: lab
_id: "4"
title: "Delta Debugging"
synopsis: |
  Building a delta debugger for minimizing input that causes a program to crash.
---

### Objective
In this lab, you will build a delta debugger that implements an efficient algorithm for finding a 1-minimal input. You will combine this tool with your fuzzer from previous labs to minimize the random input that the fuzzer finds.

### Setup
The skeleton code for Lab 4 is located under `lab4/`. We will frequently refer to the top-level directory for Lab 4 as `lab4` when describing file locations for the lab. 
Open the `lab4` directory in VSCode following the Instructions from [Course VM document][course-vm-doc]

The following commands setup the lab:

```sh
/lab4
/lab4$ mkdir build && cd build
/lab4/build$ cmake ..
/lab4/build$ make
/lab4/build$ export
LD_LIBRARY_PATH=/lab4/build:$LD_LIBRARY_PATH
```

The last `export` command should be run once per terminal session, in order for the correct library path to be set. You should now see delta under `lab4/build/`.

The `delta` tool performs delta debugging to shrink a program input. To help generate program runs that pass and fail, you will use your `fuzzer`:

```sh
/lab4 cd test
/lab4/test$ make
/lab4/test$ rm -rf fuzz_output && mkdir fuzz_output
/lab4/test$ timeout 1 ../build/fuzzer ./fuzz0 fuzz_input
fuzz_output
/lab4/test$ ../build/delta ./fuzz0 fuzz_output/failure/input1
```

The last argument (`fuzz_output/failure/input1`) is subject to change depending on what files are available in the `fuzz_output/failure` directory. The reduced input is stored in `fuzz_output/failure/input1.delta`. Additionally, before running another invocation of `../build/delta`, make sure to clean up the `fuzz_output` directory. You can do this by running `rm -rf fuzz_output && mkdir fuzz_output`.

### Lab Instructions

You will need to edit the `lab4/src/Delta.cpp` file to build a delta debugging tool. We have provided a template function - `delta` - for you to implement your minimization logic. `delta` should take a `Target` input program, and an `Input` string that causes the Target program to crash, and find a 1-minimal input that still crashes the input program.

To perform delta debugging, you will have to repeatedly run the target input with various input strings. The skeleton code provides a couple of auxiliary functions in `lab4/include/Utils.h` to help you with this task:

   - std::string readOneFile(std::string &Path)
    - Open and read at `Path` and return the content as a single std::string
   - int runTarget(std::string &Target, std::string &Input)
    - Run the program (command) `Target`, and pipe `Input` into the running `Target` process. Will return the result of the 'Target' process.

Overall, you need to modify the 'delta' function to implement the 1-minimal minimization algorithm from class. You can break the lab down into subtasks:

   1. Implement the logic to partition the set of changes into delta subsets along with the nabla complement sets.
   2. Use the `runTarget` function to see which - if any - of the sets cause program failure.
   3. Repeat (1) and (2) until you have a 1-minimal input.

### Example Input and Output

Your delta debugger should run on any C code that accepts standard input. As we demonstrated in the Setup section, we will compile code to LLVM and instrument the code with the fuzzer pass.

```sh
/lab4 cd test
/lab4/test$ clang -emit-llvm -S -fno-discard-value-names -c fuzz1.c -g
/lab4/test$ opt -load ../build/InstrumentPass.so -Instrument -S fuzz1.11 -o fuzz1.instrumented.11
/lab4/test$ clang -o fuzz1 -L../build -lruntime fuzz1.instrumented.11
```

After, we will run the fuzzer to generate a set of passing and failing inputs. Your delta debugger should minimize any of the failing input cases.

```sh
/lab4/test$ rm -rf fuzz_output && mkdir fuzz_output
/lab4/test$ timeout 1 ../build/fuzzer ./fuzz2 fuzz_input fuzz_output
/lab4/test$ ../build/delta ./fuzz2 fuzz_output/failure/input1
```

The 1-minimal input should be stored at `fuzz_output/failure/input1.delta`.

As a specific example consider the string: "abckdanmvelcbaghcajbtkzxmntplwqsrakstuvbxyz", which causes `fuzz2` to fail:

```sh
/lab4/test$ echo -n "abckdanmvelcbaghcajbtkzxmntplwqsrakstuvbxyz" > tmp
/lab4/test$ ../build/delta ./fuzz2 tmp
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