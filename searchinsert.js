/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //loop thru the array
  // if the value matches the target,
    //return index number
 //else
  //push the target into the nums array
  //use sort to sort the nums from smallest to largest
  //use indexof to find the index of the target value in the nums array

 nums.forEach((values,index)=>{
   debugger;
   if (values ===target){
     return target;
   }else{
     nums.push(target);
    nums.sort();
   }
 })
  return nums.indexOf(target);
};

console.log(searchInsert([1, 3, 5, 6],10))
