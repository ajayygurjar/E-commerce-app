
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import useCartDisplay from '../../store/cart-display-context'; // Assuming this is where you defined your context

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = () => {
  // Using the custom hook from the context to manage modal visibility
  const { cartDisplay, toggleCartVisibility } = useCartDisplay();

  return (
    <>
      {/* Button to toggle cart display */}
      <Button variant="primary" onClick={() => toggleCartVisibility(!cartDisplay)}>
        Cart
      </Button>

      {/* Modal to show cart items */}
      <Modal show={cartDisplay} onHide={() => toggleCartVisibility(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {cartElements.map((item, index) => (
                <Col key={index} md={4} className="mb-4">
                  <div className="cart-item">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    {/* "Remove" button is still here but disabled */}
                    <Button variant="danger" disabled>
                      Remove
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleCartVisibility(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
