const Blog = require('../models/blog');


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: 'desc'}).populate('user');
        res.json(blogs);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id, user: req.user.id }).populate('user');

        if(!blog) return res.status(404).json([
            {
                message: 'Blog not found',
                
            }
        ])
        res.json(blog);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({
            title,
            content,
            user: req.user.id
        })
        
        await newBlog.save();

        if(!newBlog) return res.status(400).json([{ message: 'Blog not created' }]);

        res.json(newBlog);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('blog not createed yet');
    }
}

const updateBlog = async (req, res) => {
    try {
        const { content } = req.body;
        const blog = await Blog.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, {  content }, { new: true });
        res.json(blog);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.json({
            blogId: req.params.id,
             message: 'Blog deleted' 
        });
    } catch (error) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    deleteBlog,
    updateBlog,
    createBlog,
    getBlogs,
    getBlogById
}