import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa"; // Importing the icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          {/* Left side: Footer Text */}
          <Col className="text-left">
            <h3>Generic Footer</h3>
          </Col>

          {/* Right side: Social Media Icons */}
          <Col className="text-right">
            <div className="d-flex justify-content-end">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                <FaSpotify size={30} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
