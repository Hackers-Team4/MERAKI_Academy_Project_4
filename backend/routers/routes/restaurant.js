const express = require('express');
const {
    createRestaurant
} = require ("./../controllers/restaurant")

restaurantRouter =express.Router();
restaurantRouter.post("/create_restaurants",createRestaurant )
module.exports= restaurantRouter;
