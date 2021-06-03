const menuModel = require("./../../db/models/Menu");

const createMenu = (req, res) => {
    const { mainCourse,drinks,dessert
} = req.body;
   const newMenu = new menuModel({ mainCourse,drinks,dessert});

   
   newMenu.save().then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };










  module.exports = {
    createMenu
  };