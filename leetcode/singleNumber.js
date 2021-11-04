var singleNumber = function (nums) {
  //if the length of the array is 1, then return the value in the array;
    //if the length is NOT 1, use indexOf to see if the value of the index of the array is present.
      //if it is, then keep looping
      //if not return that value in the array;
  let hashMap ={};
  if(nums.length ===1){
    nonRepeatedValue= nums[0];
  }else{
    for (let i=0;i<nums.length;i++){
      if(hashMap[nums[i]]){
        hashMap[nums[i]]++
      }else{
        hashMap[nums[i]]=1;
      }
    }
  }
  if(Object.values(hashMap)===1){
    return
  }



};

var nums = [2,2,1]
console.log(singleNumber(nums));
