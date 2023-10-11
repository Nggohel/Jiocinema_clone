import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./PotraitCarousel.css";

function PotraitCarousel() {
  const [data, setData] = useState([]);
  const filterType = "movie";
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
    <>
      <div className="potraittitle">
        <h5>Movie</h5>

        <Link to="/Moredatapotrait">
          <button className="potrait-icon-button">
            <img className="potrait-icon" src="images/download.png" />
          </button>
        </Link>
      </div>

      <Carousel
        className="portraitcarousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={15}
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
          <h5 style={{ color: "white" }}>Loading....</h5>
        )}
      </Carousel>
    </>
  );
}

export default PotraitCarousel;
