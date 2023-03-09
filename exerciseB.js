let value = 4;
let pattern = " ";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += j;
  }
  pattern += " ";
}
console.log(pattern);