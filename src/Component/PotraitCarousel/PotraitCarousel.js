import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./PotraitCarousel.css";
function PotraitCarousel() {
  return (
    <>
      <div className="potraittitle">
        <h4>Hot Right Now</h4>

        <Link to="/Moredatapotrait">
          <button className="potrait-icon-button">
            <img className="potrait-icon" src="images/download.png" />
          </button>
        </Link>
      </div>

      <Carousel
        className="portraitcarousel"
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={11} // Show three items at a time
        emulateTouch={false}
      >
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="potraitsimg">
          <img
            src="images/img1.avif"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Carousel>
    </>
  );
}

export default PotraitCarousel;
