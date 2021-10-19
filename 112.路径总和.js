/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return targetSum === root.val;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

// var hasPathSum = function(root, targetSum) {
//     if (!root) return false;
//     const stack = [[root, root.val]];
//     let pathSum;

//     while (stack.length) {
//         [root, pathSum] = stack.pop();
//         if (!root.left && !root.right && pathSum == targetSum)  return true;
//         if (root.right) stack.push([root.right, pathSum + root.val]);
//         if (root.left) stack.push([root.left, pathSum + root.val]);
//     }
//     return false;
// };
// @lc code=end

/* 
 * 树的遍历: 
 * DFS(前/中/后序), BFS
 * DFS:
 * 1. 递归
 * 2. 迭代
 * 递归在系统中是用栈实现的,
 * 迭代即手写栈
 */

/* 
 * DFS的递归解法
 * 步骤:
 * 1. 递归函数的参数(子树的根节点)和返回值(因题而异)
 * 2. 终止条件(当前指针为空)
 * 3. 单层递归的逻辑
 *    前序遍历: 中 -> 左 -> 右
 *    中序遍历: 左 -> 中 -> 右
 *    后序遍历: 左 -> 右 -> 中
 */

/* 
 * DFS的迭代解法
 * 前序遍历:
 * 1. 定义栈 stack = []; 结果数组 res = [];
 * 2. 根节点入栈
 * 3. 当栈非空, 则循环执行以下逻辑
 *    弹出并获取栈顶元素 root
 *    root 为空, 则 continue
 *    root.val 存入数组
 *    root.right root.left 依次入栈
 * 4. 返回 res
 * 
 * 后序:
 *    root.val 存入数组
 *    root.left root.right 依次入栈
 * 4. 返回 res.reverse()
 * 
 * 中序:
 * 访问的顺序和处理顺序不同, 代码需要重写
 * 1. 定义栈 stack = []; 结果数组 res = [];
 * 2. 当 root 非空 || 栈非空, 则循环执行以下逻辑
 *    若 root 非空, 则 root 入栈, root = root.left
 *            否则, 弹出并获取栈顶元素 root, root.val 存入数组, root = root.right
 * 3. 返回 res
 */