// Step 1: Shopping cart
//
// You are building a checkout system for a shop which only sells apples, oranges and mangos.
//
// Apples = $0.60
// Oranges = $0.25
// Mangos = $1.50
//
// Create a system which which takes a list of items and outputs the total cost
// For example: [ Apple, Apple, Orange, Apple, Mango ] => $3.55
//
// Make reasonable assumptions about the inputs to your solution;
// for example, an array of strings or an array of objects
//
// Step 2: Discounts
//
// The shop decides to introduce three new offers:
//
// Apples = buy two or more and get all apples at 50% discount
// Oranges = 3 for the price of 2
// Mango = buy one, get one free
//
// Update your checkout functions accordingly to handle the various offers.
//
// 'Apple, Orange, Mango' => $2.35
// 'Apple, Orange, Apple' => $0.85
// 'Apple, Apple, Orange, Apple, Mango' => $2.65
// 'Apple, Apple, Orange, Apple, Mango, Apple, Mango' => $2.95
// 'Mango, Mango, Mango, Apple, Apple, Orange, Orange, Orange, Apple, Mango' => $4.40



var twoSum = function (nums, target) {
  // fast hashMap method
  // time: O(N) since looping once only. Space: O(N) since will scale to amount of elements
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap.hasOwnProperty(diff)) {
      return [hashMap[diff], i]
    } else {
      hashMap[nums[i]] = i;
    }
  }

  /*
  // slow method. two nested for loops.
  // time: O(N^2) since looping through twice. Space: O(1). No additional space
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }

  }
  */
  return [];
};
