import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Details.css";

function Details() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://academics.newtonschool.co/api/v1/ott/show/${itemId}`;
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
    fetchData(data);
  }, [itemId]);

  console.log(data);

  return (
    <>
      <div>
        {data && data.thumbnail ? (
          <>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${data.thumbnail})`,
              }}
            >
              <div className="deatils-card-position">
                <div className="deatils-main">
                  <Link
                    to={`/gettingvideo/${encodeURIComponent(data.video_url)}`}
                  >
                    <button className="details-button">Watch</button>
                  </Link>
                  <div className="details-data">
                    <h4>{data.title}</h4>

                    <span>duration</span>

                    <p className="details-data">
                      {data.description}

                      <span>{data.description}</span>
                    </p>
                  </div>
                  <div className="details-data details-data-cast">
                    <h5>Cast:</h5>
                    <p className="details-data-cast">{data.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <span>Thumbnail not available</span>
        )}
      </div>
    </>
  );
}
export default Details;
