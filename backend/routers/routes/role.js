const express = require('express');
const {
  createRole,
  updateRole,
} = require('./../controllers/role');

const roleRouter = express.Router();
roleRouter.post('/role', createRole);
roleRouter.put('/role_update/:id', updateRole)
module.exports = roleRouter;