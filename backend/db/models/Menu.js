const mongoose = require('mongoose');


const Menu = new mongoose.Schema({
    mainCourse: { type: Array },
    drinks: { type: Array },
    dessert: { type: Array },

});

module.exports = mongoose.model('menu', Menu);







