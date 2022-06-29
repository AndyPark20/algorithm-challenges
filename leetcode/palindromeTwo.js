

//Create a variable to add combine characters without spaces and commas
  //reverse the string to see if they match the un-reversed string


var isPalindrome = function(s) {
  let copiedString = s.split("");

  //remove commas
  for (let i=0;i<copiedString.length;i++){
    if (copiedString[i] === " ") {
      copiedString.splice(i, 1);
           console.log(copiedString);
    }
  }
      return copiedString.join('');
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
