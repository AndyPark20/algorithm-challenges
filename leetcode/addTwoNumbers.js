
function addTwoNumbers(arr1,arr2){
  let convertedArr1 ='';
  let convertedArr2 ='';

  for (let i=0;i<arr1.length;i++){
    convertedArr1+=arr1[i];
  }

  for (let z=0;z<arr2.length;z++){
    convertedArr2+=arr2[z];
  }
  let combinedNumber=((parseInt(convertedArr1) + parseInt(convertedArr2)).toString()).split('');
  console.log(combinedNumber)

}

addTwoNumbers([1,2,3],[4,8,9])
