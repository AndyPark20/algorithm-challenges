var singleNumber = function (nums) {
  //if the length of the array is 1, then return the value in the array;
    //if the length is NOT 1, use indexOf to see if the value of the index of the array is present.
      //if it is, then keep looping
      //if not return that value in the array;
  let hashMap ={};
  if(nums.length ===1){
    return nums[0];
  }else{
    for (let i=0;i<nums.length;i++){
      if(hashMap[nums[i]]){
        hashMap[nums[i]]++
      }else{
        hashMap[nums[i]]=1;
      }
    }
  }

  for (keys in hashMap){
    if(hashMap[keys]===1){
      return parseInt(keys)
    }
  }

};

var nums = [7]
console.log(singleNumber(nums));
