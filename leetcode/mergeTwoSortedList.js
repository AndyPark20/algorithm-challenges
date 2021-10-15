

var mergeTwoLists = function (l1, l2) {
  //use the concat method to merge the two array
    // Use the sort method to sort from smallest to largest number
  let copiedArray = l1.concat();
  let combinedArray = copiedArray.push(...l2);
  let sortedArray = combinedArray.sort((a,b)=>a-b);
  return sortedArray;
};

let arr1 =[1,2,3,4];
let arr2 = [1.5.6.7]
