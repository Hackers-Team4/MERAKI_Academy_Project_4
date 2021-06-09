const mongoose = require('mongoose');


const Review = new mongoose.Schema({
    rating: {type: Number },
    comment: { type: String },
    user: {type: mongoose.Schema.ObjectId, ref: 'users' },
    restaurant:{type: mongoose.Schema.ObjectId,ref:'restaurant'}
});

module.exports = mongoose.model('review',Review);







