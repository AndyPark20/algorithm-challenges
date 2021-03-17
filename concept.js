

//1. What is a closure?
/* combination of functions bundled together with references to its surrounding state (lexical envrionment)
In simple words, it means that the inner function can have an accecss to the outter function (scope).
closure is made as soon as the function has been created.
/*

// 2. What is hoisting?
/* hoisting is when Javascript brings the declared variable and functions to the very top and make it global
so that it can be accecssed anywhere in the scope.
for example, if you have:

console.log(name)
var name ='andy'

You will see an ouput of Andy even though console.log comes before var name.
*/


// 4. Lexical scoping example:

function baz(){
  let name ="Andy";
  function foo(){
    console.log(name)
  }
  foo();
}



baz();

//Asynchronous

/* JavaScript is an asynchrnous, non-blocking that
looks like a multi-thread but in reality it is a single threaded operation.
It will use event loop and event qeue for the operation.
