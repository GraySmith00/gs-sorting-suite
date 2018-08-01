const nums = [3, 5, 8, 1, 9, 4, 3, 9, 6];

function insertionSort(arr) {
  const sorted = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let currentNum = arr.shift();
    sorted.push(currentNum);
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i] < sorted[i - 1]) {
        [sorted[i], sorted[i - 1]] = [sorted[i - 1], sorted[i]];
      }
    }
  }
  return sorted;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertionSort(nums));
