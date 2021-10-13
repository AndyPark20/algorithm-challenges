//Input: strs = ["flower","flow","flight"]
//Output: "fl"


var longestCommonPrefix = function (strs) {

  let preFix =strs[0];
  let preFixCharacter ="";

  for(let i=1;i<strs.length;i++){
    for (let z=0;z<preFix.length;z++){
      if(strs[i].indexOf(preFix[z])>-1 && !preFixCharacter.includes(preFix[z])){
        preFixCharacter+=preFix[z];
      }else{
        break;
      }
    }
  }
  return preFixCharacter
}

let strs = ["flight","fliod","flight"]

console.log(longestCommonPrefix(strs))
