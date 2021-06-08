const express = require('express');

const { createRestaurant,
  getAllRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
  getRestaurantById,
  getRestaurantBytypeOfFood,
  getRestaurantByRestaurantName
} = require("./../controllers/restaurant")





restaurantRouter = express.Router();
restaurantRouter.post("/restaurants", createRestaurant)
restaurantRouter.get("/restaurants", getAllRestaurant)
restaurantRouter.get("/restaurants/:id", getRestaurantById)
restaurantRouter.get("/restaurant/search_1", getRestaurantBytypeOfFood)
restaurantRouter.get("/restaurant/search_2",  getRestaurantByRestaurantName)
restaurantRouter.put("/restaurants_updated/:id", updateRestaurantById)
restaurantRouter.delete("/restaurants_delete/:id", deleteRestaurantById)


module.exports = restaurantRouter;
