


function isvalidSubsequence(array, sequence){
  //Loop thru the array
  //create a variable seqIdx that will be count the index of the sequence array
    //if the value at index array matches the value at index of sequence array
      //then increment variable j
    //if the value of variable j is equalto the length of the array
      //return true;
    //else
      //return false;
  let seqIdx=0;
  for (let i=0;i<array.length;i++){
    if(array[i]=== sequence[seqIdx]){
      seqIdx++;
    }
  }
  if (seqIdx === sequence.length) {
    return true;
  }else{
    return false;
  }


}




console.log(isvalidSubsequence([1,2,4,9,10,14],[1,15,14]))
