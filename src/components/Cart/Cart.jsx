import  { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../store/cart-context';
import useCartDisplay from '../../store/cart-display-context';
import CartModal from './CartModal';

const Cart = () => {
  const { cartItems, removeCartItem, numberOfItems, increaseQuantity, decreaseQuantity, totalAmount } = useContext(CartContext);
  const { cartDisplay, toggleCartVisibility } = useCartDisplay();

  return (
    <>
      <Button variant="outline-secondary" onClick={() => toggleCartVisibility(!cartDisplay)}>
        Cart <span>{numberOfItems}</span>
      </Button>

      <CartModal
        cartDisplay={cartDisplay}
        toggleCartVisibility={toggleCartVisibility}
        cartItems={cartItems}
        removeCartItem={removeCartItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        totalAmount={totalAmount}
      />
    </>
  );
};

export default Cart;
