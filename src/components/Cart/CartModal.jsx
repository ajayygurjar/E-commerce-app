/* eslint-disable react/prop-types */

import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from './CartItem';

const CartModal = ({ cartDisplay, toggleCartVisibility, cartItems, removeCartItem, increaseQuantity, decreaseQuantity, totalAmount }) => {
  return (
    <Modal show={cartDisplay} onHide={() => toggleCartVisibility(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {cartItems.map((item, index) => (
              <Col key={index} md={4} className="mb-4">
                <CartItem item={item} removeCartItem={removeCartItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
              </Col>
            ))}
          </Row>
        </Container>
        <h4>Total Amount: ${totalAmount}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => toggleCartVisibility(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
