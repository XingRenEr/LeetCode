/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let pre = 0;
    let cur = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        temp = pre;
        pre = cur;
        cur = temp + pre;
    }
    return cur;
};
// @lc code=end

