// !Question 1
const students = [
  { name: 'Alice', grade: 85, subject: 'Math' },
  { name: 'Bob', grade: 92, subject: 'Science' },
  { name: 'Charlie', grade: 78, subject: 'Math' },
  { name: 'Diana', grade: 96, subject: 'English' },
  { name: 'Eve', grade: 88, subject: 'Science' },
];
//? A: Create a new array containing only the student names
const names = students.map((student) => student.name);
// console.log(names);

//? B: Create a new array with grade percentages converted to letter grades
const letterGrads = students.map((student) => {
  if (student.grade >= 90) {
    return 'A';
  } else if (student.grade >= 80) {
    return 'B';
  } else if (student.grade >= 70) {
    return 'C';
  } else {
    return 'F';
  }
});
// console.log(letterGrads);

//? C: Add a new status property to each student object "Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)
const updatedStudents = students.map((student) => {
  let status = '';
  if (student.grade >= 90) {
    status = 'Excellent';
  } else if (student.grade >= 80) {
    status = 'Good';
  } else if (student.grade >= 70) {
    status = 'Average';
  } else {
    status = 'Needs Improvement';
  }
  return { ...student, status };
});
console.log(updatedStudents);

// !Question 2
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
  { id: 2, name: 'Book', price: 15, category: 'Education', inStock: false },
  { id: 3, name: 'Phone', price: 699, category: 'Electronics', inStock: true },
  { id: 4, name: 'Desk', price: 299, category: 'Furniture', inStock: true },
];

//? A: Create a new array with prices converted to include a 10% tax

const taxedProducts = products.map((product) => {
  let tax = product.price * 0.1;
  return {
    ...product,
    price: product.price + tax,
  };
});
console.log(taxedProducts);

//? B: Generate an array of product summaries in the format: "Product: [name] - $[price] ([category])"

const productSummaries = products.map((product) => {
  return `Product: ${product.name} - $${product.price} - ${product.category}`;
});
console.log(productSummaries);
//? C: Create a new array where each product has a "discountPrice" property (20% off original price)

const discountedProducts = products.map((product) => {
  let discount = product.price * 0.2;
  return {
    ...product,
    discountPrice: product.price - discount,
  };
});

console.log(discountedProducts);
