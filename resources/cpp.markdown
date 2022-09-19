---
layout: default
title: "A Whirlwind Tour of C++"
author: "Elizabeth Dinella"
---

## {{ page.title }}

Author: {{ page.author }}

C++ was originally created in the 1980s as an
[extension of the C language][c-cpp-differences]
to add support for classes. Since its inception, C++ has grown
enormously to include a host of features such as
[exception handling][cpp-exception-handling],
templates, an expansion of library functions, stronger type checking,
inheritance, and other object-oriented concepts. This article will serve
as a primer for C++ in this course as well as a source of resources for
a more complete documentation.

This article is organized into three parts: *Classes & Objects, General
Use C++,* and *C++ for LLVM*. *Classes & Objects* will cover classes in
C++, access modifiers, and object-oriented concepts such as single and
multiple inheritance, and polymorphism. *C++ for LLVM* will serve as an
introduction to the [LLVM API][llvm-programmers-manual]
which will be heavily used in the assignments for this course. Conversely,
*General Use C++* will detail features that are not specific to the LLVM API,
but will likely be frequently used in the assignments for this course.

You are encouraged to try out different C++ features in this
[Online C++ IDE][online-cpp-repl] as you read through the
rest of this article.

### Part 1: Classes & Objects

> [Classes][cpp-classes] are an
> expanded concept of *data structures*: like data structures, they can
> contain data members, but they can also contain functions as members.
> An object is an instantiation of a class. In terms of variables, a class
> would be the type, and an object would be the variable.

Readers that are familiar with other languages such as Java are
presumably familiar with many of the object-oriented concepts discussed
in this section. Nevertheless, there are some notable features that may
be new to readers such as multiple inheritance, compilation,
destructors, and manual object management.

#### C++ Class Syntax

Class implementation is usually split between two files: a *header* and
an *implementation* file. The header file typically contains the class
declaration including list of member variables and member function
headers. A function header includes the name of the function and tells
the compiler what type of data it expects to receive and what type of
data it will return. The function body with the actual instructions to
execute when called are written in the implementation file. The header
and implementation files typically share the same name and end in ".h"
and ".cpp" respectively.

Here is an
[example of a Time class][separate-header-and-implementation-files]
split between a header and implementation file. In this example, notice
that the header file is referenced in the implementation file using:

```cpp
#include "Time.h"
```

This line tells the C++ compiler to use in Time.cpp the function and
class declarations written inside of Time.h. Suppose that we
additionally include a file that itself also includes Time.h. Now, we
have multiple definitions of the members and functions defined in
Time.h. In order to prevent this, C++ has a mechanism to prevent headers
from being compiled more than once. These mechanisms, called "include
guards", are illustrated in the following lines in Time.h:

```cpp
#ifndef TIME_H

#define TIME_H
.
.
.
#endif
```

These lines tell the compiler to compile the Time.h functions only if
they have not been compiled yet, to prevent double declaration.

#### C++ Scope Resolution Operator

To access a member function, member variable, or member class, you can
use the double colon (`::`) operator. Examples include
`ClassName::functionName`, `ClassName::variableName`, `namespace::ClassName`,
or `EnumName::Member`. Within class scope, the member functions and
variables are accessible without explicit scope resolution; but note
that in implementation files, the scope resolution operator must be used
when defining functions that are declared in the header file.

#### Class Compilation

The compilation of a C++ program consists of two stages: *compilation*
and *linking*. Compilation includes preprocessing (macro and include
expansion), transforming the program into an intermediate language such
as LLVM IR, optimizing the intermediate program, and generating object
code such as x86 assembly. Linking puts together one or many object code
files into an executable program. In this stage, the compiler matches
function calls with their definitions and ensures that each function
that is called has exactly one definition. Linking is a common source of
errors for users that are new to C++ classes.

#### Access Specifiers

