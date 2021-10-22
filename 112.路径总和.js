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

/* 方法一: 递归 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return targetSum === root.val;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

/* 方法二: 迭代 */
/* var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const stack = [[root, root.val]];
    let pathSum;

    while (stack.length) {
        [root, pathSum] = stack.pop();
        if (!root.left && !root.right && pathSum == targetSum)  return true;
        if (root.right) stack.push([root.right, pathSum + root.right.val]);
        if (root.left) stack.push([root.left, pathSum + root.left.val]);
    }
    return false;
}; */
// @lc code=end

/*
 * 树的遍历:
 * DFS(前144/中94/后序145), BFS
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
 * 2. 终止条件(当前指针为空/当前节点为叶子节点)(因题而异)
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

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
/* 生成 BST */
function BST() {
    this.root = null;
}
BST.prototype.insert = function (val) {
    var node = new TreeNode(val, null, null);
    if (this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (val < current.val) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}
function createBST(arr) {
    var bst = new BST();
    for (var i = 0; i < arr.length; i++) {
        bst.insert(arr[i])
    }
    return bst.root;
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

const root = createTree([1, 2])
console.log(hasPathSum(root, 2))