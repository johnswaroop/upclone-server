const mongoose = require('../db')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userType: String,
    country: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;