/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:
Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0


Constraints:

-231 <= x <= 231 - 1*/

var reverse = function (x) {
//turn the number into strings
//loop thru the string
  //if string is not '-' add it to an empty variable called numbers
  //if string is '-' concat it to numbers variable at index 0
let string = x.toString()
let number ='';
for (let i=0;i<string.length;i++){
  if(string[i] !=='-'){
    number+=string[i];

  }

}
return number;

};

let input = -123
console.log(reverse(input));
