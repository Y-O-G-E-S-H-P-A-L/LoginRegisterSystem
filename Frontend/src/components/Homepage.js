import React from "react";
import "../css/style.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage container">
      <h1> Hello Homepage</h1>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
