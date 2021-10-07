var twoSum = function (nums, target) {

  let hashMapObject={};
  for (let i=0;i<nums.length;i++){
    hashMapObject[nums[i]] =i;
  }
  for (let i=0;i<nums.length;i++){
      let diff = target-nums[i]
    if(hashMapObject.hasOwnProperty(diff) && hashMapObject[diff]!== i){
      return [i,hashMapObject[diff]]
    }
  }
};

let nums = [3, 2, 3]
let target = 6;


console.log(twoSum(nums,target))
