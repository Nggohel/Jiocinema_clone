import React from "react";
import ReactDOM from "react-dom";

import "./Login.css";
function Login() {
  return ReactDOM.createPortal(
    <>
      <div className="login-page">
        <div className="login">
          <button className="login-button">
            <img
              src="images/icons8-arrow-back.png"
              className="login-button-image"
            />
          </button>
          <h4 style={{ color: "white" }}>Login to continue</h4>
        </div>
        <p className="login-number">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="login-number-input"
          />
          <br></br>
          <input
            type="text"
            placeholder="Enter Your Email Id"
            className="login-number-input"
          />
        </p>

        <button className="login-continue-btn">Continue</button>
        <p className="login-para">
          By continuing you agree to our
          <span className="logindetails">Terms of Use</span> and
          <p className="login-para">
            acknowledge that you have read our
            <span className="logindetails">Privacy Policy</span>.
          </p>
        </p>
      </div>
    </>,
    document.getElementById("login-page")
  );
}
export default Login;
