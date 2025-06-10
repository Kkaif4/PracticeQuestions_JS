// ! Question 7: Employee Performance Tracking

const employees = [
  { name: 'John', department: 'IT', salary: 75000, projects: ['A', 'B'] },
  { name: 'Sarah', department: 'Marketing', salary: 65000, projects: ['C'] },
  { name: 'Mike', department: 'IT', salary: 80000, projects: ['A', 'D', 'E'] },
  { name: 'Lisa', department: 'HR', salary: 60000, projects: ['B', 'C'] },
  { name: 'Tom', department: 'Marketing', salary: 70000, projects: ['D'] },
];

// ? A: group employees by the department
const GrpByDept = employees.reduce((acc, emp) => {
  const dept = emp.department;
  const name = emp.name;
  if (!acc[dept]) {
    acc[dept] = [];
  }
  acc[dept].push(name);
  return acc;
}, {});

//? B: find the emp working on more than 2 projects
const emps = employees.filter((emp) => {
  if (emp.projects.length > 2) {
    return emp;
  }
}, {});

//? C: calculate avg salary be department
// * solved with the help
const deptSalary = employees.reduce((acc, emp) => {
  const dept = emp.department;
  if (!acc[dept]) {
    acc[dept] = { totalSalary: 0, count: 0 };
  }
  acc[dept].totalSalary += emp.salary;
  acc[dept].count++;
  return acc;
}, {});

// calculate avg salary
const avgSalary = {};
for (dept in deptSalary) {
  avgSalary[dept] = deptSalary[dept].totalSalary / deptSalary[dept].count;
}

//? D: get a list of unique projects across all employees
// * solved with the help
const allProjects = employees.map((emp) => emp.projects).flat();
const uniqueProject = allProjects.filter((project) => {
  return allProjects.indexOf(project) === allProjects.lastIndexOf(project);
});

//? E: Find the highest-paid employee in each department
const mostPaid = employees.reduce((acc, emp) => {
  const { department, salary } = emp;
  if (!acc[department] || salary > acc[department]) {
    acc[department] = emp;
  }
  return acc;
}, {});
// console.log(mostPaid);

// ! Question 8: Data Cleanup and Validation
const rawData = [
  '  Alice Johnson  ',
  'bob@email.com',
  '',
  'Charlie Brown',
  null,
  'diana.smith@test.co',
  '   ',
  'Eve Wilson',
  undefined,
  'frank.miller@domain.org',
  'Grace Lee',
];

//? A: remove the empty spaces, null values and undefined values
const clean = rawData.filter(
  (word) => typeof word === 'string' && word.trim() !== ''
);
// console.log(clean);

//? B: Trim whitespace from all remaining strings
const whiteSpaceRemove = clean.map((word) => word.trimStart().trimEnd());
// console.log(whiteSpaceRemove);

//? C: separate email addresses
const emails = whiteSpaceRemove.filter((word) => word.includes('@'));
// console.log(emails);

//? D: Sort names alphabetically (excluding emails)
const sorterArray = whiteSpaceRemove
  .filter((word) => !word.includes('@'))
  .sort();
// console.log(sorterArray);

//? E: Validate that all emails contain '@' and '.'
const emailValidation = emails.every((email) => {
  return email.includes('@') && email.includes('.');
});
emailValidation ? 'all emails are valid' : 'some of email are not';
// console.log(emailValidation);

// ! Question 9: Nested Array Operations
const orders = [
  {
    id: 1,
    customer: 'John',
    items: [
      { product: 'Laptop', price: 1000, quantity: 1 },
      { product: 'Mouse', price: 25, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: 'Jane',
    items: [
      { product: 'Phone', price: 800, quantity: 1 },
      { product: 'Case', price: 20, quantity: 1 },
    ],
  },
];

//? A: calculate total price of each order
const totalValue = orders.map((order) => {
  const total = order.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return {
    orderId: order.id,
    totalPrice: total,
  };
});

//? B: create a flat array of all items from all orders
const unique = [
  ...new Set(
    orders.flatMap((order) => order.items.map((item) => item.product))
  ),
];

//? C: get the customer who spent the most money
let highestOrder = 0;
const highOrderCustomer = orders.reduce((user, order) => {
  const total = order.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  if (total > highestOrder) {
    highestOrder = total;
    return {
      user: order.customer,
      totalValue: total,
    };
  }
  return user;
}, {});

// console.log(highOrderCustomer);

//? D: List all products across all orders
const allProducts = [
  orders.flatMap((order) => order.items.map((item) => item.product)),
];

//? E: Count the total quantity of the items from all orders
const itemSold = orders.reduce((total, order) => {
  const totalItems = order.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return total + totalItems;
}, 0);
