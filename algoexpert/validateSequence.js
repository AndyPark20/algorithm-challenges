
// Loop thru the main array
  //Check if the values at index for main array is in sequence array
    //if true
        //return true
  // if false
        //return false


function isValidSubsequence(array,sequence){
  let result =null;
  let sequenceIndex=0;
  for (let i=0;i<array.length;i++){
    if(sequence[sequenceIndex]===array[i] && sequenceIndex<=sequence.length-1){
      sequenceIndex++;
      result =true;
    }else{
      result=false;
    }
  }
  return result;
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,11],[1,6,-1,10]))