Access specifiers identify access rights for the members they are
applied to. Access can be either `private`, `public`, or `protected`. By
default, a class has private access to all of its members. This means
that members of the class are only accessible from within members of the
same class. Conversely, a public member variable is accessible from
everywhere that the object is visible. A protected member variable is
accessible from members of the same class and members of its child
classes.

These rules change slightly when the `friend` keyword is introduced. This
feature will be detailed in the **Friendship** section below.

#### Constructors and Destructors

Each class has a specific *constructor* function that is called each
time a new object of the class is created. The *constructor* has the
same name as the class and is typically used to initialize member
variables and/or perform some setup. The *default constructor* is a
special constructor that is called when an object of the class is
declared but is not initialized with any arguments. For example,
consider the following declarations of the Rectangle class from
[here][overloading-class-constructors]:

```cpp
Rectangle r1; // ok, default constructor called

Rectangle r2(); // oops, default constructor NOT called
```

The default constructor is called for `r1`. Note that `r1` is not even
constructed with an empty set of parentheses. This is because the empty
set of parentheses make `r2` a function declaration instead of an object
declaration: it is a function that takes no arguments and returns a
value of type Rectangle.

Another special constructor type is the *copy constructor*. This is
executed when an object of the same type is passed to the constructor.
By default, it performs a shallow copy of all member variables. If a
class has a pointer type member variable, a shallow copy may not be
enough. Multiple classes may share the same object the pointer refers to
which can cause issues if this is not what the developer intended. If a
different semantics is preferred, the developer can write their own copy
constructor with the signature:

```cpp
Rectangle::Rectangle(const Rectangle& x)
```

Likewise, the *destructor* function is called each time an object of the
class is destroyed. It has the same name as the class (and the
constructor), but is preceded with the tilde sign (`~`). It is typically
used to perform some cleanup of heap allocated memory.

When a class has dynamic member variables, these member variables are
default-constructed when an instance of the class is created (when the
constructor is called), and then re-constructed when they are
initialized. To avoid this wasteful double-construction of member
variables, constructors can use initialization lists before their
bodies, ensuring that the member variables (width and height below) are
only constructed once:

```cpp
Rectangle::Rectangle(int x, int y) : width(x), height(y) { }
```

#### `this` keyword

> The keyword [this][this-pointer]
> represents a pointer to the object whose member function is being
> executed. It is used within a [class][cpp-classes]'s member
> function to refer to the object itself.

It is often used to resolve ambiguity between a member variable of the
object executing the call and an object of the same class passed as a
parameter. An example illustrating this is shown in the member function
[isitme][isitme].

#### Static members

A static member of a class is a variable that is shared between all
objects of the class. Likewise, a static member function is not
associated with any specific object. Therefore, they do not have access
to a `this` pointer and are instead accessed by the class's name, like so:

```cpp
ClassName::staticMemberVariable
```

#### Friendship

The `friend` keyword defines access relationships between functions and
classes. If a class A is a "friend" of class B, member functions in
class A can access private and protected members of class B. Friendship
is defined in the class giving access (Class B in this example). An
example of friend classes is shown [here][class-friendship].

Similarly, if a function is a "friend" of class B, it can access private
and protected members of class B within its function body. An example of
a friend function is shown [here][member-friendship].

#### Inheritance

Inheritance creates an "*is-a*" relationship between the *derived* and
*base* class. The derived class inherits member variables and functions
from the base class. It can also include its own member variables and
functions. An example can be found [here][inheritance].
The Rectangle class is derived from the base class, Shape.

Recall that derived classes can access protected members in the base
class.

As shown in the above-linked example, inheritance is specified using
access modifiers `public`, `protected`, or `private`:

```cpp
class Rectangle: public Shape { ... }
```

A public inheritance (as above) behaves as expected: the variables
inherited from the base class keep their access status.
Conversely, in private inheritance, all inherited members become
private. In protected inheritance, public members become protected and
all other members are unchanged.

#### Multiple Inheritance and Virtualism

