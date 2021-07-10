

//1. What is a closure?
/* combination of functions bundled together with references to its surrounding state (lexical envrionment)
In simple words, it means that the inner function can have an accecss to the outter function (scope).
closure is made as soon as the function has been created.
*/

// 2. What is hoisting?
/* hoisting is when Javascript brings the declared variable and functions to the very top and make it global
so that it can be accecssed anywhere in the scope.
for example, if you have:

console.log(name)
var name ='andy'

You will see an ouput of Andy even though console.log comes before var name.
*/

// 3. What is Lexical Scope?
/*Lex-> parsing stage. Lexical --> compiled scope.
The decision when it should be compiled has been defined as soon as you wrote the function.


// 4. Lexical scoping example:

function baz(){
  let name ="Andy";
  function foo(){
    console.log(name)
  }
  foo();
}
baz();

baz();

<<<<<<< HEAD
//hoisting example:

console.log(color);
var color='red';
=======
//5.Asynchronous

/* JavaScript is an asynchrnous, non-blocking that
looks like a multi-thread but in reality it is a single threaded operation.
It will use event loop and event qeue for the operation.

//6. What are the different data typpes present in Js?

/*
A. Primitive Types:
  1. String
  2. Boolean
  3. Number
  4. Undefined
  5. Null
  6. Symbol

B. Non-primitive Types:

  1. Objects



// 7. == and ===

/* == only checks for values and not data type
=== checks for both values and data type.

cohersion takes in place where one data type gets converted to another.
for instance + will cause number to be converted into strings
where as  - will cause strings to get converted into number



//8 is Javascript dynamically or staticcally typed language?

/* Javascript is dynamically typed languaged meaning that the variable is checked during run-time.
Where as statically typed language is checked during compile-time.

example is var a =24 --> var a can be converted into var a = "String"*/
>>>>>>> db357ba14054493ffe8d8b037555c72aef1f6ccb
