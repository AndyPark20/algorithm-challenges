

/*Coding Challenge

Easy

Codewriting

1000

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers,
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

// function firstDuplicate(a) {
//   for (var i = 0; i < a.length; i++) {
//     var num = a[i];
//     if (a[Math.abs(num) - 1] > 0) {
//       a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
//     }
//     else {
//       return Math.abs(num);
//     }
//   }

//   return -1;
// }

// console.log(firstDuplicate([2,4,5,2,3,6,8,3]))


/*
Share
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


// const twoSum = (nums, target) => {
//   let storage = {};
//   for (let i = 0; i < nums.length; i++) {
//     let pointNums = nums[i];
//     let pairedNumber = target - pointNums;
//     if (storage[pairedNumber] === undefined) {
//       storage[pairedNumber] = i;
//     } else {
//       return [storage[pairedNumber], i]
//     }
//   }
// }
// console.log(twoSum([3, 2, 4], 6))

// const find = (array) => {
//   let number = 0;
//   array.sort();
//   console.log(array)
//     if (array.length % 2 === 1) {
//       const oddIndex = Math.floor(array.length / 2);
//       return array[oddIndex];
//     } else {
//       const evenIndex = (array.length) / 2;
//       number = ((array[evenIndex] + array[evenIndex - 1]) / 2);
//       return number;
//     }
// }

// console.log(find([1,15,6,98,1,100,1]))

/*

Given two strings s and t, write a function to determine if t is an anagram of s.

example 1:
Input: s= 'anagram', t="nagaram"
output:true

example 2:
Input: s = "rat", t="car"
output:false;



Given input: Two strings s and t;
Expected output: True or False

Check if two strings have the same length.
  If "No"
    output false
  If "Yes"
    iterate string s and iterate string t
    check if all the values at given index on string s and t matches each other
      if "Yes"
        output true
      if "No"
        output false

*/

// const isAnagram = (stringA, stringB) => {
//   let arr1 = [];
//   let arr2 = [];
//   if (stringA.length !== stringB.length) {
//     return false;
//   }
//   for (let i = 0; i < stringA.length; i++) {
//     arr1.push(stringA[i]);
//   }
//   for (let z = 0; z < stringB.length; z++) {
//     arr2.push(stringB[z]);
//   }
//   arr1.sort();
//   arr2.sort();
//   for (let j = 0; j < arr1.length; j++) {
//     if (!arr2.includes(arr1[j])) {
//       return false;
//     }
//   }
//   return true;
// }



//Anagram challenge
var isAnagram= function(s,t){
  const dict={};
  if(s.length !== t.length){
    return false;
  }

  for(let i=0;i<s.length;i++){
   let char = s[i];
   if(char in dict){
     dict[char]++;
   }else{
     dict[char]=1;
   }
}
  for (let j=0;j<t.length;j++){
    let char =t[j];
    if(char in dict){
      dict[char]--;
    }else{
      return false;
    }
  }
  for(let key in dict){
    if(dict[key]){
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'))
