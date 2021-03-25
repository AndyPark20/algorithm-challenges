

//OUTPUT: return in military time (24hr)
//INPUT: a string in 12 hour format



function militaryTime(s){

  //Convert string into an array
  //Make a selected element on the hour and return a copy of that selected array.
  //join the selected array into a string
  //convert that string into a number and add 12
  // use splice method to add and replace the current hour listed on the string.

  //taking the hour string and coverting it to military time
  const stringConvert = s.split('');
  const selectedElement =stringConvert.slice(0,2)
  const joinSelectedElement =selectedElement.join('')
  const convertToNumber = parseInt(joinSelectedElement)
  let addNumber = convertToNumber + 12;
  let numberToString =''
  if(addNumber ===24){
    numberToString='00';
  }else{
    numberToString= addNumber.toString();
  }

  //adding the converted military hour time to the rest of the string and also delete PM and AM
  const mainElement= stringConvert.splice(2)
  mainElement.unshift(numberToString);
  console.log(mainElement)
  const finalResult =mainElement.join('')
  console.log(finalResult)




}

console.log(militaryTime('12:05:45PM'))
