



function twoNumberSum(array, targetSum) {

  //Loop thru the array,
    //find the difference value between target sum and array value at index
    //if the difference is true, then push that value into the final result array
    //if not return empty array;

  const finalResultArray =[];
  let targetValueDiff=null;


  array.forEach((values,index)=>{
    targetValueDiff = targetSum-values;
    if(array.includes(targetValueDiff) &&  targetValueDiff !==array[index]){
      finalResultArray.push(array[array.indexOf(targetValueDiff)])
    }
    return [];
  })
  return finalResultArray

}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10))
