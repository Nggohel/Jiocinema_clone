import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/foryou");
    }
  }, []);

  async function JiocinemaLogin() {
    console.log(name, email, password);
    let item = { name, email, password };
    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          projectID: "paln91dx5ibq",
        },
        body: JSON.stringify(item),
      }
    );

    response = await response.json();
    localStorage.setItem("user-info", JSON.stringify(response));
    setName(response.name);
    navigate("/foryou");
  }

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
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="login-number-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="login-number-input"
            onChange={(e) => setPassword(e.target.value)}
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
