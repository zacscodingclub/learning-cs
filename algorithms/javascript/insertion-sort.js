// Time Complexity: O(n^2),In-place,stable
// Very useful for sorting nearly sorted array, very fast and effective for small size arrays
// Worst case: Array is reverse sorted, Best case: Array is already sorted (O(n) time)

function insertionSort(nums) {
  // loop through entire array
  for(let i = 0; i < nums.length; i++) {
    // set a temporary variable which is the current element to be examined
    let tmp = nums[i];
    // set the index to be compared to the current element so that it only
    // looks through the previously sorted elements
    let j = i - 1;

    // loop through the sorted portion of the array backwards (starting with the j'th element)
    for(j; j >= 0 && nums[j] > tmp; j--) {
      // if j isn't negative and the j'th element > current element, this will
      // swap j'th element to current element index position
      nums[j + 1] = nums[j];
    }
    //
    nums[j + 1] = tmp;
  }

  return nums;
}

module.exports = insertionSort;
