const express = require("express");
const connect = require('./config/db');
const router = require('./routes/userRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect MongoDB Database
connect();

// For middleware
app.use(bodyParser.json());

app.use('/', router);
// app.get('/', (req, res) => {
//     res.send('Blog App using MERN');
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Your app is running");
});