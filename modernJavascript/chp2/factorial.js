function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n-1)
}

for (var i = 1; i < 10; i++) {
  console.log(i + "! = " + factorial(i))
}