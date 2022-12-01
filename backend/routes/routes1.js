const express = require('express');
const router1 = express.Router();
const API = require('../controllers/api');
const APIuser = require('../controllers/apiuser');

const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null);
    },
    filename: function (req, file, cb) {
        cb(null);
    },
});
let upload = multer({
    storage: storage,
}).single("image");


//uset
router1.get('/', APIuser.fetchAllPost);
router1.get('/:id', APIuser.fetchPostByID);
router1.post("/",upload,  APIuser.createPost);
router1.patch('/:id',upload, APIuser.updatePost);
router1.delete('/:id', APIuser.deletePost);

module.exports = router1;