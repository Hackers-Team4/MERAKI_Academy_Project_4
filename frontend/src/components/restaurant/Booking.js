import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Booking.css'

const Booking = (props) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [people, setPeople] = useState();

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("users"));
    //     props.userBB(data)
    // })
    return (
        <>
            <div className="all">

                <div className="partener">

                    <div className="inforesturant">
                        <p >  {props.book2.images && <img className="imageres" src={`${props.book2.images[0]}`} />}</p>
                        <p className="resname"> resturant name : {props.book2.restaurantName && props.book2.restaurantName}</p>
                    </div>



                    <div className="input">
                        <div>
                        <label className="datetext">Choose Date: </label>
                        <input className="date" type="date" onChange={(e) => { setDate(e.target.value) }} />
                        </div>
                        
                         <div>
                        <label className="peopletext" for="cars">Choose number of people: </label>
                        <select className="people" id="cars" name="cars" onChange={(e) => {
                            setPeople(e.target.value)
                        }}>
                            <option value="2 people" >2 people</option>
                            <option value="3 people">3 people</option>
                            <option value="4 people">4 people</option>
                            <option value="5 people">5 people</option>
                        </select>
                        </div>

                        <div>
                        <label className="timetext" >Choose Time: </label>
                        <input className="time" type="time" name="time" onChange={(e) => { setTime(e.target.value) }} />

                        </div>
                       
                     
                        
                    </div>
                   
                    </div>
                <button className="Bookbtn" type="button">Booking now </button>

            </div>
             


        </>

    )
}

export default Booking

 {/* <div className="r">

                            <p className="a"> {props.userB.firstName}</p>
                            <p className="b"> {props.userB.LastName}</p>
                            <p className="c"> {props.userB.phoneNumber}</p>

                        </div> */}