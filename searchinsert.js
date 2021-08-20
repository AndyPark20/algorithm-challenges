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
  //use Sort method to check if target includes in the num
    //if so, return index
    //else, push the target num to updatedArrayofNumbers
    //loop thru and if the values at index equals target return index

let copiedArrayOfNumbers =nums;
const indexOfValue = nums.indexOf(target);
if(indexOfValue !==-1){
  return indexOfValue;
}else{
  copiedArrayOfNumbers.push(target);
  copiedArrayOfNumbers.sort((a,b)=>a-b);
  copiedArrayOfNumbers.forEach((values,index)=>{
    if(values === target){
     return index;
    }
  })
}

};

console.log(searchInsert([1, 3, 5, 6],10))
