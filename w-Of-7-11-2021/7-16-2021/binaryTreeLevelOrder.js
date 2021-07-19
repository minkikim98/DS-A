// https://leetcode.com/problems/binary-tree-level-order-traversal/
// 7/16/2021

const levelOrder = root => {
    if (!root) return [];
    const Q = [root, -1];
    const ordered = [];

    let temp = [];

    while (Q.length > 0) {
        const currNode = Q.shift();

        if (currNode === -1) {
            ordered.push(temp);
            temp = [];
            if (Q.length > 0) Q.push(-1);
            continue;
        }

        temp.push(currNode.val);

        if (currNode.left) Q.push(currNode.left);
        if (currNode.right) Q.push(currNode.right);
    }
    return ordered;
};