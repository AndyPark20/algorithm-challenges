
/*Lexical Scoping
This is when you can access variables defined outside of the function from the inside of that function.
However, you cannot access the variables defined in the inner function from outter function.

Also Hoisting comes in to play
This is a JavaScript default behavior where it will assign the variables and functions into the top scope.*/

// Lexical scoping example:

function baz(){
  let name ="Andy";
  function foo(){
    console.log(name)
  }
  foo();
}



baz();

/* JavaScript is an asynchrnous, non-blocking that
looks like a multi-thread but in reality it is a single threaded operation.
It will use event loop and event qeue for the operation.
