// linear search is that , find a exact index of value searching step by step from a array
// now find a index of the value into array by linear searching.

let arr = [12, 32, 22, 80, 50];

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, 80));

//  Time complexity is == O(n)
