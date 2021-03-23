

//Output is going to return an integer with 6 decimal places after dividing by the total length of the array
// Each integer represents negative, positive, and zero
// Input is elements in an array with integer value (will Only count one value that has positive, negative, or zero)

function plusMinus(arr){
  //Create a variable and assign an object with neg, pos, and 0 as property with initial value of 0
  // Create a variable and assign an empty array
  // Create a variable and assign 0
  //loop thru the array and assign the value as property and assign value of 1
  // add condition if the next value is in the array, incremenet 1 else just leave it.
  // Loop thru the object and retrieve the value and divide that by the length of the original arr.
  // use .toFixed() to 6 decimal places
  // push the integer into the variable that has empty array assigned.
  // console log to see if the answer is correct,
  // if so return the integer



  let compareObj={'neg':0,'pos':0,'0':0};
  let finalArray=[];
  let number =0;
  for (let i=0; i<arr.length; i++){
    if(Math.sign(arr[i])=== -1){
      compareObj['neg']++;
    }else if(Math.sign(arr[i])=== 1){
      compareObj['pos']++;
    }else if(Math.sign(arr[i])=== 0){
      compareObj['0']++;
    }
  }
  for (const keys in compareObj){
    let divisionResult= compareObj[keys] / arr.length;
    let finalNumber = divisionResult.toFixed(6)
    finalArray.push(finalNumber);
  }
  return finalArray;

}

console.log(plusMinus([0, 0, -1, 1, 1,]))
