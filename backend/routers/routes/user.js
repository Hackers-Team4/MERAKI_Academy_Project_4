const express = require('express');


const { createNewUser } = require('./../controllers/user');

const usersRouter = express.Router();

usersRouter.post('/register', createNewUser);

module.exports = usersRouter;
