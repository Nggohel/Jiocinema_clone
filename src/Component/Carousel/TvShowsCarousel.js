import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

function TvShowsCarousel() {
  const [data, setData] = useState([]);
  const filterType = "trailer";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "${filterType}"}&limit=10`,
          {
            method: "GET",
            headers: {
              projectID: "paln91dx5ibq",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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
      <div className="main-carouselimage">
        <a>
          <img
            className="main-img"
            src="images/tvshows-1.jpg"
            alt="headerimage"
          />
        </a>
        <div>
          <h3 style={{ color: "white" }}>MEIN, MEHMOOD</h3>
          <p style={{ color: "darkgray" }}>Hindi Drama U/A 7+</p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/tvshows-2.jpg" alt="headerimage" />
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
          <img className="" src="images/tvshows-3.webp" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Rat In The Kitchen</h3>
          <p style={{ color: "white" }}>Hindi Thriller U/A 13+</p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/tvshows-4.webp" alt="headerimage" />
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

export default TvShowsCarousel;
