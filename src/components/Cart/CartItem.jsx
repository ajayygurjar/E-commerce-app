/* eslint-disable react/prop-types */


import { Button } from 'react-bootstrap';

const CartItem = ({ item, removeCartItem }) => {
  return (
    <div className="cart-item">
      <img
        src={item.imageUrl || '/default-image.jpg'}
        alt={item.title || 'Item'}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <h5>{item.title || 'No title available'}</h5>
      <p>Price: ${item.price || 0}</p>
      <p>Quantity: {item.quantity || 0}</p>
      <Button variant="danger" onClick={() => removeCartItem(item.id)}>
        Remove
      </Button>
    </div>
  );
};

export default CartItem;
