function containsDuplicate(nums) {

/****SOLUTION #1 ****/
//   let emptyObject = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!emptyObject[nums[i]]) {
//       emptyObject[nums[i]] = 0;
//     }
//     emptyObject[nums[i]]++;
//   }

//  for(keys in emptyObject){
//    if(emptyObject[keys] >1){
//      return true;
//    }
//  }
//  return false;

/****###END OF SOLUTION1 ###****/

/****SOLUTION #2 ****/
  for (let i=0; i<nums.length;i++){
    if(nums.indexOf(nums[i]) > -1 && i){
      return true;
    }
  }
  return false;

}

let arr = [1,2,3,4];

console.log(containsDuplicate(arr));
