import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetails = (props) => {
    const [restaurant, setRestaurant] = useState("");
    const { id } = useParams();
    console.log("id", id)
    console.log("prpos", props)
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/restaurants/${id}`)
    //         .then((response) => {
    //             setRestaurant(response.data[0])
    //             console.log("data", response.data[0])
    //         }).catch((err) => {
    //             console.log("Error")
    //         })
    // }, [])
    const func = () => {
        axios.get(`http://localhost:5000/restaurants/${id}`)
            .then((response) => {
                console.log("data", response.data[0])
                setRestaurant(response.data)
            }).catch((err) => {
                console.log("Error")
            })
    }

    return (
        <>
            {func}
            <h2>{restaurant.restaurantName}</h2>
            <p>{restaurant.typeOfFood}</p>
            <p>{restaurant.location}</p>
            <p>{restaurant.description}</p>
            {/* <img src={`${restaurant.images[0]}`} /> */}

        </>
    );
}
export default RestaurantDetails