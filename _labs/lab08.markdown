---
layout: lab
_id: "8"
title: "Constraint-Based Analysis"
synopsis: Writing a constraint-based static analysis for C programs with LLVM and Z3.
---

### Objective 

In this lab, you will implement a constraint-based analysis to detect exploitable divide-by-zero bugs.
A bug is exploitable if hackers can control inputs or environments, thereby triggering unintended behaviors (e.g., denial-of-service) through the bug.
For example, [a recently reported divide-by-zero bug][bug] in the Linux kernel can be exploitable and crash the system.
You will design a static analysis that detects such bugs by combining reaching definition analysis and taint analysis on top of a constraint solver, Z3.

### Setup

The skeleton code for Lab8 is located under `/cis547vm/lab8/`.
We will frequently refer to the top level directory for Lab 8 as `lab8` when describing file locations for the lab. Open the `lab8` directory in VSCode following the Instructions from [Course VM document][course-vm-doc]

The following commands set up the lab, using the [Cmake][Cmake ref]/[Makefile][Make ref] pattern seen before.

```sh
/lab8$ mkdir build && cd build
/lab8/build$ cmake ..
/lab8/build$ make
```

The above command will generate an executable file 'constraint' that checks whether the input program has an exploitable divide-by-zero bug:

```sh
/lab8$ cd ./test
/lab8/test$ clang -emit-llvm -S -fno-discard-value-names -c simple0.c
/lab8/test$ ../build/constraint simple0.ll
```

If you’ve done everything correctly up to this point you should see 'Potential divide-by-zero points:'. 

### Lab Instructions

In this lab, you will design a reaching definition analysis and taint analysis using [Z3][Z3Guide].
The main tasks are to design the analysis in the form of Datalog rules through the [Z3 C++ API][Z3C++API], and implement a function that extracts logical constraints in the form of Datalog facts for each LLVM instruction.

We will then feed these constraints, along with your Datalog rules, into the Z3 solver which should report any *exploitable* divide-by-zero errors.
The `main` function of `src/Constraint.cpp` ties this logic together.

In short, the lab consists of the following tasks:

1.) Write Datalog rules in the initialize function in `Extractor.cpp` to define the reaching definition analysis and taint analysis.
2.) Write the `extractContraints` function in `Extractor.cpp` that extracts Datalog facts from LLVM IR `Instruction`.

**Relations for Datalog Analysis**. The skeleton code provides the definitions of necessary Datalog relations over LLVM IR in `Extractor.h`.
In the following subsection, we will show how to represent LLVM IR programs using these relations.

The relations for def and use of variables are as follows:

- `Def(Var, Inst)`: Variable Var is defined at instruction Inst.
- `Use(Var, Inst)`: Variable Var is used at instruction Inst.

The relations for the reaching definition analysis are as follows: 

- `Kill(CurrInst, OldInst)`: Instruction Var kills definition at instruction Loc.
- `Next(CurrInst, NextInst)`: Instruction Loc is an immediate successor of instruction Var.
- `In(Inst, DefInst)`: Definition at defining instruction DefInst may reach the program point just before instruction Inst.
- `Out(Inst, DefInst)`: Definition at defining instruction DefInst may reach the program point just after instruction Inst.

Note that the `Kill` relation can be derived by using the `Def` relation by writing a Datalog rule.

The relations for the taint analysis are as follows: 

- `Taint(Inst)` : There exists a function call at intruction Inst that reads a tainted input.
- `Edge(From, To)`: There exists an immediate data-flow from instruction From to instruction To.
- `Path(From, To)`: There exists a transitive tainted data-flow from instruction From to instruction To.
- `Sanitizer(Inst)` : There exists a function call at intruction Inst that sanitizes a tainted input.
- `Div(Denom, Inst)` : There exists a division operation at instruction Inst whose divisor is variable Denom.
- `Alarm(Inst)` : There exists a potential exploitable divide-by-zero error at instruction Inst.

Assume that input programs may contain function calls to `tainted_input` and `sanitizer` that read and sanitize a tainted input, respectively. The final output relation for potential bug reports is `Alarm`.

You will use these relations to build rules for the definition analysis and taint analysis in `Extractor.cpp`.

**Encoding LLVM Instruction in Datalog**. Recall that, in LLVM IR, values and instructions are interchangable. Therefore, all variables X, Y, and Z are an instance of LLVM’s `Value` class. 

