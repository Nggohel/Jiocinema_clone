import React from "react";
import "./Login.css";
function Login() {
  return (
    <div>
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
          placeholder="+91 Your mobile number"
          className="login-number-input"
        />
      </p>

      <button className="login-continue-btn">Continue</button>
      <p className="login-para">
        By continuing you agree to our Terms of Use and
        <p className="login-para">
          acknowledge that you have read our Privacy Policy.
        </p>
      </p>
    </div>
  );
}
export default Login;
