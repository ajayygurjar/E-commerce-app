/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import AuthContext from './auth-context';
import axios from 'axios';

export const CartContext = createContext();

const API_URL = `https://authentication-617b8-default-rtdb.asia-southeast1.firebasedatabase.app/userCart`;
let cleanMail = `.not@log-in`;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { isLoggedIn, userMail,token } = useContext(AuthContext);


  if (isLoggedIn) {
		cleanMail = userMail.split(/[@.]/).join('');
    //console.log(cleanMail)
	}

  const addCartItem = async (item) => {
    //console.log('Adding item to cart:', item); 
		// console.log(cartItems);
		const updateItem = cartItems.find((data) => data.product_id === item.product_id);

		 //console.log('check updated items ',updateItem);

		try {
			if (!updateItem) {
			//console.log('check updated item',updateItem)
				const response = await axios.post(`${API_URL}/${cleanMail}.json?auth=${token}`, item);
				 console.log(response);
				console.log(response.status, response.statusText, 'Item POST Success');
				// Update Cart State...
				setCartItems((prevCart) => [...prevCart, { ...item, id: response.data.name }]);
			} else {
				// Update Item quantity in Firebase rtdb Using PATCH
				const response = await axios.patch(
					`${API_URL}/${cleanMail}/${updateItem.id}.json?auth=${token}`,
					{
						quantity: updateItem.quantity + item.quantity,
					}
				);
				// console.log(response);
				console.log(response.status, response.statusText, 'Item Update Success');
				// Update Item quantity in Cart State...
				setCartItems((prevCart) => {
					return prevCart.map((prevItem) =>
						prevItem.id === updateItem.id
							? { ...prevItem, quantity: prevItem.quantity + item.quantity }
							: prevItem
					);
				});
			}
		} catch (error) {
			console.log(error);
			console.log(error.message);
		}

		setTotalAmount((prevTotal) => prevTotal + item.quantity * item.price);
	};
 /* 
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
*/



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
