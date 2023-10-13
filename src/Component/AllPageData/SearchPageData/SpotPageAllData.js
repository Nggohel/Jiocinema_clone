import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

function SpotPageAllData() {
  return (
    <Carousel
      showArrows={true} // Show navigation arrows
      showStatus={false} // Hide status indicator
      showThumbs={false} // Hide thumbnail images
      infiniteLoop={true} // Enable infinite loop
      centerMode={true} // Center the current slide
      centerSlidePercentage={100} // Show one items at a time
      emulateTouch={false}
      showIndicators={true}
    >
      <div className="main-spotpagealldata">
        <a>
          <img className="" src="images/header-2.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>
            Sautrashtra vs Rest of India,Day 3
          </h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/header-4.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>FC Goa 1-0 Punjab FC</h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/header-9.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>Top Goals ft.Boumous</h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/header-2.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>
            Sautrashtra vs Rest of India,Day 3
          </h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/header-4.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>FC Goa 1-0 Punjab FC</h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default SpotPageAllData;
