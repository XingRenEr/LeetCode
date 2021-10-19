/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {};
    var slow = 0;

    return s.split('').reduce((max, char, fast) => { // 每次迭代得到一个新的 max
        slow = map[char] + 1 > slow ? map[char] + 1 : slow; // map[char] 存在才移动 slow
        map[char] = fast;
        return Math.max(max, fast - slow + 1)
    }, 0);
};
// @lc code=end

var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    var slow = 0, fast = 0, max = 0;
    var map = {};
    const length = s.length;

    for (; fast < length; fast++) {
        if (map[s[fast]] != undefined && map[s[fast]] + 1 > slow) {
            slow = map[s[fast]] + 1;
        }
        map[s[fast]] = fast;
        max = (max > fast - slow + 1) ? max : fast - slow + 1;
    }
    return max;
};
var s = 'abba';
lengthOfLongestSubstring(s);