const userSchema = new mongoose.Schema({
    first_name: {type: String, default: null},
    last_name: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String},
    level: {type: Number}
})