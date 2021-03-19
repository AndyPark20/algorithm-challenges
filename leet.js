
//Write a function that accepts an array of strings. Return the longest string.
/* example : function longest(value){

}

value =['andy','jim','Jennifer', 'Christopher']

output: 'Christopher';

*/


const longest =(array) =>{
  //declare a variable and assign an empty string
  //use forEach method to loop the array around
  // use a conditional to check if the current value length is longer than the previous value that is stored in the variable
  // if is longer, then assign it to the variable.

  let longestString ='';
  const check =array.map(values=>{
    if(values.length >longestString.length){
      longestString=values;
    }
  })
  return longestString;
  // for (let i=0;i<array.length;i++){
  //   if (array[i].length> longestString.length){
  //     longestString = array[i]
  //   }
  // }
  // return longestString;
}

const value = ['andy', 'jim', 'Jennifer', 'Christopher', 'MISSISSIPPI RIVER']
console.log(longest(value))
