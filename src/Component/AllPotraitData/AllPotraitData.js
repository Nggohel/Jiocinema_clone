import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllPotraitData.css";

function AllPotraitData() {
  const [data, setData] = useState([]);
  const filterType = "video song";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "${filterType}"}&limit=20`,
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
      <div className="allportrait-title">
        <Link to="/backtohome">
          <button className="allportrait-button">
            <img className="allportrait-icon" src="images/left-side.png" />
          </button>
        </Link>
        <h4 className="allportrait-name">Hot Right Now</h4>
      </div>

      <div className="allportrait-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="allportrait-data" key={index}>
              <a>
                <img
                  className="allportrait-img"
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                />
              </a>
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default AllPotraitData;
