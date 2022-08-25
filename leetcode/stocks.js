


function bestDayStocks(prices){
  let stockHistory={};

  for(let i=0;i<prices.length;i++){
    if(!stockHistory[i]){
      stockHistory[i]=prices[i];
    };
  }

  //Loop thru the object and find the smallest day with smallest value and subtract it from largest day with largest value

}


let prices=[7,1,5,3,6,4];

console.log(bestDayStocks(prices))
