


var plusOne = function(digits){
  //loop thru the array and add each value at index into an empty string.
    //convert the string into number.
    //Add one
    //create a new array containing all the digits as value at index.

    let stringNumber ='';
    for (let i=0;i<digits.length;i++){
      stringNumber+=digits[i]

    }
    console.log(stringNumber)
}


console.log(plusOne([1,1,5,6]))
