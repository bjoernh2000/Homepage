export function bubbleSortAnimation(array) {
  const colors = [];
  bubbleSort(colors, array);
  return colors;
}

function bubbleSort(colors, array) {
  let indexOfSortedPosition = array.length;
  while (indexOfSortedPosition > 0) {
    let didSwapHappen = false;
    let left = 0;
    let right = left + 1;
    while (left < indexOfSortedPosition - 1) {
      if (array[left] > array[right]) {
        didSwapHappen = true;
        let temp = array[right];
        array[right] = array[left];
        array[left] = temp;
        colors.push([left, right, true]);
      } else {
        colors.push([left, right, false]);
      }
      left++;
      right++;
    }
    if (!didSwapHappen) {
      return;
    }
    indexOfSortedPosition--;
  }
}
