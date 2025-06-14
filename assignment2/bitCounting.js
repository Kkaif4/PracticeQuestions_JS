let a = 4;
//convert a integer into binary format
let rs = a.toString(2);
// create a array of the binary numbers
rs = rs.split('');
//count the bits available in the binary array
const bits = rs.reduce((sum, num) => {
  if (num === '1') {
    sum++;
  }
  return sum;
});
console.log(bits);
