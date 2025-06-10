// ! Question 3: User Management System
const users = [
  { id: 1, username: 'john_doe', age: 25, isActive: true, role: 'user' },
  { id: 2, username: 'jane_smith', age: 32, isActive: false, role: 'admin' },
  { id: 3, username: 'bob_wilson', age: 19, isActive: true, role: 'user' },
  {
    id: 4,
    username: 'alice_brown',
    age: 28,
    isActive: true,
    role: 'moderator',
  },
  { id: 5, username: 'charlie_davis', age: 35, isActive: false, role: 'user' },
];

// ? A: find all acrive users over 21 years old
const activeUsersOver21 = users.filter(
  (user) => user.isActive && user.age > 21
);
console.log(activeUsersOver21);

// ? B: find all users with role "admin" or "moderator"
const adminModeratorUsers = users.filter((user) => {
  user.role === 'admin' && user.isActive === false;
});

// ? C: Find the first user with modrator role
const firstModerator = users.filter((user) => {
  if (user.role === 'moderator') {
    return user;
  }
});
console.log(firstModerator);

// ? D: get all usernames of active users
const activeUsersUsernames = users
  .filter((user) => user.isActive && user.role === 'user')
  .map((user) => user.username);
console.log(activeUsersUsernames);

// ? E: check if all users have usernames longer that 5 characters
const userResult = users.every((user) => user.username.length > 5);
userResult
  ? 'yes all usernames have more than 5 characters'
  : 'some yours are shorter than 5 characters';

console.log(userResult);

//! Question 4: Sales Data Analysis

const salesData = [
  { month: 'Jan', sales: 15000, region: 'North' },
  { month: 'Feb', sales: 18000, region: 'South' },
  { month: 'Mar', sales: 22000, region: 'North' },
  { month: 'Apr', sales: 19000, region: 'East' },
  { month: 'May', sales: 25000, region: 'West' },
  { month: 'Jun', sales: 21000, region: 'South' },
];

// ? A: filter the month where salse exceed 20000
const salesExceed20k = salesData
  .filter((sale) => sale.sales > 20000)
  .map((sale) => sale.month);

  console.log(salesExceed20k);

// ? B: Find the first month where sales are below 20000
const firstMonthSaleBellow20k = salesData
  .filter((sale) => sale.sales < 20000)
  .map((sale) => sale.month)[0];

console.log(firstMonthSaleBellow20k);

// ? C: Check if any region had sales above $24,000
const saleAbove20kRegion = salesData
  .filter((sale) => sale.sales > 24000)
  .map((sale) => sale.region);

// ? D: Check if all months had sales above $10,000
const saleResult = salesData.every((sale) => {
  sale.sales > 10000;
});
saleResult ? 'yes all sales are above 20000' : 'some sales are below 10000';
