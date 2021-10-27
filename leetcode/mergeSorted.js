var merge = function (nums1, m, nums2, n) {

  nums1.push(...nums2);

};

var nums1= [1, 2, 3, 0, 0, 0]
var m= 3
var nums2=[2, 5, 6]
var n =3

console.log(merge(nums1,m,nums2,n))
