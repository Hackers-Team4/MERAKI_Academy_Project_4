import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { SRLWrapper } from 'simple-react-lightbox';

import Rating_1 from "./../review_1/reating_1"



const RestaurantDetails = (props) => {
    const [restaurant, setRestaurant] = useState("");
    const [Show, setShow] = useState(false)
    const { id } = useParams();
   const history = useHistory()

    //console.log("id", id)
    //console.log("prpos", props)
    useEffect(() => {
      axios.get(`http://localhost:5000/restaurants/${id}`)
            .then(async(response) => {
                await   setRestaurant(response.data[0])
                //console.log("data", response.data[0])

            }).catch((err) => {
                console.log(err)
            })
    }, [restaurant])

    const goToBook = () => {
        if (props.token5) {
            history.push(`/booking`)
        }
        else{
            history.push(`/login`)
        }


    }

    return (
        <>

            {/* <a href="#ff">GO to section</a> */}

            {props.token}
            <h2>{restaurant.restaurantName}</h2>
            <p>{restaurant.typeOfFood}</p>
            <p>{restaurant.location}</p>
            <p>{restaurant.description}</p>
            <button onClick={goToBook}>Booking</button>


            <SRLWrapper> {restaurant.images && restaurant.images.map((elem, i) => {
                return (<a href={`${elem}`}><img src={`${elem}`} /></a>)
            })}
            </SRLWrapper>
            <button onClick={() => setShow(!Show)}>menu</button>

            {
                Show ? <p>main course : {restaurant.menu && restaurant.menu.mainCourse}
                    <p>drinks : {restaurant.menu && restaurant.menu.drinks}
                        <p>dessert : {restaurant.menu && restaurant.menu.dessert}
                        </p></p>
                </p> : null

            }


            {/* <p id="ff">menu 1111111111111111111111111111111</p> */}

            {/* <img src={`${restaurant.images[0]}`} />  */}

 {props.token5?<Rating_1 userDetails={props.user5} restaurantDetails={restaurant}/>:""}


        </>
    );
}
export default RestaurantDetails