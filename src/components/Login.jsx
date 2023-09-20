import "./Login.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //    const axios = require('axios')

  async function loginSubmit(e) {
    e.preventDefault();
    console.log("data func");
    try {
      console.log(email + " " + password);
      const response = await axios.post("http://localhost:8080/user/authUser", {
        email: email,
        password: password,
      });
      localStorage.setItem("jwtToken", response.data);
      if (response.status === 200) {
        // setTempEmail(email);
        navigate("/User", { replace: true, state: email });
      }
    } catch (err) {
      showToastMessage();
      console.log(err);
    }
  }

  const showToastMessage = () => {
    toast.error("Invalid User Credentials !!!", {
      position: "top-center",
      autoClose: 4999,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  function hidePass() {
    const togglePassword = document.getElementById("togglePassword");
    const pass = document.querySelector("#userPass");
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);
  }

  // Password Validation

  function verifyPassword(event) {
    console.log(password,event,event.length);
    if (event=== "") {
      return setErrorMsg({
        ...errorMsg,
        password: "**Please enter the password**",
      });
    }
  
    else if(event.length < 8){
      return setErrorMsg({
        ...errorMsg,
        password: "Atleast 8 character",
      });
    } else {
      setErrorMsg({ ...errorMsg, password: "" });
    }

    setPassword(event);
    console.log(event, "event");
  }


  function passcheck() {
    if (password === "") {
      return setErrorMsg({
        ...errorMsg,
        password: "**Please enter the password**",
      });
    }
  }

  return (
    <div className="container">
      <form action="/user/authUser" method="post">
        <div className="inner-container">
          <h2>Log in</h2>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            placeholder="Enter the valid email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <i
            className="far fa-eye"
            onClick={() => hidePass()}
            id="togglePassword"
            ></i>
          <label>Password </label>
          <input
            type="password"
            name="password"
            onBlur={passcheck}
            id="userPass"
            placeholder="Enter the password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(event.target.value);
              verifyPassword(event.target.value);
            }}
          />
          <p id="message">{errorMsg.password}</p>
          <button type="submit" onClick={loginSubmit}>
            Submit
          </button>
          <ToastContainer
            style={{
              width: "350px",
              height: "20rem",
              paddingTop: "20rem",
              fontSize: "15px",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
