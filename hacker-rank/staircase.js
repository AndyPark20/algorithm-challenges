

//Output: print out a staircase using # and spaces, height and base size should reflect integer n.
//Input: integer number reflecting the size of the height and the base.
// Cannot have spaces at the very last line of the staircase.

function stairCase(n){
  //loop thru the the number up to N which is going to control the number of columns.
  // will use repeat method
  // inside the repeat method the amount of empty space will be determined by n-i(current index)
  // this will be concatenated by another repeat() which will place # at the i index.

  let finalResult ='';
  for (let i=1;i<=n;i++){
    finalResult+=((' ').repeat(n-i)+ ('#').repeat(i)) +'\n';
  }
  console.log(finalResult);



}


console.log(stairCase(6))
