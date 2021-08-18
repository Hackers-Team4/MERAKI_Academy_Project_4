import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./signUp.css"

const Profile = (props) => {
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${props.userP._id}`)

      .then((response) => {
        console.log("ProfileUser", response.data[0])
        setfirstName(response.data[0].firstName)
        setLastName(response.data[0].LastName)
        setdateOfBirth(response.data[0].dateOfBirth)
        setgender(response.data[0].gender)
        setphoneNumber(response.data[0].phoneNumber)
        setimage(response.data[0].image)
        setemail(response.data[0].email)
        setpassword(response.data[0].password)

      }).catch((err) => {
        console.log("Error")
      })
  }, [])

  const updateprofile = () => {
    axios.put(`http://localhost:5000/user_updat/${props.userP._id}`, {
      firstName, LastName, dateOfBirth, gender, phoneNumber,
      image, email
    })
      .then((response) => {
        setEdit(!edit)

      })
  }



  return (
    <>
      <div>
        <div>
          <img className="profileImg" src={`${props.userP.image}`} />
          <h2 style={{ margin: "15px 0 0 30px" }}>{props.userP.firstName} {props.userP.LastName}</h2>
          <Link onClick={() => { setEdit(!edit) }}> Edit profile</Link>
        </div>

        {!edit ?
          <div className="profile_page">
            <h3 style={{ float: "left" }}>FirstName :</h3>
            <p>{firstName}</p>
            <h3>LastName :</h3>
            <p>{LastName}</p>
            <h3>Date Of Birth :</h3>
            <p>{dateOfBirth}</p>
            <h3>Gender :</h3>
            <p>{gender}</p>
            <h3>PhoneNumber :</h3>
            <p>{phoneNumber}</p>
            <h3>Email :</h3>
            <p>{email}</p>
            <br></br>
          </div>
          :
          <div className="profile_page">
            <h3 style={{ float: "left" }}>FirstName :</h3>
            <input className="inputs" type="text" placeholder="firstName here" defaultValue={firstName} onChange={(e) => {
              setfirstName(e.target.value)
            }} />

            <h3>LastName :</h3>
            <input className="inputs" type="text" placeholder="LastName here " defaultValue={LastName} onChange={(e) => {
              setLastName(e.target.value)
            }} />

            <h3>Date Of Birth :</h3>
            <input className="inputs" type="date" placeholder="dateOfBirth here" defaultValue={dateOfBirth} onChange={(e) => {
              setdateOfBirth(e.target.value)
            }} />
            <h3>Gender :</h3>
            <input className="inputs" type="text" placeholder="gender here " defaultValue={gender} onChange={(e) => {
              setgender(e.target.value)
            }} />
            <h3>PhoneNumber :</h3>
            <input className="inputs" type="tel" placeholder="phoneNumber here" defaultValue={phoneNumber} onChange={(e) => {
              setphoneNumber(e.target.value)
            }} />

            <h3>Image :</h3>
            <input className="inputs" type="text" placeholder="image here " defaultValue={image} onChange={(e) => {
              setimage(e.target.value)
            }} />
            <h3>Email :</h3>
            <input className="inputs" type="text" placeholder="email here" defaultValue={email} onChange={(e) => {
              setemail(e.target.value)
            }} />
            <br></br>
            <button onClick={updateprofile}> Edit </button>
          </div>}

      </div>
    </>

  )
}
export default Profile
