const restaurantModel = require("./../../db/models/Restaurants");


const createRestaurant = (req, res) => {
  const { restaurantName, typeOfFood, description, images, location, menu, review } = req.body;
  const newRestaurant = new restaurantModel({ restaurantName, typeOfFood, description, images, location, menu, review });
  newRestaurant
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllRestaurant = (req, res) => {
  restaurantModel.find({}).then((result) => {
    res.status(200)
    res.json(result)
  }).catch((err) => {
    res.status(404)
    res.send(err)
  })

}
const getRestaurantById = (req, res) => {
  const id=req.params.id;
  restaurantModel.find({_id:id}).populate("menu").exec()
  .then((result) => {
    res.status(200)
    res.json(result)
  }).catch((err) => {
    res.status(404)
    res.send(err)
  })

}

const updateRestaurantById = (req, res) => {
  const id = req.params.id;
  const { restaurantName, typeOfFood, description, images, location, menu, review } = req.body;

  restaurantModel.findOneAndUpdate({ _id: id }, { restaurantName, typeOfFood, description, images, location, menu, review }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });

}

const deleteRestaurantById = (req, res) => {
  const id = req.params.id;
  restaurantModel.findByIdAndDelete(id).then((result) => {
    res.status(200)
    res.json({
      success: true,
      massage: `delete sucssefully`,
    })
  }).catch((err) => {
    res.status(404);
    res.send(err)
  })

}


module.exports =
{
  createRestaurant,
  getAllRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
  getRestaurantById
};