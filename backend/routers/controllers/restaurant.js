const restaurantModel =require ("./../../db/models/Restaurants")
const createRestaurant = (req, res) => {
    const { restaurantName, typeOfFood,description,images,location,menu,review } = req.body;
    const newRestaurant = new restaurantModel({ restaurantName, typeOfFood,description,images,location,menu,review });
    newRestaurant
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


  module.exports = 
  {
    createRestaurant

}