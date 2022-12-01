const User = require('../models/user')
module.exports = class APIuser {
    //fetchAll
    static async fetchAllPost(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    //fetchID
    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //create
    static async createPost(req, res) {
        const user = req.body;
        try {
            await User.create(user);
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
            await User.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post update successfully!" });

        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //delete
    static async deletePost(req, res) {
        const id = req.params.id;
        try {
            const result = await User.findByIdAndDelete(id);
            res.status(200).json({ message: "Post delete successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
};