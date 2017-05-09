function bubbleSort(nums) {
  var swapped = true;
  while(swapped) {
    swapped = false;
    for (var i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]) {
        let tmp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = tmp;
        swapped = true;
      }
    }
  }
  return nums;
}

module.exports = bubbleSort;
