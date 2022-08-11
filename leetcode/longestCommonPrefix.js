//create an empty object to store the letters of each word in array
//loop thru the main array
//loop thru inner array
//if the character is not found in the empty object go ahead and assign it as key value pair
//loop thru the object and if there are characters with the same number as the length of the original array, populate the letters

function longestCommonPrefix(arr) {
  let baseValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    while (arr[i].indexOf(baseValue) !== 0) {
        baseValue ? baseValue = baseValue.slice(0, baseValue.length - 1) : ""
    }
  }
  return baseValue;
}

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));

//is the value at index 0 found in index 1?
//if so at what index of the string does it end?
//take that and iterate to the next word and is that value found in the last index?
// if so up to what index?
