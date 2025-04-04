import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import Cart from "../Cart/Cart";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Product Page</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          {!authCtx.isLoggedIn && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          {authCtx.isLoggedIn && (
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>
          )}
          {authCtx.isLoggedIn && (
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>

          {authCtx.isLoggedIn && (
            <button
              type="button"
              onClick={logoutHandler}
              className="btn btn-danger"
            >
              logout
            </button>
          )}
        </Nav>
        {authCtx.isLoggedIn && <Cart />}
      </Container>
    </Navbar>
  );
};

export default Header;
