/*
An algorithm to find the best possible profit for a given day. Where
that day's stock prices are stored in an array, the array index
value being the number of minutes past opening trade time (9:30am).

NOTE: this version is optimized, now only needing to pass through
the loop once. This strategy is acceptable, if you allow the
assumption you can buy and sell in the same minute, to avert a loss.
[which wasn't stated in the original problem]
*/
function optimumBuySell(dayStockPrices) {
  var maxProfit = 0;
  var minPriceTime;
  var purchaseInstructions = 'invalid price list';

  for (var i = 0; i < dayStockPrices.length; i++) {
    if (typeof dayStockPrices[i] !== 'undefined') {

      // keep track of lowest price throughout the day
      if (typeof minPriceTime === 'undefined' || dayStockPrices[i] < dayStockPrices[minPriceTime]) {
        minPriceTime = i;
      }

      // see if current time's price, selling with current known min price
      // sets a new max profit for the day (if so remember that)
      if (dayStockPrices[i] - dayStockPrices[minPriceTime] >= maxProfit) {
        maxProfit = dayStockPrices[i] - dayStockPrices[minPriceTime];
        purchaseInstructions = "Buy at minute: " + minPriceTime +
                              "\nSell at minute: " + i +
                              "\nFor best gain of: " + maxProfit;
      }
    }
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

