

const addSum = (arr) =>{
  const sum = arr.reduce((accum, currentValue) => accum + currentValue)
  return sum
}


console.log(addSum([1,1,3]))