


function containsDuplicate(nums){
    let baseNumber =nums[0];
    let finalResponse = undefined;
    for (let i=0;i<nums.length;i++){
      while(baseNumber !==nums[i]){
        finalResponse = false;
      }
      finalResponse=true;
    }
    return finalResponse;
}



containsDuplicate();
