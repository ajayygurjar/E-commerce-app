

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for routing
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Product Page</Navbar.Brand>
        <Nav className="mx-auto">
          {/* Use Link for navigation instead of href */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/home">Store</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default Header;
