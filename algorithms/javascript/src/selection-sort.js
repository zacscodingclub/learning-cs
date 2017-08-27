function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = findIndexOfMin(arr, i);
    if (minIndex !== i) { swap(arr, i, minIndex)}
  }

  return arr;
}

function findIndexOfMin(arr, start) {
  let minIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) { minIndex = i };
  }

  return minIndex
}

function swap(arr, firstIndex, lastIndex) {
  const firstValue = arr[firstIndex];
  arr[firstIndex] = arr[lastIndex];
  arr[lastIndex] = firstValue;
}

module.exports = selectionSort;
