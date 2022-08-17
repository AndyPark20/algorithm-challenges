

function moveZero(arr){
  /***********Solution #1***********/
  // let zeroArray=[];
  // let nonZeroArray=[];
  // let finalArray=[];
  // for (let i=0;i<arr.length;i++){
  //     if(arr[i]===0){
  //         zeroArray.push(arr[i]);
  //     }else{
  //         nonZeroArray.push(arr[i]);
  //     }        
  // }
  // nonZeroArray.sort((a,b)=>a-b);
  // finalArray.push(...nonZeroArray, ...zeroArray);

  // return finalArray;

  /**********Solution #2 **********/
  let lastNonZeroIndex=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[lastNonZeroIndex] = arr[i];
      lastNonZeroIndex++;
    }
  }
  arr[arr.length-1] =0;
  arr[arr.length-2]=0;
  
}

let nums = [1,4,23,55,0,66,3,0];



console.log(moveZero(nums));