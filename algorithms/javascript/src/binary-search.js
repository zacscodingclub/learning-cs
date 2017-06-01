function binarySearch(arr, search) {
  if (typeof arr === "string") {
    arr = arr.split('');
  }

  let start = 0;
  let end = arr.length - 1;
  let guessPosition = parseInt((end - start)/2);
  const sortedArray = arr.sort();

  while (start != end) {
    if (sortedArray[guessPosition] < search) {
      start = guessPosition;
      guessPosition = start + Math.round((end - start)/2);
    } else if (sortedArray[guessPosition] > search) {
      end = guessPosition;
      guessPosition = start + parseInt((end - start)/2);
    } else {
      return true;
    }
  }

  return false;
}

module.exports = binarySearch;
