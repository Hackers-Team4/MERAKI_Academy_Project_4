const express = require('express');
const {createRestaurant} = require ("./../controllers/restaurant")
const {getAllRestaurant} = require ("./../controllers/restaurant")
const {updateRestaurantById} = require ("./../controllers/restaurant")



  

restaurantRouter =express.Router();
restaurantRouter.post("/create_restaurants",createRestaurant )
restaurantRouter.get("/restaurants",getAllRestaurant)
restaurantRouter.put("/restaurants",updateRestaurantById)

module.exports= restaurantRouter;
