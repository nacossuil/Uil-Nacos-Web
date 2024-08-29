import mongoose from 'mongoose';

// Event Schema
const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    startDateAndTime: String,
    endDateAndTime: String,
    price: String,
    venue: String,
    image: String
});

const Events = mongoose.model('Event', eventsSchema);
export default Events;