//Loop thru array
//assign value at index to a variable
// check to see if that value matches in the array besides the same index

var containsDuplicate = function (nums) {
  let checkNumber =null;
  let index= null;

  for (let i=0;i<nums.length;i++){
    checkNumber = nums[i];
    index = i;
    if(i!==index && nums.indexOf(checkNumber) >-1){
      return true;
    }
  }
  return false;
};
