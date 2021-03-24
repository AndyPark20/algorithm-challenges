

//OUTPUT:Integer that represents how many tallest candles are in the array;
//INPUT: An array representing with elements that repsents unit height of each candle

function birthday(candles){
    //Get the Max value from the array
    //Loop thru the array and check to see if there is any element in the array that matches the max value,
    //If it does, push it into an empty array.
    //Use .length to determine how many values are in the array
    //Return it

  const array=[];
  const maxNumber =Math.max(...candles);
  for(let i =0;i<candles.length;i++){
    if(maxNumber === candles[i]){
      array.push(candles[i]);
    }
  }
  console.log(array.length);
}

console.log(birthday([4,4,1,3]))
