export function quickSortAnimation(array) {
  const colors = [];
  let left = 0;
  let right = array.length - 1;
  quickSort(array, left, right, colors);
  return colors;
}

function quickSort(array, left, right, colors) {
  if (left < right) {
    let pi = partition(array, left, right);
    quickSort(array, left, pi - 1);
    quickSort(array, pi + 1, right);
  }
}

function partition(array, left, right) {
  let i = left - 1;
  let pivot = array[right];
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let temp = array[i + 1];
  array[i + 1] = array[right];
  array[right] = temp;
  return i + 1;
}
