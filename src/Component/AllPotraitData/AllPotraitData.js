import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllPotraitData.css";

function AllPotraitData() {
  const [data, setData] = useState({});

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
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, []);

  return (
    <>
      <div className="allportrait-title">
        <Link to="/backtohome">
          <button className="allportrait-button">
            <img className="allportrait-icon" src="images/left-side.png" />
          </button>
        </Link>
        <h4 className="allportrait-name">
          All Options....details work done here
        </h4>
      </div>

      <div className="allportrait-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="allportrait-data" key={index}>
              <Link to={`/details/${item._id}`}>
                <img
                  className="allportrait-img"
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

export default AllPotraitData;
