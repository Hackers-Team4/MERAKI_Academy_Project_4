const mongoose = require('mongoose');


const Users = new mongoose.Schema({
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    country: { type: String, required: true },
    dateOfBrith: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: { type: mongoose.Schema.ObjectId, ref: 'Role' }

});

module.exports = mongoose.model('users', Users);







