
 //Create final empty result Array
//Loop thru the array and create a hashmap object
    //find the difference between targetSum and values in the hashmap object.
      //if values at hashma Object is true,
          //push the value into result array;
     //if not
          //return empty array


function twoNumberSum(array, targetSum) {

  const finalResultArray =[];
  const hashMapObject ={};

  array.forEach((values,index)=>{
    hashMapObject[index] = values;
  })

  Object.values(hashMapObject).forEach((val,idx) => {
    let diff = targetSum-val;
    console.log(diff);
    // console.log(val)
    // if(val === diff){
    //   return val
    // }
  })



}

console.log(twoNumberSum([1,4,9,6,5], 15))
