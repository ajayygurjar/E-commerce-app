

  /*if (isLoggedIn && userEmail) {
		 cleanEmail = `cartOf${userEmail.split(/[@.]/).join('')}`;
	}

  const addCartItem = async(item) => {
    const updateItem = cartItems.find((data) => data.product_id === item.product_id);
    console.log(cleanEmail)

    try {
			if (!updateItem) {
				// POST new item to Firebase rtdb
				const response = await axios.post(`${API_URL}/${cleanEmail}.json?auth=${token}`, item);
				// console.log(response);
				console.log(response.status, response.statusText, 'Item POST Success');
				// Update Cart State...
				setUserCartItems((prevCart) => [...prevCart, { ...item, id: response.data.name }]);
			} else {
				// Update Item quantity in Firebase rtdb Using PATCH
				const response = await axios.patch(
					`${API_URL}/${cleanEmail}/${updateItem.id}.json?auth=${token}`,
					{
						quantity: updateItem.quantity + item.quantity,
					}
				);
				// console.log(response);
				console.log(response.status, response.statusText, 'Item Update Success');
				// Update Item quantity in Cart State...
				setUserCartItems((prevCart) => {
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
    setNumberOfItems((prevItems)=>prevItems.reduce((total, currentItem) => total + currentItem.quantity, 0))
	};
  */
 /*
 
 useEffect(() => {
		const fetchUserCart = async () => {
			if (token && isLoggedIn && userMail) {
				try {
					cleanMail = `cartOf${userMail.split(/[@.]/).join('')}`;
					const response = await axios.get(`${API_URL}/${cleanMail}.json?auth=${token}`);
					console.log(response.status, response.statusText, 'Fetch userCart Success');

					if (response.status === 200) {
						// console.log(response.data); ////response data
						let loggedInUserCart = [];
						if (response.data) {
							loggedInUserCart = Object.keys(response.data).map((key) => {
								return { ...response.data[key], id: key.toString() };
							});
						}
						// console.log(loggedInUserCart);
						setCart(loggedInUserCart);
						setTotal(() => {
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
	}, [isLoggedIn, token, userMail]);
 */




	/*
	actual code with increase and decrease functionality


	// eslint-disable react/prop-types 
	import  { createContext, useState } from 'react';
	import axios from 'axios';
	
	export const CartContext = createContext();
	
	const api=`https://crudcrud.com/api/016ea8786ce14831b56afc2bf3b00e44/user`
	
	export const CartProvider = ({ children }) => {
	  const [cartItems, setCartItems] = useState([]);
	  const [numberOfItems, setNumberOfItems] = useState(0);
	  const [totalAmount, setTotalAmount] = useState(0);
	
	  const addCartItem = async (item) => {
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
	
	
	
	*/