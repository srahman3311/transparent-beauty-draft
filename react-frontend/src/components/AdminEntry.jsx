import React, { useState } from "react";
import axios from "axios";



function AdminEntry() {

  const [adminInfo, setAdminInfo] = useState(
    {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    });

    const [warning, setWarning] = useState("");

    function handleChange(e) {
        const {name, value} = e.target;

        setAdminInfo(prevValue => {
            return {...prevValue, [name]: value};
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const {firstName, lastName, username, email, password, password2} = e.target;
        
        if(!firstName.value) {
            setWarning("first name is required");
            return;
        }

        if(!lastName.value) {
            setWarning("last name is required");
            return;
        }

        if(!username.value) {
            setWarning("username is required");
            return;
        }

        
        if(!email.value) {
            setWarning("email is required");
            return;
        }

        if(!password.value) {
            setWarning("password is required");
            return;
        }

        if(password.value.length < 6) {
            setWarning("password must be at least 6 characters");
            return;
        }

        if(!password2.value) {
            setWarning("confirmation password is required");
            return;
        }

        if(password.value !== password2.value) {
            setWarning("passwords didn't match");
            return;
        }
        

        axios.post("http://localhost:8000/users/add", adminInfo)
        .then(res => {console.log(res.data)})
        .catch(err => {});
    
    }

   

  return (
    <div className="entry-forms">
        <p style = {{color: "#ff5722", fontWeight: "bold"}}>{warning}</p>
        <form id = "admin-entry" onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" value={adminInfo.firstName} />
            <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" value={adminInfo.lastName}/>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" value={adminInfo.username} />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" value={adminInfo.email}/>
            <input type="password" name="password" onChange={handleChange} placeholder="Password" value={adminInfo.password} />
            <input type="password" name="password2" onChange={handleChange} placeholder="Confirm Password" value={adminInfo.password2} />
            <button>Add</button>
        </form>
    </div>
  );
}

export default AdminEntry;
