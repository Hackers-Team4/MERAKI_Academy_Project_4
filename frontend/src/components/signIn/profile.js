import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import "./signUp.css"

const Profile = (props) => {

  // useEffect(() => {
	// 	const data =JSON.parse( localStorage.getItem("users"));
	// 	props.userpp(data)
	//   })
  // const [users,setusers]=useState("")
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { _id } = useParams();
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

  // const [stata, setStata] = useState(false);
  // const [stata1, setStata1] = useState(false);


  const updateprofile = () => {
    console.log("loay");
    axios.put(`http://localhost:5000/user_updat/${props.userP._id}`, {
      firstName, LastName, dateOfBirth, gender, phoneNumber,
      image, email})
      .then((response) => {
        console.log("result", password);


      })
  }



  return (
    <>
      
      <img className="profileImg" src={`${props.userP.image}`}  />
      <h2 style={{margin:"15px 0 0 30px"}}>{props.userP.firstName} {props.userP.LastName}</h2>
      
      {/*_______________________________ */}

      <div className="allInput">
        <input className="inputs" type="text" placeholder="firstName here" defaultValue={firstName} onChange={(e) => {
          setfirstName(e.target.value)
        }} />
        <input className="inputs" type="text" placeholder="LastName here " defaultValue={LastName} onChange={(e) => {
          setLastName(e.target.value)
        }} />


        <input className="inputs" type="date" placeholder="dateOfBirth here" defaultValue={dateOfBirth} onChange={(e) => {
          setdateOfBirth(e.target.value)
        }} />
        <input className="inputs" type="text" placeholder="gender here " defaultValue={gender} onChange={(e) => {
          setgender(e.target.value)
        }} />
        <input className="inputs" type="tel" placeholder="phoneNumber here" defaultValue={phoneNumber} onChange={(e) => {
          setphoneNumber(e.target.value)
        }} />


        <input className="inputs" type="text" placeholder="image here " defaultValue={image} onChange={(e) => {
          setimage(e.target.value)
        }} />

        <input className="inputs" type="text" placeholder="email here" defaultValue={email} onChange={(e) => {
          setemail(e.target.value)
        }} />
        {/* <input className="inputs" type="password" placeholder="password here" onChange={(e) => {
          setpassword(e.target.value)
        }} /> */}
        <br></br>
        <button onClick={updateprofile}> onClick </button>



        {/* <din className="singUp"><p>You already have an account ?<span><Link to="/login"> log in</Link></span></p> </din> */}


      </div>


    </>

  )
}

export default Profile

// firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
//     image, email, password, role