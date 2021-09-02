



function twoNumberSum(array, targetSum) {

  const finalResultArray =[];
  let targetValueDiff=null;

  array.forEach(values=>{
    targetValueDiff = targetSum-values;
    if(array.includes(targetValueDiff)){
      finalResultArray.push(array[array.indexOf(targetValueDiff)])
    }
    return [];
  })
  return finalResultArray

}

console.log(twoNumberSum([1,4,8,8,5], 16))
