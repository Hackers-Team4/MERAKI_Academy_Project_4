const mongoose = require('mongoose');


const Role = new mongoose.Schema({
    role: { type: String, required: true },
    permission: { type:Array, required: true },
   

});

module.exports = mongoose.model('role', Role);







