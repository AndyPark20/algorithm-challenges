



// function twoNumberSum(array, targetSum) {

//   //Loop thru the array,
//     //find the difference value between target sum and array value at index
//     //if the difference is true, then push that value into the final result array
//     //if not return empty array;

//   const finalResultArray =[];
//   let targetValueDiff=null;


//   array.forEach((values,index)=>{
//     targetValueDiff = targetSum-values;
//     if(array.includes(targetValueDiff) &&  targetValueDiff !==array[index]){
//       finalResultArray.push(array[array.indexOf(targetValueDiff)])
//     }
//     return [];
//   })
//   return finalResultArray

// }


var twoSum = function (nums, target) {
  // fast hashMap method
  // time: O(N) since looping once only. Space: O(N) since will scale to amount of elements
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap.hasOwnProperty(diff)) {
      return [hashMap[diff], i]
    } else {
      hashMap[nums[i]] = i;
    }
  }

  /*
  // slow method. two nested for loops.
  // time: O(N^2) since looping through twice. Space: O(1). No additional space
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }

  }
  */
  return [];
};

console.log(twoSum([3,5,-4,8,11,1,-1,6], 10))
