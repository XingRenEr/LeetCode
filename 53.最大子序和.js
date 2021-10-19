/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = 0;
  let max = -Number.MAX_VALUE;

  nums.forEach((num) => {
    sum = Math.max(sum + num, num);
    max = Math.max(max, sum);
  })

  return max;
}

// @lc code=end

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(nums)

// 变体: 返回子数组
function maxSubArray(nums) {
  let sumL = sumR = maxL = maxR = 0;
  let sum = 0;
  let max = -Number.MAX_VALUE;

  nums.forEach((num, index) => {
    if (sum + num <= num) {
      sumL = index;
      sum = num;
    } else {
      sum = sum + num;
    }
    sumR = index;

    if (max <= sum) {
      max = sum;
      maxL = sumL;
      maxR = sumR;
    }
  })

  return nums.slice(maxL, maxR + 1);
}
