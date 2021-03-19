
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


//hoisting example:

console.log(color);
var color='red';
