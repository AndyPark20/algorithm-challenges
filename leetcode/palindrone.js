

function checkPalindrome(num){
  //turn num into string and put it into an array;
    //make a copy of the array and reverse it
    //loop thru the first array, and if the value at index of the first array matches the value at index of second
    //array, then keep looping.
      //if at anypoint its different, return false

      let convertedString = num.toString();
      let convertedArray = [...convertedString];
      let copiedArray = [...convertedArray];
      let reversedArray =copiedArray.reverse();

      for (let i=0;i<convertedArray.length;i++){
          if(convertedArray[i] !== reversedArray[i]){
            return false;
          }
      }
  return true;
}

let test =121;

console.log(checkPalindrome(test))
