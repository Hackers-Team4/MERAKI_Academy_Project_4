import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import { SRLWrapper } from 'simple-react-lightbox';



const RestaurantDetails = (props) => {
    const [restaurant, setRestaurant] = useState("");
    const [Show, setShow] = useState(true)
    const { id } = useParams();
    console.log("id", id)
    console.log("prpos", props)
    useEffect(() => {
      axios.get(`http://localhost:5000/restaurants/${id}`)
            .then(async(response) => {
                await   setRestaurant(response.data[0])
                console.log("data", response.data[0])
            }).catch((err) => {
                console.log(err)
            })
    }, [restaurant])

    return (
        <>
        
            <h2>{restaurant.restaurantName}</h2>
            <p>{restaurant.typeOfFood}</p>
            <p>{restaurant.location}</p>
            <p>{restaurant.description}</p>
            <SRLWrapper> {restaurant.images && restaurant.images.map((elem, i) => {
                return (<a href={`${elem}`}><img src={`${elem}`} /></a>)
            })}
            </SRLWrapper>
            <button onClick={()=>setShow(! Show)}>menu</button>
            {
                Show?<p>{restaurant.menu && restaurant.menu.mainCourse}</p>:null
               
            }
            
            
            {/* <img src={`${restaurant.images[0]}`} />  */}

        </>
    );
}
export default RestaurantDetails