const express = require('express');


const { createNewUser, updateUser,getUser } = require('./../controllers/user');

const usersRouter = express.Router();

usersRouter.post('/register', createNewUser);
usersRouter.put('/user_updat/:id',updateUser);
usersRouter.get('/user/:id',getUser);


module.exports = usersRouter;
