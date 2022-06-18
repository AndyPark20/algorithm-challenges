var plusOne = function (digits) {
  //loop thru the array and add each value at index into an empty string.
  //convert the string into number.
  //Add one
  //create a new array containing all the digits as value at index.

  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 9, 9, 9]));
