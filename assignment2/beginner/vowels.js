let vowels = ['a', 'e', 'i', 'o', 'u'];

let str = 'HelloDostoKaiseHO';

function findVowels(str, vowels) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) count++;
  }
  return count;
}

console.log(findVowels(str, vowels));
