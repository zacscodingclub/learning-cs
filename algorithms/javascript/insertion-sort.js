// Time Complexity: O(n^2),In-place,stable
// Very useful for sorting nearly sorted array, very fast and effective for small size arrays
// Worst case: Array is reverse sorted, Best case: Array is already sorted (O(n) time)

function insertionSort(nums) {
  // loop through entire array
  for(let i = 0; i < nums.length; i++) {
    // loop through all elements less than i'th element
    for(let j = 0; j < i; j++) {
      if(nums[i] < nums[j]) {
        // remove the i'th element from the array
        let spliced = nums.splice(i, 1)[0];
        // add i'th element back into array at the j'th position
        // essentially swapping their places.
        nums.splice(j, 0, spliced);
      }
    }
  }
  return nums;
}

module.exports = insertionSort;
