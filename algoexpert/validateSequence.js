
// Loop thru the main array
  //Check if the values at index for main array is in sequence array
    //if true
        //return true
  // if false
        //return false


function isValidSubsequence(array,sequence){
  let result =null;
  for (let i=0;i<sequence.length;i++){
    if(array[sequence[i]]){
      result =true;
    }
     return false;
  }
  return result;
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10]))