As described in the introduction, C++ was originally created to add
support for classes to C. Thus, C++ includes many object-oriented
concepts that did not exist in C. In this section, we assume that the
reader has a basic understanding of classes and inheritance.

Unlike Java, C++ supports multiple inheritance. This means that an
object can have one or more parent classes. At first glance this seems
like a useful feature that should exist in all programming languages
that support inheritance. However, multiple inheritance is often a
source of confusion and implementation troubles.

Consider the infamous "Diamond Problem":

![001-diamond-inheritance][001-diamond-inheritance]

Both B and C inherit from A and thus contain A's member variables. This
could lead to ambiguities and duplicate copies of A's member variables
in class D. To solve this, we can use
*[Virtual Inheritance][virtual-inheritance]* as follows:

```cpp
Class B : public virtual A { }

Class C : public virtual A { }
```

This structure ensures that a class `D` that inherits from `B` and `C` would
only contain one copy of `A`'s member variables. Read
[Understanding Virtual Tables in C++][understanding-virtual-tables]
to gain a deeper understanding of how this works under the hood.

#### Polymorphism

Class inheritance provides many useful features. One of these, is that a
pointer to a derived class is type-compatible with a pointer of the base
class. More concretely, if class B is derived from base class A, a
pointer to class A can also refer to an object of type class B. This is
intuitive as class B has an "*is-a"* relationship to class A.

### Part 2: General C++

#### Templates

C++, like other statically typed languages, requires the developer to
specify types in nearly all declarations. However, this can lead to
unnecessary repetition of code that is somewhat type independent.
Consider the code for the STL vector. Regardless of the element type,
the code to add an element, remove an element, calculate size, and even
sort are likely identical. [Templates][templates]
provide a way to write programs that are *generic* or independent of any
particular type. Below is an example of a templated swap function. So
long as the types of n1 and n2 are equivalent, this function will be
applied successfully.

```cpp
template <typename T> void Swap(T& n1, T& n2) {
    T temp;
    temp = n1;
    n1 = n2;
    n2 = temp;
}
```

#### C++ Type Checking

In the introduction, we briefly noted that C++ has stronger type
checking than C. In this section, we will describe how the stronger type
checking manifests in differences in enums and void pointers. In C, an
enum is simply an alias to integer types. However, the C++ enum defines
an actual type. So,

```cpp
enum direction { North, South, West, East };
direction myDir = 3;
```

will result in a type error in C++, but not in C.

Another source of type unsafety in C is the implicit promotion of void
pointers. Although malloc returns a `void*`, the following program
compiled with gcc produces no errors or warnings.

```cpp
#include <stdlib.h>

int main() {
    int* arr = malloc(5 * sizeof(int));
}
```

However, compiling with g++ produces the following error:

```sh
void_ptr.cpp:5:5: error: assigning to 'int *' from incompatible type 'void *'
        arr = malloc(5 * sizeof(int));
              ^~~~~~~~~~~~~~~~~~~~~~~
1 error generated.
```

In C++, casting the `void*` to `int*` is required.

#### Command Line Arguments

In this course, we will often pass additional information from the user
when the program is run. The syntax to implement this in C++ is exactly
the same as in C. However, it is worth reviewing as it will be used
quite frequently in the assignments.

```cpp
int main(int argc, char* argv[]) {
    if (std::string(argv[1]) == std::string("blue")) {
        std::cout << "my favorite color is blue too!" << std::endl;
    }
}
```

#### References and Pointers

C and C++ support pointers. A pointer is a variable that stores a memory
address. In order to access the memory location that it stores or points
to, it must be dereferenced with the `*` operator. The shorthand to
dereference a pointer and access a member function or variable is

```cpp
ptr->member
```

instead of the more verbose version:

```cpp
(*ptr).member
```

