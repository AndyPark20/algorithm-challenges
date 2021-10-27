var merge = function (nums1, m, nums2, n) {
//check if the number for m and n is greater than 0,
  //if the number is not greater than 0, return empty array
//looop thru each nums1 and nums2, and if the value at each index is greater than 0, then push the number in the
//empty array that we created.
let totalArray = m+n
let array =[];
for (let i=0;i<totalArray;i++){
  if(nums1[i]===0){
    nums1.splice(i)
    array =nums1;
  }
}

for (let i=0;i<totalArray;i++){
  if(nums2[i]!==0){
    debugger;
    array.push(nums2[i])
  }

}

console.log(array)

};

var nums1 =[1, 2, 3, 0, 0, 0]
var m=3
var nums2 =[2, 5, 6]
var n=3



console.log(merge(nums1,m,nums2,n))
