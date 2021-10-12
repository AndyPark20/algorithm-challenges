//Input: strs = ["flower","flow","flight"]
//Output: "fl"


var longestCommonPrefix = function (strs) {
  //create a variable that will have contain the first value string in the array
  //create another variable that will hold same characters found in each value of the array.
    //Loop thru the variable and also loop thru the array
      //if(the value at index of the second array is same as the value at the index of the original string)
        //add it to the variable that holds the same character string
      //if its not there, then loop out of the array

      let valueTocompare =strs[0];
      let samePreFix =[];
      let finalPreFix='';
      let count =0;
      for (let i=0;i<valueTocompare.length;i++){
        for(let z=1;z<strs.length;z++){
          if(strs[z].indexOf(valueTocompare[i])>-1){
            samePreFix.push(valueTocompare[i])
          }else{
            break;
          }
        }
      }
     for(let h=0;h<samePreFix.length;h++){
      if(samePreFix[h]===valueTocompare[count]){
        finalPreFix+=valueTocompare[count];
        count++;
      }
     }
     return finalPreFix;
};

let strs = ["cig","cag"]

console.log(longestCommonPrefix(strs))
