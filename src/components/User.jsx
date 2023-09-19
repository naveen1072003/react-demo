import './User.css'
import { getUser_Url } from './constraints/apiUrl';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function User(email,setEmail){

  const [userList, setUsers] = useState("");
  const location =useLocation();
    console.log(location.state);
    const callApi = async () => {
        try {
            console.log("get");
          const objUsers = await axios.get(getUser_Url + email);
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
       <div className="inner-form">
           <h1>First name:</h1>
           <div className="data-field">
            <p>{userList.firstname}</p>
           </div>
       </div>
       <div className="inner-form">
           <h1>Last name:</h1>
           <div className="data-field">
            <p></p>
           </div>
       </div>
       <div className="inner-form">
           <h1>Email:</h1>
           <div className="data-field">
            <p></p>
           </div>
       </div>
       <div className="inner-form">
           <h1>Mobile number:</h1>
           <div className="data-field">
            <p></p>
           </div>
       </div>
       <div className="inner-form">
           <h1>Address:</h1>
           <div className="data-field">
            <p></p>
           </div>
       </div>
       <div className="inner-form">
           <h1>Date of Birth:</h1>
           <div className="data-field">
            <p></p>
           </div>
       </div>
    </div>
)
}
export default User;