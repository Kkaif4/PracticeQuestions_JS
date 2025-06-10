// ! Question 10: Social Media Analytics

const posts = [
  {
    id: 1,
    author: 'user1',
    content: 'Hello world!',
    likes: 15,
    tags: ['greeting', 'first'],
  },
  {
    id: 2,
    author: 'user2',
    content: 'JavaScript is awesome',
    likes: 32,
    tags: ['programming', 'js'],
  },
  {
    id: 3,
    author: 'user1',
    content: 'Learning arrays',
    likes: 18,
    tags: ['programming', 'learning'],
  },
  {
    id: 4,
    author: 'user3',
    content: 'Good morning!',
    likes: 8,
    tags: ['greeting'],
  },
];

//? A: Find the most popular post (highest likes)
let highest = 0;
const popularPost = posts.reduce((popular, post) => {
  if (post.likes > highest) {
    highest = post.likes;
    return post;
  }
  return popular;
});
// console.log(popularPost);

//? B: Get all unique tags used across all post

const unique = [...new Set(posts.flatMap((post) => post.tags))];
// console.log(unique);

//? C: calculate avg likes per author

const auhtStatus = posts.reduce((auth, post) => {
  const name = post.author;
  if (!auth[name]) {
    auth[name] = { totalLikes: 0, count: 0 };
  }
  auth[name].totalLikes += post.likes;
  auth[name].count++;
  return auth;
}, {});

const calulateAvgLikes = {};
for (auth in auhtStatus) {
  calulateAvgLikes[auth] = auhtStatus[auth].totalLikes / auhtStatus[auth].count;
}

// console.log(calulateAvgLikes);

//? D: Find posts containing the word "JavaScript" or "programming" in content or tags

const matchingPosts = posts.filter(
  (post) =>
    post.content.toLowerCase().includes('javascript') ||
    post.content.toLowerCase().includes('programming') ||
    post.tags.some(
      (tag) =>
        tag.toLowerCase() === 'jaavscript' ||
        tag.toLowerCase() === 'programming'
    )
);
// console.log(matchingPosts);

const authorLikes = posts.reduce((user, post) => {
  if (!user[post.author]) {
    user[post.author] = 0;
  }
  user[post.author] += post.likes;
  return user;
}, {});

//? E: Create a leaderboard of authors sorted by total likes
const leaderboard = [];
for (let author in authorLikes) {
  leaderboard.push({ author: author, likes: authorLikes[author] });
}
leaderboard.sort((a, b) => b.likes - a.likes);
// console.log(leaderboard);

// ! Question 11: Inventory Management
const inventory = [
  {
    sku: 'A001',
    name: 'Widget A',
    stock: 150,
    reorderLevel: 50,
    category: 'Tools',
  },
  {
    sku: 'B002',
    name: 'Widget B',
    stock: 25,
    reorderLevel: 30,
    category: 'Parts',
  },
  {
    sku: 'C003',
    name: 'Widget C',
    stock: 75,
    reorderLevel: 40,
    category: 'Tools',
  },
  {
    sku: 'D004',
    name: 'Widget D',
    stock: 10,
    reorderLevel: 20,
    category: 'Parts',
  },
];

//?  A: Find items that need reordering (stock <= reorderLevel)
const needReorder = inventory.filter((item) => item.stock <= item.reorderLevel);
// console.log(needReorder);

//? B: Calculate total stock value by category (assume price = stock * 10 for calculation)
const stockValaue = inventory.reduce((acc, item) => {
  const { category } = item;
  if (!acc[category]) {
    acc[category] = { totalValue: 0, totalStock: 0, count: 0 };
  }
  acc[category].totalStock += item.stock;
  acc[category].totalValue += item.stock * 10;
  acc[category].count++;
  return acc;
}, {});
// console.log(stockValaue);

//? C: Find the item with the lowest stock percentage relative to reorder level
//* solved with help
const lowStock = inventory.reduce((low, item) => {
  const curr = (item.stock / item.reorderLevel) * 100;
  const lowest = (low.stock / low.reorderLevel) * 100;
  return curr < lowest ? item : low;
});
// console.log(lowStock);

//? D: Create a report showing category, total items, and items needing reorder
const report = inventory.reduce((acc, item) => {
  const { category } = item;
  if (!acc[category]) {
    acc[category] = {
      totalItems: 0,
      needToReorder: 0,
    };
  }
  acc[category].totalItems += item.stock;
  if (item.stock < item.reorderLevel) {
    acc[category].needToReorder += item.reorderLevel - item.stock;
  }
  return acc;
}, {});
console.log(report);

//? E: Sort items by urgency (how far below reorder level they are)\
// using sorting method (a-b)
const needReordering = inventory.filter(
  (item) => item.stock < item.reorderLevel
);
// sorting urgency
const sortingUrgency = needReordering.sort((a, b) => {
  const first = a.reorderLevel - a.stock;
  const second = b.reorderLevel - b.stock;
  return second - first;
});
// console.log(sortingUrgency);

// ! Question 12: Time Series Data
const temperatures = [
  { date: '2024-01-01', temp: 22 },
  { date: '2024-01-02', temp: 25 },
  { date: '2024-01-03', temp: 19 },
  { date: '2024-01-04', temp: 28 },
  { date: '2024-01-05', temp: 24 },
  { date: '2024-01-06', temp: 21 },
  { date: '2024-01-07', temp: 26 },
];

//? A: Find the hottest and coldest days
const hotDay = temperatures.reduce((hot, day) => {
  return day.temp > hot.temp ? day : hot;
});

const coldDay = temperatures.reduce((cold, day) => {
  return day.temp < cold.temp ? day : cold;
});

// console.log(hotDay);
// console.log(coldDay);

//? B: Calculate the average temperature for the week
const total = temperatures.reduce((sum, day) => sum + day.temp, 0);
const avgtemp = total / temperatures.length;
console.log(avgtemp);

//? C: Find days where temperature increased from the previous day
let tempIncrease = [];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i].temp > temperatures[i - 1].temp) {
    tempIncrease.push(temperatures[i]);
  }
}
console.log(tempIncrease);

//?  D: Identify temperature anomalies (more than 5 degrees different from average)
const anomalies = temperatures.filter(
  (day) => Math.abs(day.temp - avgtemp) > 5
);
if (anomalies.length === 0) {
  console.log('no anomalies found');
} else {
  console.log(anomalies);
}

//? E Create a summary with min, max, average, and total days recorded
const summary = {
  min: coldDay.temp,
  max: hotDay.temp,
  avg: avgtemp,
  total: temperatures.length,
};

console.log(summary);
