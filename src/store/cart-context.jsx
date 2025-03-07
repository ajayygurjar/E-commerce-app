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
		cleanMail = `cartOf${userMail.split(/[@.]/).join('')}`;
    //console.log(cleanMail)
	}

  const addCartItem = async (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((data) => data.product_id === item.product_id);

    try {
        if (!existingItem) {
            // POST new item to Firebase RTDB
            const response = await axios.post(`${API_URL}/${cleanMail}.json?auth=${token}`, item);
            console.log(response.status, response.statusText, 'Item POST Success');
            
            // Update Cart State with the new item
            setCartItems((prevCart) => [
                ...prevCart,
                { ...item, id: response.data.name },
            ]);
        } else {
            // Item exists, so update its quantity in Firebase using PATCH
            const response = await axios.patch(
                `${API_URL}/${cleanMail}/${existingItem.id}.json?auth=${token}`,
                {
                    quantity: existingItem.quantity + item.quantity,
                }
            );
            console.log(response.status, response.statusText, 'Item Update Success');

            // Update the cart state to reflect the increased quantity
            setCartItems((prevCart) => 
                prevCart.map((prevItem) =>
                    prevItem.id === existingItem.id
                        ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
                        : prevItem
                )
            );
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }

    // Update the total amount
    setTotalAmount((prevTotal) => prevTotal + item.quantity * item.price);
};
 
 useEffect(() => {
		const fetchUserCart = async () => {
			if (token && isLoggedIn) {
				try {
					const response = await axios.get(`${API_URL}/${cleanMail}.json?auth=${token}`);
					if (response.status === 200) {
						let loggedInUserCart = [];
						if (response.data) {
							loggedInUserCart = Object.keys(response.data).map((key) => {
								return { ...response.data[key], id: key.toString() };
							});
						}
						//console.log(loggedInUserCart);
						setCartItems(loggedInUserCart);
						setTotalAmount(() => {
							return loggedInUserCart.reduce((acc, curr) => {
								return acc + curr.quantity * curr.price;
							}, 0);
						});
					}
				} catch (error) {
					console.log(error);
				}
			}
		};
		if (isLoggedIn) {
			fetchUserCart();
		}
	}, [isLoggedIn, token]);



  const removeCartItem = async (id) => {
    try {
			const response = await axios.delete(`${API_URL}/${cleanMail}/${id}.json?auth=${token}`);
			console.log(response.status, response.statusText, 'Item Delete Success');
			if (response.status === 200) {
				setCartItems((prevCart) => {
					return prevCart.filter((item) => item.id !== id);
				});
				setTotalAmount((prevTotal) => {
					for (const item of cartItems) {
						if (item.id === id) {
							return prevTotal - item.quantity * item.price;
						}
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
	};


  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
