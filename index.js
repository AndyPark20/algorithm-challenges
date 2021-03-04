

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


var twoSum = function(nums, target) {
  let array=[];
 for(let i=0; i<nums.length;i++){
   for (let z=0;z<nums.length;z++){
     if(nums[i] + nums[z] === target && (nums[i] + nums[i] !== target)){
      array.push(i, z)
     }
   }
   return array;
 }

};

console.log(twoSum([3,2,4],6))
