

function guessNumber(string) {
let romanNumerals={
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
  //Create a variable called numbers that will keep count as we iterate thru converted array;
  //create a variable called romanNumbers and store the converted string into array;
  //loop thru romanNumbers, and check if the value at index is a property in the romanNumerals object;
  //if it is a property, then add the number into numbers variable.
  let specialNumbers ={
    5:1,
    10:1,
    50:1,
    100:1,
    500:1,
    1000:1
  }

  let numbers =0;
  let romanNumbers =[...string];
  for (let i=0;i<romanNumbers.length;i++){
    if(specialNumbers.hasOwnProperty(romanNumbers[i]))){
      numbers+=romanNumerals[romanNumbers[i]];
    }
  }
  return numbers;
}
s = "IV"

console.log(guessNumber(s))
