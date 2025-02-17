
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { CartDisplay } from '../../store/cart-display-context';

const Header = () => {
    return (
        <Navbar expand="lg"   bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Product Page</Navbar.Brand>
        
        
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <CartDisplay>
      <Cart />
      {/* Other components that might need access to the cart display */}
    </CartDisplay>
      </Container>
    </Navbar>
    );
};

export default Header;
