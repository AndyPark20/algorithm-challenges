


var isPalindrom = function(s){
  var removedString = s.toLowerCase().replace("[^0-9a-zA-Z]", "");
  var reversedString = removedString.split("").reverse().join("");
  if(removedString === reversedString) return true;
  return false;
}


var s="P0";

console.log(isPalindrom(s))
