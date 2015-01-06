/*
An algorithm to find the best possible profit for a given day. Where
that day's stock prices are stored in an array, the array index
value being the number of minutes past opening trade time (9:30am).
*/
function optimumBuySell(dayStockPrices) {
  var maxProfit;
  var purchaseInstructions = 'invalid price list';

  console.log('times: ', Object.keys(dayStockPrices));
  console.log('num prices: ', dayStockPrices.length);

  for (var i = 0; i < dayStockPrices.length; i++) {
    if (typeof dayStockPrices[i] !== 'undefined') {
      for (var j = i+1; j < dayStockPrices.length; j++) {
        if (typeof dayStockPrices[j] !== 'undefined') {
          if (dayStockPrices[j] - dayStockPrices[i] > maxProfit) {
            maxProfit = dayStockPrices[j] - dayStockPrices[i];
            purchaseInstructions = "Buy at minute: " + i +
                                  " Sell at minute: " + j +
                                  " For best gain of: " + maxProfit;
          }
        }
      };
    };
  };

  return purchaseInstructions;
}

var stockPrices = [];
stockPrices[4] = 400;
stockPrices[10] = 410;
stockPrices[15] = 485;
stockPrices[50] = 390;
stockPrices[120] = 440;
stockPrices[300] = 480;
stockPrices[330] = 380;
stockPrices[340] = 420;

var fewerStockPrices = [];
fewerStockPrices[2] = 400;
fewerStockPrices[5] = 410;
fewerStockPrices[7] = 485;

console.log(optimumBuySell(fewerStockPrices));