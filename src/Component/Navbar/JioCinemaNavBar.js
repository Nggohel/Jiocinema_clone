import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const handleAvatarClick = () => {
    setExpand(!expand);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // have to check
  useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [expand]);

  const avatarClass = expand ? "ml-2 avtar expanded-avatar" : "ml-2 avtar";

  return (
    <>
      <Navbar expand="lg" className={expand ? "mainnav expanded" : "mainnav"}>
        <Container>
          <Nav.Link as={Link} to="/" className="navjiocinema">
            <img src="images/logo.webp" className="jiocinema-logo" />
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="navjiocinema">
            JioCinema
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
        <Form inline className="ml-auto">
          <Row>
            <Col xs="auto">
              <Nav.Link as={Link} to="/search">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 searchbar from"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </Nav.Link>
            </Col>
          </Row>
        </Form>

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
      {expand ? <LoginPage /> : ""}
    </>
  );
}

export default JioCinemaNavBar;
// filter
