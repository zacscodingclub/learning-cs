// Time complexity is O(n log n).
// Space complexity a bit worse than
// The basic gist of merge sort is that you're going to take your big list, and first
// divide down in two half size lists and recursively call merge sort on those smaller
// list, which in turn will do the same.

function mergeSort(nums) {
  if (nums.length < 2) { return nums };

  var middle = parseInt(nums.length / 2);
  var leftArray = nums.slice(0, middle);
  var rightArray = nums.slice(middle, nums.length);

  // recursively split both the left and right arrays until they are 2 elements
  // length and merge them together using merge function
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  var sorted = [];

  // compare the first element in each array as long as both arrays still
  // have elements inside them
  while (leftArray.length && rightArray.length) {
    leftArray[0] <= rightArray[0] ? sorted.push(leftArray.shift()) : sorted.push(rightArray.shift())
  }

  // since the arrays may be unbalanced, finish pushing the remaining elements
  // from each array
  while (leftArray.length) {
    sorted.push(leftArray.shift());
  }

  while (rightArray.length) {
    sorted.push(rightArray.shift());
  }

  return sorted
}

module.exports = mergeSort;
