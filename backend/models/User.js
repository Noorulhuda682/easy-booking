const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    fullName: String,
    phone: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
})



const User = mongoose.model('Users', UserSchema);

module.exports = User;