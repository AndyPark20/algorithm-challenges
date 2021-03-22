
function arraySum(array){
  //the main output should return an integer summing up all the numbers inside the array
  //It will take one single array as a parameter
  //Create a variable that is going to store a number
  // Loop thru the array and add the values into the variable that has been declared to store the number
  //return variable after the loop has ended.

  let arr=0;
  for (let i=0;i<array.length;i++){
    arr+=array[i];
  }
  return arr;

}

console.log(arraySum([1, 2, 3, 4, 10, 11]))
