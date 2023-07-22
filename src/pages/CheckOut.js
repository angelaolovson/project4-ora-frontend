import React, { useContext, useEffect, useState } from 'react'
import './CheckOut.css'
import CustomerInfo from '../components/CheckOut/CustomerInfo'
import TotalSummary from '../components/CheckOut/TotalSummary'

function CheckOut() {

	const [cartState, setCartState] = useState(null);
	const localData = JSON.parse(localStorage.getItem('userData'))
  
	// This effect will run when the component mounts and whenever cartId changes
	useEffect(() => {
	  // Define an async function that fetches cart data
	  const fetchCartData = async () => {
		try {
		  const response = await fetch(`https://capstone-ora-frontend.onrender.com/cart/${localData.userData.cart[0]._id}`);
		//   const response = await fetch(`https://capstone-ora-frontend.onrender.com/cart/${cartIdNumber.id}`);

		  const data = await response.json();
		  console.log(data)
  
		  // Once the data is fetched, update the state
		  setCartState(data);
		} catch (error) {
		  console.error("Error fetching cart data:", error);
		}
	  };
  
	  // Call the fetch function
	  fetchCartData();
	}, [localData.userData.cart[0]._id]);
	
    return (
		<div className="checkout">
			<CustomerInfo cartState={cartState} />
			<TotalSummary cartState={cartState} />
			
			 
		</div>
	)
}
		  
export default CheckOut
		  