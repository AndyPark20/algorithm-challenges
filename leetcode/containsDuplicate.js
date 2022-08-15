function containsDuplicate(nums) {

/****SOLUTION #1 ****/
  let emptyObject = {};
  let value =null;
  for (let i = 0; i < nums.length; i++) {
    if (!emptyObject[nums[i]]) {
      emptyObject[nums[i]] = 0;
       value =false;
    }
    emptyObject[nums[i]]++;
    value =true;
  }

  return value;

// /****###END OF SOLUTION1 ###****/

// /****SOLUTION #2 ****/
//   for (let i=0; i<nums.length;i++){
//     if(nums.indexOf(nums[i]) > -1 && i){
//       return true;
//     }
//   }
//   return false;

}

let arr = [1,2,3,];

console.log(containsDuplicate(arr));
