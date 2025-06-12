let a = 123215;
let rs = a.toString(2);
console.log(rs);
rs = rs.split('');
const bits = rs.reduce((sum, num) => {
  if (num === '1') {
    sum++;
  }
  return sum;
});
console.log(bits);
