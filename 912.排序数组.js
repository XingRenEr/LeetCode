/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    recursive(0, nums.length - 1);

    function recursive(l, r) {
        if (l >= r) return;
        const index = partition(l, r);
        recursive(l, index - 1);
        recursive(index + 1, r);
    }
    function partition(l, r) {
        const base = nums[l];
        let p = l + 1;
        let q = r;
        while (p <= q) {
            while (nums[p] < base) p++;
            while (nums[q] > base) q--;
            if (p <= q) {
                [nums[p], nums[q]] = [nums[q], nums[p]];
                p++;
                q--;
            }
        }
        [nums[l], nums[q]] = [nums[q], nums[l]];
        return q;
    }

    return nums;
};
// @lc code=end

