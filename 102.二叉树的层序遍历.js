/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
/* var levelOrder = function(root) {
    const queue = [root];
    const res = [];

    let len, temp;
    while (queue[0]) {
        len = queue.length, temp = [];
        for (let i = 0; i < len; i++) {
            root = queue.shift();
            root.left && queue.push(root.left);
            root.right && queue.push(root.right);
            temp.push(root.val);
        }
        res.push(temp);
    }
    return res;
}; */

var levelOrder = function(root) {
    let res = [];
    function dfs(root, level = 0) {
        if (!root) return;
        if (root.left) dfs(root.left, level + 1);
        if (root.right) dfs(root.right, level + 1);
        if (!res[level]) res[level] = [];
        res[level].push(root.val);
    }
    dfs(root);
    return res;
}
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
        Nodes.push(node.left = arr[i] ? new TreeNode(arr[i]) : arr[i])
        i += 1
        if (i == arr.length) return root
        Nodes.push(node.right = arr[i] ? new TreeNode(arr[i]) : arr[i])
        i += 1
        if (i == arr.length) return root
    }
}

const root = createTree([3,9,20,null,null,15,7]);
console.log(levelOrder(root));