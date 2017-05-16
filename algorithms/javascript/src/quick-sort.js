// The basic gist is that you take the last element in the list and call that 
// the pivot. Everything that's smaller than the pivot gets put into a "left" list
// and everything that's greater get's put in a "right" list. You then call
// quick sort on the left and right lists independently (hence the recursion.)
// After those two sorts come back, you concatenate the sorted left list,
// the pivot, and then the right list (in that order.) The base case is when you
// have a list of length 1 or 0, where you just return the list given to you

function quickSort(nums) {
  return nums;
}

module.exports = quickSort;
