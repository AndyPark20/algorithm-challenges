


var plusOne = function(digits){
  //loop thru the array and add each value at index into an empty string.
    //convert the string into number.
    //Add one
    //create a new array containing all the digits as value at index.

    let stringNumber ='';
    let finalArray=[];
    for (let i=0;i<digits.length;i++){
      stringNumber+=digits[i]

    }
    console.log(BigInt(stringNumber))
    let addOneFinalNumber = (Number(stringNumber) + 1).toString();

    for (let k=0;k<addOneFinalNumber.length;k++){
      finalArray.push(Number(addOneFinalNumber[k]));
    }
    return finalArray;
}


console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
