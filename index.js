

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

const find = (array) => {
  let number = 0;
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      const oddIndex = Math.floor(array.length / 2);
      return array[oddIndex];
    } else {
      const evenIndex = (array.length) / 2;
      number = ((array[evenIndex] + array[evenIndex - 1]) / 2);
      return number;
    }
  }
}


/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.


*/
