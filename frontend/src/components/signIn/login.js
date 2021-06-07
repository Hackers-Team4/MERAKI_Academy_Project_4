import axios from 'axios';
import React , {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Register from './signUp';


const Login =(props)=>{
  const history = useHistory();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [loginError, setLoginError] = useState("");

  const cheakLogin =()=>{   
    axios.post(`http://localhost:5000/login` ,{email:email, password:password})
    .then((result)=>{
        console.log(result.data.token)
       props.token1(result.data.token)
       // console.log(token1())
        history.push("/");    
  
    }).catch((error)=>{
      setLoginError(error.response.data);
    })

  }

  return (
    <>
    <div className ="input">
      
      <input type ="text" placeholder ="email here" onChange={(e)=>{
        setemail(e.target.value)
      }}/>
      <input type ="password" placeholder ="password here" onChange={(e)=>{
        setpassword(e.target.value)
      }}/>
      <button onClick={cheakLogin}>Login</button>
    </div>
    <din className="singUp"><Link to="/singUp"> sign up</Link> </din>
    <div className="errorlogin">{loginError ? <p className="loginerr">{loginError}</p> : ""}</div>
      
    </>
  );

}

export default Login