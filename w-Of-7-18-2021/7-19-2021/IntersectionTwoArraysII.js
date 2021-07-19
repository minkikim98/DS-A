// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
// 7/19/2021

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    if (nums2 > nums1)
        return intersect(nums2, nums1);

    let counts = {};

    for (const num of nums1) {
        if (counts[num]) counts[num]++;
        else counts[num] = 1;
    }


    let numCounts = Object.keys(counts).length;
    const res = [];
    for (const num of nums2) {
        if (numCounts <= 0) return res;

        if (counts[num]) {
            res.push(num);
            if (--counts[num] === 0) {
                numCounts--;
                delete counts[num];
            }


        }
    }
    return res;
};