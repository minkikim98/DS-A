// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    if (intervals.length === 0) return [[]];

    intervals.sort((i1, i2) => i1[0] - i2[0]);

    const res = [];

    let rangeStart = intervals[0][0], rangeEnd = intervals[0][1];
    for (const interval of intervals) {
        const currStart = interval[0], currEnd = interval[1];
        if (currStart <= rangeEnd) {
            rangeEnd = Math.max(currEnd, rangeEnd);
        } else {
            res.push([rangeStart, rangeEnd]);
            rangeStart = currStart;
            rangeEnd = currEnd;

        }
    }
    res.push([rangeStart, rangeEnd]);
    
    return res;
};