let posts = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' },
];

//? get all posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

//? get post by id
export const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`post does not find of this ${id}`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//? create post
export const createPost = (req, res, next) => {
  console.log(req.body);
  try {
    const { name } = req.body;
    const id = posts.length + 1;
    const newPost = { id, name };
    posts.push(newPost);
    console.log(posts);
    res.status(201).json(posts);
    console.log('new post generated successfully');
  } catch (error) {
    console.log('something went wrong in post creation', error.message);
  }
};

//? update post
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  if (name) {
    console.log('please provide a name for update');
  }
  const post = posts.find((post) => post.id === id);
  if (!post) {
    console.log('post does not found for this id');
    return res.status(404).json({ msg: 'post does not find' });
  }
  post.name = name;
  res.status(200).json(post);
};

//? delete post
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  if (!id) {
    console.log('please provide a id for delete a post');
  }
  const post = posts.find((post) => post.id === id);
  if (!post) {
    console.log('post does not found for this id');
    return res.status(404).json({ msg: 'post does not find' });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
