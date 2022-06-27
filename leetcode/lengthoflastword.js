//split the characters into array
// loop thru the array
// if the index of the valid word is larger than previous than find the length of the larger word


var lengthOfLastWord = function (s) {
  let convertArray = s.split(' ')
  let count =0;
  for (let i=0;i<convertArray.length;i++){
    if(convertArray[i] !=='' && i>count){
      count =i;
    };
  };
  return convertArray[count].length
};

console.log(lengthOfLastWord("luffy is still joyboy"));
