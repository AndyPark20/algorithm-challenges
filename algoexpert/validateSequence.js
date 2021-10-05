<<<<<<< HEAD
=======

// Loop thru the main array
  //Check if the values at index for main array is in sequence array
    //if true
        //return true
  // if false
        //return false


function isValidSubsequence(array,sequence){
 let arrIdx=0;
 let seqIdx =0;
 while(arrIdx<array.length && seqIdx <sequence.length){
   if(array[arrIdx]===sequence[seqIdx]){
     seqIdx++;
     arrIdx++;
   }
 }
 return seqIdx ===sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]))


//will need to traverse subsequence and sequence.
//subsequence also needs to have the same order of integers from sequence
//in progress

//test
>>>>>>> fe38f630f3d7624e0b07a6ae51bbec0dafd3be23
