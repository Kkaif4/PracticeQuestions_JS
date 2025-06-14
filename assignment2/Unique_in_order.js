let string = 'aaabbbccdaaabb';
let str = string.split('');
let s = 0;
let k = 1;
for (let i = 0; i < str.length; i++) {
  if (str[s] === str[k]) {
    str.splice(k, 1);
    i--;
  } else {
    s++;
    k++;
  }
}

console.log(str);
