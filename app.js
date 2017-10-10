const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(config.database);

app.get('/', (req,res) => {
    res.send("Invalid page aaaa");
});
app.use('/bucketlist',bucketlist);
//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});