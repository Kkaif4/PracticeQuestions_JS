let str = 'hello one two world';
let ignore = 'one one two two';

//create a set of words to ignore , convert it to lower case and split them
const toIgnore = new Set(ignore.toLowerCase().split(' '));
// make the original string to lower case. split them and apply map function
const newStr = str
  .toLowerCase()
  .split(' ')
  .map((word, index) => {
    //check if index is equal to 0 or if ignore words contains the word.
    if (index === 0 || !toIgnore.has(word)) {
      // convert first letter of the word and concat with the remaining word
      return word[0].toUpperCase() + word.slice(1);
    } else {
      //else return the word
      return word;
    }
    //join the array of words before returning
  })
  .join(' ');

console.log(newStr);
