// https://leetcode.com/explore/interview/card/top-interview-questions-hard/120/sorting-and-searching/859/
// 7/15/2021

/* 
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    Example 3:

    Input: nums1 = [0,0], nums2 = [0,0]
    Output: 0.00000
    Example 4:

    Input: nums1 = [], nums2 = [1]
    Output: 1.00000
    Example 5:

    Input: nums1 = [2], nums2 = []
    Output: 2.00000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Brute Force Solution

const findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;

    if (totalLength % 2 === 0) {
        let lower = totalLength / 2 - 1;
        const lowerMedian = findCombinedIndexAt(nums1, nums2, lower);
        const higherMedian = findCombinedIndexAt(nums1, nums2, lower + 1);

        console.log(lowerMedian, higherMedian);
        return (findCombinedIndexAt(nums1, nums2, lower) + findCombinedIndexAt(nums1, nums2, lower + 1)) / 2;


    } else {
        let mid = Math.floor(totalLength / 2);
        return findCombinedIndexAt(nums1, nums2, mid);
    }
};

const findCombinedIndexAt = (nums1, nums2, index) => {
    let curr = 0, p1 = 0, p2 = 0;

    while (curr < index) {
        if (p1 >= nums1.length) {
            p2++;
            curr++;
            continue;
        }
        if (p2 >= nums2.length) {
            p1++;
            curr++;
            continue;
        }

        if (nums1[p1] < nums2[p2]) p1++;
        else p2++;
        curr++;
    }
    if (p1 >= nums1.length) return nums2[p2];
    if (p2 >= nums2.length) return nums1[p1];
    return nums1[p1] < nums2[p2] ? nums1[p1] : nums2[p2];
}