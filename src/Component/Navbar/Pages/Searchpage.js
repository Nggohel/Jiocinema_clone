import React, { useState, useEffect } from "react";
import PotraitCard from "../../AllPotraitData/PotraitCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Searchpage() {
  const [data, setData] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${process.env.REACT_APP_GET_DATA_URL}?search={"keywords":"${query}"}`;
        const getData = await fetch(url, {
          method: "GET",
          headers: {
            projectID: "paln91dx5ibq",
          },
        });
        const json = await getData.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (query.trim() !== "") {
      fetchData();
    }
  }, [query]);
  console.log(data);
  return (
    <>
      {query.trim() === "" ? (
        <PotraitCard />
      ) : (
        <div className="allportrait-card">
          {data.length > 0 ? (
            data?.map((item, index) => (
              <div className="allportrait-data" key={index}>
                {console.log("item._id:", item._id)}
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
            <p>No results found</p>
          )}
        </div>
      )}
    </>
  );
}
export default Searchpage;
