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
  const filterArray = nums.filter((value,index,array)=> value === array[index+1] || index ===array.length ? value === array[0])

  if(filterArray.length !==0){
    return true
  }
  return false;
}

let arr = [1,2,3,1];

console.log(containsDuplicate(arr));
