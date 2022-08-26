// Binary is that we search a index of array element by dividing a array instead of step by step searching.
//here array must be sorted for binary searching.

const values = [2, 4, 6, 8, 9, 11, 44, 55, 56, 60, 65];

function binary(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.round((left + right) / 2);
    console.log("mid", mid);
    if (arr[mid] == value) {
      return mid;
    }
    if (value < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
  //if have not match return -1
  //when left is garter than right break while loop
}

console.log(binary(values, 60));

// Time complexity == 0(log root/n)
