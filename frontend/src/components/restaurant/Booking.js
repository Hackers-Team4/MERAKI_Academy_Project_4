import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';

const Booking = (props) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [people, setPeople] = useState();

    console.log("boook", props.userB)

    return (
        <>
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
            <input type="submit" onChange={(e) => { setPeople(e.option.value) }} />

            {date}
            {time}
            {people}

            <div className="userInfo"> {props.userB.firstName}
                {props.userB.LastName}
                {props.userB.phoneNumber}</div>



        </>

    )
}

export default Booking

// firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
//     image, email, password, role