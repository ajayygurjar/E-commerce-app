/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import AuthContext from './auth-context';
import axios from 'axios';

export const CartContext = createContext();

const API_URL = `https://crudcrud.com/api/b043858422b64f0582adeee615123825/cart`;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { isLoggedIn, userMail } = useContext(AuthContext);

  const addCartItem = async (item) => {
    const cleanMail = await userMail.replace(/[@.]/g, '');  
    const cartURL = `${API_URL}${cleanMail}`;

    try {
      const getItemResponse = await axios.get(cartURL);
      const updateItem = getItemResponse.data.find((data) => data.id === item.id);

      if (updateItem) {
        const putItemResponse = await axios.put(`${cartURL}/${updateItem._id}`, {
          ...item,
          quantity: updateItem.quantity + item.quantity,
        });

        console.log(putItemResponse.statusText, 'Item Update Success');
        setCartItems((prevCart) =>
          prevCart.map((prevItem) =>
            prevItem.id === updateItem.id
              ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
              : prevItem
          )
        );
      } else {
        const postItemResponse = await axios.post(cartURL, item);
        console.log(postItemResponse.data, postItemResponse.status, 'Item POST Success');
        setCartItems((prevCart) => [...prevCart, postItemResponse.data]);
      }

      setTotalAmount((prevTotal) => prevTotal + item.quantity * item.price);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn && userMail) {
      const fetchCart = async () => {
        const cleanMail = await userMail.replace(/[@.]/g, '');
        const cartURL = `${API_URL}${cleanMail}`;

        try {
          const getItemResponse = await axios.get(cartURL);
          setCartItems(getItemResponse.data);

          setTotalAmount(
            getItemResponse.data.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
          );
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };

      fetchCart();
    }
  }, [userMail, isLoggedIn]);

  const removeCartItem = async (id) => {
    const cleanMail = await userMail.replace(/[@.]/g, '');  
    const cartURL = `${API_URL}${cleanMail}`;

    try {
      const itemToRemove = cartItems.find((item) => item.id === id);
      if (itemToRemove) {
        await axios.delete(`${cartURL}/${itemToRemove._id}`);
      }

      setCartItems((prevItems) => {
        const updatedCart = prevItems.filter((item) => item.id !== id);
        setTotalAmount(
          updatedCart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0)
        );
        return updatedCart;
      });
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
