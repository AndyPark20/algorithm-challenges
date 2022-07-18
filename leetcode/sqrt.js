var mySqrt = function (x) {
  let sqrtNumber = Math.sqrt(x);
  let truncatedNumber = Math.trunc(sqrtNumber);
  return truncatedNumber;
};

console.log(mySqrt(8))
