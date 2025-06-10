let arr = [1, 2, 3, 4, 5];
let folding_times = 3;
//Folding array
const foldingArray = (arr, n) => {
  for (let i = 1; i <= n; i++) {
    if (arr.length < 2) {
      console.log('cannot fold further');
      return arr;
    }
    if (arr.length == 2) {
      return arr[0] + arr[1];
    }
    let m = Math.floor(arr.length / 2);
    let s = 0;
    let e = arr.length - 1;
    while (s !== m || e !== m) {
      arr[s] = arr[s] + arr[e];
      arr.pop(e);
      s++;
      e--;
    }
  }
  return arr;
};
console.log(foldingArray(arr, folding_times));
