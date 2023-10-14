import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllLandsacpeData.css";

function AllLandscapeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?limit=120`,
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
        <h4 className="alllandscape-name">All Options....</h4>
      </div>

      <div className="alllandscape-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="alllandscape-data" key={index}>
              <Link to={`/details/${item._id}`}>
                <img
                  className="alllandscape-img"
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                />
              </Link>
            </div>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </div>
    </>
  );
}

export default AllLandscapeData;
