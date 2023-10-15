import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./JioCinemaNavBar.css";
import LoginPage from "../Loginpage/LoginPage";

function JioCinemaNavBar() {
  const [expand, setExpand] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setExpand(!expand);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
    } else {
      navigate(`/search`);
    }
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchValue.trim() !== "") {
  //     navigate(`/search/${searchValue}`);
  //   } else {
  //     navigate(`/search`);
  //   }
  // };

  // const handleSearchIcon = (e) => {
  //   navigate(`/mobilesearch`);
  // };

  // have to check
  useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [expand]);

  return (
    <>
      <Navbar
        expand="lg"
        className={expand ? "mainnav expanded" : "mainnav lapton-screen"}
      >
        <Container className="">
          <div className="">
            <Nav.Link as={Link} to="/" className="navjiocinema">
              <img src="images/logo.webp" className="jiocinema-logo" />
              JioCinema
            </Nav.Link>
          </div>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/subscribe" className="navsubcribe">
              <p className="subcribe">Subcribe</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/foryou" className="navforyou">
              For You
            </Nav.Link>
            <Nav.Link as={Link} to="/sport" className="sport">
              Sport
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/tvshow" className="tvshow">
              Tv Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className="news">
              News
            </Nav.Link>
          </Nav>
        </Container>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 searchbar from"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </Col>
        </Row>
        <Image
          src="images/man.png"
          width="35"
          height="35"
          roundedCircle
          alt="User Avatar"
          className="ml-2 avtar"
          onClick={handleAvatarClick}
        />
      </Navbar>

      <Navbar expand="lg" className="mobilescreen">
        <Container>
          <div className="mobile-top-nav">
            <Nav.Link as={Link} to="/" className="navjiocinema">
              <img src="images/logo.webp" className="jiocinema-logo" />
              JioCinema
            </Nav.Link>
            <Nav.Link as={Link} to="/subscribe" className="navsubcribe">
              <p className="subcribe">Subcribe</p>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/mobilesearch"
              className="mobile-search-icon"
            >
              <img
                src="images/downloadsearch-icon.png"
                alt="search-icon-mobile"
                // onClick={handleSearchIcon}
              />
            </Nav.Link>
          </div>
          <Navbar className="mainnav-mobile">
            <Nav className="me-auto navfor-phonescreen">
              <Nav.Link as={Link} to="/foryou" className="navforyou">
                For You
              </Nav.Link>
              <Nav.Link as={Link} to="/sport" className="sport">
                Sport
              </Nav.Link>
              <Nav.Link as={Link} to="/movies" className="movies">
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/tvshow" className="tvshow">
                Tv Shows
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="news">
                News
              </Nav.Link>
              <Image
                src="images/man.png"
                width="35"
                height="35"
                roundedCircle
                alt="User Avatar"
                className="ml-2 avtar"
                onClick={handleAvatarClick}
              />
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      {expand ? <LoginPage /> : ""}
    </>
  );
}

export default JioCinemaNavBar;
