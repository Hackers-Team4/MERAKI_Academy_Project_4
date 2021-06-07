const express = require('express');
const {createRestaurant ,
       getAllRestaurant,
       updateRestaurantById,
       deleteRestaurantById,
       getRestaurantById
     } = require ("./../controllers/restaurant")




  

 restaurantRouter =express.Router();
 restaurantRouter.post("/restaurants",createRestaurant )
 restaurantRouter.get("/restaurants",getAllRestaurant)
 restaurantRouter.get("/restaurants/:id",getRestaurantById)
 restaurantRouter.put("/restaurants_updated/:id",updateRestaurantById)
 restaurantRouter.delete("/restaurants_delete/:id",deleteRestaurantById)


 module.exports= restaurantRouter;
