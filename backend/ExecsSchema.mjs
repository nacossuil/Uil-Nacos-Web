import mongoose from 'mongoose';

const execsSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: {type: String, unique: true},
    studentId: {type: String, index: true, unique: true}, // Added index for faster queries
    position: {type: String, unique: true},
    session: String,
    image: String
});

// static method to find by matric_number
execsSchema.statics.findByMatricNumber = function (matricNumber) {
    return Execs.findOne({studentId: matricNumber})
        .select('imageUrl -_id')
        .lean()
        .exec();
};

// Define the order of positions
const positionOrder = [
    'Executive President',
    'Vice President',
    'General Secretary',
    'Assistant General Secretary',
    'Financial Secretary',
    'Sport Director',
    'Software Director 1',
    'Software Director 2',
    'Social Director 1',
    'Social Director 2',
    'Public Relations Officer',
    'Welfare Secretary',
    'Treasurer'
];

// A map for quick lookup of position priorities
const positionPriority = new Map(positionOrder.map((position, index) => [position.toLowerCase(), index]));

// Custom sorting function
const sortExecutives = (a, b) => {
    const priorityA = positionPriority.get(a.position.toLowerCase()) ?? positionOrder.length;
    const priorityB = positionPriority.get(b.position.toLowerCase()) ?? positionOrder.length;
    return priorityA - priorityB;
};

// Updated static method to find and sort by session
execsSchema.statics.findBySession = async (session) => {
    try {
        const executives = await Execs.find({ session }).select("-_id -__v").lean().exec();
        return executives.sort(sortExecutives);
    } catch (error) {
        throw error;
    }
};


const Execs = mongoose.model('Executives', execsSchema);

//  index
// Execs.createIndexes()
//     .then(() => console.log('Index created successfully'))
//     .catch(err => console.error('Error creating index:', err));

export default Execs;