import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/style.css";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <div className="container">
      {/* {console.log("user", user)} */}
      <h1>Login Page</h1>
      <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
