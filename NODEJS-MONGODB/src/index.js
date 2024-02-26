const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/routes");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 9000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// VER CSS 
app.use('/public', express.static('public'));
app.use(cors("*"))

// ver plantillas definidas por view
app.set('view engine', 'ejs');

//middeleware
app.get(express.urlencoded({extended:false}));
app.get('/public', express.static('public'));
app.use(express.json());
app.use('/api', userRoutes);

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then (() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(9000, () =>  console.log('server listning on port', port));