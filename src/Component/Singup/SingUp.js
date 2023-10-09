import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./SingUp.css";
import { Link, useNavigate } from "react-router-dom";

function SingUp() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function JiocinemaSingUP() {
    try {
      let item = {
        name: name,
        email: email,
        password: password,
        appType: "ott",
      };
      const Header = {
        "Content-Type": "application/json",
        projectID: "paln91dx5ibq",
      };
      let getData = await fetch(
        " https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: Header,
          body: JSON.stringify(item),
        }
      );

      let response = await getData.json();
      console.log(response);
      if (response.status == "success") {
        alert("You SingUp in Successfully");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        alert(response.message);
      }

      localStorage.setItem("user-info", JSON.stringify(response));
    } catch (e) {
      console.log(e);
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className="singup-page">
        <div className="singup">
          <Link to="/back">
            <button className="singup-button">
              <img
                src="images/icons8-arrow-back.png"
                className="singup-button-image"
              />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>SingUp to continue</h4>
        </div>

        <p className="singup-number">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="singup-number-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="singup-number-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="singup-number-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <button className="singup-continue-btn" onClick={JiocinemaSingUP}>
          Continue
        </button>
        <p className="singup-para">
          By continuing you agree to our
          <span className="singupdetails">Terms of Use</span> and
          <p className="singup-para">
            acknowledge that you have read our
            <span className="singupdetails">Privacy Policy</span>.
          </p>
        </p>
      </div>
    </>,
    document.getElementById("sing-up")
  );
}

export default SingUp;
// sataus = success
