function containsDuplicate(nums) {

/****SOLUTION #1 */
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

/****SOLUTION #2 */
 const findDuplicate = nums.reduce((previousValue,currentValue)=>{

 })
}

let arr = [1,2,3,4];

console.log(containsDuplicate(arr));
