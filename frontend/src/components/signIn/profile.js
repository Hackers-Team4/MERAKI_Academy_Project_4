import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import "./signUp.css"

const Profile =(props)=>{
    
    const [users,setusers]=useState("")
    const { _id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${_id}`)
          .then((response) => {
            console.log("ProfileUser",props.userP)  
    
          }).catch((err) => {
            console.log("Error")
          })
      }, [])

      

    return (
        <>
        <h2>{props.userP.firstName} {props.userP.LastName}</h2>
        <p>{props.userP.country}</p>
        <img src={`${props.userP.image}`}  />

        </>

    )
}

export default Profile

// firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
//     image, email, password, role