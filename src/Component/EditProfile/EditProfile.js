import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";

function EditProfile() {
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [number, setNumber] = useState("");

  const [profileImageFile, setProfileImageFile] = useState(null);

  const navigate = useNavigate();

  const GetData = JSON.parse(localStorage.getItem("user-info"));

  async function JiocinemaEdit() {
    try {
      let item = {
        name: name,
        email: GetData.data.email,
        address: [{ street: address }],
      };
      const Header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetData.token}`,
        projectID: "paln91dx5ibq",
      };
      let getData = await fetch(`${process.env.REACT_APP_EDITPROFILE_URL}`, {
        method: "PATCH",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status == "success") {
        alert("Your is Successfully updated!!!");
        setName("");
        setNumber("");
        setAddress("");
        GetData.data.name = response.data.user.name;
        localStorage.setItem("user-info", JSON.stringify(GetData));
        navigate("/foryou");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleProfileImageUpdate() {
    alert("currently working on this part");
  }

  return ReactDOM.createPortal(
    <>
      <div className="editprofile-page">
        <div className="editprofile">
          <Link to="/back">
            <button className="editprofile-button">
              <img
                src="images/icons8-arrow-back.png"
                className="editprofile-button-image"
              />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>Edit Profile</h4>
        </div>
        <div className="editprofile-form">
          <div className="edit-image">
            <img
              src="images/man.png"
              width="65"
              height="65"
              alt="User Avatar"
              onClick={handleProfileImageUpdate}
            />
            <br></br>
            <input
              type="file"
              accept=".png, .jpg, .jpeg ,.webp"
              onChange={(e) => setProfileImageFile(e.target.files[0])}
            />
          </div>
          <p className="editprofile-number">
            <label className="editprofile-number-lable">Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="editprofile-number-input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br></br>
            <label className="editprofile-number-lable">Address</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Address"
              className="editprofile-number-input"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <br></br>
            <label className="editprofile-number-lable">Number</label>
            <br></br>
            <input
              type="phone"
              placeholder="Enter Your Number"
              className="editprofile-number-input"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </p>
        </div>
        <button className="editprofile-continue-btn" onClick={JiocinemaEdit}>
          Save
        </button>
      </div>
    </>,
    document.getElementById("editprofile")
  );
}

export default EditProfile;
