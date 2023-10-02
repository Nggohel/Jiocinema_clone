import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./LandscapCarousel.css";
function LandscapCarousel() {
  return (
    <>
      <div className="potraittitle">
        <h4>LandscapeCarousel</h4>
        <Link to="/Moredatalandscape">
          <button className="landscape-icon-button">
            <img className="landscape-icon" src="images/download.png" />
          </button>
        </Link>
      </div>

      <Carousel
        className="landscapecarousel"
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={19.5} // Show three items at a time
        emulateTouch={false}
      >
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="landscape-img">
          <img
            src="images/ind_vs_aus_carousel_highlights.webp"
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Carousel>
    </>
  );
}

export default LandscapCarousel;
