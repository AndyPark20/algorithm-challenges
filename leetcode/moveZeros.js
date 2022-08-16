

function moveZero(arr){
  /***********Solution #1***********/
  // let zeroArray=[];
  // let nonZeroArray=[];
  // let finalArray=[];
  // for (let i=0;i<arr.length;i++){
  //     if(arr[i]===0){
  //         zeroArray.push(arr[i]);
  //     }else if (arr[i] !==0){
  //         nonZeroArray.push(arr[i]);
  //     }        
  // }
  // nonZeroArray.sort((a,b)=>a-b);
  // finalArray.push(...nonZeroArray, ...zeroArray);

  // return finalArray;

  /**********Solution #2 **********/
  let highestValue =1;
  let lowerValue =0;
  let shuffled = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=highestValue){
      
    }
  }
  
}

let nums = [1,4,23,55,0,66,3,0];


console.log(moveZero(nums));