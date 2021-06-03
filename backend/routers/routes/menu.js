const express = require('express');

const {
    createMenu,
    getAllMenu,
    updateMenuById,
    deleteMenu
    
  } = require('./../controllers/menu');



  const menuRouter = express.Router();
  menuRouter.post('/menu', createMenu);
  menuRouter.get('/menu', getAllMenu);
  menuRouter.put("/menu_update/:id",updateMenuById)
  menuRouter.delete("/menu_delete/:id",deleteMenu)


  module.exports = menuRouter;