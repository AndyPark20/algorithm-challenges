

//Output is going to return an integer with 6 decimal places after dividing by the total length of the array
// Each integer represents negative, positive, and zero
// Input is elements in an array with integer value (will Only count one value that has positive, negative, or zero)

function plusMinus(arr){
  //Create a variable and assign an empty object
  // Create a variable and assign an empty array
  // Create a variable and assign 0
  //loop thru the array and assign the value as property and assign value of 1
  // add condition if the next value is in the array, incremenet 1 else just leave it.
  // Loop thru the object and retrieve the value and divide that by the length of the original arr.
  // use .toFixed() to 6 decimal places
  // push the integer into the variable that has empty array assigned.
  // console log to see if the answer is correct,
  // if so return the integer



  let compareObj={};
  let finalArray=[];
  let number =0;
  for (let i=0; i<arr.length; i++){
    compareObj['negative'] = 0;
    compareObj['positive'] = 0;
    compareObj['0'] = 0;
    if(Math.sign(arr[i])===-1){
      console.log('negative', arr[i])
      compareObj['negative']++;
    }else if(Math.sign(arr[i])===1){
      console.log('positive', arr[i])
      compareObj['positive']++;
    }else if(Math.sign(arr[i])===0){
      compareObj['0']++;
    }
  }
  console.log(compareObj)
  // for (const keys in compareObj){
  //   let divisionResult= compareObj[keys] / arr.length;
  //   let finalNumber = divisionResult.toFixed(6)
  //   finalArray.push(finalNumber);
  // }
  // return finalArray;

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1,-6]))
