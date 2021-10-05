

function sortedSquaredArray(array) {
  // Write your code here.
  // Create a variable called squaredArray and assign an empty array;
  //Use the sort() initially, to sort the array in ascending order
    // Loop thru the sorted array
      //Use pow method to square each values at index of the array.
      //push the squared value into the squaredArray variable and return it.
//  DO NOT MODIFY THE INPUT ARRAY~~~!!!

  let squaredArray=[];
  const newArray = [...array];
  for (i=0;i<newArray.length;i++){
    if(newArray[i]>=0){
      squaredArray.push(Math.pow(newArray[i], 2))
    }else{
      squaredArray.unshift((Math.pow(newArray[i],2)))
    }

  }
  return squaredArray.sort((a,b)=>a-b);
}

console.log(sortedSquaredArray([1, -2, -3, 5, 6, 8, -9]))
