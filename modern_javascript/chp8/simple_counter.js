function make_counter() {
  let count = 0;
  return f;

  function f() {
    return count++;
  }
}

let t = make_counter();
let tt = make_counter();

console.log(t());
console.log(t());
console.log(t());
console.log(tt());
console.log(tt());
console.log(tt());
