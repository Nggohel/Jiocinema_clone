import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

function GetVideos() {
  const { video_url } = useParams();
  const decodedUrl = decodeURIComponent(video_url);
  const videoRef = useRef(null);

  const id = decodedUrl.split("/").pop().split(".")[0];
  console.log(id);

  async function addToWatchlist() {
    try {
      let item = id;
      const Header = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGU1ZWYwZGJlZGNmNGY2MDIzOWIyNSIsImlhdCI6MTY5NTQ0MDYyNCwiZXhwIjoxNzI2OTc2NjI0fQ.YN3msPl6OFLpUM-ZYKeR0ONPb134QdlqQegDImvqCoc",
        projectID: "paln91dx5ibq",
      };
      let addData = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
        method: "PATCH",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await addData.json();
      console.log(response);
      if (response.status == "success") {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        src={decodedUrl}
        controls
        style={{ maxWidth: "100%", height: "100%" }}
      ></video>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            marginBottom: "1rem",
            color: "white",
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
          onClick={addToWatchlist}
        >
          Add to Watchlist
        </button>
      </div>
    </>
  );
}
export default GetVideos;
