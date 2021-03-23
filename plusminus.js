

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
  // concat the strings.
  // console log to see if the answer is correct,
  // if so return the integer



  let neg=0;
  let pos=0;
  let zero=0;
  let number =0;
  let finalString='';

  for (let i=0; i<arr.length; i++){
    if(arr[i]< 0){
      neg+=1
    }else if(arr[i]>0){
      pos+=1
    }else if(arr[i] === 0){
      zero+=1
    }
  }
  finalString+=(pos/arr.length).toFixed(6) + '\n' + (neg/arr.length).toFixed(6)+ '\n' + (zero/arr.length).toFixed(6);
  return finalString;
}

console.log(plusMinus([-4, 3, - 9, 0, 4, 1]))
