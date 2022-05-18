var maxProfit = function(prices) {
    let left = 0; // buying
    let right = 1;  // selling
    let maxProfit = 0;
    
    while (right < prices.length) {
        // is the transaction profitable
        if (prices[left] < prices[right]) {
            let profit  = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
            right++;
        } else {
            left = right;
            right++;
        }
    }
    return maxProfit;
};