// ! Question 5: Shopping Cart Calculations

const cartItems = [
  { name: 'T-shirt', price: 25, quantity: 2 },
  { name: 'Jeans', price: 60, quantity: 1 },
  { name: 'Sneakers', price: 80, quantity: 1 },
  { name: 'Hat', price: 15, quantity: 3 },
];

// ? A: calculate the total price of all items in the cart
const totalPrice = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log(totalPrice);

// ? B: find the expensive singal item
const costly = cartItems.reduce((cost, item) => {
  return Math.max(cost, item.price);
}, 0);
console.log(costly);

// ? C: count the total number of items in the cart
const totalItems = cartItems.reduce((total, item) => {
  return total + item.quantity;
}, 0);
console.log(totalItems);

// ? D: Find the item with the highest total value (Price * quantity)
const highValueItem = cartItems.reduce((cost, item) => {
  return Math.max(cost, item.price * item.quantity);
}, 0);
console.log(highValueItem);

// ! Question 6: Test Processing
const words = [
  'javascript',
  'array',
  'method',
  'function',
  'variable',
  'object',
  'string',
];

// ? A: find the longest word
const longest = words.reduce((longer, word) => {
  if (word.length > longer.length) {
    longer = word;
  }
  return longer;
}, '');
console.log(longest);

// ? B: find the total number of char across all words
const totalChar = words.reduce((total, word) => {
  return total + word.length;
}, 0);
console.log(totalChar);

// ? C: find how many words contain letter 'A'
const containA = words.reduce((count, word) => {
  if (word.includes('a')) {
    count++;
  }
  return count;
}, 0);
console.log(containA);

// ? D:  create a single string with all words joined by commas
const allWords = words.reduce((all, word) => {
  return all + word + ', ';
}, '');
console.log(allWords);

// ? E: Find the word that comes first alphabetically
const First = words.reduce((first, word) => {
  return first > word ? word : first;
});
console.log(First);
