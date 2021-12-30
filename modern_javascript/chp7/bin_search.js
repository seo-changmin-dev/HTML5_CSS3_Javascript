let a = [2, 4, 7, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86, 92, 99];

function binary_search(a, x) {
  // Consider Not Sparse Array
  let l = 0;
  let r = a.length - 1;
  let m = parseInt((l + r) / 2);

  while (l <= r) {
    m = parseInt((l + r) / 2);

    if (a[m] === x) return m;
    else {
      if (a[m] < x) {
        l = m+1;
      } else { // a[m] > x
        r = m-1;
      }
    } 
  }

  return null;
}

console.log(binary_search(a, 101));