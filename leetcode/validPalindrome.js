


var isPalindrom = function(s){
  var removedString = s.toLowerCase().replace(/[^a-z]+/g, "");
  var reversedString = removedString.split("").reverse().join("");
  if(removedString === reversedString) return true;
  return false;
}


var s=" ";

console.log(isPalindrom(s))
