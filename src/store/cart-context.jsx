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
    let updatedCart = [...prevItems];
    
    // Try to find the item in the cart
    const existingItem = updatedCart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, update its quantity
      existingItem.quantity += 1;
    } else {
      // If the item doesn't exist, add it to the cart with initial quantity of 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    // Calculate the new total number of items
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
