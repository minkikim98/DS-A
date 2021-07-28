// https://leetcode.com/problems/container-with-most-water/
// Idea to shorten window based on which end was shorter derived from StefanPochmann's solution

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let start = 0, end = height.length - 1;
    let maxWater = 0;

    while (start < end) {
        maxWater = Math.max(maxWater, (end - start) * Math.min(height[start], height[end]));

        if (height[start] > height[end])
            end--;
        else
            start++;
    }

    return maxWater;
};