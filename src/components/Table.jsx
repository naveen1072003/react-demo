import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
import {
  addUser_Url,
  deleteUser_Url,
  editUser_Url,
  getAllUsers_Url,
} from "./constraints/apiUrl";

import logo from "../components/images/Divum_Logo.svg";
function Table() {
  const [userList, setUsers] = useState("");

  const [addFormDetails, setaddFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNo: "",
    address: "",
    dob: "",
  });

  const [editDetails, setEditDetails] = useState({});

  const [isDelete, setIsDelete] = useState(false);

  // console.log(addFormDetails, "=====================");
  // console.log(editDetails, "??????????????????");
  const [isFormVisible, setFormVisibile] = useState(false);
  const [isEditForm, setEditForm] = useState(false);

  const resetForm = () => {
    setEditDetails({});
    setEditForm(false);
    setFormVisibile(false);
  };

  // const changeEditForm = () => {
  //     setEditForm(true)
  // };

  const OnChange = (e) => {
    if (!isEditForm) {
      setaddFormDetails((addFormDetails) => ({
        ...addFormDetails,
        [e.target.name]: e.target.value,
      }));
    } else {
      setEditDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // Add User Api Call ====

  const add_EditApi = async () => {
    try {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      };
      headers.append('GET', 'POST', 'OPTIONS');
      if (!isEditForm) {
        const addresponse = await axios.post(
          addUser_Url,
          {
            ...addFormDetails,
          },
          { headers }
        );
        console.log(addresponse);
      } else {
        const putresponse = await axios.put(
          editUser_Url,
          {
            ...editDetails,
          },
          { headers }
        );
      }
      setEditForm(false);
      console.log("hi");
      setFormVisibile(false);
    } catch (err) {
      console.log(err);
    }

    setEditDetails({});
  };
  // console.log(localStorage.getItem);
  // get All Users Call ======

  const callApi = async () => {
    try {
      const objUsers = await axios.get(getAllUsers_Url);
      // console.log(objUsers);
      setUsers(objUsers.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    callApi();
  }, [isFormVisible, isDelete]);

  // console.log(editDetails, "Edit Details");

  // Delete User Api Call ======

  const deleteApi = async (id) => {
    try {
      console.log(id);
      await axios.delete(deleteUser_Url + id);
      setIsDelete(false);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(isEditForm, "edit form");

  return (
    <div className="form-wrapper">
      <div className="head">
        <img src={logo} alt="" width="90" height="100" />
        <h1>User Details</h1>
      </div>
      <div className="add">
        <button type="reset" id="addBtn" onClick={() => setFormVisibile(true)}>
          Add User
        </button>
      </div>
      {/* {console.log(isFormVisible)} */}
      {isFormVisible && (
        <div className="form-container">
          <div className="form">
            <form id="editUserForm">
              <div className="form-header">
                <h1>{!isEditForm ? "Add User" : "Edit user"} </h1>

                <button type="reset" className="btnrst" onClick={resetForm}>
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
                value={editDetails.firstName}
                onChange={OnChange}
                name="firstName"
                required
              />
              <br />
              <p id="fname"></p>
              <label htmlFor="last_name">
                Last name <span> *</span>
              </label>
              <br />
              <input
                type="text"
                id="last_name"
                data-testid="lnametest"
                value={editDetails.lastName}
                onChange={OnChange}
                name="lastName"
                required
              />
              <br />
              <p id="lname"></p>
              <label htmlFor="email">
                Email <span> *</span>
              </label>
              <br />
              <input
                type="email"
                id="email"
                onChange={OnChange}
                value={editDetails.email}
                name="email"
                required
              />
              <br />
              <p id="emailerror"></p>

              {!isEditForm && (
                <div id="passId">
                  <label htmlFor="pass">
                    Password<span> *</span>
                    <i className="far fa-eye" id="togglePassword"></i>
                  </label>
                  <br />
                  <input
                    type="password"
                    id="pass"
                    data-testid=""
                    onChange={OnChange}
                    value={editDetails.password}
                    name="password"
                    maxLength="15"
                    required
                  />
                  <br />
                  <p id="pwd"></p>
                </div>
              )}
              <label htmlFor="pno">
                Phone No<span> *</span>
              </label>
              <br />
              <input
                type="text"
                id="pno"
                data-testid="phnotest"
                onChange={OnChange}
                value={editDetails.phNo}
                name="phNo"
                maxLength="10"
                required
              />
              <br />
              <p id="phno"></p>
              <label htmlFor="address">
                Address<span> *</span>
              </label>
              <br />
              <textarea
                id="address"
                data-testid="addresstest"
                onChange={OnChange}
                value={editDetails.address}
                name="address"
                maxLength="50"
                required
              ></textarea>
              <br />
              <p id="add">
                <i className="fa fa-warning"></i> Maximum 50 characters!
              </p>
              <label htmlFor="dateOB">Date Of Birth</label>
              <br />
              <input
                type="date"
                id="dateOB"
                onChange={OnChange}
                value={editDetails.dob}
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
                  onClick={add_EditApi}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
            {userList &&
              userList.content.map((user) => {
                return (
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                    <td>{user.phNo}</td>
                    <td>{user.address}</td>
                    <td className="action-buttons">
                      <button className="edit" value={user.id}>
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          onClick={() => {
                            setEditForm(true);
                            setEditDetails(user);
                            setFormVisibile(true);
                          }}
                        >
                          &#xE254;
                        </i>
                      </button>
                      <button
                        className="delete"
                        onClick={() => {
                          deleteApi(user.id);
                          setIsDelete(true);
                        }}
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
    </div>
  );
}

export default Table;
