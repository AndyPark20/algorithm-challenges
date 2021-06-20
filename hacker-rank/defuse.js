/***
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
 */

const k = 3;
const code = [5, 7, 1, 4];
var decrypt = function (code, k){
  let number = 0;
  //if k >0;
  //loop thru the code;
  //if i is not the value at index i, add the value at index i to the variable sum;
  code.forEach((index, value) => {
    if (index !== index) {
      number += value[index];
    }
    console.log(number);
  })
};

console.log(decrypt())
