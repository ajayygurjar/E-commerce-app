
import { Navbar, Nav, Button,Container } from 'react-bootstrap';

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
          <Button>Cart <span>0</span></Button>
       
      </Container>
    </Navbar>
    );
};

export default Header;
