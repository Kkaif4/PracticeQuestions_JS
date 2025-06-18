import express from 'express';
import posts from './routes/postsRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from './middleware/logger.js';
import { getError } from './middleware/errorHandler.js';
const port = process.env.PORT;
const app = express();

//GET THE DIR
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
//Middle ware for static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(logger);

// app.get('/', (req, res) => {
//   res.send('index.html');
// });

app.use('/posts', posts);

app.use((req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
});

app.use(getError);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
