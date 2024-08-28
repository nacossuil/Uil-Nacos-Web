import mongoose from 'mongoose';

// Event Schema
const eventsSchema = new mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    location: String,
    imageUrl: String
});

const Events = mongoose.model('Event', eventsSchema);
export default Events;