
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
            
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Store</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>

                    </Nav>
                    <Button>Cart</Button>
        </Navbar>
    );
};

export default Header;