In contrast, a reference is an alias to another variable.
[References][references]
are often used to pass objects to a function to persist modifications.
By default, objects are passed by value, meaning they are copied at call
time; any modifications of the object that occur in the function body
will be applied to the copy rather than the original value. References
allow you to bypass this behavior to work directly on the original objects
rather than on their copies, or simply to avoid making expensive copies.

#### Const

A variable declared as `const` is constant and cannot be modified. If a
function is declared as const, its body may not modify the calling
object.

In addition to mutability safety, the const and reference constructs can
be combined to employ efficient parameter passing. As noted above,
passing an object by reference is faster as the runtime environment does
not need to make a copy. However, if passed as reference, modifications
will persist to the original object. Passing an object by constant
reference allows to make efficient function calls while ensuring that
the object will not be modified.

#### Local type inference

The type of variables can often be deduced automatically within a local
scope using the `auto` keyword. This mainly just allows C++ code to be
more concise, and can also save time when refactoring.

#### For-each loops

In addition to the traditional `for` loop structure, C++ also allows for a
**for each** loop that works cleanly with iterators. The syntax is as
follows: `for (T element : collection)`

The loop iterates through each element of the collection. This allows
for the natural instructions: "for each ... in .... do ....".

It is common to use for-each loops in combination with type inference
when the type of each element is too verbose to write out explicitly.
In some cases you can also specify reference semantics so that you're
accessing the elements themselves rather than copies of each element.

For example, after executing the below lines:

```cpp
std::string s = "hello";
for (auto& c : s) {
    c = 'a';
}
```

the string `s` will be set to `"aaaaa"`.

#### `new` and `delete` keywords

C++ includes dynamic memory features that did not exist in C. The
traditional `malloc` and `free` keywords are still available in C++;
however, it is widely accepted that new and delete should be used in
their place.

`new` and `delete` have slightly different syntax for scalar types and
arrays.

```cpp
int* foo = new int; // allocates memory for a single int
delete foo; // deletes memory pointed to by foo
int* baz = new int[100]; // allocates memory for 100 int array
delete [] baz; // deletes memory pointed to by baz
```

`delete` with `[]` indicates that the entire array should be deleted
rather than a single element. Note: normally when an object's scope is
left, its destructor will be called. However, if the object was
dynamically declared using the new keyword, then it will persist in
memory beyond the end of its scope. The cleanup of dynamic memory is the
developer's responsibility and is often a source of memory leaks.

#### C++ Standard Library

The standard libraries in C++ are a superset of the standard C
libraries. In addition, the C++ libraries include a diverse and powerful
set of features. In this document, we will detail, arguably, the most
important features: iterators, strings, I/O streams, and data
structures.

##### [Iterators][iterators]

Iterators provide an interface to traverse containers (vectors,
sets, maps, etc.) and view / edit specific elements stored in such
containers. In many ways, iterators are a generalization of
pointers. C++ separates the traversing of a container from the
container itself.

```cpp
// Accessing the elements of a vector without using iterators
for (j = 0; j < 4; ++j) {
    cout << v[j] << " ";
}
// Accessing the elements of a vector using iterators
for (i = v.begin(); i != v.end(); ++i) {
    cout << *i << " ";
}
```

##### [Strings][strings]
This powerful library simplifies the tedious character array
manipulation tasks left to the developer in C. C++ strings are a
wrapper around the array of characters that would be explicitly
manipulated in C. Developers can:
- Create and delete strings using constructor and deconstructors
- Assign values to strings using the `=` operator
- Compare contents of strings using the `==` operator
- Iterate over strings using C++ iterators
- Access particular characters using the `[]` operator
- Erase a substring from a string

##### [I/O Streams][io-streams]

The IOStream library is intended to replace the stdio library for
an easier and more flexible input and output developer experience.
A stream has some source or sink. The IOStream library supports
standard input, standard output, standard error, a file, or an
array of characters. The >> and << operators are conveniently
overloaded to simplify the use of IOStreams. The following example
shows the basics of writing to the console and a file:

