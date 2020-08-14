class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLength=0;
        if (s.length()==0) return 0;
        HashMap<Character,Integer> hmap = new HashMap<Character, Integer>();
        for (int left = 0, right =0; right<s.length(); right++){
            if (hmap.containsKey(s.charAt(right))) {
                left = Math.max(left, hmap.get(s.charAt(right)));
            }

            maxLength = Math.max(maxLength, right-left+1);
            hmap.put(s.charAt(right), right+1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
      int result= lengthOfLongestSubstring('zshbecsz');
      System.out.println(int);
    }
}