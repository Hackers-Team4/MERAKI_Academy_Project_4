import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signUp.css";

const Login = (props) => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const cheakLogin = () => {
    axios
      .post(`http://localhost:5000/login`, { email: email, password: password })
      .then((result) => {

        console.log("Login", result.data.token);
        console.log("Login", result.data);
        localStorage.setItem("token", JSON.stringify(result.data.token));
        props.token1(result.data.token);
       localStorage.setItem("users", JSON.stringify(result.data.userData));
        props.setUsers(result.data.userData);

        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="allInput_login">
      <svg style={{color:"#591202"}} xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg>
        <h1 style={{color:"#591202" , marginTop:"10px"}}>LOG IN</h1>
        <input
          className="inputs_login"
          type="text"
          placeholder="email here"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          className="inputs_login"
          type="password"
          placeholder="password here"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="btn_login" onClick={cheakLogin}>
          Login
        </button>
        <din className="singUp">
          <p>
            Do not have an account ?
            <span>
              <Link to="/singUp"> sign up</Link>
            </span>
          </p>{" "}
        </din>
      </div>

      <div className="errorlogin">
        {loginError ? <p className="loginerr">{loginError}</p> : ""}
      </div>
    </>
  );
};

export default Login;
