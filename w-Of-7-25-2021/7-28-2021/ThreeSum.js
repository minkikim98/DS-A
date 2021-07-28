// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Flawed Solution; does not eliminate duplicates
const threeSum = function (nums) {
    const map = {};
    const res = [];

    nums.forEach((num, index) => {
        if (map[num])
            map[num].push(index);
        else
            map[num] = [index];
    });

    for (let i = 0; i < nums.length - 2; i++) {
        const firstNum = nums[i];
        for (let j = i + 1; j < nums.length - 1; j++) {
            const secondNum = nums[j];
            const neededNum = -1 * (firstNum + secondNum);

            if (map[neededNum]) {
                map[neededNum].forEach(index => {
                    if (index > j)
                        res.push([firstNum, secondNum, neededNum]);
                });
            }
        }
    }
    return res;
};