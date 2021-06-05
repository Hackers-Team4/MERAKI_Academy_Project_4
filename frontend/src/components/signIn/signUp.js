import axios from 'axios';
import React , {useState} from 'react';

/* register */


const Register = ()=>{

    const [firstName,setfirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [country,setcountry]=useState("");
    const [dateOfBirth,setdateOfBirth]=useState("");
    const [gender,setgender]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    const [location,setlocation]=useState("");
    const [image,setimage]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    
    const cheakRegiste  =()=>{
    const newUser={ firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
        image, email, password};
    
      axios.post(`http://localhost:5000/register` , newUser)
       .then((result)=>{
           console.log(result.data)
  
      /* if(!result.data.errors){
          console.log("result",result)
  
  
          setStata(true)
          setStata1(false)
        }else{
          setStata1(true)
          setStata(false)
          
        }*/
    
      }).catch((err)=>{
        console.log("Error")
      })
    }
    
      return (
        <>
        <div className ="input">
          <input type ="text" placeholder ="firstName here" onChange={(e)=>{
            setfirstName(e.target.value)
          }}/>
          <input type ="text" placeholder ="LastName here " onChange={(e)=>{
            setLastName(e.target.value)
          }}/>
          
          <input type ="text" placeholder ="country here " onChange={(e)=>{
            setcountry(e.target.value)
          }}/>
           <input type ="date" placeholder ="dateOfBirth here" onChange={(e)=>{
            setdateOfBirth(e.target.value)
          }}/>
          <input type ="text" placeholder ="gender here " onChange={(e)=>{
            setgender(e.target.value)
          }}/>
          <input type ="tel" placeholder ="phoneNumber here" onChange={(e)=>{
            setphoneNumber(e.target.value)
          }}/>
          <input type ="text" placeholder ="location here " onChange={(e)=>{
            setlocation(e.target.value)
          }}/>

            <input type ="text" placeholder ="image here " onChange={(e)=>{
            setimage(e.target.value)
          }}/>

          <input type ="text" placeholder ="email here" onChange={(e)=>{
            setemail(e.target.value)
          }}/>
          <input type ="password" placeholder ="password here" onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          <button onClick={cheakRegiste}>Register</button>
        </div>
        </>
      );
    }
    export default Register