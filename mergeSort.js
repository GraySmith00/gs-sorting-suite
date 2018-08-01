const nums = [3, 5, 8, 1, 9, 4, 3, 9, 6];
// const nums = [7, 2, 4, 8];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      const num = left.shift();
      merged.push(num);
    } else {
      const num = right.shift();
      merged.push(num);
    }
  }
  return [...merged, ...left, ...right];
}

console.log(mergeSort(nums));
