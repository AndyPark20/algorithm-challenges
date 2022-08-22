

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


  let numbers =0;
  for (let i=string.length-1;i>=0;i--){
    debugger;
  if(romanNumerals[string[i]]<romanNumerals[string[i-1]] || romanNumerals[string[i]] === romanNumerals[string[i-1]] || !romanNumerals[string[i-1]]){
     numbers+=romanNumerals[string[i]];
    }else{
        numbers+=romanNumerals[string[i]]-romanNumerals[string[i-1]];
    }

  }
  return numbers;
  
  //In progress
  // let numbers =0;
  // let romanNumbers =[...string];
  // for (let i=0;i<romanNumbers.length;i++){
  //     if((romanNumbers[i] === 'I' && (romanNumbers[i + 1] === 'V' || romanNumbers[i + 1] === 'X'))){
  //        numbers+=romanNumerals[romanNumbers[i + 1]] - romanNumerals[romanNumbers[i]]
  //        i++;
  //     } else if ((romanNumbers[i] === 'X' && (romanNumbers[i + 1] === 'L' || romanNumbers[i + 1] === 'C'))){
  //       numbers+=romanNumerals[romanNumbers[i + 1]] - romanNumerals[romanNumbers[i]]
  //       i ++;
  //     } else if ((romanNumbers[i] === 'C' && (romanNumbers[i + 1] === 'D' || romanNumbers[i + 1] === 'M'))){
  //      numbers+=romanNumerals[romanNumbers[i + 1]] - romanNumerals[romanNumbers[i]]
  //        i++;
  //     }else if(!romanNumbers[i]){
  //       numbers;
  //     }else{
  //       numbers+=romanNumerals[romanNumbers[i]]
  //     }
  // }
  // return numbers;
}

s = "MCMXCIV"

console.log(guessNumber(s))
