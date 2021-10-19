/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    const stack = [root], res = [];

    while (stack.length) {
        root = stack.pop();
        if (!root) continue;
        res.push(root.val);
        stack.push(root.left);
        stack.push(root.right);
    }

    return res.reverse();
};


// @lc code=end

var postorderTraversal = function (root) {
    const res = [];
    dfs(root);

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }
    return res;
}