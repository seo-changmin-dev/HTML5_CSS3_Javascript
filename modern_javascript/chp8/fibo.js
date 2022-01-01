function fibo(n) {
  if(n<2) return n;
  if(!(n in fibo)) {
    fibo[n] = fibo(n-1) + fibo(n-2);
  }

  return fibo[n];
}

for(let i = 0; i < 20; i++) {
  console.log(i + ':' + fibo(i));
}