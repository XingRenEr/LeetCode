/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
    return heapSort(nums, k);
};

/* 方法一: 快排 */
function quickSort(nums, k) {
    recursive(nums, k, 0, nums.length - 1);
    return nums[nums.length - k];
}
function recursive(nums, k, left, right) {
    let index = partition(nums, left, right);
    if (index > nums.length - k) recursive(nums, k, left, index - 1);
    else if (index < nums.length - k) recursive(nums, k, index + 1, right);
}
function partition(nums, left, right) {
    let base = nums[left];
    let p = left + 1;
    let q = right;
    while (p <= q) {
        while (nums[p] < base) p++;
        while (nums[q] > base) q--;
        if (p <= q) {
            [nums[p], nums[q]] = [nums[q], nums[p]];
            // 交换值后两边各向中间推进一位
            p++;
            q--;
        }
    }
    // 修改基数的位置
    [nums[left], nums[q]] = [nums[q], nums[left]];
    return q;
}

/* 方法二: 堆排序 */
function heapSort(nums, k) {
    //建堆
    const len = nums.length;
    let curLen = len;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(nums, i, len);
    }
    //堆排序
    for (let j = len - 1; j >= len - k; j--) {
        [nums[0], nums[j]] = [nums[j], nums[0]];
        heapify(nums, 0, --curLen);
    }
    return nums[len - k];
}
function heapify(nums, x, curLen) {
    let l = 2 * x + 1,
        r = 2 * x + 2,
        largest = x;
    if (l < curLen && nums[l] > nums[largest]) largest = l;
    if (r < curLen && nums[r] > nums[largest]) largest = r;
    if (largest != x) {
        [nums[x], nums[largest]] = [nums[largest], nums[x]]
        heapify(nums, largest, curLen);
        // 建堆或堆排序过程中，若子节点发生改变，那么需要递归地调整子树
    }
}

// @lc code=end

let nums = [3, 2, 1, 5, 6, 4]
let k = 2
console.log(findKthLargest(nums, k));