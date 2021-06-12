import React, { useState, useEffect } from 'react';
import {Link, useParams, useHistory, Redirect } from 'react-router-dom';
import Starts from "./review_1/Starts";
import axios from 'axios';
import "./fliter.css";


const FliterByTypeOfFood = (props) => {
    const [restaurant, setRestaurant] = useState()
    const [restaurantName, setRestaurantName] = useState()
    console.log(props.typeItem)
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
        history.push(`/restaurant/${id}`)

    }
    const callType_11 = (str) => {
        console.log("calllllll")
        axios.get(`http://localhost:5000/restaurant/search_1?typeOfFood=${str}`)
            .then((response) => {
                props.type2(response.data)
                history.push(`/restaurants/${str}`)
            }).catch((err) => {
                console.log("Error")
            })
    }
    const searchRestaurant = (str_1) => {
        axios.get(`http://localhost:5000/restaurant/search_2?restaurantName=${str_1}`)
            .then((response) => {
                if (response.data[0]._id) {
                    props.type2(response.data)
                    history.push(`/restaurants/${str_1}`)
                }
            }).catch((err) => {
                console.log("Error")
            })
    }

    return (
        <>
            <div className="search"> <input type="text" placeholder="Restaurant Name" onChange={(e) => {
                setRestaurantName(e.target.value)
            }} />
                <button className="search1" onClick={() => { searchRestaurant(restaurantName) }}><i class="fa fa-search"></i></button>
            </div>
            <div className="filter">
                <button className="filtera" onClick={() => { callType_11("Italian") }}>Italian</button>
                <button className="filterb" onClick={() => { callType_11("Arabic") }}>Arabic</button>
                <button className="filterc" onClick={() => { callType_11("Japanese") }}>Japanese</button>
                <button className="filterd" onClick={() => { callType_11("Brazilian") }}>Brazilian</button>
                <button className="filtere" onClick={() => { callType_11("Lebanese") }}>Lebanese</button>
                <button className="filterf" onClick={() => { callType_11("Mexican") }}>Mexican</button>
                <button className="filterg" onClick={() => { callType_11("International") }}>International</button>
            </div>

            <div className="parantrestaurant">
                {props.typeItem && props.typeItem.map((elem, i) => {
                    return (<div className="childrestaurant" key={i}>
                        <div className="imag">
                            <img src={`${elem.images[0]}`} onClick={() => { func(elem._id) }} />
                        </div>
                        <div className="par">
                            <p style={{fontSize:"22px",marginTop:"10px",fontWeight:"bold"}}>{elem.restaurantName}</p>
                            <div className="starts">  <Starts starts={5} /></div>
                            <p style={{fontSize:"15px",marginTop:"10px"}}>{elem.typeOfFood}</p>
                            <button onClick={() => { func(elem._id) }}>more details</button>
                        </div>
                    </div>)
                })}
            </div>
        </>
    );
}

export default FliterByTypeOfFood