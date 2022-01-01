function quick_sort(arr) {
  if(arr.length <= 1) return arr;

  let mid = arr[0];
  let left = [], right = [];

  for(let i = 1; i < arr.length; i++) {
    arr[i] < mid ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [].concat(quick_sort(left), mid, quick_sort(right));
}

let a = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5];
console.log(quick_sort(a));