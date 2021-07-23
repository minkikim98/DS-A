// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/
// 7/23/2021

class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][0];
        
        Arrays.sort(intervals, (i1, i2) -> Integer.compare(i1[0], i2[0]));
        
        List<int[]> res = new ArrayList<int[]>();
        
        int rangeStart = intervals[0][0], rangeEnd = intervals[0][1];
        for (int[] interval : intervals) {
            int currStart = interval[0], currEnd = interval[1];
            
            if (currStart <= rangeEnd)
                rangeEnd = Math.max(currEnd, rangeEnd);
            else {
                res.add(new int[]{rangeStart, rangeEnd});
                rangeStart = currStart;
                rangeEnd = currEnd;
            }
        }
        res.add(new int[]{rangeStart, rangeEnd});
        
        return res.toArray(new int[res.size()][]);
    }
}