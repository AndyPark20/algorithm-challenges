var removeElement = function (nums, val) {
//Loop thru the nums array,
  //if the value at index i is equal to val, then remove that value in the array
  // increment counter variable to keep track how many values were deleted
  //subtract the length of the nums array with the increment counter variable
  //return the counter variable number;
  for (let i=0;i<nums.length;i++){
    if(nums[i]===val){
      nums.splice(i,1);
      i--;
    }
  }
  return nums.length
};

console.log(removeElement([3, 2, 2, 3], 3));