```cpp
#include <iostream>
#include <fstream>

int main() {
    /* Writing to the console:
    cout is defined to access to screen by default
    endl (rather than std::end) appends a newline (\n)
    */
    std::cout << "Hello World!" << std::endl;

    //writing to a file
    std::ofstream myfile;
    myfile.open("out.txt");
    myfile << "Hello File!" << std::endl;
    myfile.close();
}
```

However, according to the [LLVM style guide][llvm-iostream-forbidden],
IOStreams are forbidden. Instead, developers are encouraged to use
LLVM's `raw_ostream`. For more details, we refer the reader to the *C++
for LLVM* section below.

##### Data Structures

The [C++ Standard Library (STL)][standard-template-library]
defines many useful containers that will feel familiar to readers
with experience in Java or Python. The STL includes vectors,
lists, queues, stacks, sets, and maps. Each of these containers
can be traversed using iterators. Additionally, many containers
share common functions. This manifests in a seamless developer
experience regardless of the container or element type. For
example, `size()`, `empty()`, `max_size()`, `==`, `!=`, `swap`,
a default constructor, copy constructor, and assignment constructor are
shared by all STL containers. Here is a
[detailed list][stl-containers] of STL containers and properties.

##### Smart Pointers

The C++ Standard Library (STL) defines a few
different types of smart pointers that take care of their own
dynamic memory allocation and deallocation, making them safer than
raw pointers, which can cause memory leaks. Smart pointers
automatically clean up their underlying owned memory when they
leave scope. This is done implicitly in their destructors. Here
are the three main types of smart pointers:

-   `std::unique_ptr` - Use this when you don't intend to hold multiple
    references to the same object. For example, use it for a pointer to
    memory which gets allocated on entering some scope and de-allocated on
    exiting the scope. Since only one unique pointer can hold a reference
    to an object, use std::move() to transfer object ownership from one
    unique pointer to another.

-   `std::shared_ptr` - Use this when you do want to refer to your object
    from multiple places, and do not want your object to be de-allocated
    until all these references are themselves gone. Note that shared
    pointers do some internal bookkeeping to count the number of active
    references to the object that they hold. This can be a performance
    drawback.

-   `std::weak_ptr` - Use this when you do want to refer to your object from
    multiple places - for those references for which it's ok to ignore
    and deallocate (so they'll just note the object is gone when you try
    to dereference).

### Part 3: C++ for LLVM

#### LLVM data structures

C++ [STL data structures][stl-containers]
are for general-purpose use and have performance that is platform
dependent.

In order to create very fast specialized but platform independent
structures, LLVM created its own data structures. To the user, these
structures feel similar to STL data structures, but have some notable
differences. For each of the following, the developer can choose to use
the STL data structure or the LLVM specialized structure. This choice
should be made with efficiency and their use cases in mind.

In general, STL structures are variable size. To conserve memory, on
creation, the underlying array does not have any space allocated for
elements. Once the user calls `push_back` or `insert`, memory is allocated
for the element. Each time the user inserts an element to a container
that is at capacity, the memory allocated for the structure is doubled.
As the number of elements increases, the frequency of allocation calls
decreases. So, for a large *n*, the STL version is often a good choice of
data structure. For a small number of elements, LLVM provides
alternatives.

-   **LLVM SmallVector** is optimized for a small *n*. It is created with
    some number of elements in place. In this way, it avoids allocation
    when the actual number of elements is below that threshold. Inserts
    below that threshold will be much faster to a SmallVector than an
    STL vector.

-   **LLVM DenseMap** is an unsorted alternative to the STL map. The STL
    map guarantees that iteration order of the container is the same as
    the insertion order. The LLVM DenseMap keeps keys and values next to
    each other in memory in order to speed up lookup.

-   **LLVM StringMap** is a specialized structure with only strings as
    keys. This is useful as string keys are difficult to support
    efficiently. Long strings are inefficient to compare and copy. The
    LLVM StringMap supports an arbitrarily long key value. Like the LLVM
    DenseMap, the iteration order is not guaranteed.

