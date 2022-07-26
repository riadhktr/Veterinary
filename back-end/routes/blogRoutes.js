const express = require('express')
const router = express.Router()

const { isAuth } = require('../middleware/isAuth');
const {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById
} = require('../controllers/blogController')

router.get('/', isAuth, getBlogs)

router.post('/',isAuth, createBlog)

router.put('/:id', isAuth, updateBlog);

router.delete('/:id',isAuth, deleteBlog)

router.get('/:id',isAuth, getBlogById)

module.exports = router;