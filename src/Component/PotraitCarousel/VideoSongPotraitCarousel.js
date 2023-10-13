import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./PotraitCarousel.css";

function VideoSongPotraitCarousel() {
  const [data, setData] = useState([]);
  const filterType = "video song";

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
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="potraittitle">
        <h4>Video Song</h4>

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
        centerSlidePercentage={15} // Show three items at a time
        emulateTouch={false}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="potraitsimg" key={index}>
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

export default VideoSongPotraitCarousel;
