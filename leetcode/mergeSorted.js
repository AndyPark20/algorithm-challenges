var merge = function (nums1, m, nums2, n) {
//check if the number for m and n is greater than 0,
  //if the number is not greater than 0, return empty array
//looop thru each nums1 and nums2, and if the value at each index is greater than 0, then push the number in the
//empty array that we created.

for (let i=0;i<nums1.length;i++){
  debugger;
  if(nums1[i]===0){
    nums1.splice(i,1)
  }
}
console.log(nums1)
};

var nums1 =[1, 2, 3, 0, 0, 0]
var m=3
var nums2 =[2, 5, 6]
var n=3



console.log(merge(nums1,m,nums2,n))