Assume that input C programs do not have pointer variables. Therefore, we abuse pointer variables in LLVM IR as their dereference expressions. Consider the following simplified LLVM program from a simple C program `int x = 0; int y = x;`:

```sh
x = alloca i32          ; I0
y = alloca i32          ; I1
store i32 0, i32* x     ; I2
a = load i32, i32* x    ; I3
store i32 a, i32* y     ; I4
```
We ignore alloca instructions and consider that each store instruction defines the second argument.
In the case of the above example, you should have `Def(I0,I2)`, because x corresponds to x in LLVM IR. Likewise, consider each load instruction uses the argument.
In the example, you should have `Use(I0,I3)` and `Def(I3,I3)` because load instructions define a non-pointer variable which is represented as the instruction itself in LLVM.
Finally, you should have `Use(I3,I4)` and `Def(I1,I4)` for instruction I4.

**Defining Datalog Rules from C++ API**. You will write your Datalog rules in the function `initialize` using the relations above. Consider  an example Datalog rule:

A(X, Y) :- B(X, Z), C(Z, Y).

This rule corresponds to the following formula:
X,Y,Z. B(X,Z) C(Z,Y) A(X,Y).

In Z3, you can specify the formula in the following sequence of APIs in `initialize`:

```sh
/* Declare quantified variables */
z3::expr X = C.bv_const(“X”, 32);   // encode X as a 32-bit bitvector (bv)
z3::expr Y = C.bv_const(“Y”, 32);
z3::expr Z = C.bv_const(“Z”, 32);
/* Define and register rules */
z3::expr R0 = z3::forall(X, Y, Z, z3::implies(B(X,Z) && C(Z, Y), A(X,Y)));
Solver->add_rule(R0, C.str_symbol(“R0”));
```

You might take a look at the important classes including [expr][expression] and [fixed point][fixed-point] as well as [an example][example] of using Z3 C++ API.

**Extracting Datalog Facts**. You will need to implement the function `extractConstraints` in 'Extractor.cpp' to extract Datalog facts for each LLVM instruction. The skeleton code provides a couple of auxiliary functions in `lab8/src/Extract.cpp` and `lab8/src/Utils.cpp` help you with this task:

- `void addX(const InstMapTy &InstMap, ...)`
- - X denotes the name of a relation. These functions add a fact of X to the solver. It takes `InstMap` that encodes each LLVM instruction as an integer. This map is initialized in the `main` function.
- `vector<Instruction*> getPredecessors(Instruction *I)`
- - Returns a set of predecessors of a given LLVM instruction `I`.
- `bool isTaintedInput(CallInst *CI)`
- - Checks whether a given LLVM call instruction `CI` reads a tainted input or not.
- `bool isSanitizer(CallInst *CI)`
- - Checks whether a given LLVM call instruction `CI` sanitizes a tainted input or not.

**Miscellaneous**. For easy debugging, you can use the print function in `Extract.cpp`. If the -d option is passed through the command line (e.g., `constraint simple0.ll -d`), it will print out tuples of several relations. You can extend the function for your purpose. 

### Format of Input Programs

Input programs in this lab are assumed to have only sub-features of the C language as follows:

- All values are integers (i.e., no floating points, pointers, structures, enums, arrays, etc). You can ignore other types of values.
- Assume that there is no function call to a function with a void return type. You must handle the function calls to `tainted_input` and `sanitizer` in a special way which represents their actions as described previously.

### Example Input and Output

Your analyzer should run on LLVM IR. For example:

```sh
/lab8$ cd ./test
/lab8/test$ clang -emit-llvm -S -fno-discard-value-names -c loop0.c
/lab8/test$ ../build/constraint loop0.ll
```

If the input program has exploitable divide-by-zero errors, it should print out the corresponding  LLVM instructions.

```
Potential divide-by-zero points:
%div = sdiv i32 4, %3
```

### Submission


Once you are done with the lab, you can create a `submission.zip` file by using the following command:
```sh
lab8$ make submit
...
submission.zip created successfully.
```

[bug]: https://www.cvedetails.com/cve/CVE-2019-14284/
[Z3C++API]: https://z3prover.github.io/api/html/namespacez3.html
[Z3Guide]: https://web.archive.org/web/20210119175613/https://rise4fun.com/Z3/tutorial/guide
[expression]: https://z3prover.github.io/api/html/classz3_1_1expr.html
[fixed-point]: https://z3prover.github.io/api/html/classz3_1_1fixedpoint.html
[example]: https://github.com/Z3Prover/z3/blob/master/examples/c%2B%2B/example.cpp