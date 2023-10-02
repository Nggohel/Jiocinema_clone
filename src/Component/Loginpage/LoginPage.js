import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";

function LoginPage() {
  return (
    <Card className="loginpagelayout">
      <div className="parentcard">
        <div className="carddiv">
          <Image
            src="images/man.png"
            width="65"
            height="65"
            roundedCircle
            alt="User Avatar"
            className="ml-2 img"
          />
          <Card style={{ width: "18rem" }} className="mb-2 subcard">
            <Card.Body>
              <Card.Title className="title">Guest</Card.Title>
              <Button variant="primary" className="button">
                Login
              </Button>
              <Card.Body className="innercard">
                <Image
                  src="images/man.png"
                  width="35"
                  height="35"
                  roundedCircle
                  alt="User Avatar"
                  className=""
                />
                <span className="cardspan">Kids</span>
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
        <h6>Subcribe Now!</h6>
        <hr class="solid"></hr>
        <h6>Help & Legal</h6>
        <div className="footer">
          <h8 className="underline-pink">Privacy and T&C</h8>
          <br />
          <h8 className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          </h8>
        </div>
      </div>
    </Card>
  );
}

export default LoginPage;
