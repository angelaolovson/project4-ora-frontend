import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Adding loading state
  const [cartState, setCartState] = useState({/* Initial state here */});
  const cartId = JSON.parse(localStorage.getItem("userData")).userData.cart[0]._id;
  console.log(cartId);

  useEffect(() => {
    // Define an async function that fetches cart data
    const fetchCartData = async () => {
      try {
        const response = await fetch(`https://capstone-ora-backend.onrender.com/cart/${cartId}`);
        // const response = await fetch(`https://capstone-ora-backend.onrender.com/cart/${cartId}`);
        
        const data = await response.json();
        console.log(data);

        // Once the data is fetched, update the state
        setCartState(data);
        setIsLoading(false); // data has been fetched, set loading to false
        
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    // Call the fetch function
    fetchCartData();
  }, [cartId]);

  console.log(cartState);

  return (
    <CartContext.Provider value={{ cartState, setCartState, isLoading }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartProvider };

