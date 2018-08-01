const nums = [3, 7, 1, 5, 9, 2];
const almostSortedNums = [34, 1, 2, 3, 4, 5, 6, 7, 8];
const sortedNums = [1, 2, 3, 4, 5, 6, 7, 8];
const revNums = [8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    if (swapped === false) {
      return arr;
    }

    console.log('running the loop!');
    swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(nums));
// console.log(bubbleSort(almostSortedNums));
// console.log(bubbleSort(sortedNums));
console.log(bubbleSort(revNums));
