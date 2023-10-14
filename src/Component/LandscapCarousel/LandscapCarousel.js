import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./LandscapCarousel.css";

function LandscapCarousel() {
  const [data, setData] = useState([]);
  const filterType = "documentary";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?filter={"type": "${filterType}"}&limit=10`,
          {
            method: "GET",
            headers: {
              projectID: "paln91dx5ibq",
            },
          }
        );
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="landscapetitle">
        <h4> Documentary</h4>
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
        centerSlidePercentage={23.2}
        emulateTouch={false}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link to={`/details/${item._id}`}>
              <div className="landscape-img" key={index}>
                <img
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Link>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </Carousel>
    </>
  );
}

export default LandscapCarousel;
