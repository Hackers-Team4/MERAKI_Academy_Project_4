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

Users.pre("findOneAndUpdate", async function(err,hash){
    console.log(this._update.password,"pre",this.email,"pass",this.password)
    this.email=this._update.email.toLowerCase();
    const hashedPassword= await bcrypt.hash(this._update.password , salt)
    this._update.password=hashedPassword;
})

module.exports = mongoose.model('users', Users);







