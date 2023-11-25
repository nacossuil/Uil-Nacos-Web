require("dotenv").config();
const express = require('express');
require("./config/database").connect();
const applicationRoutes = require("./routes/applicationRoutes");
const authenticatedRoutes = require("./routes/authenticatedRoutes");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

//application
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
