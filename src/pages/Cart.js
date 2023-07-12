import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { AuthContext } from '../context/auth-context';
import { useParams } from 'react-router-dom';
import { options } from '@fullcalendar/core/preact';

function Cart() {
	const auth = useContext(AuthContext);
	const { id } = useParams();

	const [cartState, setCartState] = useState(null);

	useEffect(() => {
		if(auth.userId) {
			const fetchCart = async () => {
				try {
				  let responseData = await fetch(`http://localhost:4000/cart/${auth.userId}`,options);
				  
				  let productsInCart = await responseData.json()
			  
				  setCartState(productsInCart)
				  
				} catch (error) {
				  console.log(error)
				};
			  };
		  
			  fetchCart();
			}

		}
	,[auth]);


    return (
		<div className="cart">
			<h2>{cartState._id}</h2>
					  
		</div>
	)
}
		  
export default Cart
		  