import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';
const router = express.Router();


//? Get all posts
router.get('/', getPosts);

//? Get post by id
router.get('/:id', getPostById);

//?Create new post
router.post('/', createPost);

//? update post
router.put('/:id', updatePost);

//? delete post
router.delete('/:id', deletePost);

export default router;
