import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function WatchList() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGU1ZWYwZGJlZGNmNGY2MDIzOWIyNSIsImlhdCI6MTY5NTQ0MDYyNCwiZXhwIjoxNzI2OTc2NjI0fQ.YN3msPl6OFLpUM-ZYKeR0ONPb134QdlqQegDImvqCoc",
              projectID: "paln91dx5ibq",
            },
          }
        );
        const json = await response.json();
        setData(json.data.shows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, []);
  return (
    <>
      <h4 style={{ color: "white" }}>WatchList</h4>
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

export default WatchList;
