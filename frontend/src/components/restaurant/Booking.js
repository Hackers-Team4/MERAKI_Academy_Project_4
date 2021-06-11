import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Booking.css'

const Booking = (props) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [people, setPeople] = useState();
    const [card, setCard] = useState(false)

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
                        <p className="resname">{props.book2.restaurantName && props.book2.restaurantName}</p>
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
                            <option value="5 people">6 people</option>
                            <option value="5 people">7 people</option>
                            <option value="5 people">8 people</option>
                            <option value="5 people">9 people</option>
                            <option value="5 people">10 people</option>
                            <option value="5 people">11 people</option>
                            <option value="5 people">12 people</option>
                            <option value="5 people">13 people</option>
                            <option value="5 people">14 people</option>
                            <option value="5 people">15 people</option>

                        </select>
                        </div>

                        <div>
                        <label className="timetext" >Choose Time: </label>
                        <input className="time" type="time" name="time" onChange={(e) => { setTime(e.target.value) }} />

                        </div>
                       
                     
                        
                    </div>
                   
                    </div>
                <button className="Bookbtn" type="button" onClick={()=>{setCard(true)}}>Booking now </button>

            </div>

           {card? <div className="cardinfo">
                <div>
                    
                <p > Your name : {props.userB.firstName} <span>{props.userB.LastName}</span> </p>
                <p >Phome number : {props.userB.phoneNumber}</p>
                <p> The reservation was successfully booked on <span>{date}</span> </p>
                <p> At <span>{time}</span> for The number of people <span>{people}</span> </p>
                </div>
            
            </div>:""}
             


        </>

    )
}

export default Booking
