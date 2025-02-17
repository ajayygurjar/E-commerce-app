import  { createContext, useState} from 'react';

// Create a Cart Context 
export const CartContext = createContext();

// Cart Provider 

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        // If item doesn't exist, add new item
        return [...prevItems, item];
        
      }
      
    });
    setNumberOfItems(prevCount => prevCount + item.quantity);
  };

  const removeCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    setNumberOfItems(prevCount => prevCount - 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, numberOfItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};


