
/*Coding Challenge
Easy
Codewriting
1000
=======


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


Given two strings s and t, write a function to determine if t is an anagram of s.

example 1:
Input: s= 'anagram', t="nagaram"
output:true

example 2:
Input: s = "rat", t="car"
output:false;



Given input: Two strings s and t;
Expected output: True or False

>>>>>>> 58bc4c7f7ea34d723077e422317b009436972eae
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

s
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



/*****Anagram challenge*****/

// var isAnagram= function(s,t){
//   const dict={};
//   if(s.length !== t.length){
//     return false;
//   }

//   for(let i=0;i<s.length;i++){
//    let char = s[i];
//    if(char in dict){
//      dict[char]++;
//    }else{
//      dict[char]=1;
//    }
// }
//   for (let j=0;j<t.length;j++){
//     let char =t[j];
//     if(char in dict){
//       dict[char]--;
//     }else{
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isAnagram('anagram', 'nagaram'))


/*Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.*/

// const runningSum =(list)=>{
//   //Create a variable and assign an empty array
//   //Create a variable and assign initial value of 0
//   //iterate thru the array
//   //if the index is 0 push the value into the newly created array
//   //else add the current value with the previous value in the newely created array
//   // push the sum into the newly created array
//   const array=[];
//   let sum =0;
//   for(let i =0 ; i<list.length;i++){
//     if(i===0){
//       array.push(list[i])
//     }else{
//       sum=array[i-1] + list[i]
//       array.push(sum)
//     }
//   }
//   return array;
// }


// const runningSum =(list)=>{
//   //create an empty array
//   //Create a variable and assign a value of 0
//   // iterate over the list array
//   // add the current value to the newly created variable that has the initial value of 0
//   // then push this to the empty array

//   const array=[];
//   let sum=0;
//   for(let i=0;i<list.length;i++){
//     sum+=list[i];
//     array.push(sum)
//   }

// }

// console.log(runningSum([1, 1, 1, 1, 1]))

/*
Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
Example 1:
=======

Example 1:


Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
*/


// var findLeastNumOfUniqueInts = function (arr, k) {

//create a variable and assign an empty object
//iterate thru the array
// if the value is not in the object insert it
// if the value is in the object then, increment it
//iterate thru the object
// if the property value is less than k OR equal to, then decrement it.
// return the length of the object.
// const hist = {};
// const leftOver = {};
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] in hist) {
//     hist[arr[i]]++;
//   } else {
//     hist[arr[i]] = 0;
//   }
// }
// for (const key in hist) {
//   if (hist[key]<=k) {
//     hist[key]=0;
//   }else{
//     hist[key]--;
//     if(hist[key]!==0){
//       leftOver[key] = hist[key];
//     }
//   }
// }
//   console.log(hist)
//   return Object.keys(leftOver).length;
// };

// // console.log(findLeastNumOfUniqueInts([5, 5, 4], 1))
// // console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))
// console.log(findLeastNumOfUniqueInts([2, 1, 1, 3, 3, 3], 3))


/*
Write a function that reverses a string.
The input string is given as an array of characters char[].*/


var reverseString = function (s) {
  //create a variable and assign an empty array to it
  // iterate thru array s from the opposite length
  // push the value @ index to the empty array.
  //return the pushed array.

  s.reverse();

};

console.log(reverseString(["h", "e", "l", "l", "o"]))
