/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  
  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      
      const updatedCart = [...prevItems];
      
      // Try to find the item in the cart
      const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // If the item exists, create a new object with updated quantity
        const updatedItem = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        updatedCart[existingItemIndex] = updatedItem; 
      } else {
        
        updatedCart.push({ ...item, quantity: 1 });
      }
  
      
      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      setNumberOfItems(newTotalItems);
  
      return updatedCart;
    });
  };

  


  const removeCartItem = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== id);

      

      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      setNumberOfItems(newTotalItems);

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, numberOfItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
