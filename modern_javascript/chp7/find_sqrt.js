function approximate_sqrt(a) {
  let x_n = (a > 1.0) ? a : 1.0;

  let precision = 1e-10;
  let diff = x_n;
  do {
    let upcoming_x_n = x_n - (Math.pow(x_n, 2) - a) / (2*x_n);
    diff = Math.abs((x_n - upcoming_x_n) / x_n);
    x_n = upcoming_x_n;
  } while (diff > precision);

  return x_n;
}

console.log(approximate_sqrt(5));