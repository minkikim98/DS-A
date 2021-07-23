// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/
// Solution inspired by wyattliu

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const maxVal = Number.POSITIVE_INFINITY;

const coinChange = function (coins, amount) {
    const memo = new Array(amount + 1).fill(0);
    return coinHelper(coins, amount, memo);
};

const coinHelper = (coins, rem, memo) => {
    if (rem < 0) return -1;
    if (rem === 0) return 0;
    if (memo[rem] !== 0) return memo[rem];

    let min = maxVal;
    for (const coin of coins) {
        const res = coinHelper(coins, rem - coin, memo);
        if (res < min && res >= 0)
            min = res + 1;
    }

    memo[rem] = min === maxVal ? -1 : min;
    return memo[rem];
}

// Alternate solution without maxVal

const coinChange = function (coins, amount) {
    const memo = new Array(amount + 1).fill(0);
    return coinHelper(coins, amount, memo);
};

const coinHelper = (coins, rem, memo) => {
    if (rem < 0) return -1;
    if (rem === 0) return 0;
    if (memo[rem] !== 0) return memo[rem];

    let min = -1;
    for (const coin of coins) {
        const res = coinHelper(coins, rem - coin, memo);
        if (res === -1) continue;
        if (min === -1)
            min = res + 1;
        else
            min = Math.min(min, res + 1);
    }

    memo[rem] = min;
    return memo[rem];
}