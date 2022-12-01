require('dotenv').config();


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000 ; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("uploads"));

//Database connection

//post
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true
}).then(() => console.log("Connected to database!"))
.catch(err => console.log(err));


//router
app.use('/api/post', require('./routes/routes'));
app.use('/api/user', require('./routes/routes1'));



//Start server

app.listen(port, () =>console.log(`server running at http://localhost:${port}`));