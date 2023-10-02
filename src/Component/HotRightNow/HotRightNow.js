import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the Carousel CSS
import { Carousel } from "react-responsive-carousel";
import "./HotRightNow.css";
function HotRightNow() {
  return (
    <>
      <div className="title">
        <h4>Hot Right Now</h4>
      </div>

      <Carousel
        className="hotrightnow"
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={20} // Show three items at a time
        emulateTouch={false}
      >
        <div className="hotrightnowimg">
          <img
            src="images/slider-badag.jpg"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scale.jpg"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-badag.jpg"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scale.jpg"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="hotrightnowimg">
          <img
            src="images/slider-scales.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Carousel>
    </>
  );
}

export default HotRightNow;
