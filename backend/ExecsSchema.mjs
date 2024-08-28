import mongoose from 'mongoose';

const execsSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: {type: String, unique: true},
    studentId: {type: String, index: true, unique: true}, // Added index for faster queries
    position: {type: String, unique: true},
    session: String,
    imageUrl: String
});

// static method to find by matric_number
execsSchema.statics.findByMatricNumber = function (matricNumber) {
    return Execs.findOne({studentId: matricNumber})
        .select('imageUrl -_id')
        .lean()
        .exec();
};

//static method to find by session
execsSchema.statics.findBySession = async (session) => {
    try {
        // const result = await mongoose.connection.db.collection('executives').find({session}).toArray();
        // console.log('Raw query result:', result);
        // return result;
        return await Execs.find({session}).select("-_id -__v").lean().exec();
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