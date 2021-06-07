import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';


const FliterByTypeOfFood = (props) => {
    console.log(props.typeItem)
    const history = useHistory();

    const func = (id) => {
        history.push(`/restaurants/${id}`)
    }

    return (
        <>
            <div className="parantrestaurant">
                {props.typeItem && props.typeItem.map((elem, i) => {
                    return (<div className="childrestaurant" key={i}>
                        <div className="imag">
                            <img src={`${elem.images[0]}`} onClick={() => { func(elem._id) }} />
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
export default FliterByTypeOfFood