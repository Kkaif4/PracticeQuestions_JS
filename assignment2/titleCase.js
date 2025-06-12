function titleCase(str, exception) {
  let ls = str.toLowerCase();
  let words = ls.split(' ');
  if (!exception) {
    const newWords = words.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return newWords.join(' ');
  }
  if (exception) {
    exception.toLowerCase();
    let exp = exception.split(' ');
    const updatedWords = words.map((word) => {
      if (word === words[0]) {
        word = word[0].toUpperCase() + word.slice(1);
        return word;
      }
      const update = exp.map((expWord) => {
        if (word !== expWord && word !== words[0]) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      });
      return update;
    });
    console.log(updatedWords);
    return updatedWords.join(' ');
  }
}
let str = 'kraken is daBlue';
let exp = 'kraken is ';
console.log(titleCase(str, exp));
