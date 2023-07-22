import React, { useContext } from 'react'
import './OrderSummary.css'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

		  
function OrderSummary() {
	const { cartState} = useContext(CartContext);
    
	const subtotal = cartState?.items?.map((item) => item.product.price*item.quantity)
	.reduce((prev, curr) => prev + curr, 0);
	console.log(subtotal)

    return (
		<div className="ordersummary">
			<div className='h2ordersummary'>Order Summary</div>
			<div className='contextContainer'>
				<div>Subtotal</div>
				<div>${subtotal}</div>
			</div>
			<div className='contextContainer'>
				<div>Store Pick Up Only</div>
				<div></div>
			</div>
			<div className='contextContainer'>
				<div>Tax</div>
				<div>Calculated at checkout</div>
			</div>
			<div className='contextContainerEST'>
				<div>Estimated Total</div>
				<div>USD ${subtotal}</div>
			</div>		
					  
		</div>
	)
}
		  
export default OrderSummary
		  