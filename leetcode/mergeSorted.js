var merge = function (nums1, m, nums2, n) {

let array=[];
  for (let i=0;i<m;i++){
    array.push(nums1[i])
  }

  for (let i=0;i<n;i++){
    array.push(nums2[i])
  }

  array.sort((a,b)=>a-b);
  return array;
};

var nums1 =[1, 2, 3, 0, 0, 0]
var m=3
var nums2 =[2, 5, 6]
var n=3



console.log(merge(nums1,m,nums2,n))
