var twoSum = function (nums, target) {
  //create a variable that will store the smallest value in the array
    //find the smallest number in the nums array and assign it to the variable we created
    // Loop thru the nums array, and add each value (except the smallest value) to the variable and check if it matches the target number
    let smallestNumber = Math.min(...nums);
    let smallestNumberIndex = nums.indexOf(smallestNumber);
    let twosumsArray=[smallestNumberIndex];

    for (let i=0;i<nums.length;i++){
      if((nums[i] + smallestNumber===target) && (i!==smallestNumberIndex)){
          twosumsArray.push(i)
      }
    }
    return twosumsArray;
};

let nums = [3, 2, 3]

let target = 6;


console.log(twoSum(nums,target))
