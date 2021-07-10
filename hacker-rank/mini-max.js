

//Output: return maximum and minimum integers that can be created from summing 4 of the 5 elements in the array
//Input:  5 integers in an array.

function minMax(arr){
  //Create a variable and assign an empty array (smallest, and largest)
  //Create a variable and assign number 0 (smallest)
  //create a variable and assign a number 0 (largest)
  //Use .sort() method on arr1 which will give an ordered list of an arry from smallest to largest. (assign it to a variable)
  // loop thru the sorted array and add the number to the small array variable.
  //Use .reverse() method on the variable that contains .sort() method of the arr1
  // loop thru the sorted array and add the number to the large array variable.

  const emptyArray=[];
  let smallNumber=0;
  let largeNumber=0;
  arr.sort((a, b) => a-b)
  for(let i=0;i<arr.length-1;i++){
    smallNumber+=arr[i];
  }
  if(smallNumber !==0){
    arr.sort((a,b)=>b-a);
    for (let x = 0; x < arr.length - 1; x++) {
      largeNumber += arr[x];
    }
  }
  console.log(smallNumber, largeNumber)



}

console.log(minMax([7, 69,2, 221, 8974]))
