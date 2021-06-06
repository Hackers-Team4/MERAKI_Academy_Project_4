const mongoose = require('mongoose');


const Restaurant = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    typeOfFood: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    location:{ type: String, required: true },
    menu: { type: mongoose.Schema.ObjectId, ref: 'menu' },
    review:{ type: mongoose.Schema.ObjectId, ref: 'review'}
});

module.exports = mongoose.model('restaurant', Restaurant);







