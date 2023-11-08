const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Nacos_DB');

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

//routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

//application
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
