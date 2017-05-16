// The basic gist is that you take the last element in the list and call that
// the pivot. Everything that's smaller than the pivot gets put into a "left" list
// and everything that's greater get's put in a "right" list. You then call
// quick sort on the left and right lists independently (hence the recursion.)
// After those two sorts come back, you concatenate the sorted left list,
// the pivot, and then the right list (in that order.) The base case is when you
// have a list of length 1 or 0, where you just return the list given to you

function quickSort(nums) {
  if (nums.length < 2) { return nums };

  var pivot = nums.splice(nums.length - 1, 1);
  var leftArray = [];
  var rightArray = [];

  nums.forEach(function(num) {
    num < pivot ? leftArray.push(num) : rightArray.push(num);
  });

  return quickSort(leftArray).concat(pivot, quickSort(rightArray));
}

module.exports = quickSort;
