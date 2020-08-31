export function mergeSortAnimation(array) {
  const helperArray = array.slice();
  const colors = [];
  let left = 0;
  let right = array.length - 1;
  mergeSort(helperArray, array, left, right, colors);
  return colors;
}

function mergeSort(helperArray, array, left, right, colors) {
  let mid = Math.floor((left + right) / 2);
  if (left >= right) {
    return;
  }
  mergeSort(array, helperArray, left, mid, colors);
  mergeSort(array, helperArray, mid + 1, right, colors);
  merge(helperArray, array, left, mid, right, colors);
}

function merge(helperArray, array, left, mid, right, colors) {
  let counter = left;
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    colors.push([i, j]);
    console.log(helperArray[i], helperArray[j]);
    if (helperArray[i] <= helperArray[j]) {
      colors.push([counter, helperArray[i]]);
      array[counter] = helperArray[i];
      counter++;
      i++;
    } else {
      colors.push([counter, helperArray[j]]);
      array[counter] = helperArray[j];
      counter++;
      j++;
    }
  }
  while (i <= mid) {
    console.log(helperArray[i]);
    colors.push([i, i]);
    colors.push([counter, helperArray[i]]);
    array[counter] = helperArray[i];
    counter++;
    i++;
  }
  while (j <= right) {
    console.log(helperArray[j]);
    colors.push([j, j]);
    colors.push([counter, helperArray[j]]);
    array[counter] = helperArray[j];
    counter++;
    j++;
  }
}
