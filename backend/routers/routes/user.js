const express = require('express');


const { createNewUser, updateUser } = require('./../controllers/user');

const usersRouter = express.Router();

usersRouter.post('/register', createNewUser);
usersRouter.put('/user_updat/:id',updateUser)

module.exports = usersRouter;
