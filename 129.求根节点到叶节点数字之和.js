/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root, 0);

    function dfs(node, sum) {
        if (!node) return 0;
        sum = sum * 10 + node.val;
        if (!node.left && !node.right) return sum;
        return dfs(node.left, sum) + dfs(node.right, sum);
    }
};
// @lc code=end

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
/* 生成二叉树 */
const createTree = (arr) => {
    let root = new TreeNode(arr[0])
    let Nodes = [root]
    let i = 1
    for (let node of Nodes) {
        Nodes.push(node.left = new TreeNode(arr[i]))
        i += 1
        if (i == arr.length) return root
        Nodes.push(node.right = new TreeNode(arr[i]))
        i += 1
        if (i == arr.length) return root
    }
}

const root = createTree([1,2,3])
console.log(sumNumbers(root))