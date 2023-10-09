import React from "react";
import "./JiocinemaFooter.css";
function JiocinemaFooter() {
  return (
    <>
      <div className="jiocinema-footer">
        <div className="left-side-footer">
          <div>
            <h6>jiocinema</h6>
            <div className="footer-span">
              <span>For You</span>
              <br />
              <span>Sport</span>
              <br />
              <span>Movie</span>
              <br />
              <span>Tv Show</span>
              <br />
            </div>
          </div>
          <div>
            <h6>Support</h6>
            <div className="footer-span">
              <span>Help Center</span>
              <br />
              <span>Terms of Use</span>
              <br />
              <span>Privacy Policy</span>
              <br />
              <span>content complaints</span>
              <br />
            </div>
          </div>
        </div>
        <hr className="footer-hr"></hr>
        <div className="right-side-footer">
          <div className="footer-connect">
            <h4>Connect With Us</h4>
            <button className="footer-connect-button">
              <img src="images/facebook.svg" />
            </button>
            <button className="footer-connect-button">
              <img src="images/twitter.svg" />
            </button>
            <button className="footer-connect-button">
              <img src="images/instagram.svg" />
            </button>
            <button className="footer-connect-button">
              <img src="images/youtube.svg" />
            </button>
          </div>
          <div className="footer-download">
            <h4>Download the App</h4>
            <div>
              <button className="footer-button-playstore">
                <img
                  src="images/googleplay.png"
                  style={{ height: "100%", width: "100%" }}
                />
              </button>
              <button className="footer-button-appstore">
                <img
                  src="images/applestore.png"
                  style={{ height: "100%", width: "100%" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <p>Copyright © 2023 Viacom18 Media PVT LTD.All rights reserved.</p>
        <img src="images/jio-logo.png" className="lower-footer-img" />
      </div>
    </>
  );
}
export default JiocinemaFooter;
