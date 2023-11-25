const mongoose = require('mongoose');
const {MONGO_URI} = process.env;

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

exports.connect = () => {
    mongoose.connect(MONGO_URI)
};
