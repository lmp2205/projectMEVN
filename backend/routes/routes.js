const express = require('express');
const router = express.Router();
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

//post
router.get('/', API.fetchAllPost);
router.get('/:id', API.fetchPostByID);
router.post("/",upload,  API.createPost);
router.patch('/:id',upload, API.updatePost);
router.delete('/:id', API.deletePost);
//uset
router.get('/', APIuser.fetchAllPost);
router.get('/:id', APIuser.fetchPostByID);
router.post("/",upload,  APIuser.createPost);
router.patch('/:id',upload, APIuser.updatePost);
router.delete('/:id', APIuser.deletePost);

module.exports = router;