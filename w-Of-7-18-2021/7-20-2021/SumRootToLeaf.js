// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 7/20/2021

const sumNumbers = function(root) {
	if (!root) return 0;
    
    const allNumbers = [];
   	sumHelper(root, 0, allNumbers);
    
	return allNumbers.reduce((acc, curr) => acc + curr);
};

const sumHelper = (root, currNum, allNumbers) => {
	if (!root.left && !root.right) 
		allNumbers.push(currNum * 10 + root.val);

    if (root.left) 
        sumHelper(root.left, currNum * 10 + root.val, allNumbers);

    if (root.right) 
        sumHelper(root.right, currNum * 10 + root.val, allNumbers);
}

// Alternate version, slighly more concise
const sumNumbers = function (root) {
    const allNumbers = [];
    sumHelper(root, 0, allNumbers);

    return allNumbers.reduce((acc, curr) => acc + curr, 0);
};

const sumHelper = (root, currNum, allNumbers) => {
    if (!root) return;

    if (!root.left && !root.right)
        allNumbers.push(currNum * 10 + root.val);

    sumHelper(root.left, currNum * 10 + root.val, allNumbers);
    sumHelper(root.right, currNum * 10 + root.val, allNumbers);
}