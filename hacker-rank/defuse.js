/***
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!***/


const k = -2;
const code = [2, 4, 9, 3];
// 7,1,4,5=12
// 1,4,5,7=10
// 4,5,7,1=16
// 5,7,1,4=13

//2,4,9,3

//3,9,4,2
//9,4,2,3=13
//4,2,3,9=6
//2,3,9,4=5
//3,9,4,2=12

var decrypt = function (code, k) {
  let number = 0;
  let array = [];

  //-----------------> if k===0
  //loop thru the length of code
  //replace all the numbers with 0

  //------------------>if k >0;
  //loop thru the code array
  //use shift() to remove the first value
  //use push() to push the deleted item into the back of the array;
  // loop thru the re-assigned array with conditional looping up to length of k
  //Add values to number up to index of k
  // push the value to number
  // restart the number at 0

  //-----------------> if k<0
  //reverse the array and the value of k
  //loop thru the code
  //Remove the first element of the array
  //push the deleted element into the array so that the value is on the last index
  //push the number into the empty array
  //reset the number to 0
  //reverse the final array;

  if(k===0){
    for(let t=0;t<code.length;t++){
      code.splice(t,1,0);
    }
    return code
  }

  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      let deletedValue = code.shift();
      code.push(deletedValue);
      for (let z = 0; z < k; z++) {
        number += code[z]
      }
      array.push(number);
      number = 0;
    }
    return array;
  }else{
    code.reverse();
    for(let r=0;r<code.length;r++){
      let deleteValue = code.shift();
      code.push(deleteValue);
      for (let e=0;e<-k;e++){
        number+=code[e];
      }
      array.push(number);
      number =0;
    }
    array.reverse();
    return array;
  }
}
console.log(decrypt(code, k));
