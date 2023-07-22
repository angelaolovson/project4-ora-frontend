import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Adding loading state
  const [cartState, setCartState] = useState({/* Initial state here */});
  const [cartId, setCartId] = useState(null);  // Add cartId state

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    
    // If userData and userData.userData and userData.userData.cart exist and userData.userData.cart array has items
    if (userData && userData.userData && userData.userData.cart && userData.userData.cart.length > 0) {
      setCartId(userData.userData.cart[0]._id); // Use the correct path to get the cartId
    }
  }, []);

  useEffect(() => {
    // Only fetch cart data if cartId is not null
    if (cartId) {
      // Define an async function that fetches cart data
      const fetchCartData = async () => {
        try {
          const response = await fetch(`https://capstone-ora-frontend.onrender.com/cart/${cartId}`);
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
    }
  }, [cartId]);  // Depend on cartId

  console.log(cartState);

  return (
    <CartContext.Provider value={{ cartState, setCartState, isLoading }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };





//  // Define an async function that fetches cart data
//  const fetchCartData = async () => {
//   try {
//     const response = await fetch(`https://capstone-ora-frontend.onrender.com/cart/${cartId}`);
    
//     const data = await response.json();
//     console.log(data);

//     // Once the data is fetched, update the state
//     setCartState(data);
//     setIsLoading(false); // data has been fetched, set loading to false
    
//   } catch (error) {
//     console.error("Error fetching cart data:", error);
//   }
// };

// // Call the fetch function
// fetchCartData();
// }, [cartId]);

// console.log(cartState);