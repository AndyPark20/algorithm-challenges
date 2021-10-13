//Input: strs = ["flower","flow","flight"]
//Output: "fl"


var longestCommonPrefix = function (strs) {

  let preFix =strs[0];
  let preFixCharacter ="";
  let preFixCharacterIndex=null;

  for (let i=0 ;i<preFix.length;i++){
    for (let z=1; z<strs.length;z++){
      if(strs[z].indexOf(preFix[i]))
    }
  }
};

let strs = ["flower","flooed","flight"]

console.log(longestCommonPrefix(strs))
