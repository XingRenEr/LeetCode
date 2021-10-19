/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const stack = [root], res = [];

    while (stack.length) {
        root = stack.pop();
        if (!root) continue;
        res.push(root.val);
        stack.push(root.right);
        stack.push(root.left);
    }

    return res;
};

// @lc code=end

var preorderTraversal = function (root) {
    const res = [];
    dfs(root);

    function dfs(node) {
        if (!node) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    return res;
}