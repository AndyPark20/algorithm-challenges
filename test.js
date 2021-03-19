
let url ="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=627"

//create a function named changeUrlResolution.
//within the function determine the minimum index number that we would like to keep.
//Create a variable and assign the index number for width and height.
// h=107
// w=100
//Write a conditional if the w===100  or Stop here.

function smallValue(num1, num2){
  if(num1 > num2){
    return num2;
  }else{
    return num1;
  }
}



var heightLocation=url.indexOf('h=')
var slicedUrl=url.slice(0,heightLocation)

var customResolution ='h=1440&w=2500';
slicedUrl+=customResolution;
console.log(slicedUrl)
