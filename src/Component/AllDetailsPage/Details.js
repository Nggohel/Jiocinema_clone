import React, { useEffect, useState } from "react";
function Details() {
  const [data, setData] = useState([]);
  const filterType = "movie";

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
      <h1>Hello</h1>
      <h1>Hello</h1>
    </>
  );
}
export default Details;
