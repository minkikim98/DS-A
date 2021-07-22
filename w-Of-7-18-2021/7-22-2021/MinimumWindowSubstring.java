// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/838
// Solution inspired by KingSizeBeast's solution, which is the top comment on zjh08177's solution

class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> remainingChars = new HashMap<Character, Integer>();
        
        for (char c : t.toCharArray()) {
            Integer charCount = remainingChars.get(c);
            if (charCount != null) 
                remainingChars.put(c, charCount + 1);
            else 
                remainingChars.put(c, 1);
        }
        
        int start = 0, end = 0, minStart = 0, minLength = Integer.MAX_VALUE, remaining = t.length();
        
        while (end < s.length()) {
            char currEndChar = s.charAt(end);
            Integer currEndCharCount = remainingChars.get(currEndChar);
            if (currEndCharCount != null) {
                if (currEndCharCount > 0)
                    remaining--;
                remainingChars.put(currEndChar, currEndCharCount - 1);
            }
            end++;
            
            while (remaining == 0) {
                if (end - start < minLength) {
                    minStart = start;
                    minLength = end - start;
                }
                
                char currStartChar = s.charAt(start);
                Integer currStartCharCount = remainingChars.get(currStartChar);
                if (currStartCharCount != null) {
                    if (currStartCharCount >= 0)
                        remaining++;
                    remainingChars.put(currStartChar, currStartCharCount + 1);
                }
                
                start++;
            }
        }
        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);
    }
}