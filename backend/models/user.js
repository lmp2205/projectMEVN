const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: String,
    year: String,
    phone: String,
    image: String,
    login: String,
    password: String,
});

module.exports = mongoose.model("User", User); 
