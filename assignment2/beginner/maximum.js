//? Write a function to return maximum number between a,b,c

function maximumUsingIF(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= c) return b;
  return c;
}

function maximumUsingMATH(a, b, c) {
  return Math.max(a, b, c);
}
