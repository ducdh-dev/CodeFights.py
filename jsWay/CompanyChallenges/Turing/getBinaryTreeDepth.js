// const arr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5]
//
// function getDepth(length) {
//   let depth = 0
//   while (length > 0) {
//     depth++
//     length = Math.floor(length / 2)
//   }
//   return depth
// }
//
// console.log(Math.ceil(Math.log(arr.length + 1) / Math.log(2)))
//
// console.log(getDepth(arr.length))

class TreeNode {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0
  }

  const leftDepth = maxDepth(root.left)
  console.log('leftDepth', leftDepth)
  console.log('root.left', root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}

// Example usage:
// Construct the binary tree [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log('duclog root', root)

// Calculate the maximum depth of the binary tree
const depth = maxDepth(root)
console.log('Maximum depth of the binary tree:', depth)
