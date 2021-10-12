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
      let samePreFix ={};
      let count =0;
      for (let i=0;i<strs.length;i++){
        for (let z=0;z<strs[i].length;z++){
          if(strs[i][z]===valueTocompare[count] && strs[i][z+1]=== valueTocompare[count+1]){
            if(samePreFix[valueTocompare[count]] && samePreFix[valueTocompare[count+1]]){
              z++;
              count++;
              samePreFix[valueTocompare[count]]++;
            }else{
              samePreFix[valueTocompare[count]]=1;
            }
          }
        }
      }
      return samePreFix;
};

let strs = ["flower","flight","flowed"];

console.log(longestCommonPrefix(strs))
