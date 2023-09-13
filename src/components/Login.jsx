import "./Login.css"
import React, { useState } from "react";
import axios from 'axios'


function Login(){

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

//    const axios = require('axios')

   async function loginSubmit(e){
      e.preventDefault();
      console.log("data func")
      try{
        console.log(email+" "+password);
        const response = await axios.post("http://localhost:8080/user/authUser",{
            email: email,
            password: password
        });
        localStorage.setItem('jwtToken',response)

        // setAuthToken(response)
        console.log(response)
      }
      catch(err){
         console.log(err)
      }
   }
// function hidePass(){
//     console.log("Hijhg")

//    const togglePassword = document.getElementById('togglePassword');
//    const pass = document.querySelector('#userPass');
//    console.log(togglePassword)
// //    togglePassword.addEventListener('click', function (e) {
//        // toggle the type attribute
//        const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
//        pass.setAttribute('type', type);
//        // toggle the eye slash icon
//        this.classNameList.toggle('fa-eye-slash');
//    }
//    function verifyPassword() {
//        console.log("Hi")
//        var pw = document.getElementById("userPass").value;
   
//        if(pw === "") {
//            document.getElementById("message").innerText = "**Fill the password!**";
//            document.getElementById("userPass").style.border = "4px solid red";
//            return false;
//        }
//        if(pw.length < 8) {
//            document.getElementById("message").innerText = "**Length must be Atleast 8 characters**";
//            document.getElementById("userPass").style.border = "4px solid red";
//            return false;
//        }
//        if(pw.length > 15) {
//            document.getElementById("message").innerText = "**Length must not exceed 15 characters**";
//            document.getElementById("userPass").style.border = "4px solid red";
//            return false;
//        } else {
//            document.getElementById("message").innerText = "";
//            document.getElementById("userPass").style.border = "4px solid green";
//        }
//    }
   
    return(
    <div className="container" >
    <form action="/user/authUser" method="post">
  <div className="inner-container">
    <h2>Log in</h2>
      <label>Email</label>
      <input type="email" name="email" id="userEmail" placeholder="Enter the valid email"
       value={email} onChange={(event)=>
        setEmail(event.target.value)
       }
      />
      <i className="far fa-eye" id="togglePassword" ></i>
      <label>Password </label>
      <input type="password" name="password" id="userPass" placeholder="Enter the password" 
      value={password} 
      onChange={(event)=>
        setPassword(event.target.value)
       }/>
      <p id="message"></p>
    <button type="submit" onClick={loginSubmit}>Submit</button>
  </div>
    </form>
</div>
);
}

export default Login;