


var isPalindrom = function(s){
  var removedString = s.toLowerCase().replace(/[^a-z]+/g, "");
  var reversedString = removedString.split("").reverse().join("");
  return removedString;
}


var s="A man, a plan, a canal: Panama"

console.log(isPalindrom(s))
