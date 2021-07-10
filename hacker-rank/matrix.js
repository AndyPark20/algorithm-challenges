

//input is matrix consisting of arr[n][m] (n)--> horizontal(row) and m is vertical(columns)
//ouput an integer representing the difference between left diagonal matrix - right diagonal matrix

function matrix(arr){
  //Create a variable (left) and assign the number 0 to initialize it
  // Create a variable (right) and assign the number 0 to initialize it
  // Create a variable to store the final integer
  //loop thru the matrix and for left diagnal, obtain index 0,1,2 and add it to the variable for left
  // loop thru the matrix and for the right diagnal, obtina index, 2,1,0 and add it to the variable for right
  //use Math.abs to find the difference between left and right diagnal.

  let left =0;
  let right =0;
  let totalSum =0;
  for (let i=0;i<arr.length;i++){
    left+=arr[i][i]
  }
  for (let x=0 ; x<arr.length; x++){
    right +=arr[x][arr.length-1-x]
  }
  totalSum=Math.abs(left-right);
  return totalSum;
}

console.log(matrix(
[
[11, 2, 4],
[4, 5, 6],
[10, 8, - 12]
]
))
