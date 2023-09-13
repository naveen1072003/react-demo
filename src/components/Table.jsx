import { useEffect, useState } from "react";
import axios from "axios"
import { deleteUser_Url, getAllUsers_Url } from "./constraints/apiUrl";

function Table() {
  const [userList, setUsers] = useState("");

//   const axios = require("axios")

  // get All Users

  const callApi = async () => {
    try {
        console.log(1);
    //   const objUsers = await axios.get("http://localhost:8080/user/getAllUsers");
    const objUsers = await axios.get("http://localhost:8080/user/getAllUsers");
    
        setUsers(objUsers.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  console.log(userList,"hvjj");

  // delete User

  const deleteApi = async () => {
    try {
      await axios.get(deleteUser_Url);
    } catch (e) {
      console.log(e);
    }
  };
//  if(!userList)
//  return "loading"

  return (
    <>
       <div className="head">
        <img
          src="/images/Divum_Logo.svg"
          alt=""
          width="90"
          height="100"
        />
        <h1>User Details</h1>
      </div>
      <div className="add">
        <button id="addBtn" onClick="showTemp()">
          Add User
        </button>
      </div>
     {/* <p th:text="${result}" style="display: none" id="result"></p>  */}
      <div className="form-container">
        <div className="form">
          <form id="editUserForm">
            <div className="form-header">
              <h1>Add User</h1>
              <button type="reset" className="btnrst" 
            //   onClick={reset1()}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <label htmlFor="first_name">
              First name<span> *</span>
            </label>
            <br />
            <input
              type="text"
              id="first_name"
              data-testid="nametest"
            //   onBlur={checkFname(this)}
              name="firstName"
              required
            />{" "}
            <br />
            <p id="fname"></p>
            <label htmlFor="last_name">
              Last name <span > *</span>
            </label>
            <br />
            <input
              type="text"
              id="last_name"
              data-testid="lnametest"
            //   onBlur={checkLname(this)}
              name="lastName"
              required
            />
            <br />
            <p id="lname"></p>
            <label htmlFor="email">
              Email <span > *</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
            //   onBlur={errorEmail(this)}
              name="email"
              required
            />
            <br />
            <p id="emailerror"></p>
            <div id="passId">
              <label htmlFor="pass">
                Password<span > *</span>
                <i className="far fa-eye" id="togglePassword"></i>
              </label>
              <br />
              <input
                type="password"
                id="pass"
                data-testid=""
                // onBlur={verifyPassword(this)}
                name="password"
                maxLength="15"
                required
              />
              <br />
              <p id="pwd"></p>
            </div>
            <label htmlFor="pno">
              Phone No<span > *</span>
            </label>
            <br />
            <input
              type="text"
              id="pno"
              data-testid="phnotest"
            //   onBlur={checkPhno(this)}
              name="phNo"
              maxLength="10"
              required
            />
            <br />
            <p id="phno"></p>
            <label htmlFor="address">
              Address<span > *</span>
            </label>
            <br />
            <textarea
              id="address"
              data-testid="addresstest"
            //   onBlur={checkAdd(this)}
              name="Address"
              maxLength="50"
              required
            ></textarea>
            <br />
            <p id="add">
              <i className="fa fa-warning" ></i> Maximum 50
              characters!
            </p>
            <label htmlFor="dateOB">Date Of Birth</label>
            <br />
            <input
              type="date"
              id="dateOB"
              data-testid="datetest"
              name="dob"
              required
            />
            <br />
            <br />
            <div className="sbtn">
              <button
                type="button"
                id="form-button"
                data-testid="submitBtn"
                // onClick={handleSubmit()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="thead">
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>Actions</th>
          </thead>
          <tbody>
            
              {/* {console.log(userList.content,"singam")} */}
            {!userList && userList.content.map((user) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.phNo}</td>
                  <td>{user.address}</td>
                  <td className="action-buttons">
                    <button
                      className="edit"
                      value={user.id}
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </button>
                      <button
                        className="delete"
                        onClick={() => deleteApi(user.id)}
                        type="submit"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> 
    </>
  );
}

export default Table;
