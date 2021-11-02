/*
 * @lc app=leetcode.cn id=1451 lang=javascript
 *
 * [1451] 重新排列句子中的单词
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    const buckets = [];
    const words = text.split(' ');
    let ret = '';
    words[0] = words[0].toLowerCase();
    for (const word of words) {
        buckets[word.length] ? buckets[word.length].push(word) : (buckets[word.length] = [word]);
    }
    for (const list of buckets) {
        list && list.forEach(word => ret += word + ' ');
    }
    return ret[0].toUpperCase() + ret.slice(1, -1);
};
// @lc code=end

text = "Leetcode is cool"
console.log(arrangeWords(text))