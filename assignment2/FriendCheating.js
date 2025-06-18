function cheating(n) {
  let totalSum = (n * (n + 1)) / 2;
  let res = [];
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let newSum = totalSum - a - b;
      if (a * b === newSum) {
        res.push([a, b]);
        res.push([b, a]);
      }
    }
  }
  return res;
}

let n = 26;
console.log(cheating(n));
