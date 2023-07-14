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
		  console.log(data)
  
		  // Once the data is fetched, update the state
		  setCartState(data);
		} catch (error) {
		  console.error("Error fetching cart data:", error);
		}
	  };
  
	  // Call the fetch function
	  fetchCartData();
	}, [cartIdNumber.id]);


	// Function to delete an item from the cart
    const deleteItemFromCart = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}/items/${itemId}`, {
                method: 'PATCH',
            });
            if (!response.ok) throw new Error('Error deleting item');
            const updatedCart = await response.json();
            setCartState(updatedCart);
			window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };

	  
	// If the cart data is not fetched yet, show a loading message
	if (!cartState) {
	  return <p>Empty Shopping Cart</p>;
	}

	console.log(cartState)


    return (
		<div className="cart">
			{cartState.items.length === 0 ? (
				<h1>Your cart is empty</h1>
			) : (
				<>
					<MyBag cartState={cartState} deleteItem={deleteItemFromCart} />
					<OrderSummary className="cartOrderSummary" cartState={cartState} />
				</>
			)}
		</div>
	)
	
}
		  
export default Cart
		  