


function bestDayStocks(prices){
  let stockHistory={};

  for(let i=0;i<prices.length;i++){
    if(!stockHistory[i]){
      stockHistory[i]=prices[i];
    };
  }

}


let prices=[7,1,5,3,6,4];

console.log(bestDayStocks(prices))
