// write a function to reverse a string

function reverse(str) {
  return str.split('').reverse().join('');
}

function Palindrome(str) {
  let ls = str.split('').reverse().join('');
  return ls === str;
}

function PalindromeUsingIF(str) {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}

let str = 'hello';
console.log(PalindromeUsingIF(str));
