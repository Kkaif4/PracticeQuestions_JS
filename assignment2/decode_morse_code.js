//require morse npm package
const morse = require('morse');
const str = '.... . -.--   .--- ..- -.. .';
// store the output of decode function which returns the decoded string of the morse code input
let rs = morse.decode(str);
console.log(rs);
