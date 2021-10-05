

function sortedSquaredArray(array) {
  // Write your code here.
  // Create a variable called squaredArray and assign an empty array;
  //Use the sort() initially, to sort the array in ascending order
    // Loop thru the sorted array
      //Use pow method to square each values at index of the array.
      //push the squared value into the squaredArray variable and return it.

  let sortedArray = array.sort();
  let squaredArray=[];
  for (i=0;i<sortedArray.length;i++){
    squaredArray.push(Math.pow(sortedArray[i],2))
  }
  return squaredArray;
}

console.log(sortedSquaredArray([4,1,2,19,-1]))
