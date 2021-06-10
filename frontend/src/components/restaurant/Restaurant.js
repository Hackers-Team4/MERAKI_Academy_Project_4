
import React, { useState, useEffect } from 'react';
import RestaurantDetails from "./restaurantDetails";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Restaurant.css";

/* Restaurant */

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState()
  const [restaurantName, setRestaurantName] = useState()

  const history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:5000/restaurants`)
      .then((response) => {
        setRestaurant(response.data)

      }).catch((err) => {
        console.log("Error")
      })
  }, [])

  const func = (id) => {
    return (history.push(`/restaurant/${id}`)
    )
  }
  const callType_1 = (str) => {
    axios.get(`http://localhost:5000/restaurant/search_1?typeOfFood=${str}`)
      .then((response) => {
        props.type2(response.data)
        history.push(`/restaurants/${str}`)
      }).catch((err) => {
        console.log("Error")
      })
  }
  const searchRestaurant = (str) => {
    axios.get(`http://localhost:5000/restaurant/search_2?restaurantName=${str}`)
      .then((response) => {
        if (response.data[0]._id) {
          props.type2(response.data)
          history.push(`/restaurants/${str}`)
        }
      }).catch((err) => {
        console.log("Error")
      })
  }

  return (
    <>
      <div> <input type="text" placeholder="Restaurant Name" onChange={(e) => {
        setRestaurantName(e.target.value)
      }} />
        <button onClick={() => { searchRestaurant(restaurantName) }}>Search</button>
      </div>
      <div className="filter">
        <button onClick={() => { callType_1("Italian") }}>Italian</button>
        <button onClick={() => { callType_1("Arabic") }}>Arabic</button>
        <button onClick={() => { callType_1("Japanese") }}>Japanese</button>
        <button onClick={() => { callType_1("Brazilian") }}>Brazilian</button>
        <button onClick={() => { callType_1("Lebanese") }}>Lebanese</button>
        <button onClick={() => { callType_1("Mexican") }}>Mexican</button>
        <button onClick={() => { callType_1("International") }}>International</button>
      </div>
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