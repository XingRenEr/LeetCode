/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    let length = nums.length;
    
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        if (hash[target - num] != undefined) return [hash[target - num], i];
        hash[num] = i;
    }
};
// @lc code=end

nums = [2,7,11,15], target = 9;
res = twoSum(nums, target);
console.log(res);