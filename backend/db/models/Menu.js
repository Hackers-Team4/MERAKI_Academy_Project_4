const mongoose = require('mongoose');


const Menu = new mongoose.Schema({
    mainCourse:{type: String },
    drinkes:{ type: String },
    dessert:{ type: String },

});

module.exports = mongoose.model('menu',Menu);







