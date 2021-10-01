const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model('user', userSchema); //user collection

module.exports = User;