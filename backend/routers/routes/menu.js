const express = require('express');

const {
    createMenu,
    getAllMenu
    
  } = require('./../controllers/menu');



  const menuRouter = express.Router();
  menuRouter.post('/menu', createMenu);
  menuRouter.get('/menu', getAllMenu);


  
  module.exports = menuRouter;