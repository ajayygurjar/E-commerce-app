/* eslint-disable react/prop-types */

import { Button } from 'react-bootstrap';

const CartItem = ({ item, removeCartItem, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <img
        src={item.imageUrl || '/default-image.jpg'}
        alt={item.title || 'Item'}
        style={{ width: '100%', height: '100px', objectFit: 'cover' }} // Adjusting the height to be smaller
      />
      <h5>{item.title || 'No title available'}</h5>
      <p>Price: ${item.price || 0}</p>
      <div className="quantity-controls">
        <Button variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
        <span>{item.quantity || 0}</span>
        <Button variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
      </div>

      
      <Button variant="danger" onClick={() => removeCartItem(item.id)}>
        Remove
      </Button>
      
    </div>
  );
};

export default CartItem;
