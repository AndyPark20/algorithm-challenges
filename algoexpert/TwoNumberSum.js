



//My Previous answer
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
  //use Hashmap to store key value pairs as nums array is looped
    //subtract the values at index (this will be X) from target number (this will be Y value)
    //if hashmap object has value Y
        //push that number into array.
    // if it doesn't
      //set index and values as key value pair.

    const hashMap ={};
    let emptyArray=[];
    for (let i=0;i<nums.length;i++){
      const targetDiff = target-nums[i]
      if(hashMap.hasOwnProperty(targetDiff)){
        return [targetDiff,nums[i]]
      }else{
        hashMap[nums[i]]= i;
      }

      if(emptyArray.length ===0){
        return [];
      }

}
}

console.log(twoSum([3,0], 10))
