/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        const digit1 = parseInt(arr1[i]) || 0;
        const digit2 = parseInt(arr2[i]) || 0;
        if (digit1 === digit2) continue;
        return digit1 > digit2 ? 1 : -1;
    }
    return 0;
};
// @lc code=end

const version1 = "1.01"
const version2 = "1.001"
compareVersion(version1, version2)