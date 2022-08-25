


function bestDayStocks(prices){
  let maxValue=0;

  for (let i=0;i<prices.length;i++){
    for(let k=i+1;k<prices.length;k++){
      maxValue = Math.max(maxValue, prices[k]-prices[i]);
    }
  }
  return maxValue;
}


let prices=[7,1,5,3,6,4];

console.log(bestDayStocks(prices))
