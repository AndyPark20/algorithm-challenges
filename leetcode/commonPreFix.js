//Input: strs = ["flower","flow","flight"]
//Output: "fl"


var longestCommonPrefix = function (strs) {

  let preFix =strs[0];
  let preFixCharacter ="";
  let preFixCharacterIndex=0;

  for (let i=0 ;i<preFix.length;i++){
    for (let z=1; z<strs.length;z++){
      if ((strs[z].indexOf(preFix[i]) > -1 && i >= 0) || (strs[z].indexOf(preFix[i]) > -1 && i === preFixCharacterIndex+1)){
        preFixCharacter+=preFix[i]
      }
    }
  }
};

let strs = ["flower","flooed","flight"]

console.log(longestCommonPrefix(strs))
