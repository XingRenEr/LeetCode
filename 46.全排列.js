/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let path = [];
    let used = Array(nums.length).fill(false);
    backtrack();

    function backtrack() {
        if (path.length == nums.length) {
            // 深拷贝, 避免传引用
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            // skip used nums
            if (used[i]) continue;
            // add num to permutation, mark num as used
            path.push(nums[i]);
            used[i] = true;
            backtrack();
            // remove num from permutation, mark num as unused
            path.pop();
            used[i] = false;
        }
    }
    return res;
}

// @lc code=end

let nums = [1, 2, 3];
permute(nums);

/*
 * 回溯算法 (https://labuladong.gitee.io/algo/4/27/100/)
 * DFS 算法，暴力穷举算法，遍历决策树。
 * 思考 3 个问题：
 * 1. 路径：也就是已经做出的选择。
 * 2. 选择列表：也就是你当前可以做的选择。
 * 3. 结束条件：也就是到达决策树底层，无法再做选择的条件。
 * 回溯算法的框架：
 *
 * result = []
 * path = []
 * function backtrack():
 *     if 满足结束条件:
 *         result.add(path)
 *         return
 *
 *     for 选择 in 选择列表:
 *         筛选
 *         选择加入path
 *         backtrack()
 *         选择移出path
 *
 * 其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」
 */