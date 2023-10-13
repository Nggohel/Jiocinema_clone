import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function JiocinemaLogin() {
    try {
      let item = { email: email, password: password, appType: "ott" };
      const Header = {
        "Content-Type": "application/json",
        projectID: "paln91dx5ibq",
      };
      let getData = await fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status == "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        alert("You are Logging in Successfully");
        setEmail("");
        setPassword("");
        navigate("/foryou");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className="login-page">
        <div className="login">
          <Link to="/back">
            <button className="login-button">
              <img
                src="images/icons8-arrow-back.png"
                className="login-button-image"
              />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>Login to continue</h4>
        </div>

        <p className="login-number">
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="login-number-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="login-number-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <button className="login-continue-btn" onClick={JiocinemaLogin}>
          Continue
        </button>
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
