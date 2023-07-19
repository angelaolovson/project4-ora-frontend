import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { Link, useParams } from 'react-router-dom';
import MyBag from '../components/Cart/MyBag';
import OrderSummary from '../components/Cart/OrderSummary';
import { CartContext } from '../context/CartContext';



function Cart() {
	
	const cartIdNumber = useParams();
	// console.log(cartIdNumber)
	const { cartState, setCartState } = useContext(CartContext);

	// const [cartState, setCartState] = useState(null);
	
  
	// // This effect will run when the component mounts and whenever cartId changes
	// useEffect(() => {
	//   // Define an async function that fetches cart data
	//   const fetchCartData = async () => {
	// 	try {
	// 	  const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}`);
	// 	//   const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}`);

	// 	  const data = await response.json();
	// 	  console.log(data)
  
	// 	  // Once the data is fetched, update the state
	// 	  setCartState(data);
	// 	} catch (error) {
	// 	  console.error("Error fetching cart data:", error);
	// 	}
	//   };
  
	//   // Call the fetch function
	//   fetchCartData();
	// }, [cartIdNumber.id]);


	// Function to delete an item from the cart
    const deleteItemFromCart = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}/items/${itemId}`, {
                method: 'PATCH',
            });
            // const response = await fetch(`http://localhost:4000/cart/${cartIdNumber.id}/items/${itemId}`, {
            //     method: 'PATCH',
            // });

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
				<div className='emptyCart'>
					<div className='emptyCartTitle'>Your cart is empty</div>
					<div className='cartButtonContainer'>
						<Link className="cartButton" to="/">
						Shop Now
						</Link>
					</div>
				</div>
			) : (
				<>
					<MyBag cartState={cartState} deleteItem={deleteItemFromCart} />
					<div className="cartOrderSummaryContainer" >
						<OrderSummary className="cartOrderSummary" cartState={cartState} />
						<div className='cartCheckOutButtonDiv' >
							<Link className="cartCheckOutButton" to="/checkout">
							CHECK OUT
							</Link>
						</div>
						
					</div>
					
				</>
			)}
		</div>
	)
	
}
		  
export default Cart
		  