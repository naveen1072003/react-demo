import './User.css'
import { getUser_Url } from './constraints/apiUrl';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function User(){

  const [userList, setUsers] = useState("");
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  };
  const location =useLocation();
    const email = location.state;
    console.log(email)
    const callApi = async () => {
        try {
          const objUsers = await axios.get(getUser_Url+email,
            { headers });
          console.log(objUsers.data);
          setUsers(objUsers.data);
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        callApi();
      }, []);

return(
    <div className='form-container1'>
      <div className="inner">
       <div className="inner-form">
           <h2>First name:</h2>
           <div className="data-field">
            <p>{userList.firstName}</p>
           </div>
       </div>
       <div className="inner-form">
           <h2>Last name:</h2>
           <div className="data-field">
            <p>{userList.lastName}</p>
           </div>
       </div>
       <div className="inner-form">
           <h2>Email:</h2>
           <div className="data-field">
            <p>{userList.email}</p>
           </div>
       </div>
       <div className="inner-form">
           <h2>Mobile number:</h2>
           <div className="data-field">
            <p>{userList.phNo}</p>
           </div>
       </div>
       <div className="inner-form">
           <h2>Address:</h2>
           <div className="data-field">
            <p>{userList.address}</p>
           </div>
       </div>
       <div className="inner-form">
           <h2>Date of Birth:</h2>
           <div className="data-field">
            <p>{userList.dob}</p>
           </div>
       </div>
       </div>
    </div>
)
}
export default User;