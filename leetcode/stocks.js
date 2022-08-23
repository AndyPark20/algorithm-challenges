


function bestDayStocks(prices){
  let smallest =0;
  let largest =1;

  for(let i=0;i<prices.length;i++){
    if(prices[i]<=smallest){
      smallest=prices[i];
    }else{
      largest=prices[i]
    }
  }
  return largest-smallest;
}


let prices=[7,1,5,3,6,4];

console.log(bestDayStocks(prices))
