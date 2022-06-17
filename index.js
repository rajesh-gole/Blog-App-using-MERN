const express = require("express");
const connect = require('./config/db')
require('dotenv').config();

const app = express();

// Connect MongoDB Database
connect();

app.get('/', (req, res) => {
    res.send('Blog App using MERN');
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Your app is running");
});