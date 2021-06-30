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
//split the strings by each character and put them into an array
//loop the array backwards and check if the values at index i is a number.
  //if it is anything besides '-' then put it into a variable that is assigned as an empty array.
  // if the value at index i is '-' then put the value at the first of the array
//loop thru the new array that has the string values and place them into an empty string
//return parseInt of the final string

let convertString = x.toString();
let splitString=convertString.split('');
let checkedArray=[];
let final =''
for (let i=splitString.length;i>=0;i--){
  if(splitString[i] ==='-'){
    checkedArray[0]=splitString[i];
  }else{
    checkedArray.push(splitString[i])
  }
}
for (let i=0; i<checkedArray.length;i++){
  final+=checkedArray[i];

}
return parseInt(final)
};

let input = -123
console.log(reverse(input));
