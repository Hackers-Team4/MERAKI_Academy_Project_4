const mongoose = require('mongoose');
const bcrypt = require("bcrypt")


const Users = new mongoose.Schema({
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    country: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: { type: mongoose.Schema.ObjectId, ref: 'Role' }

});
const salt = 10;
Users.pre("save", async function(err,hash){
    this.email=this.email.toLowerCase();
    const hashedPassword = await bcrypt.hash(this.password , salt)
    this.password=hashedPassword;
})

module.exports = mongoose.model('users', Users);







