import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllLandsacpeData.css";
function AllLandscapeData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/show?limit=100",
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
      <div className="alllandscape-title">
        <Link to="/back">
          <button className="alllandscape-button">
            <img className="alllandscape-icon" src="images/left-side.png" />
          </button>
        </Link>
        <h4 className="alllandscape-name">all Landscape Card</h4>
      </div>

      <div className="alllandscape-card">
        {data.map((item, index) => (
          <div className="alllandscape-data" key={index}>
            <a>
              <img
                className="alllandscape-img"
                src={item.thumbnail}
                alt={`Image ${index}`}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllLandscapeData;
