

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for routing
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';


const Header = () => {


  const authCtx=useContext(AuthContext);


  
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Product Page</Navbar.Brand>
        <Nav className="mx-auto">
          {/* Use Link for navigation instead of href */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {/*  also we can use <NavLink activeClassName={classes.active} as={link} to='/home' */}
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          { authCtx.isLoggedIn &&<Nav.Link as={Link} to="/store">Store</Nav.Link>}
          {authCtx.isLoggedIn &&<Nav.Link as={Link} to='/profile'>Profile</Nav.Link>}
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
					{/*<Nav.Link as={Link} to="/movie">Movie</Nav.Link>*/}
          

            
					
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default Header;
