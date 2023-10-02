import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselCard() {
  return (
    <Carousel className="caroselitems" data-bs-theme="light">
      <Carousel.Item className="caroselitem">
        <img
          className="d-block carouselimg"
          src="images/slider-badag.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  carouselimg"
          src="images/slider-scale.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  carouselimg"
          src="images/slider-scales.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src="images/slider-badag.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src="images/slider-badag.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src="images/slider-badag.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>sixth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCard;
