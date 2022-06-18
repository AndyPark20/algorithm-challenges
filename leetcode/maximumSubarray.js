var maxSubArray = function (nums) {
  //sort the array from smallest to largest number
    //loop the sorted array, and use the indexOf to find any dubplicates
      //if duplicates are found then add it to a new array;
       //loop thru the new array and add the values in the array
    const sortedArray = nums.sort((a,b)=>a-b);

   const findDuplicates = sortedArray.filter((items,index)=>sortedArray.indexOf(items) !==index);
   return maxSubArray

};


var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums))
