// let arr = [
//   { name: 'one', grade: 'A' },
//   { name: 'two', grade: 'B' },
//   { name: 'Three', grade: 'A' },
// ];
// const grp = arr.reduce((acc, stud) => {
//   const { grade, name } = stud;
//   if (!acc[grade]) {
//     acc[grade] = [];
//   }
//   acc[grade] += name + ',';
//   return acc;
// }, {});
// console.log(grp);

// let ls = num.toString();
// let n = ls.length;
// let newLs = '';
// for (let i = n - 1; i >= 0; i--) {
//   newLs += ls[i];
// }
// console.log(newLs);
// if (ls === num) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
function hello(data) {
  let ls = data.toString();
  let n = ls.length;
  let newLs = '';
  for (let i = n - 1; i >= 0; i--) {
    newLs += ls[i];
  }
  if (newLs === ls) {
    console.log('yes it is palindrome');
  } else {
    console.log('no');
  }
}
let num = '';
hello(num);
