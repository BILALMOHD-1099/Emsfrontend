// EmployeeLogin.js

import React from "react";
import "./EmployeeLogin.css";
import { Link } from "react-router-dom";

function EmployeeLogin() {
  return (
    <div className="login">
      <div className="left-login">{/* Content for left side */}</div>
      <form className="right_login">
        {/* <h1 className="login-title">Employee Login</h1> */}
        <img src="assets/img/elogin.jpg" alt="Your Image" />

        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Email Address *"
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-footer-desc">
          {/* <p>
            Don't Have An Account? <Link to={"/esignup"}>Signup</Link>
          </p> */}
          <p>
            <Link to={"/login"}>Manager Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default EmployeeLogin;
