const connectDB = require('./db/connection.js');
connectDB();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 2024;

app.use(cors());

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from "upload/image" directory
// app.use('/URL', express.static('upload/image'));
// app.use('/image', express.static('upload/image'));


// User route
const userRoute = require('./route/user.route.js');
app.use('/', userRoute);

// Category route
const categoryRoute = require('./route/category.route.js');
app.use('/', categoryRoute);

// event route 
    const eventRoute=require('./route/event.route.js');
    app.use('/',eventRoute);
     

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
