

//Output is going to return an array that has Alice score first and Bob score as second. (ex: [1,1])
//Input: 2 arrays that corresponds to Alice and Bob's score (each array has a legnth of 3 (scores))
// What we know about the rules of the game: if the score is higher than the other persons, it is considered 1.
// What we know about the rules of the game: If the score is a tie, then no points are rewarded.

function triplets(arr1, arr2){
  // create a variable and assign an empty object
  // create a variable and assign an empty array
  //loop thru arr1.
  // use the array index from arr1 to go thru arr2
  //compare arr1 index to arr2 index and if arr1 <arr2 (Alice vs Bob)
      //arr1 at variable will be 1++;
  //if arr1 > arr2
     // arr2 at variable will be 1++'
  // if arr1 === arr2
     // return nothing;

  // after loop and conditionals are done, use for in to push properties in the object into the variable that has the empty array

  const candidateObj={'Alice':0, 'Bob':0};
  const finalResult =[];
  for (let i=0; i<arr1.length; i++){
    if (arr1[i] === arr2[i]) {
      candidateObj['Alice'];
      candidateObj['Bob'];
    }else if(arr1[i]>arr2[i]){
      candidateObj['Alice']++;
    }else{
      candidateObj['Bob']++;
    }

  }

  for(const keys in candidateObj){
    finalResult.push(candidateObj[keys]);
  }

  return finalResult;

}

console.log(triplets([5,6,7], [3,6,10]))
