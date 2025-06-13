// function titleCase(str, exception) {
//   let ls = str.toLowerCase();
//   let words = ls.split(' ');
//   if (!exception) {
//     const newWords = words.map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     });
//     return newWords.join(' ');
//   }
//   if (exception) {
//     exception.toLowerCase();
//     let exp = exception.split(' ');
//     const updatedWords = words.map((word) => {
//       if (word === words[0]) {
//         word = word[0].toUpperCase() + word.slice(1);
//         console.log('returned: ', word);
//         return word;
//       }
//       return exp.map((expWord) => {
//         if (word !== expWord && word !== words[0]) {
//           console.log('returned: ', word[0].toUpperCase() + word.slice(1));
//           return word[0].toUpperCase() + word.slice(1);
//         } else {
//           console.log('returned: ', expWord);
//           return word;
//         }
//       });
//     });
//     console.log('returned: ', updatedWords);
//     return updatedWords.join(' ');
//   }
// }
// let str = 'kraken and me and he is dablue';
// let exp = 'is ';
// console.log(titleCase(str, 'and me'));

let str = 'hello one two world';
let ignore = 'one one two two';

let toIgnore = new Set(ignore.toLowerCase().split(' '));
const newStr = str
  .toLowerCase()
  .split(' ')
  .map((item, index) => {
    if (index === 0 || !toIgnore.has(item)) {
      return item[0].toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  })
  .join(' ');

console.log(newStr);
