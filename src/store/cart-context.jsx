/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems];
      const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        updatedCart[existingItemIndex] = updatedItem; 
      } else {
        updatedCart.push({ ...item, quantity: 1 });
      }

      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      const newTotalAmount = updatedCart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

      setNumberOfItems(newTotalItems);
      setTotalAmount(newTotalAmount);

      return updatedCart;
    });
  };

  const removeCartItem = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== id);
      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      const newTotalAmount = updatedCart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

      setNumberOfItems(newTotalItems);
      setTotalAmount(newTotalAmount);

      return updatedCart;
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      const newTotalAmount = updatedCart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

      setNumberOfItems(newTotalItems);
      setTotalAmount(newTotalAmount);

      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map(item => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);

      const newTotalItems = updatedCart.reduce((total, currentItem) => total + currentItem.quantity, 0);
      const newTotalAmount = updatedCart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

      setNumberOfItems(newTotalItems);
      setTotalAmount(newTotalAmount);

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, numberOfItems, totalAmount, addCartItem, removeCartItem, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
