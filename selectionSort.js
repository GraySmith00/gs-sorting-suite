const nums = [3, 5, 8, 1, 9, 4, 3, 9, 6];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort(nums));
