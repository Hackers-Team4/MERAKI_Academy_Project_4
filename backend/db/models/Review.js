const mongoose = require('mongoose');


const Review = new mongoose.Schema({
    rating: { type: Number },
    comment: { type: String },
    user: { type: mongoose.Schema.ObjectId, ref: 'Users' }

});

module.exports = mongoose.model('review',Review);







