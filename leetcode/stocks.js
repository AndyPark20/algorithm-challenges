


function bestDayStocks(prices){
  let priceByDays ={};
  for(let i=0;i<prices.length;i++){
    if(!priceByDays[prices[i]]){
      priceByDays[i]=price[i];
    };
  };
}


let prices=[7,1,5,3,6,4];

console.log(bestDayStocks(prices))
