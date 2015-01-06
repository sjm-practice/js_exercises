/*
An algorithm to find the best possible profit for a given day. Where
that day's stock prices are stored in an array, the array index
value being the number of minutes past opening trade time (9:30am).
*/
function optimumBuySell(dayStockPrices) {
  var maxProfit;
  var purchaseInstructions = 'invalid price list';

  for (var i = 0; i < dayStockPrices.length; i++) {
    if (typeof dayStockPrices[i] !== 'undefined') {

      // find a stock sale price, then check against all stock sale prices
      // that occur after that one
      for (var j = i+1; j < dayStockPrices.length; j++) {

        if (typeof dayStockPrices[j] !== 'undefined') {
          // have found two established prices, now see if they are the best gain for the day
          if (dayStockPrices[j] - dayStockPrices[i] > maxProfit || typeof maxProfit === 'undefined') {
            maxProfit = dayStockPrices[j] - dayStockPrices[i];
            purchaseInstructions = "Buy at minute: " + i +
                                  "\nSell at minute: " + j +
                                  "\nFor best gain of: " + maxProfit;
          }
        }
      }
    }
  }

  // not comletely necessary to do this check, but pointing out if there was no gain or loss.
  if (maxProfit <= 0) {
    purchaseInstructions = 'no money to be made today.';
  }

  return purchaseInstructions;
}

var stockPricesD1 = [];
stockPricesD1[4] = 400;
stockPricesD1[10] = 410;
stockPricesD1[15] = 485;
stockPricesD1[50] = 390;
stockPricesD1[120] = 440;
stockPricesD1[300] = 480;
stockPricesD1[330] = 380;
stockPricesD1[340] = 420;

var stockPricesD2 = [];
stockPricesD2[2] = 400;
stockPricesD2[5] = 410;
stockPricesD2[7] = 485;

var stockPricesD3 = [];
stockPricesD3[1] = 500;
stockPricesD3[4] = 490;
stockPricesD3[6] = 485;
stockPricesD3[8] = 465;

console.log('DAY1\n' + optimumBuySell(stockPricesD1) + '\n');
console.log('DAY2\n' + optimumBuySell(stockPricesD2) + '\n');
console.log('DAY3\n' + optimumBuySell(stockPricesD3) + '\n');

