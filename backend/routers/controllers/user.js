const usersModel = require("./../../db/models/Users");

const createNewUser = (req, res) => {
  const {
    firstName,
    LastName,
    country,
    dateOfBirth,
    gender,
    phoneNumber,
    location,
    image,
    email,
    password,
    role,
  } = req.body;

  const user = new usersModel({
    firstName,
    LastName,
    country,
    dateOfBirth,
    gender,
    phoneNumber,
    location,
    image,
    email,
    password,
    role,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewUser,

};
