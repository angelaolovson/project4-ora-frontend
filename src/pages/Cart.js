import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { useParams } from 'react-router-dom';
import MyBag from '../components/Cart/MyBag';
import OrderSummary from '../components/Cart/OrderSummary';


function Cart() {
	
	const cartIdNumber = useParams();
	console.log(cartIdNumber)
	const [cartState, setCartState] = useState(null);
  
	// This effect will run when the component mounts and whenever cartId changes
	useEffect(() => {
	  // Define an async function that fetches cart data
	  const fetchCartData = async () => {
		try {
		  const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}`);
		  const data = await response.json();
		//   console.log(cartIdNumber.id)
  
		  // Once the data is fetched, update the state
		  setCartState(data);
		} catch (error) {
		  console.error("Error fetching cart data:", error);
		}
	  };
  
	  // Call the fetch function
	  fetchCartData();
	}, [cartIdNumber.id]);
  
	// If the cart data is not fetched yet, show a loading message
	if (!cartState) {
	  return <p>Empty Shopping Cart</p>;
	}

	console.log(cartState)


    return (
		<div className="cart">
			<MyBag cartState={cartState} />
			<OrderSummary cartState={cartState} />	  
		</div>
	)
}
		  
export default Cart
		  