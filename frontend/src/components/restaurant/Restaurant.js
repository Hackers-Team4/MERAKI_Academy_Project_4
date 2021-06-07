
import React, { useState, useEffect } from 'react';
import RestaurantDetails from "./restaurantDetails";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Restaurant.css";
/* Restaurant */

const Restaurant = (prpos) => {
  const [restaurant, setRestaurant] = useState()
  const history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:5000/restaurants`)
      .then((response) => {
        setRestaurant(response.data)
        prpos.item(response.data)

      }).catch((err) => {
        console.log("Error")
      })
  }, [])

  const func = (id) => {
    console.log("fun", id);
    return (history.push(`/restaurants/${id}`)
    )
  }
  return (
    <>
      <div className="parantrestaurant">
        {restaurant && restaurant.map((elem, i) => {
          return (<div className="childrestaurant" key={i}>
            <div className="imag">
              <img src={`${elem.images[0]}`} />
            </div>
            <div className="par">
              <p>{elem.restaurantName}</p>
              <p>{elem.typeOfFood}</p>
              <button onClick={() => { func(elem._id) }}>more details</button>
            </div>
          </div>)
        })}
      </div>

    </>
  );
}
export default Restaurant