import  { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../store/cart-context';
import useCartDisplay from '../../store/cart-display-context';
import CartModal from './CartModal';

const Cart = () => {
  const { cartItems, removeCartItem,  totalAmount } = useContext(CartContext);
  const { cartDisplay, toggleCartVisibility } = useCartDisplay();

  const totalItems = cartItems.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

  return (
    <>
      <Button variant="outline-secondary" onClick={() => toggleCartVisibility(!cartDisplay)}>
        Cart <span>{totalItems}</span>
      </Button>

      <CartModal
        cartDisplay={cartDisplay}
        toggleCartVisibility={toggleCartVisibility}
        cartItems={cartItems}
        removeCartItem={removeCartItem}
        totalAmount={totalAmount}
      />
    </>
  );
};

export default Cart;
