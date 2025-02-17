
import  { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../store/cart-context';
import useCartDisplay from '../../store/cart-display-context';
import CartModal from './CartModal';

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(CartContext);
  const { cartDisplay, toggleCartVisibility } = useCartDisplay();

  return (
    <>
      <Button variant="primary" onClick={() => toggleCartVisibility(!cartDisplay)}>
        Cart
      </Button>

      <CartModal
        cartDisplay={cartDisplay}
        toggleCartVisibility={toggleCartVisibility}
        cartItems={cartItems}
        removeCartItem={removeCartItem}
      />
    </>
  );
};

export default Cart;
