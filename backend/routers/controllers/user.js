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


const updateUser = (req, res) => {
  const id = req.params.id;
  const {
    firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
    image, email, password, role
  } = req.body
  usersModel.findOneAndUpdate({ _id: id }, {
    firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
    image, email, password, role
  }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => { res.status(404).json(err) })
};


const getUser = (req,res) => {
  const id = req.params.id;
  usersModel.find({_id:id})
  .then((result) => {
      res.json(result);
  }).catch((err) => { res.json(err) })

}




module.exports = {
  createNewUser,
  updateUser,
  getUser
};
