/*
 * 数组
 */

const arr = new Array(5);
const arr2 = (new Array(7)).fill(1)

// unshift 添加元素到数组头部
arr.unshift(0)
// push 添加元素到数组尾部
arr.push(3)
// splice 添加元素到数组的任何地方
arr.splice(1,1,1)

// 删除数组头部元素
arr.shift()
// 删除数组尾部元素
arr.pop()

/*
 * Stack 栈
 */

// 只允许从尾部添加元素
// 只允许从尾部取出元素
// 栈就是限制只能用 push 来添加元素，同时只能用 pop 来移除元素的一种特殊的数组。

/*
 * Queue 队列
 */

// 只允许从尾部添加元素
// 只允许从头部取出元素
// 队列就是限制只能用 push 来添加元素，同时只能用 shift 来移除元素的一种特殊的数组。

/*
 * Link 链表
 */

function ListNode(val) {
    this.val = val
    this.next = null
}
const node = new ListNode(1)
node.next = new ListNode(2)

/*
 * 树、二叉树
 */

// 它可以没有根结点，作为一棵空树存在
// 如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
const treeNode = new TreeNode(1)