const nums = [3, 5, 8, 1, 9, 4, 3, 9, 6];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr.pop();
  const lessThan = [];
  const greaterThan = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lessThan.push(arr[i]);
    } else {
      greaterThan.push(arr[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

console.log(quickSort(nums));
