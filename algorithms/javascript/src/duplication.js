const mergeSort = require('../src/merge-sort.js');

const anyDuplicated = (arr) => {
  const sorted = mergeSort(arr);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1 ]) { return sorted[i] };
  }
}
arr = [5, 8, 6, 7, 14, 6, 8]
console.log(anyDuplicated(arr))
