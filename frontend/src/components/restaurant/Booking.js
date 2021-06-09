import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Booking.css'

const Booking = (props) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [people, setPeople] = useState();

    console.log("boook", props.userB)

    return (
        <>
        <div className="all">

            <div className="partener">

            <div className="inforesturant">
                 <p >  {props.book2.images  && <img className="imageres" src={`${props.book2.images[0]}`} /> }</p>
                 <p className="resname"> resturant name : {props.book2.restaurantName && props.book2.restaurantName}</p>
                 </div>
                 


               

        <div className="input">
            <label >Choose Date:</label>
            <input type="date" onChange={(e) => { setDate(e.target.value) }} />

            <label >Choose Time:</label>
            <input type="time" name="time" onChange={(e) => { setTime(e.target.value) }} />

            <label for="cars">Choose number of people:</label>
            <select id="cars" value name="cars">
                <option value="2 people"  >2 people</option>
                <option value="3 people">3 people</option>
                <option value="4 people">4 people</option>
                <option value="5 people">5 people</option>
            </select>
            <input className="asd" type="submit" onChange={(e) => { setPeople(e.option.value) }} />
            
            <div className="r"> 
            
            <p className="a"> {props.userB.firstName}</p>
            <p className="b"> {props.userB.LastName}</p>
            <p className="c"> {props.userB.phoneNumber}</p>
           
            </div>
            <button className="Bookbtn" type="button">Booking now </button>
            </div>
           
            
               </div>
            {date}
            {time}
            {people}
               </div>
        </>

    )
}

export default Booking

// firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
//     image, email, password, role