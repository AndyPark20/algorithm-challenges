//Loop thru array
//assign value at index to a variable
// check to see if that value matches in the array besides the same index

var containsDuplicate = function (nums) {
  let checkNumber =null;
  let index= 0;
  let result = null;

  for (let i=0;i<nums.length;i++){
    checkNumber = nums[i];
    index = i;
    if(i+1!==index && checkNumber !== nums[i+1]){
      result = true;
    }
    result = false;
  }
  return result;
};




var nums = [1,2,1,4,5]

console.log(containsDuplicate(nums))
