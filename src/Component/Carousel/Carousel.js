import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

function CarouselCard() {
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
            src="images/header-1.webp"
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
          <img className="" src="images/header-3.avif" alt="headerimage" />
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
          <img className="" src="images/header-5.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Shark tank</h3>
          <p style={{ color: "white" }}>English Reality U/A 7+</p>
          <p style={{ color: "white" }}>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src="images/header-6.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>Peacock Hub</h3>
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
          <img className="" src="images/header-7.webp" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Aakashvani-Oct 3</h3>
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
          <img className="" src="images/header-8.avif" alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Udaariyaan</h3>
          <p style={{ color: "white" }}>Hindi Drama U/A 13+</p>
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
    </Carousel>
  );
}

export default CarouselCard;
// login page ui , on click this [page is in progress]
// header main jio data photos lene he
