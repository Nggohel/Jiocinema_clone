import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./HotRightNow.css";
function HotRightNow() {
  const [data, setData] = useState([]);
  const filterType = " short film";
  const carouselRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?limit=11`,
          {
            method: "GET",
            headers: {
              projectID: "paln91dx5ibq",
            },
          }
        );
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Delay setting the transform property to ensure it overrides existing styles
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transitionDuration = "0ms"; // Remove transition duration for immediate change
        carouselRef.current.style.transform = "translate3d(2.5%, 0px, 0px)"; // Change the value as needed
      }
    }, 0);
  }, []);
  return (
    <>
      <div className="hotrightnow-title">
        <h4>Trending</h4>
      </div>

      <Carousel
        className="hotrightnow "
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={21}
        emulateTouch={false}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="hotrightnowimg" key={index}>
              <a>
                <img
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </Carousel>
    </>
  );
}

export default HotRightNow;
