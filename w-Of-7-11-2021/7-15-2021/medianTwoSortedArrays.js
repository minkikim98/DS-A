// https://leetcode.com/explore/interview/card/top-interview-questions-hard/120/sorting-and-searching/859/
// 7/15/2021
// Incomplete

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Edge case: nums1 or nums2 null

const findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;

    let curr = 0, p1 = 0, p2 = 0;
    if (totalLength % 2 === 0) {
        let lower = totalLength / 2 - 1;

        while (curr < lower) {
            if (nums1[p1] < nums2[p2]) p1++;
            else p2++;
            curr++;
        }

        let a, b;
        if (nums1[p1] < nums2[p2]) {
            a = nums1[p1];
            p1++;
        }
        else {
            a = nums2[p2];
            p2++;
        }
        if (nums1[p1] < nums2[p2]) {
            b = nums1[p1];
            p1++;
        }
        else {
            b = nums2[p2];
            p2++;
        }
        return (a + b) / 2;


    } else {
        let mid = Math.floor(totalLength / 2);
        return findCombinedIndexAt(nums1, nums2, mid);
    }
};

const findCombinedIndexAt = (nums1, nums2, index) => {
    console.log(index);
    const totalLength = nums1.length + nums2.length;
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
    console.log(p1, p2, curr)
    return nums1[p1] < nums2[p2] ? nums1[p1] : nums2[p2];
}