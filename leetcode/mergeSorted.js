var merge = function (nums1, m, nums2, n) {
//check if the number for m and n is greater than 0,
  //if the number is not greater than 0, return empty array
//looop thru each nums1 and nums2, and if the value at each index is greater than 0, then push the number in the
//empty array that we created.

let array=[];

  if(m ===0 && n===0){
    return [];
  }
  for (let i=0;i<nums1.length;i++){
    if(nums1[i] >0){
      array.push(nums1[i])
    }
  }
  for (let z=0;z=nums2.length;z++){
    if(nums2[z]>0){
      array.push(nums2[z]);
    }
  }
  console.log(array);
};

var nums1 = [1, 2, 3, 0, 0, 0]
var m = 3
var nums2 = [2, 5, 6]
var n = 3

console.log(merge(nums1,m,nums2,n))
