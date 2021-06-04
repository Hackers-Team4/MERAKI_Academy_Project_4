const express = require('express');
const {createRestaurant ,
       getAllRestaurant,
       updateRestaurantById,
       deleteRestaurantById
     } = require ("./../controllers/restaurant")




  

 restaurantRouter =express.Router();
 restaurantRouter.post("/restaurants",createRestaurant )
 restaurantRouter.get("/restaurants",getAllRestaurant)
 restaurantRouter.put("/restaurants_updated/:id",updateRestaurantById)
 restaurantRouter.delete("/restaurants_delete/:id",deleteRestaurantById)


 module.exports= restaurantRouter;
