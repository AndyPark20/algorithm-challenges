var maxSubArray = function (nums) {
  //sort the array from smallest to largest number
    //loop the sorted array, and use the indexOf to find any dubplicates
      //if duplicates are found then add it to a new array;
       //loop thru the new array and add the values in the array
    const sortedArray = nums.sort((a,b)=>a-b);
    let duplicateArray=[];

    for (let i=0;i<sortedArray.length;i++){
      if(sortedArray.indexOf(sortedArray[i])!==-1){
        let spliced=sortedArray.splice(i,1);
        duplicateArray.push(spliced)

      }
    }
    return duplicateArray;

};


var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums))
