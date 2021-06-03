const express = require('express');

const {
    createMenu
    
  } = require('./../controllers/menu');



  const menuRouter = express.Router();
  menuRouter.post('/menu', createMenu);
  module.exports = menuRouter;