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

  const getAllRestaurant = (req,res)=>{
    restaurantModel.find({}).then((result)=>{
        res.status(200)
        res.json(result)
    }).catch((err)=>{
        res.status(404)
        res.send(err)
    })  

  }

  const updateRestaurantById = (req,res)=>{
      const id = id.params.id
      restaurantModel.findByIdAndUpdate({_id:id},{ restaurantName,
     typeOfFood,
     description,
     images,
     location,
     menu,
     review 
    },{new:true}).then((result)=>{
        res.status(200).json(result)

    }).catch((err)=>{
        res.status(404).send(err)
    }) 

  }


  module.exports = 
  {
    createRestaurant,
    getAllRestaurant,
    updateRestaurantById

}