

// Input is a long array of elements that consists of numbers.
// Output the sum of integers of the array of elements.

function bigSum(ar){
  //Create a variable and assign the number 0 as an initializer
  // loop thru the ar and for every index at ar add it to the variable.
  // console log to see if the ouput is the total sum of the array of elements
  // if so return the integer

  let totalSum=0;
  for (let i=0 ;i <ar.length; i++){
    totalSum +=ar[i]
  }
  return totalSum;

}

console.log(bigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
