import React, { useState } from "react";
import "./ManagerLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { loginUser } from "../apiCalls";

function ManagerLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(formData);

    if (response.success) {
      localStorage.setItem("user-token", response.authToken);
      navigate(
        response.user.role === "manager"
          ? "/manager-dashboard"
          : "/employee-dashboard"
      );
    }
  };

  return (
    <div className="login-container">
      {/* Left Login Section */}
      <div className="left_login">
        <img src="assets/img/admin.png" alt="" />
        {/* <h1 className="login-title"> Login</h1> */}
        <form onSubmit={handleSubmit} className="loginbox">
          <div className="login-inputcontainer">
            <div className="input-wrapper">
              <label className="inp-component" htmlFor="username">
                <input
                  value={formData.email}
                  name="email"
                  placeholder="Email Address *"
                  className="login-input"
                  onChange={handleChange}
                  type="text"
                />
              </label>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password" className="inp-component">
                <input
                  placeholder="Password *"
                  className="login-input"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="login-footer-desc">
            <p>
              Don't Have An Account? <Link to={"/signup"}>Signup</Link>
            </p>
            <p>
              <Link to={"/elogin"}>Employee Login</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Login Section */}
      <div className="right-login">
        <img src="assets/img/login.avif" alt="" />
      </div>
    </div>
  );
}

export default ManagerLogin;
