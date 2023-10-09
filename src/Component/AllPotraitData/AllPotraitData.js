import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllPotraitData.css";
import Details from "../AllDetailsPage/Details";

function AllPotraitData() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState(
    "https://academics.newtonschool.co/api/v1/ott/show"
  );

  const [clickedItemId, setClickedItemId] = useState(null);

  const filterType = "movie";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          url + `?filter={"type": "${filterType}"}&limit=20`,
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

  // const handleImageClick = (itemId) => {
  //   console.log("Clicked item ID that i get:", itemId);
  //   const idOfImage = data.find((item) => item._id === itemId);
  //   console.log(idOfImage);
  //   setClickedItemId(itemId);
  // };

  // useEffect(() => {
  //   console.log("Id we set:", clickedItemId);
  // }, [clickedItemId]);

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
              {console.log("item._id:", item._id)}
              <Link to={`/details/${item._id}`}>
                <img
                  className="allportrait-img"
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                  // onClick={() => handleImageClick(item._id)}
                />
              </Link>
            </div>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </div>

      {/* {clickedItemId && <Details itemId={clickedItemId} />} */}
    </>
  );
}

export default AllPotraitData;
