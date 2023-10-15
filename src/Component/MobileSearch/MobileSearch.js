import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "./MobileSearch.css";
import PotraitCarousel from "../PotraitCarousel/PotraitCarousel";
import ShortFilmPotraitCarousel from "../PotraitCarousel/ShortFilmPotraitCarousel";
import TvShowPotraitCarousel from "../PotraitCarousel/TvShowPotraitCarousel";
import VideoSongPotraitCarousel from "../PotraitCarousel/VideoSongPotraitCarousel";
import LandscapCarousel from "../LandscapCarousel/LandscapCarousel";

function MobileSearchPage() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

    if (searchValue.trim() !== "") {
      navigate(`/mobilesearch/${searchValue}`);
    } else {
      navigate(`/mobilesearch`);
    }
  };
  return (
    <>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search Here"
            className=" mr-sm-1 searchbar from"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      <PotraitCarousel />
      <ShortFilmPotraitCarousel />
      <LandscapCarousel />
      <TvShowPotraitCarousel />
      <VideoSongPotraitCarousel />
    </>
  );
}
export default MobileSearchPage;
