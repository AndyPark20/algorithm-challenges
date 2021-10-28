var removeDuplicates = function (nums) {
  const filtered= nums.filter((value,index)=>index !== nums.indexOf(value))
  console.log(filtered)
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))
