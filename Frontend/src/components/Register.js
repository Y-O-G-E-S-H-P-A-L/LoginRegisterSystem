import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/style.css";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;

    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="container">
      <h1>Register Page</h1>
      <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
