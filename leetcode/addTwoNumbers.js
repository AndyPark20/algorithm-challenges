
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
  let convertStringToNumber = combinedNumber.map(Number);
  let finalResult = convertStringToNumber.reverse();
  return finalResult;

}

console.log(addTwoNumbers([2,4,3],[5,6,4]));
