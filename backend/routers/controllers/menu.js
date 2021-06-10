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



  const getAllMenu = (req, res) => {
     menuModel
      .find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


  
  
  const updateMenuById = (req, res) => {
    const id = req.params.id;
    const { mainCourse,drinks,dessert} 
    = req.body;
  
    menuModel
      .findOneAndUpdate({ _id: id }, { mainCourse,drinks,dessert }, { new: true })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


const deleteMenu = (req, res) => {
  const id = req.params.id;
  menuModel
    .deleteOne({ _id:id })
    .then((result) => {
      res.status(200).json("deleted done");
    })
    .catch((err) => res.send(err));
};



  module.exports = {
    createMenu,getAllMenu,
    updateMenuById,deleteMenu
  };