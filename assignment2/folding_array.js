//Folding array

const foldingArray = (arr, n) => {
  //for loop to iterate over number of times to fold the array
  for (let i = 1; i <= n; i++) {
    //returns is arrays length is shorter than 2
    if (arr.length < 2) {
      console.log('cannot fold further');
      return arr;
    }
    // array length is 2 then return the addition of both elements
    if (arr.length == 2) {
      return arr[0] + arr[1];
    }
    //create indexing, middle, start and end
    let m = Math.floor(arr.length / 2);
    let s = 0;
    let e = arr.length - 1;
    //while start and end is not equal to mid run the while loop
    while (s !== m || e !== m) {
      //add the first and end element and assign it to s position in array
      arr[s] = arr[s] + arr[e];
      // pop the last element
      arr.pop(e);
      // start index moves froward and end index reduce by one
      s++;
      e--;
    }
  }
  // return array
  return arr;
};
let arr = [1, 2, 3, 4, 5];
let n = 2;
const rs = foldingArray(arr, n);
console.log(rs);
