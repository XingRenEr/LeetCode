/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';

    for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digit1 = parseInt(num1[i]) || 0;
        const digit2 = parseInt(num2[j]) || 0;
        const digitsSum = digit1 + digit2 + carry;
        carry = Math.floor(digitsSum / 10);
        sum = `${digitsSum % 10}${sum}`;
    }

    return sum;
};
// @lc code=end

