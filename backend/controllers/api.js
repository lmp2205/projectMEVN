const Post = require('../models/post');
module.exports = class API {
    //fetchAll
    static async fetchAllPost(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    //fetchID
    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);

        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //create
    static async createPost(req, res) {
        const post = req.body;
        try {
            await Post.create(post);
            res.status(201).json({ message: "Post create successfully!" });

        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    //update
    static async updatePost(req, res) {
        const id = req.params.id;
        const newPost = req.body;
        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post update successfully!" });

        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //delete
    static async deletePost(req, res) {
        const id = req.params.id;
        try {
            const result = await Post.findByIdAndDelete(id);
            res.status(200).json({ message: "Post delete successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
};

