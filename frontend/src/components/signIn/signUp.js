
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import "./signUp.css"
/* register */


const Register = ({ setUsers }) => {

  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [stata, setStata] = useState(false);
  const [stata1, setStata1] = useState(false);
  const history=useHistory();
  const cheakRegiste = () => {
    const newUser = {
      firstName, LastName, dateOfBirth, gender, phoneNumber,
      image, email, password
    };
    axios.post(`http://localhost:5000/register`, newUser)
      .then((response) => {

        if (response.data._id) {
          console.log("user11111", response.data)
          setUsers(response.data)
          setStata(true)
          setStata1(false)
          history.push('/login')
        } else {
          setStata1(true)
          setStata(false)
        }

      }).catch((err) => {
        console.log(err)
      })


  }

  return (
    <><div className="signUpImg">
    <svg style={{marginTop:"30px",color:"#591202"}} xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
<path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
<h1 style={{color:"#591202"}}>SIGN UP</h1>
</div>
      <div className="allInput">
        
        <input className="inputs" type="text" placeholder="firstName here" onChange={(e) => {
          setfirstName(e.target.value)
        }} />
        <input className="inputs" type="text" placeholder="LastName here " onChange={(e) => {
          setLastName(e.target.value)
        }} />


        <input className="inputs" type="date" placeholder="dateOfBirth here" onChange={(e) => {
          setdateOfBirth(e.target.value)
        }} />
        <input className="inputs" type="text" placeholder="gender here " onChange={(e) => {
          setgender(e.target.value)
        }} />
        <input className="inputs" type="tel" placeholder="phoneNumber here" onChange={(e) => {
          setphoneNumber(e.target.value)
        }} />


        <input className="inputs" type="text" placeholder="image here " onChange={(e) => {
          setimage(e.target.value)
        }} />

        <input className="inputs" type="text" placeholder="email here" onChange={(e) => {
          setemail(e.target.value)
        }} />
        <input className="inputs" type="password" placeholder="password here" onChange={(e) => {
          setpassword(e.target.value)
        }} />



      </div>
      <div className="btn_reg"><button className="btn" onClick={cheakRegiste}>Register</button>
      <din className="singUp" ><p style={{marginTop:"20px",fontStyle:"bold"}}>You already have an account ?<span><Link to="/login"> log in</Link></span></p> </din>

        {/*<div><p>You already have an account ?<span><Link to="/login"> log in</Link></span></p></div>*/}
        {stata ? <div className="trueRegiste" style={{marginTop:"20px",backgroundColor:"green",width:"450px",borderRadius:"5px"}}>The user has been created successfully</div> : ""}
        {stata1 ? <div className="falseRegiste" style={{margin:"20px auto",backgroundColor:"red",width:"450px",borderRadius:"5px"}}>Error happened while register, please try again</div> : ""}</div>
    </>
  );
}
export default Register