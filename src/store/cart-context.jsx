/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Create a Cart Context
export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  // Add item to the cart
  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

      // If the item exists, update its quantity, otherwise, add it
      const updatedCart = existingItem
        ? prevItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
          )
        : [...prevItems, { ...item, quantity: item.quantity }];

      
        
      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      setNumberOfItems(newTotalItems);

      return updatedCart;
    });
  };

  // Remove item from the cart
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
