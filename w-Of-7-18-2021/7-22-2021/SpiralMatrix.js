// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/828

// Solution heavily inspired by qwl5000's solution.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    if (!matrix) return [];

    const res = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let rowBegin = 0, rowEnd = numRows - 1, colBegin = 0, colEnd = numCols - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = colBegin; i <= colEnd; i++)
            res.push(matrix[rowBegin][i]);
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++)
            res.push(matrix[i][colEnd]);
        colEnd--;

        if (rowBegin <= rowEnd)
            for (let i = colEnd; i >= colBegin; i--)
                res.push(matrix[rowEnd][i]);
        rowEnd--;

        if (colBegin <= colEnd)
            for (let i = rowEnd; i >= rowBegin; i--)
                res.push(matrix[i][colBegin])
        colBegin++;
    }

    return res;
};