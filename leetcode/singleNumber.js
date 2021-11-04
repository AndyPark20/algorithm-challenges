var singleNumber = function (nums) {
  //if the length of the array is 1, then return the value in the array;
    //if the length is NOT 1, use indexOf to see if the value of the index of the array is present.
      //if it is, then keep looping
      //if not return that value in the array;
  let nonRepeatedValue =null;
  if(nums.length ===1){
    nonRepeatedValue= nums[0];
  }else{
    for (let i=0;i<nums.length;i++){
      if(nums.indexOf(nums[i])===-1){
        nonRepeatedValue = nums[i];
      }
    }
  }
};


var nums = [2, 2, 1]
console.log(singleNumber(nums));
