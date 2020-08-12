class MaxSumSubArrayOfSizeK {
  public static int findMaxSumSubArray(int k, int[] arr) {
    int max = Integer.MIN_VALUE;
    int start = 0;
    int curSum = 0;
    for (int i = 0; i < arr.length ; i++){
      curSum += arr[i];
      if (i >=k-1){
        if (curSum>max) max = curSum;
        curSum -= arr[start];
        start++;
      }
    }
    return max;
  }
}