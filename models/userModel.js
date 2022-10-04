const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    pass: { type: String, required: true }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel