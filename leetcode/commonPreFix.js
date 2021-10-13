//Input: strs = ["flower","flow","flight"]
//Output: "fl"


var longestCommonPrefix = function (strs) {

  let preFix =strs[0];

  if(strs.length ===0){
    return "";
  }

  for (let i=1;i<strs.length;i++){
    debugger;
    while(strs[i].indexOf(preFix)!==0){
      preFix = preFix.slice(0,preFix.length-1);
    }
  }
return preFix;

}

let strs = ["flight","floight","flooed"]

console.log(longestCommonPrefix(strs))
