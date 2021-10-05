

//Find the smallest and largest integers withoiut using any javascript built in methods

let arr =[1,2,4,5,6,7,8,10,11,12,13];
let initial = arr[0];
let smallIntial =null;

function findMinMax(arr){
  for (let i=0;i<arr.length;i++){
    if(arr[i] >initial){
      initial =arr[i]
    }else{
      smallIntial = arr[i];
    }
  }
  return `${initial}, ${smallIntial}`
}

console.log(findMinMax(arr))