-   **LLVM SmallSet** is an unsorted alternative to the STL set. Because
    STL sets have a defined order, searches are *O(log n)*. Conversely, in
    the LLVM SmallSet searches are *O(n)*. Additionally, as the LLVM
    SmallSet does not have a defined order, it cannot be iterated over.
    For a small n that does not need to be regularly queried, LLVM
    SmallSet could be an efficient choice.

#### `raw_ostream`

The `raw_ostream` is an LLVM alternative to `iostream`. Instead of using
`std::cout` the developer should pipe output to `outs()`. Analogously, the
alternative to `std::cerr` is `errs()`.

```cpp
int main() {
    outs() << "Hello World!\n"
}
```

#### Dynamic Casting

A dynamic cast converts pointers to a more specific type in its class
hierarchy at runtime.

Consider the "*is-a*" relationship between an LLVM
[AllocaInst][llvm-allocainst] and an LLVM Instruction. In the assignments, we
will often write control flow similar to the following structure:

```cpp
if (auto *AI = dyn_cast<AllocationInst>(Val)) {
    // ...
}
```

This allows us to handle specific instructions (BinaryOperator,
CallInst, AllocaInst, etc.) differently. The `dyn_cast` operator
checks if the parameter is an instance of the templated type. If so, it
returns a pointer to the downcasted class. If not, `dyn_cast` returns a
null pointer.

Note that you must use `dyn_cast`, not the C++ built-in `dynamic_cast`,
when casting objects from the LLVM library.

### Acknowledgements

We thank Kihong Heo, Greg Kofman, and Pardis Pashakhanloo for
suggestions to improve this article.

[001-diamond-inheritance]: ../images/resources/cpp/001-diamond-inheritance.svg

[c-cpp-differences]: http://www-cs-students.stanford.edu/~sjac/c-to-cpp-info/c-to-cpp-differ
[cpp-exception-handling]: https://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm
[llvm-programmers-manual]: https://llvm.org/docs/ProgrammersManual.html
[online-cpp-repl]: https://repl.it/languages/cpp
[cpp-classes]: https://www.cplusplus.com/doc/tutorial/classes/
[separate-header-and-implementation-files]: https://www.cppforschool.com/tutorial/pdf/chapter21-separate-header-and-implementation-files.pdf
[overloading-class-constructors]: https://onlinegdb.com/Yx8IOx_h9
[this-pointer]: https://www.cs.technion.ac.il/users/yechiel/c++-faq/using-this-in-ctors.html
[isitme]: https://www.onlinegdb.com/iDyO5pvie
[class-friendship]: https://onlinegdb.com/NPJCrr0M1
[member-friendship]: https://onlinegdb.com/z-Y6zCzKv
[inheritance]: https://onlinegdb.com/4TWMp-p5V
[virtual-inheritance]: https://www.cprogramming.com/tutorial/virtual_inheritance.html
[understanding-virtual-tables]: https://pabloariasal.github.io/2017/06/10/understanding-virtual-tables/
[templates]: http://ultra.sdk.free.fr/docs/DxO/C%2B%2B%20Templates%20The%20Complete%20Guide.pdf
[references]: https://www.tutorialspoint.com/cplusplus/cpp_references.htm
[iterators]: http://www.cplusplus.com/reference/iterator/
[strings]: http://www.cplusplus.com/reference/string/string/
[io-streams]: http://www.cplusplus.com/doc/tutorial/basic_io/
[llvm-iostream-forbidden]: https://llvm.org/docs/CodingStandards.html#include-iostream-is-forbidden
[standard-template-library]: https://www.geeksforgeeks.org/the-c-standard-template-library-stl/
[stl-containers]: https://www.cs.helsinki.fi/u/tpkarkka/alglib/k06/lectures/containers.html
[llvm-allocainst]: https://llvm.org/doxygen/classllvm_1_1AllocaInst.html
