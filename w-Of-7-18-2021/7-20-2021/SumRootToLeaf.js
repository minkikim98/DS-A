// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 7/20/2021

const sumNumbers = function (root) {
    if (!root) return 0;

    let allNumbers = [];
    sumHelper(root, 0, allNumbers);

    return allNumbers.reduce((acc, curr) => acc + curr);
};

const sumHelper = (root, currNum, allNumbers) => {
    if (!root.left && !root.right) {
        allNumbers.push(currNum * 10 + root.val);
    }
    if (root.left) {
        sumHelper(root.left, currNum * 10 + root.val, allNumbers);
    }
    if (root.right) {
        sumHelper(root.right, currNum * 10 + root.val, allNumbers);
    }
}